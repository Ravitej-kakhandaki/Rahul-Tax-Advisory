import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth, formatApiError } from "@/lib/auth";
import { ArrowUpRight } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const loc = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await login(form.email, form.password);
      toast.success("Signed in.");
      const dest = loc.state?.from || "/portal";
      navigate(dest);
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Sign in failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-16" data-testid="page-login">
      <div>
        <p className="kicker">Client Portal</p>
        <h1 className="font-serif-display text-5xl md:text-6xl text-[#1C3F39] mt-4 leading-tight">Welcome back.</h1>
        <p className="mt-6 text-[#1C3F39]/75 text-lg">
          Sign in to upload documents, review engagement status and access your tax workpapers.
        </p>
        <p className="mt-6 text-sm text-[#1C3F39]/60">
          New client? <Link to="/register" className="text-[#A85A46] underline" data-testid="login-register-link">Create an account</Link>
        </p>
      </div>

      <form onSubmit={submit} className="surface-card p-8 md:p-10 space-y-6" data-testid="login-form">
        <div>
          <label className="kicker block mb-2">Email</label>
          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="login-email" />
        </div>
        <div>
          <label className="kicker block mb-2">Password</label>
          <input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46]" data-testid="login-password" />
        </div>
        <button type="submit" disabled={busy} className="btn-primary w-full justify-center disabled:opacity-60" data-testid="login-submit">
          {busy ? "Signing in…" : "Sign in"} <ArrowUpRight size={16} strokeWidth={1.5} />
        </button>
      </form>
    </div>
  );
}
