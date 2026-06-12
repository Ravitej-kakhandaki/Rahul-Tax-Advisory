import { Link } from "react-router-dom";
import { FileCheck2, Calculator, BookOpen, Users, AlertCircle, Layers, ArrowUpRight, Briefcase, CheckCircle2 } from "lucide-react";

const outsourcingImg = "https://images.unsplash.com/photo-1583521214690-73421a1829a9";

const detailedServices = [
  {
    icon: FileCheck2,
    title: "US Tax Preparation",
    blurb: "Year-round preparation of US federal and state returns — accurate, organized and review-ready.",
    bullets: [
      "Form 1040 — individual returns including Schedule C, E, K-1 reconciliations",
      "Form 1065 — partnership returns, K-1 generation and basis tracking",
      "Form 1120 / 1120-S — C-Corp and S-Corp returns",
      "Form 990 — non-profit and tax-exempt organization returns",
      "Software: CCH Axcess, UltraTax, ProConnect, Drake",
    ],
    anchor: "tax-prep",
  },
  {
    icon: Calculator,
    title: "Tax Planning & Advisory",
    blurb: "Projections, scenario modeling and strategy decks that turn compliance clients into advisory engagements.",
    bullets: [
      "Quarterly tax projections and safe-harbor estimates",
      "Entity structuring and S-Corp election analysis",
      "Retirement, depreciation and credit optimization",
      "Year-end planning meetings with deliverable strategy decks",
      "Presentation-ready output for partner / client meetings",
    ],
    anchor: "tax-planning",
  },
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    blurb: "Clean monthly books in QuickBooks — so your tax team isn't doing accounting in April.",
    bullets: [
      "QuickBooks Online and Desktop setup, cleanup and ongoing",
      "Monthly reconciliations and journal entries",
      "Accruals, prepaids and depreciation schedules",
      "Management reporting packages",
      "Tax-ready trial balance hand-off",
    ],
    anchor: "bookkeeping",
  },
  {
    icon: Users,
    title: "CPA Firm Outsourcing",
    blurb: "Embed me into your firm's workflow — as a preparer, reviewer or planning specialist.",
    bullets: [
      "Dedicated capacity during peak season",
      "Off-season clean-up and amended returns",
      "Direct partner communication — no account managers in between",
      "Workpaper standards matched to your firm's QC checklist",
      "Engagement letters signed on your firm's letterhead",
    ],
    anchor: "outsourcing",
  },
  {
    icon: AlertCircle,
    title: "Tax Notice Resolution",
    blurb: "IRS and state notices triaged, drafted, mailed and followed up to closure.",
    bullets: [
      "CP2000, CP14, notice of intent to levy and others",
      "Penalty abatement requests (FTA & reasonable cause)",
      "Response letter drafting on firm letterhead",
      "Tracking and follow-up until resolution",
    ],
    anchor: "notices",
  },
  {
    icon: Layers,
    title: "Offshore Staffing",
    blurb: "Need more than just me? I help CPA firms hire vetted offshore staff and onboard them properly.",
    bullets: [
      "Sourcing and screening for US tax & accounting roles",
      "Workflow design and SOP documentation",
      "Quality control framework setup",
      "Ongoing oversight options available",
    ],
    anchor: "staffing",
  },
];

export default function Services() {
  return (
    <div data-testid="page-services">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">Services</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-4xl">
          The whole tax stack — without the whole tax department.
        </h1>
        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-2xl">
          Engage me for a single return, a tax season, or year-round capacity. Every engagement is
          scoped per firm — pricing follows scope, not seat counts.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-8 grid md:grid-cols-6 gap-3" data-testid="services-anchors">
        {detailedServices.map((s) => (
          <a key={s.anchor} href={`#${s.anchor}`} className="border border-[#1C3F39]/15 px-4 py-3 text-sm font-sub text-[#1C3F39] hover:bg-[#1C3F39] hover:text-[#F9F6F0] transition-colors">
            {s.title}
          </a>
        ))}
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 space-y-24">
        {detailedServices.map((s, i) => (
          <article key={s.anchor} id={s.anchor} className="grid md:grid-cols-12 gap-10 scroll-mt-28" data-testid={`service-${s.anchor}`}>
            <div className="md:col-span-5">
              <s.icon size={36} strokeWidth={1.3} className="text-[#A85A46]" />
              <p className="kicker mt-6">0{i + 1} · Service</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-3 leading-tight">{s.title}</h2>
              <p className="mt-5 text-[#1C3F39]/75 text-lg leading-relaxed">{s.blurb}</p>
              <Link to="/book" className="btn-ghost mt-8" data-testid={`book-${s.anchor}`}>
                Discuss this engagement <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ul className="space-y-4 border-t border-[#1C3F39]/15">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 pt-4 border-b border-[#1C3F39]/10 pb-4">
                    <CheckCircle2 size={20} strokeWidth={1.5} className="text-[#A85A46] mt-0.5 shrink-0" />
                    <span className="text-[#1C3F39]/85 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#F2EEE5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <img src={outsourcingImg} alt="Documents" className="w-full aspect-[4/3] object-cover rounded-sm" />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Briefcase size={32} strokeWidth={1.3} className="text-[#A85A46]" />
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              Not sure what fits? Let's scope it together.
            </h2>
            <p className="mt-5 text-[#1C3F39]/75 text-lg">
              Send your current pain point. I'll come back with an engagement model — flat fee, hourly,
              or seasonal block — within one business day.
            </p>
            <Link to="/contact" className="btn-primary mt-8" data-testid="services-cta-contact">Scope a project <ArrowUpRight size={16} strokeWidth={1.5} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
