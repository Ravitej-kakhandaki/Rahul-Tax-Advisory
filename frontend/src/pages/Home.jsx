import { Link } from "react-router-dom";
import {
  ArrowUpRight, FileCheck2, Calculator, BookOpen, Users, AlertCircle, Layers,
  Workflow, BadgeCheck, Award, GraduationCap, ShieldCheck, Lightbulb,
  CheckCircle2, PhoneCall, Briefcase, Star, Download,
} from "lucide-react";

const heroImg = "/rahul-portrait.jpg";
const aboutImg = "https://images.pexels.com/photos/8092466/pexels-photo-8092466.jpeg";

const heroBadges = [
  "Trusted by US CPA Firms",
  "Nearly 4 Years Supporting US CPA Firms",
  "CPA Candidate · REG & TCP Cleared",
  "Forms 1040 · 1065 · 1120 · 1120-S · 990",
  "Tax Planning & Advisory",
];

const whyReasons = [
  {
    icon: Users,
    title: "Dedicated Professional Collaboration",
    desc: "Work directly with a dedicated tax professional who understands your engagement, priorities, and expectations — ensuring clear communication and accountability.",
  },
  {
    icon: Lightbulb,
    title: "Tax Planning & Advisory Perspective",
    desc: "Beyond compliance, gain support with projections, scenario analysis, entity considerations, and advisory-ready insights that create additional value for your clients.",
  },
  {
    icon: FileCheck2,
    title: "Review-Ready Deliverables",
    desc: "Organized, accurate, and quality-focused work aligned with your firm's workflows, documentation standards, and review expectations.",
  },
  {
    icon: Layers,
    title: "Flexible Engagement Models & Transparent Pricing",
    desc: "Choose an engagement approach that fits your firm — seasonal, year-round, project-based, or dedicated outsourcing & offshore staffing. Pricing stays transparent and predictable.",
  },
  {
    icon: BookOpen,
    title: "Year-Round Tax, Accounting & Cleanup Support",
    desc: "Reliable collaboration beyond busy season — tax compliance, bookkeeping, reconciliations, historical cleanup, extensions, notices, and special engagements.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized Partnership Approach",
    desc: "A long-term relationship built on responsiveness, confidentiality, professionalism, and a commitment to supporting your firm's continued success.",
  },
];

const services = [
  { icon: FileCheck2, title: "US Tax Preparation", desc: "Forms 1040, 1065, 1120, 1120-S & 990 — prepared, reviewed and ready for partner sign-off." },
  { icon: Calculator,  title: "Tax Planning & Projections", desc: "Quarterly projections, scenario modelling and strategic plans your clients pay you for." },
  { icon: BookOpen,    title: "Accounting & Bookkeeping", desc: "Month-end close, reconciliations and clean financials in QuickBooks Online or Desktop." },
  { icon: Users,       title: "CPA Firm Outsourcing", desc: "Trained tax preparers and reviewers embedded into your workflow during season — and off it." },
  { icon: AlertCircle, title: "Tax Notice Resolution", desc: "IRS and state notice triage, response drafting and follow-through to closure." },
  { icon: Layers,      title: "Offshore Staffing", desc: "Dedicated talent for your firm without recruiting headaches — onboarded in days, not months." },
];

const credibility = [
  { icon: GraduationCap, label: "CPA Candidate",    value: "REG & TCP Cleared" },
  { icon: BadgeCheck,    label: "Years with US CPA Firms", value: "Nearly 4 Years" },
  { icon: FileCheck2,    label: "Form Coverage",    value: "1040 · 1065 · 1120 · 1120-S · 990" },
  { icon: Workflow,      label: "Approach",         value: "Technology-Adaptive · Workflow-Aligned" },
];

const callBullets = [
  "Tax season bottlenecks & capacity",
  "Offshore staffing options",
  "Tax planning & advisory support",
  "Workflow / QC review",
];

export default function Home() {
  return (
    <div data-testid="page-home">
      {/* HERO ----------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7 fade-up">
              <p className="kicker" data-testid="hero-kicker">Offshore Tax & Advisory Partner for CPA Firms</p>
              <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-[#1C3F39] mt-6" data-testid="hero-title">
                Scale your CPA firm <em className="text-[#A85A46] not-italic">without</em> scaling the overhead.
              </h1>

              {/* Trust badges — immediate proof */}
              <ul className="mt-8 flex flex-wrap gap-2" data-testid="hero-badges">
                {heroBadges.map((b, i) => (
                  <li key={i} className="inline-flex items-center gap-2 border border-[#1C3F39]/15 bg-[#FFFFFF] px-3 py-1.5 text-[12.5px] font-sub text-[#1C3F39]">
                    <CheckCircle2 size={14} strokeWidth={1.6} className="text-[#A85A46]" />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-lg md:text-xl max-w-xl text-[#1C3F39]/75 leading-relaxed">
                A boutique US tax & advisory partner for CPA firms — nearly 4 years of hands-on
                experience, embedded directly into your firm's workflow.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-10">
                <Link to="/book" className="btn-primary" data-testid="hero-cta-book">
                  Book a free CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} />
                </Link>
                <Link to="/results" className="btn-ghost" data-testid="hero-cta-results">See results</Link>
              </div>
            </div>

            <div className="md:col-span-5 fade-up delay-2">
              <div className="relative">
                <img src={heroImg} alt="Rahul G Sataraddi — Founder, Rahul Tax Advisory" className="w-full aspect-[4/5] object-cover rounded-sm" data-testid="hero-portrait" />
                <div className="absolute -bottom-6 -left-6 bg-[#F9F6F0] border border-[#1C3F39]/12 px-6 py-5 max-w-[290px]">
                  <p className="kicker">Founder</p>
                  <p className="font-serif-display text-xl text-[#1C3F39] leading-tight mt-2">
                    The professional behind your CPA firm's trusted tax partnership.
                  </p>
                  <p className="font-sub text-xs text-[#1C3F39]/65 mt-3">
                    Rahul G Sataraddi · CPA Candidate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CPA FIRMS PARTNER ----------------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="why-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <p className="kicker">Why CPA Firms Partner With Rahul</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
                Built Around Long-Term CPA Firm Partnerships.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 self-end">
              <p className="text-[#1C3F39]/75 text-lg">
                Dedicated expertise, reliable communication, flexible engagement models, and
                quality-focused work designed to align with your firm's standards and growth
                objectives.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map((r, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#1C3F39]/12 p-7" data-testid={`why-card-${i}`}>
                <r.icon size={26} strokeWidth={1.3} className="text-[#A85A46]" />
                <h3 className="font-serif-display text-xl text-[#1C3F39] mt-5 leading-snug">{r.title}</h3>
                <p className="mt-3 text-[#1C3F39]/72 text-[15px] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="mt-14 border-t border-[#1C3F39]/15 pt-10 grid md:grid-cols-12 gap-8 items-center">
            <p className="md:col-span-9 font-serif-display text-2xl md:text-3xl text-[#1C3F39] leading-snug" data-testid="why-closing">
              Nearly 4 years supporting US CPA firms with tax, accounting, bookkeeping, cleanup,
              and advisory work — delivering the flexibility, expertise, and reliability needed
              to help firms grow with confidence.
            </p>
            <div className="md:col-span-3">
              <Link to="/services" className="btn-primary w-full justify-center" data-testid="why-cta">
                Explore engagement models <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FREE CPA CAPACITY ASSESSMENT --------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24" data-testid="home-audit-promo">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left — 70% — Capacity Assessment */}
          <div className="md:col-span-8 bg-[#FFFFFF] border border-[#1C3F39]/15 overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 hidden md:block">
                <img
                  src="https://images.pexels.com/photos/8296970/pexels-photo-8296970.jpeg"
                  alt="Reviewing tax planning workpapers"
                  className="w-full h-full object-cover"
                  data-testid="capacity-image"
                />
              </div>
              <div className="md:col-span-3 p-10 md:p-12">
                <p className="kicker">Free CPA Capacity Assessment</p>
                <h2 className="font-serif-display text-3xl md:text-5xl text-[#1C3F39] mt-4 leading-[1.05]">
                  Discover your firm's next capacity opportunity.
                </h2>
                <p className="mt-5 text-[#1C3F39]/75 text-[17px] leading-relaxed">
                  Receive a personalized CPA Capacity Report designed to help your firm improve
                  efficiency, strengthen workflows, and create more time for high-value client
                  relationships.
                </p>
                <p className="kicker mt-7">Your report includes</p>
                <ul className="mt-3 grid sm:grid-cols-2 gap-3 font-sub">
                  {[
                    "Capacity and workflow assessment",
                    "Tax & accounting support opportunities",
                    "Busy season readiness insights",
                    "Recommended engagement approach",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#1C3F39]">
                      <CheckCircle2 size={18} strokeWidth={1.5} className="text-[#A85A46] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/audit" className="btn-primary" data-testid="home-audit-cta">
                    Get My Free Capacity Assessment <ArrowUpRight size={16} strokeWidth={1.5} />
                  </Link>
                  <Link to="/book" className="btn-ghost" data-testid="home-audit-book">
                    Or book a CPA Growth Call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right — 30% — PDF Playbook */}
          <aside className="md:col-span-4 bg-[#1C3F39] text-[#F9F6F0] p-8 md:p-10 self-stretch flex flex-col">
            <div className="flex items-baseline justify-between">
              <p className="kicker text-[#E2B8A9]">Free guide · PDF</p>
              <span className="text-[10px] uppercase tracking-[0.18em] font-sub text-[#F9F6F0]/55">7 pages</span>
            </div>
            <h3 className="font-serif-display text-2xl md:text-3xl mt-3 leading-snug">
              The CPA Firm Capacity &amp; Growth Playbook
            </h3>
            <p className="mt-3 text-[#F9F6F0]/80 text-sm leading-relaxed">
              A practical guide for CPA firm leaders looking to build sustainable capacity and
              improve operational efficiency.
            </p>
            <p className="kicker text-[#E2B8A9] mt-6">Inside the guide</p>
            <ul className="mt-3 space-y-2 text-[13.5px] font-sub flex-1">
              {[
                "Capacity assessment framework",
                "High-impact tax & accounting tasks",
                "Workflow optimization strategies",
                "Quality & confidentiality best practices",
                "Busy season preparation plan",
                "Choosing the right CPA support partner",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#F9F6F0]/90">
                  <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#E2B8A9] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="/cpa-firm-capacity-growth-playbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terra mt-8 w-full justify-center"
              data-testid="home-checklist-download"
            >
              Download free guide <Download size={16} strokeWidth={1.5} />
            </a>
          </aside>
        </div>
      </section>

      {/* TECHNOLOGY-ADAPTIVE APPROACH -------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20" data-testid="tech-adaptive">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <Layers size={32} strokeWidth={1.3} className="text-[#A85A46]" />
            <p className="kicker mt-5">Approach</p>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#1C3F39] mt-3 leading-tight">
              Technology-Adaptive Approach
            </h2>
            <p className="mt-5 text-[#1C3F39]/80 text-lg leading-relaxed max-w-xl">
              I work seamlessly within your firm's existing systems, processes, and quality
              standards — no retraining your team, no rebuilding workflows.
            </p>
          </div>
          <ul className="md:col-span-5 md:col-start-8 space-y-3 font-sub">
            {[
              "Adapt to your firm's tax software environment",
              "Match your review checklist and workpaper format",
              "Operate inside your secure document portal",
              "Align with your QC and partner sign-off workflow",
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 border border-[#1C3F39]/15 bg-[#FFFFFF] p-4 text-[#1C3F39]">
                <CheckCircle2 size={18} strokeWidth={1.5} className="text-[#A85A46] mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CREDIBILITY STRIP --------------------------------------- */}
      <section className="bg-[#1C3F39] text-[#F9F6F0]" data-testid="credibility-strip">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {credibility.map((c, i) => (
            <div key={i} className="flex flex-col gap-3">
              <c.icon size={28} strokeWidth={1.3} className="text-[#E2B8A9]" />
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#E2B8A9] font-sub">{c.label}</p>
              <p className="font-serif-display text-xl md:text-2xl leading-tight">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES ------------------------------------------------ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28" data-testid="services-section">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <p className="kicker">What we do</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              The whole tax stack — without the whole tax department.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-[#1C3F39]/75 text-lg">
              Engagements are scoped per firm — from fully outsourced preparation to dedicated review
              capacity to strategic advisory blocks. You stay client-facing; we handle the rest.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link to="/services" key={i} className="surface-card p-8 group" data-testid={`service-card-${i}`}>
              <s.icon size={28} strokeWidth={1.3} className="text-[#A85A46]" />
              <h3 className="font-serif-display text-2xl mt-6 text-[#1C3F39]">{s.title}</h3>
              <p className="mt-3 text-[#1C3F39]/70 leading-relaxed">{s.desc}</p>
              <p className="mt-6 inline-flex items-center gap-1 font-sub text-sm text-[#A85A46] group-hover:gap-2 transition-all">
                Learn more <ArrowUpRight size={14} strokeWidth={1.5} />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER -------------------------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="about-teaser">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <img src={aboutImg} alt="Tax documents and workspace" className="w-full aspect-[4/5] object-cover rounded-sm" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="kicker">Meet the founder</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              Built on US tax expertise. Focused on CPA firm success.
            </h2>
            <p className="mt-6 text-[#1C3F39]/75 text-lg leading-relaxed">
              I'm <strong className="text-[#1C3F39]">Rahul G Sataraddi</strong> — a US tax
              professional with nearly 4 years of hands-on experience partnering with US CPA firms
              across tax compliance, planning and advisory support. I become a trusted extension of
              your firm's team.
            </p>
            <ul className="mt-8 space-y-3 font-sub">
              {[
                "Nearly 4 years supporting US CPA firms",
                "CPA Candidate · REG & TCP cleared",
                "Comprehensive US tax expertise across entity types",
                "Tax planning & advisory experience",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1C3F39]">
                  <ShieldCheck size={18} strokeWidth={1.5} className="text-[#A85A46] mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-ghost mt-10" data-testid="about-cta">Read the full story <ArrowUpRight size={16} strokeWidth={1.5} /></Link>
          </div>
        </div>
      </section>

      {/* CPA GROWTH CALL CTA ----------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center" data-testid="cta-strip">
        <div className="md:col-span-7">
          <p className="kicker flex items-center gap-2"><PhoneCall size={14} strokeWidth={1.5} /> Free 30-min call</p>
          <h2 className="font-serif-display text-4xl md:text-6xl leading-[1] text-[#1C3F39] mt-4">
            Book a Free 30-Minute CPA Growth Call.
          </h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 font-sub">
            {callBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-[#1C3F39]">
                <CheckCircle2 size={18} strokeWidth={1.5} className="text-[#A85A46] mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[#1C3F39]/65 text-sm">No pitch. You walk away with at least one idea to use this season.</p>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3">
          <Link to="/book" className="btn-primary justify-center" data-testid="cta-book">
            Schedule the call <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
          <Link to="/contact" className="btn-ghost justify-center" data-testid="cta-contact">Send a message instead</Link>
          <div className="mt-4 border border-[#1C3F39]/15 p-5">
            <Star size={18} strokeWidth={1.4} className="text-[#A85A46]" />
            <p className="font-serif-display text-lg text-[#1C3F39] mt-2 leading-snug">
              "He treats our firm's clients like his own."
            </p>
            <p className="text-xs font-sub uppercase tracking-[0.18em] text-[#1C3F39]/60 mt-2">Partner · Mid-Size US CPA Firm</p>
          </div>
        </div>
      </section>
    </div>
  );
}
