import { Link } from "react-router-dom";
import { Award, GraduationCap, Workflow, Globe2, ArrowUpRight, FileCheck2, Clock, Users, TrendingUp, ShieldCheck, Building2 } from "lucide-react";

const aboutImg = "https://images.pexels.com/photos/8296970/pexels-photo-8296970.jpeg";

const milestones = [
  { year: "2022", title: "Started US Tax Career", desc: "Joined a US tax practice; trained on individual and partnership returns." },
  { year: "2023", title: "Expanded to Corporate & Non-Profit", desc: "Forms 1120, 1120-S and 990 added to the desk." },
  { year: "2024", title: "Tax Planning & Advisory Recognition", desc: "Awarded for a tax planning presentation — moved into projections and strategy work." },
  { year: "2025", title: "Launched Rahul Tax Advisory", desc: "Direct partnership model for US CPA firms — tax prep, review and advisory." },
];

export default function About() {
  return (
    <div data-testid="page-about">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">About</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-4xl">
          A tax desk run by a practitioner — not a call center.
        </h1>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <img src={aboutImg} alt="Rahul at work" className="w-full aspect-[4/5] object-cover rounded-sm" />
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-[#1C3F39]/80 leading-relaxed">
          <p>
            I'm <strong className="text-[#1C3F39]">Rahul</strong> — a tax professional with 3.5+ years
            of hands-on US tax experience. I've prepared and reviewed thousands of returns across
            Forms 1040, 1065, 1120, 1120-S and 990, and I sit on the CPA track (REG &amp; TCP cleared).
          </p>
          <p>
            Most CPA firms don't need more software or more dashboards. They need a reliable,
            US-experienced tax preparer who picks up the phone, reviews their own work, and treats
            the firm's clients like their own. That's what this practice is built for.
          </p>
          <p>
            Beyond compliance, I build tax projection models, run scenario planning and present
            strategy decks — work that earned recognition as a tax planning presenter.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: GraduationCap, label: "CPA Candidate", value: "REG & TCP cleared" },
              { icon: FileCheck2,    label: "Forms",         value: "1040 · 1065 · 1120 · 1120-S · 990" },
              { icon: Workflow,      label: "Software",      value: "CCH · UltraTax · ProConnect · Drake" },
              { icon: Globe2,        label: "Time zones",    value: "Overlapping US working hours" },
            ].map((c, i) => (
              <div key={i} className="border border-[#1C3F39]/12 p-5 bg-[#FFFFFF]">
                <c.icon size={22} strokeWidth={1.3} className="text-[#A85A46]" />
                <p className="kicker mt-3">{c.label}</p>
                <p className="font-serif-display text-lg text-[#1C3F39] mt-1 leading-snug">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <p className="kicker">Journey</p>
        <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 mb-12 max-w-2xl">A practitioner's path — one return, one client, one firm at a time.</h2>
        <div className="grid md:grid-cols-12 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="md:col-span-3 border-t border-[#1C3F39]/15 pt-6 fade-up" style={{ animationDelay: `${i * 120}ms` }}>
              <p className="font-serif-display text-3xl text-[#A85A46]">{m.year}</p>
              <h3 className="font-serif-display text-2xl text-[#1C3F39] mt-3 leading-tight">{m.title}</h3>
              <p className="text-sm text-[#1C3F39]/70 mt-3 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1C3F39] text-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <Award size={56} strokeWidth={1.2} className="text-[#E2B8A9] md:col-span-2" />
          <div className="md:col-span-7">
            <h2 className="font-serif-display text-4xl md:text-5xl leading-tight">
              Recognized for tax planning presentations — the kind of strategic thinking your clients pay for.
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/book" className="btn-terra" data-testid="about-book">Book a CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
