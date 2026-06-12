import { Link } from "react-router-dom";
import { Building2, HeartPulse, Hammer, Briefcase, ShoppingBag, Landmark, ArrowUpRight } from "lucide-react";

const industries = [
  { icon: Briefcase,  name: "CPA & Accounting Firms",  desc: "Outsourced preparation, review and planning capacity — engagement-letter ready." },
  { icon: Building2,  name: "Small & Mid-Size Business", desc: "Partnerships, S-Corps and C-Corps with multi-state filings and growth strategy." },
  { icon: HeartPulse, name: "Healthcare & Professional Services", desc: "Physician partnerships, dental practices and consulting firms." },
  { icon: Hammer,     name: "Real Estate & Construction", desc: "Real estate professional, 1031, cost-segregation handoffs, contractor accounting." },
  { icon: ShoppingBag,name: "E-Commerce & Retail", desc: "Sales tax nexus, inventory accounting and platform-specific reconciliation." },
  { icon: Landmark,   name: "Non-Profit & Tax-Exempt", desc: "Form 990 series, grant tracking and unrelated business income analysis." },
];

export default function Industries() {
  return (
    <div data-testid="page-industries">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-16">
        <p className="kicker">Industries Served</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-4xl">
          Practical experience across the sectors that pay the most attention to taxes.
        </h1>
        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-2xl">
          Most engagements start with a US CPA firm — and through those firms, we serve clients
          across every major industry. Here's where I've done the most.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((s, i) => (
          <div key={i} className="surface-card p-8" data-testid={`industry-${i}`}>
            <s.icon size={30} strokeWidth={1.3} className="text-[#A85A46]" />
            <h3 className="font-serif-display text-2xl mt-5 text-[#1C3F39]">{s.name}</h3>
            <p className="mt-3 text-[#1C3F39]/70 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#1C3F39] text-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif-display text-4xl md:text-6xl leading-tight">
              Different industry? Book a call — odds are I've seen it.
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/book" className="btn-terra" data-testid="industries-cta">Book a consultation <ArrowUpRight size={16} strokeWidth={1.5} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
