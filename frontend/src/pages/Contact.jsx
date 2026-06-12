import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "@/lib/api";
import { formatApiError } from "@/lib/auth";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";

const services = [
  "Tax Preparation",
  "Tax Planning & Advisory",
  "Accounting & Bookkeeping",
  "CPA Firm Outsourcing",
  "Tax Notice Resolution",
  "Offshore Staffing",
  "Other",
];

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", firm: "", phone: "", service: "Tax Preparation", message: "" });
  const [busy, setBusy] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/leads", form);
      toast.success("Message received — I'll be in touch within one business day.");
      setForm({ name: "", email: "", firm: "", phone: "", service: "Tax Preparation", message: "" });
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Failed to send.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div data-testid="page-contact">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">Contact</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-3xl">
          Tell me what you're working through.
        </h1>
        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-2xl">
          One business day response — usually faster. If it's tax season, even faster.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 pb-24">
        <form onSubmit={submit} className="md:col-span-8 surface-card p-8 md:p-12 space-y-6" data-testid="lead-form">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="kicker block mb-2">Full name *</label>
              <input required value={form.name} onChange={update("name")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg text-[#1C3F39] focus:outline-none focus:border-[#A85A46]" data-testid="lead-name" />
            </div>
            <div>
              <label className="kicker block mb-2">Email *</label>
              <input required type="email" value={form.email} onChange={update("email")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg text-[#1C3F39] focus:outline-none focus:border-[#A85A46]" data-testid="lead-email" />
            </div>
            <div>
              <label className="kicker block mb-2">Firm</label>
              <input value={form.firm} onChange={update("firm")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg text-[#1C3F39] focus:outline-none focus:border-[#A85A46]" data-testid="lead-firm" />
            </div>
            <div>
              <label className="kicker block mb-2">Phone</label>
              <input value={form.phone} onChange={update("phone")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg text-[#1C3F39] focus:outline-none focus:border-[#A85A46]" data-testid="lead-phone" />
            </div>
          </div>
          <div>
            <label className="kicker block mb-2">Service of interest</label>
            <select value={form.service} onChange={update("service")} className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg text-[#1C3F39] focus:outline-none focus:border-[#A85A46]" data-testid="lead-service">
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="kicker block mb-2">Message *</label>
            <textarea required rows={5} value={form.message} onChange={update("message")} placeholder="A short note about your firm or the engagement you're considering."
              className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg text-[#1C3F39] focus:outline-none focus:border-[#A85A46] resize-none" data-testid="lead-message" />
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button type="submit" disabled={busy} className="btn-primary disabled:opacity-60" data-testid="lead-submit">
              {busy ? "Sending…" : "Send message"} <Send size={16} strokeWidth={1.5} />
            </button>
            <button type="button" onClick={() => navigate("/book")} className="btn-ghost" data-testid="lead-book">
              Book a call instead <ArrowUpRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </form>

        <aside className="md:col-span-4 space-y-6">
          <div className="border border-[#1C3F39]/15 p-8 bg-[#FFFFFF]">
            <p className="kicker">Direct</p>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3 items-start text-[#1C3F39]">
                <Mail size={18} strokeWidth={1.5} className="text-[#A85A46] mt-1" />
                <div>
                  <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-[#1C3F39]/60">Email</p>
                  <p className="font-serif-display text-lg">rahul@rahultaxadvisory.com</p>
                </div>
              </li>
              <li className="flex gap-3 items-start text-[#1C3F39]">
                <Phone size={18} strokeWidth={1.5} className="text-[#A85A46] mt-1" />
                <div>
                  <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-[#1C3F39]/60">Hours</p>
                  <p className="font-serif-display text-lg">Mon–Fri · 9am–7pm IST</p>
                  <p className="text-sm text-[#1C3F39]/70">Overlapping US East / Central hours daily</p>
                </div>
              </li>
              <li className="flex gap-3 items-start text-[#1C3F39]">
                <MapPin size={18} strokeWidth={1.5} className="text-[#A85A46] mt-1" />
                <div>
                  <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-[#1C3F39]/60">Serving</p>
                  <p className="font-serif-display text-lg">US CPA firms · Remote</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[#1C3F39] text-[#F9F6F0] p-8">
            <p className="kicker text-[#E2B8A9]">Confidential</p>
            <p className="font-serif-display text-2xl mt-3 leading-snug">
              All client information is handled under standard NDA and US tax-practitioner confidentiality norms.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
