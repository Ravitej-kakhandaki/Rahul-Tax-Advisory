import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import api from "@/lib/api";
import { toast } from "sonner";
import { FileText, FilePlus2, UserCircle2, Clock } from "lucide-react";

const categories = ["Tax Return", "Source Document", "Workpaper", "Engagement Letter", "Other"];

export default function Portal() {
  const { user, logout } = useAuth();
  const [docs, setDocs] = useState([]);
  const [form, setForm] = useState({ name: "", category: "Source Document", note: "" });
  const [busy, setBusy] = useState(false);

  const load = async () => {
    try {
      const { data } = await api.get("/documents");
      setDocs(data);
    } catch { /* ignore */ }
  };
  useEffect(() => { if (user) load(); }, [user]);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error("Document name required"); return; }
    setBusy(true);
    try {
      await api.post("/documents", form);
      toast.success("Document added.");
      setForm({ name: "", category: "Source Document", note: "" });
      load();
    } catch {
      toast.error("Could not add document.");
    } finally { setBusy(false); }
  };

  if (!user) return null;

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24" data-testid="page-portal">
      <section className="grid md:grid-cols-12 gap-10 items-end mb-12">
        <div className="md:col-span-8">
          <p className="kicker">Client Portal</p>
          <h1 className="font-serif-display text-5xl md:text-6xl text-[#1C3F39] mt-4 leading-tight">
            Welcome, {user.name?.split(" ")[0] || "Client"}.
          </h1>
          <p className="mt-4 text-[#1C3F39]/75 text-lg">
            This is your private workspace. Track document submissions and your engagement status.
          </p>
        </div>
        <div className="md:col-span-3 md:col-start-10 flex items-center gap-3 border border-[#1C3F39]/15 p-5">
          <UserCircle2 size={32} strokeWidth={1.3} className="text-[#A85A46]" />
          <div>
            <p className="font-serif-display text-lg text-[#1C3F39]">{user.name}</p>
            <p className="text-xs text-[#1C3F39]/60 font-sub">{user.email}</p>
            {user.firm && <p className="text-xs text-[#1C3F39]/60 font-sub">{user.firm}</p>}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-5 surface-card p-8 space-y-5" data-testid="document-upload-card">
          <FilePlus2 size={28} strokeWidth={1.3} className="text-[#A85A46]" />
          <h2 className="font-serif-display text-3xl text-[#1C3F39]">Submit a document</h2>
          <p className="text-sm text-[#1C3F39]/65">
            Record a document you're sending. We track receipt and status here; the file itself is shared via your secure portal link.
          </p>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="kicker block mb-2">Document name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="doc-name" />
            </div>
            <div>
              <label className="kicker block mb-2">Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="doc-category">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="kicker block mb-2">Note</label>
              <textarea rows={3} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}
                className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46] resize-none" data-testid="doc-note" />
            </div>
            <button type="submit" disabled={busy} className="btn-primary w-full justify-center disabled:opacity-60" data-testid="doc-submit">
              {busy ? "Submitting…" : "Add document record"}
            </button>
          </form>
        </div>

        <div className="md:col-span-7" data-testid="documents-list">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="kicker">Your submissions</p>
              <h2 className="font-serif-display text-3xl text-[#1C3F39] mt-1">Documents</h2>
            </div>
            <button onClick={logout} className="font-sub text-sm text-[#1C3F39]/60 hover:text-[#A85A46]" data-testid="portal-logout">Sign out</button>
          </div>

          {docs.length === 0 ? (
            <div className="border border-dashed border-[#1C3F39]/25 p-12 text-center text-[#1C3F39]/65" data-testid="docs-empty">
              <FileText size={36} strokeWidth={1.2} className="mx-auto text-[#A85A46]" />
              <p className="font-serif-display text-xl mt-4">No documents yet.</p>
              <p className="text-sm mt-1">Add your first submission on the left.</p>
            </div>
          ) : (
            <ul className="divide-y divide-[#1C3F39]/10 border-y border-[#1C3F39]/15">
              {docs.map((d) => (
                <li key={d.id} className="py-5 flex flex-wrap items-center gap-4" data-testid={`doc-row-${d.id}`}>
                  <FileText size={22} strokeWidth={1.4} className="text-[#A85A46]" />
                  <div className="flex-1 min-w-[200px]">
                    <p className="font-serif-display text-xl text-[#1C3F39]">{d.name}</p>
                    {d.note && <p className="text-sm text-[#1C3F39]/65 mt-1">{d.note}</p>}
                  </div>
                  <span className="text-xs font-sub uppercase tracking-[0.18em] text-[#A85A46]">{d.category}</span>
                  <span className="text-xs font-sub uppercase tracking-[0.18em] text-[#1C3F39]/60 flex items-center gap-1">
                    <Clock size={12} strokeWidth={1.5} /> {new Date(d.created_at).toLocaleDateString()}
                  </span>
                  <span className="text-xs font-sub uppercase tracking-[0.18em] text-[#1C3F39]/60">{d.status}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
