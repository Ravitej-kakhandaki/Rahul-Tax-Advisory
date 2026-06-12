from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

import os
import uuid
import json
import logging
from datetime import datetime, timezone, timedelta
from typing import List, Optional, AsyncGenerator

import bcrypt
import jwt
from fastapi import FastAPI, APIRouter, HTTPException, Request, Response, Depends
from fastapi.responses import StreamingResponse
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field, ConfigDict

# ----------------------- Setup -----------------------
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

JWT_SECRET = os.environ["JWT_SECRET"]
JWT_ALG = "HS256"

app = FastAPI(title="Rahul Tax Advisory API")
api = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("rta")


# ----------------------- Auth helpers -----------------------
def hash_password(p: str) -> str:
    return bcrypt.hashpw(p.encode(), bcrypt.gensalt()).decode()


def verify_password(p: str, h: str) -> bool:
    try:
        return bcrypt.checkpw(p.encode(), h.encode())
    except Exception:
        return False


def create_token(user_id: str, email: str, kind: str = "access", minutes: int = 60 * 24) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "type": kind,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=minutes),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALG)


async def get_current_user(request: Request) -> dict:
    token = request.cookies.get("access_token")
    if not token:
        auth = request.headers.get("Authorization", "")
        if auth.startswith("Bearer "):
            token = auth[7:]
    if not token:
        raise HTTPException(401, "Not authenticated")
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALG])
    except jwt.ExpiredSignatureError:
        raise HTTPException(401, "Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(401, "Invalid token")
    user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0, "password_hash": 0})
    if not user:
        raise HTTPException(401, "User not found")
    return user


async def require_admin(user: dict = Depends(get_current_user)) -> dict:
    if user.get("role") != "admin":
        raise HTTPException(403, "Admin only")
    return user


def set_auth_cookie(response: Response, token: str) -> None:
    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        secure=True,
        samesite="none",
        max_age=60 * 60 * 24,
        path="/",
    )


# ----------------------- Models -----------------------
class RegisterIn(BaseModel):
    name: str
    email: EmailStr
    password: str = Field(min_length=6)
    firm: Optional[str] = None


class LoginIn(BaseModel):
    email: EmailStr
    password: str


class LeadIn(BaseModel):
    name: str
    email: EmailStr
    firm: Optional[str] = None
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str


class BookingIn(BaseModel):
    name: str
    email: EmailStr
    firm: Optional[str] = None
    phone: Optional[str] = None
    date: str  # YYYY-MM-DD
    time_slot: str  # e.g. "10:00 AM"
    topic: Optional[str] = None
    notes: Optional[str] = None


class DocumentIn(BaseModel):
    name: str
    category: Optional[str] = "general"
    note: Optional[str] = None


class ChatIn(BaseModel):
    model_config = ConfigDict(extra="ignore")
    session_id: str
    message: str
    name: Optional[str] = None
    email: Optional[str] = None


# ----------------------- Startup -----------------------
@app.on_event("startup")
async def on_startup() -> None:
    await db.users.create_index("email", unique=True)
    await db.users.create_index("id", unique=True)
    await db.leads.create_index("created_at")
    await db.bookings.create_index("created_at")
    await db.documents.create_index("user_id")
    await db.chat_messages.create_index("session_id")

    admin_email = os.environ.get("ADMIN_EMAIL")
    admin_password = os.environ.get("ADMIN_PASSWORD")
    if admin_email and admin_password:
        existing = await db.users.find_one({"email": admin_email.lower()})
        if not existing:
            await db.users.insert_one({
                "id": str(uuid.uuid4()),
                "email": admin_email.lower(),
                "name": "Rahul (Admin)",
                "firm": "Rahul Tax Advisory",
                "role": "admin",
                "password_hash": hash_password(admin_password),
                "created_at": datetime.now(timezone.utc).isoformat(),
            })
            log.info("Seeded admin: %s", admin_email)
        elif not verify_password(admin_password, existing.get("password_hash", "")):
            await db.users.update_one(
                {"email": admin_email.lower()},
                {"$set": {"password_hash": hash_password(admin_password)}},
            )


# ----------------------- Routes: health -----------------------
@api.get("/")
async def root():
    return {"message": "Rahul Tax Advisory API", "status": "ok"}


# ----------------------- Routes: auth -----------------------
@api.post("/auth/register")
async def register(payload: RegisterIn, response: Response):
    email = payload.email.lower()
    if await db.users.find_one({"email": email}):
        raise HTTPException(400, "Email already registered")
    user = {
        "id": str(uuid.uuid4()),
        "email": email,
        "name": payload.name,
        "firm": payload.firm,
        "role": "client",
        "password_hash": hash_password(payload.password),
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.users.insert_one(user)
    token = create_token(user["id"], email)
    set_auth_cookie(response, token)
    user.pop("password_hash", None)
    user.pop("_id", None)
    return {"user": user, "token": token}


@api.post("/auth/login")
async def login(payload: LoginIn, response: Response):
    email = payload.email.lower()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(payload.password, user.get("password_hash", "")):
        raise HTTPException(401, "Invalid email or password")
    token = create_token(user["id"], email)
    set_auth_cookie(response, token)
    user.pop("password_hash", None)
    user.pop("_id", None)
    return {"user": user, "token": token}


@api.post("/auth/logout")
async def logout(response: Response):
    response.delete_cookie("access_token", path="/")
    return {"ok": True}


@api.get("/auth/me")
async def me(user: dict = Depends(get_current_user)):
    return user


# ----------------------- Routes: leads -----------------------
@api.post("/leads")
async def create_lead(payload: LeadIn):
    doc = payload.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    doc["status"] = "new"
    await db.leads.insert_one(doc)
    doc.pop("_id", None)
    log.info("New lead: %s <%s>", doc["name"], doc["email"])
    return {"ok": True, "id": doc["id"]}


@api.get("/leads")
async def list_leads(_: dict = Depends(require_admin)):
    items = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return items


# ----------------------- Routes: bookings -----------------------
@api.post("/bookings")
async def create_booking(payload: BookingIn):
    doc = payload.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    doc["status"] = "pending"
    await db.bookings.insert_one(doc)
    doc.pop("_id", None)
    log.info("New booking: %s @ %s %s", doc["name"], doc["date"], doc["time_slot"])
    return {"ok": True, "id": doc["id"]}


@api.get("/bookings")
async def list_bookings(_: dict = Depends(require_admin)):
    items = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return items


# ----------------------- Routes: documents -----------------------
@api.post("/documents")
async def add_document(payload: DocumentIn, user: dict = Depends(get_current_user)):
    doc = payload.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["user_id"] = user["id"]
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    doc["status"] = "received"
    await db.documents.insert_one(doc)
    doc.pop("_id", None)
    return doc


@api.get("/documents")
async def list_documents(user: dict = Depends(get_current_user)):
    items = await db.documents.find({"user_id": user["id"]}, {"_id": 0}).sort("created_at", -1).to_list(200)
    return items


# ----------------------- Routes: AI chat (SSE) -----------------------
SYSTEM_PROMPT = (
    "You are the AI Tax Assistant for Rahul Tax Advisory, a firm that helps US CPA firms "
    "and small businesses with offshore tax preparation (Forms 1040, 1065, 1120, 1120-S, 990), "
    "tax planning & advisory, tax projections, accounting & bookkeeping, QuickBooks support, "
    "tax notice resolution, and offshore staffing. "
    "Rahul has 3.5+ years of US tax experience, is a CPA Candidate (REG & TCP cleared), and has "
    "experience with CCH Axcess, UltraTax, ProConnect, and Drake. "
    "Be concise, professional, and warm. If a visitor needs human help, recommend booking a free "
    "consultation at /book or filling the contact form at /contact. "
    "Never provide binding tax advice — always include a brief disclaimer when discussing specifics. "
    "If asked about pricing, say 'engagements are scoped per firm — book a free 30-minute consultation'."
)


@api.post("/chat/stream")
async def chat_stream(payload: ChatIn):
    from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

    api_key = os.environ.get("EMERGENT_LLM_KEY")
    if not api_key:
        raise HTTPException(500, "LLM key not configured")

    # persist user message
    await db.chat_messages.insert_one({
        "id": str(uuid.uuid4()),
        "session_id": payload.session_id,
        "role": "user",
        "content": payload.message,
        "name": payload.name,
        "email": payload.email,
        "created_at": datetime.now(timezone.utc).isoformat(),
    })

    chat = LlmChat(
        api_key=api_key,
        session_id=payload.session_id,
        system_message=SYSTEM_PROMPT,
    ).with_model("anthropic", "claude-sonnet-4-6")

    async def event_gen() -> AsyncGenerator[str, None]:
        assembled = []
        try:
            async for ev in chat.stream_message(UserMessage(text=payload.message)):
                if isinstance(ev, TextDelta):
                    assembled.append(ev.content)
                    yield f"data: {json.dumps({'delta': ev.content})}\n\n"
                elif isinstance(ev, StreamDone):
                    break
            full = "".join(assembled)
            await db.chat_messages.insert_one({
                "id": str(uuid.uuid4()),
                "session_id": payload.session_id,
                "role": "assistant",
                "content": full,
                "created_at": datetime.now(timezone.utc).isoformat(),
            })
            yield f"data: {json.dumps({'done': True})}\n\n"
        except Exception as e:
            log.exception("chat error")
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return StreamingResponse(
        event_gen(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no", "Connection": "keep-alive"},
    )


# ----------------------- Mount + CORS -----------------------
app.include_router(api)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origin_regex=".*",
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def on_shutdown():
    client.close()
