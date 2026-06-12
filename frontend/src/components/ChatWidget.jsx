import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { API } from "@/lib/api";

function uid() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId] = useState(() => {
    const existing = localStorage.getItem("rta_chat_session");
    if (existing) return existing;
    const s = uid();
    localStorage.setItem("rta_chat_session", s);
    return s;
  });
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi — I'm Rahul Tax Advisory's AI assistant. Ask me about US tax prep (1040, 1065, 1120, 1120-S, 990), tax planning, or how we support CPA firms.",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || sending) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }, { role: "assistant", content: "" }]);
    setSending(true);

    try {
      const resp = await fetch(`${API}/chat/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: text }),
      });
      if (!resp.ok || !resp.body) throw new Error(`HTTP ${resp.status}`);
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n\n");
        buf = lines.pop() || "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          try {
            const payload = JSON.parse(line.slice(5).trim());
            if (payload.delta) {
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = {
                  role: "assistant",
                  content: copy[copy.length - 1].content + payload.delta,
                };
                return copy;
              });
            }
            if (payload.error) {
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: "assistant", content: "Sorry — I hit an error. Please try again." };
                return copy;
              });
            }
          } catch {}
        }
      }
    } catch (e) {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "I couldn't reach the server. Please try the contact form or email rahul@rahultaxadvisory.com.",
        };
        return copy;
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((s) => !s)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#1C3F39] text-[#F9F6F0] shadow-2xl shadow-[#1C3F39]/30 flex items-center justify-center hover:bg-[#A85A46] transition-all duration-300"
        aria-label="Open chat"
        data-testid="chat-toggle"
      >
        {open ? <X size={22} strokeWidth={1.5} /> : <MessageCircle size={22} strokeWidth={1.5} />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 z-40 w-[92vw] max-w-[400px] h-[70vh] max-h-[600px] bg-[#FFFFFF] border border-[#1C3F39]/12 rounded-sm shadow-2xl flex flex-col overflow-hidden"
          data-testid="chat-panel"
        >
          <div className="px-5 py-4 border-b border-[#1C3F39]/10 bg-[#F9F6F0]">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#A85A46]" strokeWidth={1.5} />
              <p className="font-sub text-[11px] uppercase tracking-[0.22em] text-[#A85A46]">AI Tax Assistant</p>
            </div>
            <h4 className="font-serif-display text-xl text-[#1C3F39] mt-1">Ask anything tax-related</h4>
          </div>

          <div ref={scrollRef} className="flex-1 px-5 py-4 overflow-y-auto chat-scroll space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed rounded-sm whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-[#1C3F39] text-[#F9F6F0]"
                      : "bg-[#F9F6F0] text-[#1C3F39] border border-[#1C3F39]/10"
                  }`}
                  data-testid={`chat-msg-${m.role}`}
                >
                  {m.content || (m.role === "assistant" && sending ? "…" : "")}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#1C3F39]/10 p-3 bg-[#FFFFFF]">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about Form 1065, projections, outsourcing…"
                className="flex-1 px-3 py-2.5 text-sm bg-[#F9F6F0] border border-[#1C3F39]/12 rounded-sm focus:outline-none focus:border-[#A85A46]"
                data-testid="chat-input"
                disabled={sending}
              />
              <button
                onClick={send}
                disabled={sending || !input.trim()}
                className="w-10 h-10 flex items-center justify-center bg-[#1C3F39] text-[#F9F6F0] rounded-sm disabled:opacity-40 hover:bg-[#A85A46] transition-colors"
                data-testid="chat-send"
                aria-label="Send"
              >
                <Send size={16} strokeWidth={1.5} />
              </button>
            </div>
            <p className="mt-2 text-[10px] text-[#1C3F39]/50 font-sub">General info only — not binding tax advice.</p>
          </div>
        </div>
      )}
    </>
  );
}
