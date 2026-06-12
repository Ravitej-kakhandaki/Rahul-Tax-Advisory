import { Link } from "react-router-dom";
import {
  Award, GraduationCap, Workflow, Globe2, ArrowUpRight, FileCheck2,
  Clock, Users, TrendingUp, ShieldCheck, Building2, BadgeCheck, BookOpen, Layers, Quote,
} from "lucide-react";

const portrait = "/rahul-portrait.jpg";

const trust = [
  {
    icon: BadgeCheck,
    title: "Nearly 4 Years Supporting US CPA Firms",
    desc: "Hands-on experience working with CPA firms through tax seasons, extensions, and year-round engagements.",
  },
  {
    icon: GraduationCap,
    title: "CPA Candidate",
    desc: "REG & TCP cleared, continuing the journey toward becoming a Certified Public Accountant.",
  },
  {
    icon: FileCheck2,
    title: "Comprehensive US Tax Expertise",
    desc: "Experience supporting individual, partnership, corporate, S-corporation, and non-profit tax engagements.",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning & Advisory Support",
    desc: "Supporting projections, strategic planning, and advisory-focused tax initiatives.",
  },
  {
    icon: Workflow,
    title: "CPA Firm Workflow Alignment",
    desc: "Seamlessly adapting to your firm's established processes, quality standards, and client service approach.",
  },
];

const benefits = [
  { icon: Clock,       title: "Faster turnaround",         desc: "Returns out the door without re-work loops." },
  { icon: Users,       title: "Reduced staffing pressure", desc: "Add capacity without adding W-2 headcount." },
  { icon: TrendingUp,  title: "More advisory capacity",    desc: "Free your partners to sell planning work." },
  { icon: ShieldCheck, title: "Better season coverage",    desc: "Reliable peak-week throughput, every year." },
  { icon: Building2,   title: "Lower overhead",            desc: "Variable, scope-based pricing vs. fixed payroll." },
];

export default function About() {
  return (
    <div data-testid="page-about">
      {/* HERO ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">About</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-5xl">
          Built on US Tax Expertise. Focused on CPA Firm Success.
        </h1>
      </section>

      {/* FOUNDER ------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 items-start" data-testid="about-founder">
        <div className="md:col-span-5">
          <div className="relative">
            <img src={portrait} alt="Rahul G Sataraddi" className="w-full aspect-[4/5] object-cover rounded-sm" data-testid="founder-photo" />
            <div className="absolute -bottom-6 -left-6 bg-[#F9F6F0] border border-[#1C3F39]/12 px-6 py-5 max-w-[280px]">
              <p className="kicker">Founder</p>
              <p className="font-serif-display text-2xl text-[#1C3F39] leading-tight mt-2">Rahul G Sataraddi</p>
              <p className="text-sm font-sub text-[#1C3F39]/70 mt-1">US Tax Professional · CPA Candidate</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-[#1C3F39]/85 leading-relaxed">
          <p className="kicker">Meet Rahul G Sataraddi</p>
          <h2 className="font-serif-display text-3xl md:text-4xl text-[#1C3F39] leading-tight">
            US Tax Professional &middot; CPA Candidate
          </h2>
          <p>
            I'm <strong className="text-[#1C3F39]">Rahul G Sataraddi</strong>, a US tax professional
            with nearly 4 years of hands-on experience partnering with US CPA firms across tax
            compliance, tax planning, and advisory support.
          </p>
          <p>
            Over the years, I have worked closely with CPA firms to deliver accurate, timely, and
            high-quality tax solutions — aligning with each firm's unique workflows, quality
            expectations, and client service standards.
          </p>
          <p>
            My experience spans individual, partnership, corporate, S-corporation, and non-profit
            tax matters — helping firms expand their capacity and focus more time on strategic
            client relationships and growth.
          </p>
          <p>
            Beyond compliance, I support tax planning, projections, scenario analysis, and advisory
            initiatives that help firms provide greater value to their clients.
          </p>
          <p className="border-l-2 border-[#A85A46] pl-6 italic font-serif-display text-xl text-[#1C3F39]">
            My approach is simple: deliver exceptional work, communicate proactively, maintain the
            highest level of confidentiality, and become a trusted extension of your CPA firm's team.
          </p>
        </div>
      </section>

      {/* TRUST & CREDENTIALS ------------------------------------ */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-28" data-testid="trust-section">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <p className="kicker">Trust & Credentials</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              The credentials behind every engagement.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 self-end">
            <p className="text-[#1C3F39]/75 text-lg">
              A premium boutique partner — built around long-term CPA firm relationships, not
              transactional vendor scale.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-6">
          {trust.map((t, i) => (
            <div key={i} className="md:col-span-4 border-t border-[#1C3F39]/15 pt-6 fade-up" style={{ animationDelay: `${i * 100}ms` }} data-testid={`trust-${i}`}>
              <t.icon size={28} strokeWidth={1.3} className="text-[#A85A46]" />
              <h3 className="font-serif-display text-2xl text-[#1C3F39] mt-5 leading-snug">{t.title}</h3>
              <p className="mt-3 text-[#1C3F39]/75 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY-ADAPTIVE APPROACH ---------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="tech-adaptive">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <Layers size={32} strokeWidth={1.3} className="text-[#A85A46]" />
            <p className="kicker mt-5">Approach</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              Technology-Adaptive Approach
            </h2>
            <p className="mt-6 text-[#1C3F39]/80 text-lg leading-relaxed">
              I work seamlessly within your firm's existing systems, processes, and quality
              standards. No retraining your team. No rebuilding workflows. I plug into the
              environment you already trust — and operate to your firm's documented quality bar.
            </p>
          </div>
          <ul className="md:col-span-5 md:col-start-8 space-y-3 font-sub" data-testid="tech-adaptive-list">
            {[
              "Adapt to your tax software environment",
              "Match your firm's review checklist & workpaper format",
              "Use your secure document portal — never local downloads",
              "Operate in your firm's preferred communication channel",
              "Align with your QC and partner-sign-off workflow",
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 bg-[#FFFFFF] border border-[#1C3F39]/12 p-4 text-[#1C3F39]">
                <BookOpen size={18} strokeWidth={1.5} className="text-[#A85A46] mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT THIS MEANS FOR YOUR FIRM --------------------------- */}
      <section data-testid="about-benefits">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <p className="kicker">For Your Firm</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
                What this means for your firm.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 self-end">
              <p className="text-[#1C3F39]/75 text-lg">
                Experience only matters if it translates into outcomes you can feel inside your
                practice. Here's the practical impact partners report.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#1C3F39]/12 p-6" data-testid={`benefit-${i}`}>
                <b.icon size={26} strokeWidth={1.3} className="text-[#A85A46]" />
                <h3 className="font-serif-display text-xl text-[#1C3F39] mt-4 leading-snug">{b.title}</h3>
                <p className="mt-3 text-[#1C3F39]/70 text-[14px] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE -------------------------------------- */}
      <section className="bg-[#1C3F39] text-[#F9F6F0]" data-testid="founders-message">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <Quote size={40} strokeWidth={1.2} className="text-[#E2B8A9] mx-auto" />
          <p className="font-serif-display text-3xl md:text-5xl mt-6 leading-tight">
            "My mission is to help CPA firms increase capacity, maintain exceptional quality, and
            create more opportunities to focus on the advisory relationships that drive long-term growth."
          </p>
          <div className="mt-10 inline-flex items-center gap-4">
            <img src={portrait} alt="Rahul G Sataraddi" className="w-14 h-14 rounded-full object-cover border border-[#F9F6F0]/20" />
            <div className="text-left">
              <p className="font-serif-display text-xl text-[#F9F6F0]">Rahul G Sataraddi</p>
              <p className="text-xs uppercase tracking-[0.22em] text-[#E2B8A9] font-sub mt-1">Founder · Rahul Tax Advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP ---------------------------------------------- */}
      <section className="bg-[#F2EEE5]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <Award size={48} strokeWidth={1.2} className="text-[#A85A46] md:col-span-2" />
          <div className="md:col-span-7">
            <h2 className="font-serif-display text-3xl md:text-5xl text-[#1C3F39] leading-tight">
              Let's discuss how I can support your firm.
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/book" className="btn-primary" data-testid="about-book">
              Book a CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
