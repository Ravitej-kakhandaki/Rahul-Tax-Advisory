import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import api from "@/lib/api";
import { formatApiError } from "@/lib/auth";
import { CheckCircle2, Clock, Download, ArrowUpRight, Layers, ShieldCheck, FileSpreadsheet, Sparkles, ClipboardList } from "lucide-react";

const challenges = [
  "Finding experienced staff",
  "Busy season overload",
  "Review bottlenecks",
  "Turnaround delays",
  "High staffing costs",
  "Expanding advisory services",
];

const deliverables = [
  { icon: Layers,         title: "Capacity gap analysis",          desc: "Where your firm is losing hours today." },
  { icon: Clock,          title: "Busy season bottleneck review",  desc: "Which weeks break — and why." },
  { icon: ClipboardList,  title: "Tasks suitable for offshore",    desc: "What to delegate first, ranked by risk." },
  { icon: FileSpreadsheet,title: "Hours & cost savings estimate",  desc: "A number you can take to your partners." },
  { icon: Sparkles,       title: "Recommended support model",      desc: "Seasonal, year-round, or team buildout." },
  { icon: ShieldCheck,    title: "Workflow & security recommendations", desc: "What to put in place before season." },
];

export default function Audit() {
  const [form, setForm] = useState({
    name: "", firm: "", email: "", phone: "",
    professionals: "", return_volume: "",
    vol_1040: "", vol_1065: "", vol_1120: "",
    bookkeeping_clients: "", advisory_clients: "",
    biggest_challenge: challenges[0], notes: "",
  });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/audits", form);
      toast.success("Capacity Audit requested — I'll send your report within 2 business days.");
      setDone(true);
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Could not submit.");
    } finally { setBusy(false); }
  };

  if (done) {
    return (
      <div className="max-w-[900px] mx-auto px-6 md:px-12 py-32 text-center" data-testid="audit-done">
        <p className="kicker">Received</p>
        <h1 className="font-serif-display text-5xl md:text-6xl text-[#1C3F39] mt-4 leading-tight">
          Your Capacity Audit is on the way.
        </h1>
        <p className="mt-6 text-lg text-[#1C3F39]/75">
          I'll review your firm's profile and send a personalized capacity report from
          <strong> rahul@rahultaxadvisory.com </strong> within 2 business days.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="/cpa-offshore-readiness-checklist.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" data-testid="audit-download-checklist">
            Download the Readiness Checklist <Download size={16} strokeWidth={1.5} />
          </a>
          <Link to="/book" className="btn-ghost" data-testid="audit-book">
            Book a CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="page-audit">
      {/* HERO --------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">Free CPA Capacity Audit</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-5xl">
          Discover how many tax hours your firm can free up this busy season.
        </h1>
        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-3xl">
          A 15-minute assessment that identifies which tax, bookkeeping and advisory tasks can be
          safely outsourced — while maintaining your firm's quality standards.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#audit-form" className="btn-primary" data-testid="audit-cta-start">
            Start my free audit <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
          <a
            href="/cpa-offshore-readiness-checklist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            data-testid="audit-cta-pdf"
          >
            <Download size={16} strokeWidth={1.5} /> Download the Readiness Checklist (PDF)
          </a>
        </div>
      </section>

      {/* DELIVERABLES ------------------------------------------ */}
      <section className="bg-[#F2EEE5]" data-testid="audit-deliverables">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-6">
              <p className="kicker">What CPA firms receive</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
                Your personalized CPA Capacity Report.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="text-[#1C3F39]/75 text-lg">
                Delivered within two business days as a partner-ready document — usable in your next
                management meeting.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#1C3F39]/12 p-7" data-testid={`audit-deliverable-${i}`}>
                <d.icon size={26} strokeWidth={1.3} className="text-[#A85A46]" />
                <h3 className="font-serif-display text-xl text-[#1C3F39] mt-5 leading-snug">{d.title}</h3>
                <p className="mt-3 text-[#1C3F39]/70 text-[15px] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK REVERSAL ------------------------------------------ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24" data-testid="risk-reversal">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <p className="kicker">Risk reversal</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              Start small. Validate quality. Scale with confidence.
            </h2>
            <p className="mt-5 text-[#1C3F39]/75 text-lg">
              No long contracts, no minimums. Pilot the work, review it on your terms, then expand.
            </p>
          </div>
          <ul className="md:col-span-5 md:col-start-8 space-y-3 font-sub">
            {[
              "10-hour pilot engagement available",
              "No long-term commitment required",
              "Review our work before expanding scope",
              "Workpapers handed off in your firm's format",
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 border border-[#1C3F39]/12 bg-[#FFFFFF] p-4" data-testid={`risk-${i}`}>
                <CheckCircle2 size={20} strokeWidth={1.5} className="text-[#A85A46] mt-0.5 shrink-0" />
                <span className="text-[#1C3F39]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FORM --------------------------------------------------- */}
      <section id="audit-form" className="bg-[#1C3F39]" data-testid="audit-form-section">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <p className="kicker text-[#E2B8A9]">15-minute audit</p>
          <h2 className="font-serif-display text-4xl md:text-5xl text-[#F9F6F0] mt-4 leading-tight">
            Tell me about your firm.
          </h2>
          <p className="mt-4 text-[#F9F6F0]/80 text-lg max-w-2xl">
            Everything stays confidential. You'll get your report within 2 business days.
          </p>

          <form onSubmit={submit} className="mt-12 bg-[#F9F6F0] p-8 md:p-12 space-y-10" data-testid="audit-form">
            {/* Firm info */}
            <div>
              <p className="kicker">Firm Information</p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <Field label="Your name *"      v={form.name} onChange={update("name")} required tid="audit-name" />
                <Field label="CPA firm name *"  v={form.firm} onChange={update("firm")} required tid="audit-firm" />
                <Field label="Email *"          type="email" v={form.email} onChange={update("email")} required tid="audit-email" />
                <Field label="Phone"            v={form.phone} onChange={update("phone")} tid="audit-phone" />
                <Field label="Number of professionals" v={form.professionals} onChange={update("professionals")} placeholder="e.g. 5 staff + 2 partners" tid="audit-professionals" />
                <Field label="Annual return volume"     v={form.return_volume} onChange={update("return_volume")} placeholder="e.g. ~800 returns / season" tid="audit-volume" />
              </div>
            </div>

            {/* Workload */}
            <div>
              <p className="kicker">Current Workload</p>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <Field label="1040 volume"       v={form.vol_1040} onChange={update("vol_1040")} placeholder="e.g. 500" tid="audit-1040" />
                <Field label="1065 volume"       v={form.vol_1065} onChange={update("vol_1065")} placeholder="e.g. 80" tid="audit-1065" />
                <Field label="1120 / 1120-S vol." v={form.vol_1120} onChange={update("vol_1120")} placeholder="e.g. 60" tid="audit-1120" />
                <Field label="Bookkeeping clients" v={form.bookkeeping_clients} onChange={update("bookkeeping_clients")} placeholder="e.g. 25" tid="audit-bk" />
                <Field label="Advisory clients"    v={form.advisory_clients} onChange={update("advisory_clients")} placeholder="e.g. 12" tid="audit-adv" />
              </div>
            </div>

            {/* Biggest challenge */}
            <div>
              <p className="kicker">Biggest Challenge</p>
              <div className="grid md:grid-cols-3 gap-3 mt-4">
                {challenges.map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setForm((s) => ({ ...s, biggest_challenge: c }))}
                    className={`py-3 px-4 text-sm font-sub border transition-colors text-left ${
                      form.biggest_challenge === c
                        ? "bg-[#1C3F39] text-[#F9F6F0] border-[#1C3F39]"
                        : "bg-transparent text-[#1C3F39] border-[#1C3F39]/20 hover:border-[#A85A46] hover:text-[#A85A46]"
                    }`}
                    data-testid={`challenge-${c.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="kicker block mb-2">Anything else I should know?</label>
              <textarea rows={4} value={form.notes} onChange={update("notes")} placeholder="Software you use, recent pain points, season goals…"
                className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg focus:outline-none focus:border-[#A85A46] resize-none" data-testid="audit-notes" />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button type="submit" disabled={busy} className="btn-primary disabled:opacity-60" data-testid="audit-submit">
                {busy ? "Submitting…" : "Get my Capacity Audit"} <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>
              <a
                href="/cpa-offshore-readiness-checklist.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                data-testid="audit-form-pdf"
              >
                <Download size={16} strokeWidth={1.5} /> Get the Readiness Checklist PDF
              </a>
            </div>
            <p className="text-xs text-[#1C3F39]/55 font-sub">No sales calls. Confidential. Report by email only.</p>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, v, onChange, type = "text", required, placeholder, tid }) {
  return (
    <div>
      <label className="kicker block mb-2">{label}</label>
      <input
        type={type}
        value={v}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#1C3F39]/25 py-3 text-lg text-[#1C3F39] focus:outline-none focus:border-[#A85A46]"
        data-testid={tid}
      />
    </div>
  );
}
