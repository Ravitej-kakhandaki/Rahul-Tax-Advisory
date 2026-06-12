import { Link } from "react-router-dom";
import { TrendingUp, Clock, Target, Building2, ArrowUpRight, Quote } from "lucide-react";

const cases = [
  {
    tag: "Multi-Partner CPA Firm · US East Coast",
    icon: Building2,
    challenge:
      "Tax season bottleneck — 3 partners reviewing 800+ returns with junior staff turnover during peak weeks.",
    solution:
      "Embedded as outsourced preparation + first-level review capacity from January through extension deadlines. Built workpaper templates aligned to firm QC.",
    metrics: [
      { value: "+40%", label: "Return throughput in peak weeks" },
      { value: "−18 hrs", label: "Partner review hours per week" },
      { value: "0", label: "Re-opened returns from QC issues" },
    ],
  },
  {
    tag: "Tax Planning Engagement · Professional Services Owner",
    icon: TrendingUp,
    challenge:
      "Six-figure income volatility, no quarterly projections, missed safe-harbor estimates two years running.",
    solution:
      "Built quarterly projection model, ran entity-structure comparison (Sch-C vs S-Corp), delivered strategy deck with annual savings roadmap.",
    metrics: [
      { value: "Significant", label: "Annual tax savings identified" },
      { value: "Quarterly", label: "Projections + safe-harbor cadence" },
      { value: "1 deck", label: "Partner-ready advisory deliverable" },
    ],
  },
  {
    tag: "Small CPA Firm · Bookkeeping + Notice Resolution",
    icon: Clock,
    challenge:
      "Backlog of unresolved IRS / state notices and 14 months of unreconciled QuickBooks files across clients.",
    solution:
      "Cleaned up books in QuickBooks Online, reconciled prior periods, drafted notice responses on firm letterhead, tracked to closure.",
    metrics: [
      { value: "100%", label: "Notices resolved within 60 days" },
      { value: "14 mo", label: "Books cleaned and tax-ready" },
      { value: "<24 hr", label: "Average notice response turnaround" },
    ],
  },
  {
    tag: "Offshore Team Buildout · Mid-Size Firm",
    icon: Target,
    challenge:
      "Firm wanted offshore preparers but had no SOPs, QC framework, or onboarding plan — past attempts failed.",
    solution:
      "Designed workflow + SOP documentation, sourced and vetted preparers, set up QC checklist, ran 60-day supervised onboarding.",
    metrics: [
      { value: "4 prep", label: "Onboarded in first 60 days" },
      { value: "QC", label: "Framework matched to firm standard" },
      { value: "Self-run", label: "Firm operates team independently" },
    ],
  },
];

export default function Results() {
  return (
    <div data-testid="page-results">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">Results</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-4xl">
          Outcomes — not promises.
        </h1>
        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-2xl">
          A representative sample of recent engagements. Client identities are withheld; metrics and
          deliverables are real.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16 space-y-10">
        {cases.map((c, i) => (
          <article
            key={i}
            className="grid md:grid-cols-12 gap-8 border-t border-[#1C3F39]/15 pt-10 fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
            data-testid={`case-${i}`}
          >
            <div className="md:col-span-4">
              <c.icon size={32} strokeWidth={1.3} className="text-[#A85A46]" />
              <p className="kicker mt-5">Case 0{i + 1}</p>
              <p className="font-serif-display text-2xl text-[#1C3F39] leading-snug mt-2">{c.tag}</p>
            </div>
            <div className="md:col-span-4 space-y-5">
              <div>
                <p className="kicker">Challenge</p>
                <p className="mt-2 text-[#1C3F39]/85 leading-relaxed">{c.challenge}</p>
              </div>
              <div>
                <p className="kicker">Solution</p>
                <p className="mt-2 text-[#1C3F39]/85 leading-relaxed">{c.solution}</p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-cols-1 gap-3">
              {c.metrics.map((m, j) => (
                <div key={j} className="border border-[#1C3F39]/15 bg-[#FFFFFF] px-5 py-4">
                  <p className="font-serif-display text-3xl text-[#A85A46] leading-none">{m.value}</p>
                  <p className="text-xs font-sub uppercase tracking-[0.18em] text-[#1C3F39]/60 mt-2">{m.label}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#F2EEE5]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <Quote size={36} strokeWidth={1.3} className="text-[#A85A46] mx-auto" />
          <p className="font-serif-display text-3xl md:text-5xl text-[#1C3F39] mt-6 leading-tight">
            "He treats our firm's clients like his own — that's the difference."
          </p>
          <p className="kicker mt-6">— Partner, Mid-Size US CPA Firm</p>
        </div>
      </section>

      <section className="bg-[#1C3F39] text-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif-display text-4xl md:text-6xl leading-tight">
              Want results like these for your firm?
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/book" className="btn-terra" data-testid="results-cta">
              Book a CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
