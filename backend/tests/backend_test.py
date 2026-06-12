"""Backend API tests for Rahul Tax Advisory."""
import os
import time
import json
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://tax-planning-pro-2.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

ADMIN_EMAIL = "rahul@rahultaxadvisory.com"
ADMIN_PASSWORD = "RahulAdmin2025!"

UNIQUE = uuid.uuid4().hex[:8]
CLIENT_EMAIL = f"TEST_portal_{UNIQUE}@example.com"
CLIENT_PASSWORD = "Portal123!"


@pytest.fixture(scope="session")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def fresh():
    """Cookie-less requests client to assert pure auth-header behavior."""
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="session")
def admin_token(session):
    r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
    assert r.status_code == 200, f"Admin login failed: {r.status_code} {r.text}"
    data = r.json()
    assert data["user"]["role"] == "admin"
    return data["token"]


@pytest.fixture(scope="session")
def client_token(session):
    r = session.post(f"{API}/auth/register", json={
        "name": "Portal Test", "email": CLIENT_EMAIL, "password": CLIENT_PASSWORD
    })
    assert r.status_code == 200, f"Register failed: {r.status_code} {r.text}"
    return r.json()["token"]


# ------------- Health -------------
def test_health(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    assert r.json().get("status") == "ok"


# ------------- Leads -------------
def test_create_lead(session):
    r = session.post(f"{API}/leads", json={
        "name": "TEST Lead", "email": f"TEST_lead_{UNIQUE}@example.com",
        "firm": "Acme CPA", "message": "Need help with 1065"
    })
    assert r.status_code == 200
    body = r.json()
    assert body["ok"] is True
    assert "id" in body


def test_list_leads_requires_admin(client_token):
    s = fresh()
    # no auth
    r = s.get(f"{API}/leads")
    assert r.status_code == 401
    # client
    r = s.get(f"{API}/leads", headers={"Authorization": f"Bearer {client_token}"})
    assert r.status_code == 403


def test_list_leads_admin(admin_token):
    r = fresh().get(f"{API}/leads", headers={"Authorization": f"Bearer {admin_token}"})
    assert r.status_code == 200
    assert isinstance(r.json(), list)


# ------------- Bookings -------------
def test_create_booking(session):
    r = session.post(f"{API}/bookings", json={
        "name": "TEST Booker", "email": f"TEST_book_{UNIQUE}@example.com",
        "date": "2026-02-15", "time_slot": "10:00 AM", "topic": "Tax planning"
    })
    assert r.status_code == 200
    body = r.json()
    assert body["ok"] is True
    assert "id" in body


def test_list_bookings_admin(admin_token, client_token):
    s = fresh()
    r = s.get(f"{API}/bookings")
    assert r.status_code == 401
    r = s.get(f"{API}/bookings", headers={"Authorization": f"Bearer {client_token}"})
    assert r.status_code == 403
    r = s.get(f"{API}/bookings", headers={"Authorization": f"Bearer {admin_token}"})
    assert r.status_code == 200
    assert isinstance(r.json(), list)


# ------------- Auth -------------
def test_login_wrong_password():
    r = fresh().post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": "wrong"})
    assert r.status_code == 401


def test_me_requires_token():
    r = fresh().get(f"{API}/auth/me")
    assert r.status_code == 401


def test_me_with_token(client_token):
    r = fresh().get(f"{API}/auth/me", headers={"Authorization": f"Bearer {client_token}"})
    assert r.status_code == 200
    data = r.json()
    assert data["email"] == CLIENT_EMAIL.lower()
    assert data["role"] == "client"


# ------------- Documents -------------
def test_documents_flow(client_token):
    s = fresh()
    headers = {"Authorization": f"Bearer {client_token}"}
    # create
    r = s.post(f"{API}/documents", json={
        "name": "TEST W-2 2025", "category": "tax", "note": "uploaded"
    }, headers=headers)
    assert r.status_code == 200
    doc = r.json()
    assert doc["name"] == "TEST W-2 2025"
    assert "id" in doc
    # list scoped to user
    r = s.get(f"{API}/documents", headers=headers)
    assert r.status_code == 200
    items = r.json()
    assert any(d["id"] == doc["id"] for d in items)
    # auth required
    r = fresh().get(f"{API}/documents")
    assert r.status_code == 401


# ------------- Chat SSE -------------
def test_chat_stream_sse():
    url = f"{API}/chat/stream"
    payload = {"session_id": f"test-{UNIQUE}", "message": "What is Form 1065 in one sentence?"}
    got_delta = False
    got_done = False
    err = None
    with requests.post(url, json=payload, stream=True, timeout=60) as r:
        assert r.status_code == 200
        ctype = r.headers.get("content-type", "")
        assert "text/event-stream" in ctype, f"unexpected ctype: {ctype}"
        start = time.time()
        for raw in r.iter_lines(decode_unicode=True):
            if not raw:
                continue
            if raw.startswith("data:"):
                chunk = raw[5:].strip()
                try:
                    obj = json.loads(chunk)
                except Exception:
                    continue
                if "delta" in obj:
                    got_delta = True
                if obj.get("done"):
                    got_done = True
                    break
                if "error" in obj:
                    err = obj["error"]
                    break
            if time.time() - start > 50:
                break
    assert err is None, f"SSE error: {err}"
    assert got_delta, "no delta chunks received"
    assert got_done, "no done event received"
