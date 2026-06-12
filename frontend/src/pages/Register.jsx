import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth, formatApiError } from "@/lib/auth";
import { ArrowUpRight } from "lucide-react";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", firm: "", password: "" });
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await register(form);
      toast.success("Account created — welcome.");
      navigate("/portal");
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Could not register.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-16" data-testid="page-register">
      <div>
        <p className="kicker">Client Portal</p>
        <h1 className="font-serif-display text-5xl md:text-6xl text-[#1C3F39] mt-4 leading-tight">Create your client account.</h1>
        <p className="mt-6 text-[#1C3F39]/75 text-lg">
          Get a secure space to share documents, track engagements and review deliverables.
        </p>
        <p className="mt-6 text-sm text-[#1C3F39]/60">
          Already a client? <Link to="/login" className="text-[#A85A46] underline" data-testid="register-login-link">Sign in</Link>
        </p>
      </div>

      <form onSubmit={submit} className="surface-card p-8 md:p-10 space-y-6" data-testid="register-form">
        <div>
          <label className="kicker block mb-2">Full name</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="register-name" />
        </div>
        <div>
          <label className="kicker block mb-2">Firm (optional)</label>
          <input value={form.firm} onChange={(e) => setForm({ ...form, firm: e.target.value })}
            className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="register-firm" />
        </div>
        <div>
          <label className="kicker block mb-2">Email</label>
          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="register-email" />
        </div>
        <div>
          <label className="kicker block mb-2">Password (min 6)</label>
          <input required type="password" minLength={6} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="register-password" />
        </div>
        <button type="submit" disabled={busy} className="btn-primary w-full justify-center disabled:opacity-60" data-testid="register-submit">
          {busy ? "Creating…" : "Create account"} <ArrowUpRight size={16} strokeWidth={1.5} />
        </button>
      </form>
    </div>
  );
}
