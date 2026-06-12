import { Link } from "react-router-dom";
import {
  ArrowUpRight, FileCheck2, Calculator, BookOpen, Users, AlertCircle, Layers,
  Workflow, BadgeCheck, Award, GraduationCap, ShieldCheck,
  CheckCircle2, PhoneCall, Briefcase, Star,
} from "lucide-react";

const heroImg = "https://images.pexels.com/photos/8092466/pexels-photo-8092466.jpeg";
const aboutImg = "https://images.pexels.com/photos/8296970/pexels-photo-8296970.jpeg";

const heroBadges = [
  "Trusted by US CPA Firms",
  "3.5+ Years US Tax Experience",
  "CPA Candidate · REG & TCP Cleared",
  "Forms 1040 · 1065 · 1120 · 1120-S · 990",
  "Tax Planning & Advisory",
];

const whyReasons = [
  { title: "Direct access to the preparer",          desc: "No layered account managers — you talk to the person doing the work." },
  { title: "Tax planning capability, not just prep", desc: "Projections, entity analysis and partner-ready strategy decks." },
  { title: "Workpaper-ready deliverables",           desc: "Documentation matched to your firm's QC checklist and review standards." },
  { title: "Flexible engagement structure",          desc: "Flat fee, hourly, seasonal block or year-round — scoped to your firm." },
  { title: "Peak season and year-round support",     desc: "Show up before January 1; stay useful through extensions and after." },
  { title: "No layers of offshore management",       desc: "A single accountable point of contact — partner-style, not vendor-style." },
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
  { icon: GraduationCap, label: "CPA Candidate", value: "REG & TCP Cleared" },
  { icon: BadgeCheck,    label: "Years in US Tax", value: "3.5+ Years" },
  { icon: Workflow,      label: "Software Stack", value: "CCH · UltraTax · ProConnect · Drake" },
  { icon: Award,         label: "Recognition", value: "Award-Winning Tax Planning Presenter" },
];

const softwareStack = [
  { code: "CCH",  name: "CCH Axcess",  tag: "Tax Compliance" },
  { code: "UT",   name: "UltraTax CS", tag: "Tax Compliance" },
  { code: "PC",   name: "ProConnect",  tag: "Tax Compliance" },
  { code: "DRK",  name: "Drake Tax",   tag: "Tax Compliance" },
  { code: "QB",   name: "QuickBooks",  tag: "Bookkeeping" },
  { code: "XLS",  name: "Excel / Power Query", tag: "Modeling" },
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
                US tax preparation, planning, accounting and advisory support — delivered by an
                experienced tax professional embedded directly into your firm's workflow.
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
                <img src={heroImg} alt="Workspace" className="w-full aspect-[4/5] object-cover rounded-sm" />
                <div className="absolute -bottom-6 -left-6 bg-[#F9F6F0] border border-[#1C3F39]/12 px-6 py-5 max-w-[260px]">
                  <p className="kicker">Trusted partner</p>
                  <p className="font-serif-display text-2xl text-[#1C3F39] leading-tight mt-2">
                    For US CPA firms scaling through tax season.
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
                Built for firm owners — not vendor relationships.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 self-end">
              <p className="text-[#1C3F39]/75 text-lg">
                Six things partners notice within the first engagement — and the reason they keep
                expanding scope after the first season.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map((r, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#1C3F39]/12 p-7" data-testid={`why-card-${i}`}>
                <CheckCircle2 size={24} strokeWidth={1.4} className="text-[#A85A46]" />
                <h3 className="font-serif-display text-xl text-[#1C3F39] mt-5 leading-snug">{r.title}</h3>
                <p className="mt-3 text-[#1C3F39]/70 text-[15px] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE STACK ----------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20" data-testid="software-stack">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
          <div>
            <p className="kicker">Fluent in the software your firm already runs</p>
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#1C3F39] mt-3">Software stack</h2>
          </div>
          <p className="font-sub text-sm text-[#1C3F39]/65 max-w-md">
            No retraining your team or rebuilding workflows — I plug into your existing stack.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {softwareStack.map((s, i) => (
            <div key={i} className="border border-[#1C3F39]/15 bg-[#FFFFFF] aspect-[4/3] flex flex-col items-center justify-center px-4 text-center hover:border-[#A85A46] transition-colors" data-testid={`sw-${s.code.toLowerCase()}`}>
              <div className="font-serif-display text-3xl text-[#A85A46] tracking-tight leading-none">{s.code}</div>
              <p className="font-sub text-[13px] text-[#1C3F39] mt-2">{s.name}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#1C3F39]/55 mt-1 font-sub">{s.tag}</p>
            </div>
          ))}
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
            <img src={aboutImg} alt="Tax professional working" className="w-full aspect-[4/5] object-cover rounded-sm" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="kicker">About Rahul</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              A tax professional who thinks like a partner.
            </h2>
            <p className="mt-6 text-[#1C3F39]/75 text-lg leading-relaxed">
              I've spent the last 3.5+ years preparing and reviewing US returns across individual,
              partnership, corporate and non-profit entities — sitting in firms exactly like yours.
              Now I deliver that same precision on a leverage model that fits your firm.
            </p>
            <ul className="mt-8 space-y-3 font-sub">
              {[
                "REG & TCP cleared on the CPA track",
                "Hands-on with CCH Axcess, UltraTax, ProConnect & Drake",
                "Tax planning presentations recognized in industry circles",
                "Direct partner-to-preparer communication — no offshore bureaucracy",
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
