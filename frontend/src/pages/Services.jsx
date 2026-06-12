import { Link } from "react-router-dom";
import {
  FileCheck2, Calculator, BookOpen, Users, AlertCircle, Layers, ArrowUpRight, Briefcase,
  CheckCircle2, Package, Repeat, UserPlus, FileSpreadsheet, Lightbulb, Calendar,
  ShieldCheck, MessageSquare, Workflow, Sparkles, Lock,
} from "lucide-react";

const outsourcingAreas = [
  {
    icon: FileCheck2,
    title: "US Tax Compliance Support",
    blurb: "Accurate, organized, and review-ready work across a wide range of tax engagements.",
    items: [
      "Individual Tax Engagements (1040)",
      "Partnership Tax Engagements (1065)",
      "Corporate Tax Engagements (1120)",
      "S-Corporation Tax Engagements (1120-S)",
      "Non-Profit Tax Engagements (990)",
      "Extension & Amended Return Support",
      "Tax Notice Analysis & Response Preparation",
      "Workpaper Preparation & Documentation",
    ],
  },
  {
    icon: BookOpen,
    title: "Bookkeeping, Accounting & Cleanup",
    blurb: "Maintain organized financial records and tax-ready books throughout the year.",
    items: [
      "Monthly & Periodic Bookkeeping",
      "Bank & Credit Card Reconciliations",
      "General Ledger Review & Cleanup",
      "Historical Bookkeeping Cleanup Projects",
      "Catch-up Accounting & Backlog Management",
      "Financial Statement Preparation",
      "Account Classification & Adjustments",
      "Tax-Ready Financial Records Preparation",
    ],
  },
  {
    icon: Lightbulb,
    title: "Tax Planning & Advisory",
    blurb: "Helping CPA firms deliver greater strategic value to their clients.",
    items: [
      "Tax Projections & Estimated Tax Planning",
      "Scenario & Impact Analysis",
      "Entity Structure Planning",
      "Tax Research & Technical Analysis",
      "Advisory-Ready Reports & Documentation",
      "Year-End Tax Planning",
    ],
  },
  {
    icon: Calendar,
    title: "Year-Round CPA Firm Capacity",
    blurb: "Reliable professional support during busy seasons and throughout the year.",
    items: [
      "Busy Season Capacity",
      "Extension Season Assistance",
      "Special Tax Projects",
      "Notice Response & Resolution",
      "Accounting Cleanup Projects",
      "Client File Organization",
      "Workpaper Standardization",
      "Ongoing Capacity Engagements",
    ],
  },
];

const partnershipBenefits = [
  { icon: Briefcase,     text: "Nearly 4 years of experience supporting US CPA firms" },
  { icon: MessageSquare, text: "Dedicated and personalized communication" },
  { icon: Layers,        text: "Flexible staffing models tailored to your firm" },
  { icon: Repeat,        text: "Scalable capacity during peak and year-round periods" },
  { icon: ShieldCheck,   text: "High-quality, review-ready deliverables" },
  { icon: Lock,          text: "Strong commitment to confidentiality and professional standards" },
  { icon: Workflow,      text: "Seamless alignment with your firm's workflows and expectations" },
];

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

      {/* SERVICE PACKAGES ----------------------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="packages-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-6">
              <p className="kicker">Packages</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
                Three ways to start.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="text-[#1C3F39]/75 text-lg">
                Most firms begin with one package and expand from there. Pricing is engagement-based —
                final scope confirmed on a 30-minute call.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Package,
                name: "Seasonal Tax Support",
                pitch: "Capacity through busy season — preparation + first-level review.",
                bullets: ["Form 1040 preparation", "Form 1065 partnership returns", "Form 1120-S S-Corp returns", "Review support on staff-prepared returns", "Workpaper standards matched to your QC"],
                cta: "Best for: firms hitting capacity in February–April",
              },
              {
                icon: Repeat,
                name: "Year-Round Advisory Support",
                pitch: "Move from compliance into the advisory work clients pay you for.",
                bullets: ["Quarterly tax projections", "Entity structure analysis (S-Corp election, etc.)", "Strategic planning meetings with deliverables", "Partner-ready strategy decks", "Off-season notice resolution"],
                cta: "Best for: firms expanding into advisory revenue",
                featured: true,
              },
              {
                icon: UserPlus,
                name: "Offshore Team Buildout",
                pitch: "Stand up your own offshore tax team — properly.",
                bullets: ["Sourcing & screening US-tax-trained staff", "SOP and workflow documentation", "QC framework setup", "60-day supervised onboarding", "Ongoing oversight option available"],
                cta: "Best for: firms ready to scale staff offshore",
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`p-8 border ${p.featured ? "bg-[#1C3F39] text-[#F9F6F0] border-[#1C3F39]" : "bg-[#FFFFFF] border-[#1C3F39]/15"}`}
                data-testid={`package-${i}`}
              >
                <p.icon size={32} strokeWidth={1.3} className={p.featured ? "text-[#E2B8A9]" : "text-[#A85A46]"} />
                {p.featured && <p className="kicker text-[#E2B8A9] mt-5">Most popular</p>}
                <h3 className={`font-serif-display text-3xl mt-${p.featured ? "3" : "6"} leading-tight ${p.featured ? "text-[#F9F6F0]" : "text-[#1C3F39]"}`}>{p.name}</h3>
                <p className={`mt-3 leading-relaxed ${p.featured ? "text-[#F9F6F0]/85" : "text-[#1C3F39]/75"}`}>{p.pitch}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.bullets.map((b, j) => (
                    <li key={j} className={`flex items-start gap-2 text-[14.5px] ${p.featured ? "text-[#F9F6F0]/90" : "text-[#1C3F39]/85"}`}>
                      <CheckCircle2 size={16} strokeWidth={1.6} className={p.featured ? "text-[#E2B8A9] mt-0.5 shrink-0" : "text-[#A85A46] mt-0.5 shrink-0"} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className={`mt-6 text-[11px] uppercase tracking-[0.2em] font-sub ${p.featured ? "text-[#E2B8A9]" : "text-[#A85A46]"}`}>{p.cta}</p>
                <Link to="/book" className={`mt-6 inline-flex items-center gap-2 ${p.featured ? "btn-terra" : "btn-ghost"}`} data-testid={`package-cta-${i}`}>
                  Scope this engagement <ArrowUpRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPA FIRM OUTSOURCING & OFFSHORE STAFFING ----------------- */}
      <section className="bg-[#F2EEE5]" data-testid="outsourcing-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-7">
              <p className="kicker">CPA Firm Outsourcing & Offshore Staffing</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
                Dedicated tax, accounting &amp; advisory capacity designed around your CPA firm.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="text-[#1C3F39]/80 text-lg">
                Expand your firm's capacity with experienced and reliable professional support
                aligned with your workflows, quality standards, and client expectations. A flexible
                engagement approach helping CPA firms maintain exceptional service, improve
                efficiency, and create more opportunities for strategic growth.
              </p>
            </div>
          </div>

          {/* Four support areas */}
          <div className="grid md:grid-cols-2 gap-6">
            {outsourcingAreas.map((a, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#1C3F39]/12 p-8 md:p-10" data-testid={`outsourcing-area-${i}`}>
                <a.icon size={28} strokeWidth={1.3} className="text-[#A85A46]" />
                <h3 className="font-serif-display text-2xl md:text-3xl text-[#1C3F39] mt-5 leading-snug">{a.title}</h3>
                <p className="mt-3 text-[#1C3F39]/75 leading-relaxed">{a.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {a.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[14.5px] text-[#1C3F39]/85">
                      <CheckCircle2 size={16} strokeWidth={1.6} className="text-[#A85A46] mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Flexible engagement models band */}
          <div className="mt-16 grid md:grid-cols-12 gap-10 items-center border-t border-[#1C3F39]/15 pt-12">
            <div className="md:col-span-6">
              <p className="kicker">Engagement Models</p>
              <h3 className="font-serif-display text-3xl md:text-4xl text-[#1C3F39] mt-3 leading-tight">
                Flexible engagement models &amp; value-driven scoping.
              </h3>
            </div>
            <p className="md:col-span-5 md:col-start-8 text-[#1C3F39]/80 text-lg">
              Every CPA firm has unique capacity requirements and growth objectives. Engagement
              models are designed to provide flexible professional support with transparent scoping,
              operational efficiency, and long-term value.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <p className="kicker">Benefits of Partnering with Rahul Tax Advisory</p>
            <h3 className="font-serif-display text-3xl md:text-4xl text-[#1C3F39] mt-3 mb-8 leading-tight max-w-2xl">
              A boutique partner built around long-term CPA firm relationships.
            </h3>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 font-sub">
              {partnershipBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 bg-[#FFFFFF] border border-[#1C3F39]/12 p-5" data-testid={`outsourcing-benefit-${i}`}>
                  <b.icon size={20} strokeWidth={1.4} className="text-[#A85A46] mt-0.5 shrink-0" />
                  <span className="text-[#1C3F39] text-[15px] leading-snug">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing statement */}
          <div className="mt-20 bg-[#1C3F39] text-[#F9F6F0] p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <p className="kicker text-[#E2B8A9]">Your Firm's Growth · Our Professional Commitment</p>
              <h3 className="font-serif-display text-3xl md:text-5xl mt-4 leading-tight">
                Your firm's growth. My professional commitment.
              </h3>
              <p className="mt-5 text-[#F9F6F0]/85 text-lg max-w-2xl">
                Whether you need additional capacity during busy season, year-round tax and
                accounting collaboration, or assistance with advisory initiatives, Rahul Tax
                Advisory provides a dependable partnership designed to help your CPA firm grow
                with confidence.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-10 flex flex-col gap-3">
              <Link to="/book" className="btn-terra justify-center" data-testid="outsourcing-cta-book">
                Schedule a CPA Growth Conversation <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
              <Link to="/audit" className="font-sub text-sm text-[#E2B8A9] underline text-center" data-testid="outsourcing-cta-audit">
                or Request Your Free CPA Capacity Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RISK REVERSAL -------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20" data-testid="services-risk-reversal">
        <div className="grid md:grid-cols-12 gap-10 items-center border-y border-[#1C3F39]/15 py-12">
          <div className="md:col-span-6">
            <p className="kicker">Risk reversal</p>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#1C3F39] mt-3 leading-tight">
              Start small. Validate quality. Scale with confidence.
            </h2>
          </div>
          <ul className="md:col-span-5 md:col-start-8 grid sm:grid-cols-2 gap-3 font-sub">
            {[
              "10-hour pilot engagement",
              "No long-term commitment",
              "Review the work before scaling",
              "Confidential · NDA standard",
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-[#1C3F39]">
                <CheckCircle2 size={18} strokeWidth={1.5} className="text-[#A85A46] mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
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
