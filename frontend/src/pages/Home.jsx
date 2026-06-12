import { Link } from "react-router-dom";
import { ArrowUpRight, FileCheck2, Calculator, BookOpen, Users, AlertCircle, Layers, Workflow, BadgeCheck, Award, GraduationCap, ShieldCheck } from "lucide-react";

const heroImg = "https://images.pexels.com/photos/8092466/pexels-photo-8092466.jpeg";
const aboutImg = "https://images.pexels.com/photos/8296970/pexels-photo-8296970.jpeg";

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

export default function Home() {
  return (
    <div data-testid="page-home">
      {/* HERO ----------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-16 md:pb-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7 fade-up">
              <p className="kicker" data-testid="hero-kicker">Offshore Tax · Accounting · Advisory</p>
              <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-[#1C3F39] mt-6" data-testid="hero-title">
                Scale your CPA firm <em className="text-[#A85A46] not-italic">without</em> scaling the overhead.
              </h1>
              <p className="mt-8 text-lg md:text-xl max-w-xl text-[#1C3F39]/75 leading-relaxed">
                US tax preparation, tax planning, accounting and advisory support — delivered by an
                experienced tax professional with <strong>3.5+ years</strong> of US tax experience and the
                software stack you already use.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-10">
                <Link to="/book" className="btn-primary" data-testid="hero-cta-book">
                  Book a free consultation <ArrowUpRight size={16} strokeWidth={1.5} />
                </Link>
                <Link to="/services" className="btn-ghost" data-testid="hero-cta-services">Explore services</Link>
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

      {/* MARQUEE / CREDIBILITY ----------------------------------- */}
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
              Six capabilities. One reliable partner across season and off-season.
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

      {/* CTA STRIP ----------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center" data-testid="cta-strip">
        <div className="md:col-span-7">
          <h2 className="font-serif-display text-4xl md:text-6xl leading-[1] text-[#1C3F39]">
            See if we're a fit for your firm.
          </h2>
          <p className="mt-5 text-lg text-[#1C3F39]/75 max-w-xl">
            30 minutes. No pitch. You walk away with at least one idea to use this season.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3">
          <Link to="/book" className="btn-primary justify-center" data-testid="cta-book">Schedule a call <ArrowUpRight size={16} strokeWidth={1.5} /></Link>
          <Link to="/contact" className="btn-ghost justify-center" data-testid="cta-contact">Send a message instead</Link>
        </div>
      </section>
    </div>
  );
}
