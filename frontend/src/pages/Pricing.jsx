import { Link } from "react-router-dom";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowUpRight, CheckCircle2, Clock, Users, ShieldCheck, BadgeCheck, Layers,
  BookOpen, Calculator, FileSpreadsheet, Receipt, PiggyBank, TrendingUp,
} from "lucide-react";

const heroBenefits = [
  "Experienced Professionals",
  "Accurate & Timely Delivery",
  "Secure & Confidential Process",
  "Flexible Engagement Models",
];

const trustStrip = [
  { icon: BadgeCheck, label: "No Long-Term Contracts" },
  { icon: Layers,     label: "Flexible Engagement Models" },
  { icon: Users,      label: "Experienced Professionals" },
  { icon: ShieldCheck,label: "Secure & Confidential Process" },
  { icon: Clock,      label: "Dedicated Support" },
];

const plans = [
  {
    tag: "Hourly Support",
    price: "$9",
    unit: "/ hour",
    priceLine: "Starting at $9 / hour",
    blurb: "Ideal for businesses and CPA firms looking for flexible, scalable accounting support without long-term commitments.",
    bullets: [
      "Daily / Weekly / Monthly Bookkeeping",
      "Bank & Credit Card Reconciliation",
      "Accounts Payable & Receivable",
      "Financial Reporting",
      "QuickBooks Support",
      "Catch-up & Cleanup Bookkeeping",
      "Flexible Hours Based on Your Needs",
    ],
    cta: "Schedule a Free Consultation",
  },
  {
    tag: "Dedicated Offshore Bookkeeper",
    price: "$1,499",
    unit: "/ month",
    priceLine: "Starting at $1,499 / month",
    blurb: "Ideal for CPA firms and growing businesses needing a dedicated accounting professional.",
    bullets: [
      "Dedicated Bookkeeper",
      "Full-Time / Part-Time Availability",
      "160 Hours of Monthly Support",
      "Direct Communication",
      "Priority Turnaround",
      "Customized Workflows",
      "Scalable Team Support",
    ],
    cta: "Discuss Your Offshore Team",
    featured: true,
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping",
    items: [
      "Transaction Recording & Categorization",
      "Bank & Credit Card Reconciliation",
      "General Ledger Maintenance",
      "Month-End Closing",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Financial Reporting",
    items: [
      "Profit & Loss Statements",
      "Balance Sheet Preparation",
      "Cash Flow Reports",
      "Custom Management Reports",
    ],
  },
  {
    icon: Receipt,
    title: "Additional Support",
    items: [
      "Accounts Payable Management",
      "Accounts Receivable Tracking",
      "Payroll Coordination",
      "Cleanup & Catch-up Work",
    ],
  },
];

const whyChoose = [
  { icon: BadgeCheck,    text: "Experienced US Accounting Professionals" },
  { icon: ShieldCheck,   text: "Strong Quality Control Process" },
  { icon: ShieldCheck,   text: "Secure Data Handling" },
  { icon: Clock,         text: "Fast Turnaround Times" },
  { icon: Users,         text: "Transparent Communication" },
  { icon: PiggyBank,     text: "Cost Savings of Up to 70%" },
  { icon: TrendingUp,    text: "Scalable Team Based on Your Growth" },
];

const faqs = [
  {
    q: "How does pricing work?",
    a: "Our pricing depends on the scope of work, transaction volume, complexity, and level of support required. We finalize a clear engagement letter after a free 30-minute consultation.",
  },
  {
    q: "Are there any hidden charges?",
    a: "No. We believe in transparent, predictable pricing with no hidden fees — what you see is what you pay.",
  },
  {
    q: "Can I scale my team as my business grows?",
    a: "Yes. You can increase or decrease support based on your business requirements. Engagements flex up or down with your firm.",
  },
  {
    q: "Is my financial data secure?",
    a: "Yes. We follow strict confidentiality protocols, NDA-backed engagements, and secure data management practices — including encrypted document portals and access controls.",
  },
];

export default function Pricing() {
  return (
    <div data-testid="page-pricing">
      {/* HERO (Option 1) ---------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">Pricing</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-5xl">
          Expert bookkeeping, tax &amp; advisory support — built for CPA firms &amp; growing businesses.
        </h1>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2" data-testid="hero-price-line">
          <p className="font-serif-display text-2xl md:text-3xl text-[#A85A46]">
            Flexible Support from <span className="text-[#1C3F39] font-medium">$9</span>
            <span className="text-[#1C3F39]/70 text-xl"> / hour</span>
          </p>
          <span className="text-[#1C3F39]/30 text-2xl">|</span>
          <p className="font-serif-display text-2xl md:text-3xl text-[#A85A46]">
            Dedicated Experts from{" "}
            <span className="text-[#1C3F39] font-medium">$1,499</span>
            <span className="text-[#1C3F39]/70 text-xl"> / month</span>
          </p>
        </div>

        <p className="mt-4 font-sub text-[12px] uppercase tracking-[0.28em] text-[#1C3F39]/70">
          Bookkeeping &nbsp;·&nbsp; US Tax &nbsp;·&nbsp; Advisory &nbsp;·&nbsp; Back-Office Support
        </p>

        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-3xl leading-relaxed">
          Save up to <strong className="text-[#1C3F39]">70%</strong> on staffing costs without
          compromising quality, security, or turnaround time. Experienced bookkeeping, tax and
          advisory professionals — tailored to your firm and your workflow.
        </p>

        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl font-sub" data-testid="hero-benefits">
          {[
            "Experienced Professionals",
            "Secure Workflows",
            "Direct Communication",
            "Flexible Engagement Models",
          ].map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[#1C3F39]">
              <CheckCircle2 size={18} strokeWidth={1.6} className="text-[#A85A46] mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/book" className="btn-primary" data-testid="pricing-hero-cta">
            Schedule a Free Consultation <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
          <Link to="/audit" className="btn-ghost" data-testid="pricing-hero-audit">
            Request a Capacity Assessment
          </Link>
        </div>
      </section>

      {/* TRUST STRIP -------------------------------------------- */}
      <section className="bg-[#1C3F39] text-[#F9F6F0]" data-testid="trust-strip">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-5 gap-6">
          {trustStrip.map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <t.icon size={22} strokeWidth={1.4} className="text-[#E2B8A9] shrink-0" />
              <p className="text-[13px] md:text-[14px] font-sub leading-tight">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT MODELS ------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28" data-testid="pricing-plans">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-6">
            <p className="kicker">Choose your engagement model</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              Two flexible ways to start.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 self-end">
            <p className="text-[#1C3F39]/75 text-lg">
              Begin with hourly support and scale into a dedicated resource as your needs grow —
              or commit to a dedicated bookkeeper from day one.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`p-8 md:p-10 border flex flex-col ${p.featured ? "bg-[#1C3F39] text-[#F9F6F0] border-[#1C3F39]" : "bg-[#FFFFFF] border-[#1C3F39]/15"}`}
              data-testid={`plan-${i}`}
            >
              <div className="flex items-center justify-between">
                <p className={`kicker ${p.featured ? "text-[#E2B8A9]" : ""}`}>{p.tag}</p>
                {p.featured && (
                  <span className="text-[10px] uppercase tracking-[0.22em] font-sub text-[#1C3F39] bg-[#E2B8A9] px-2 py-1">
                    Most popular
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className={`font-serif-display text-6xl leading-none ${p.featured ? "text-[#F9F6F0]" : "text-[#1C3F39]"}`}>{p.price}</span>
                <span className={`font-sub text-base ${p.featured ? "text-[#F9F6F0]/70" : "text-[#1C3F39]/60"}`}>{p.unit}</span>
              </div>
              <p className={`mt-2 text-sm font-sub uppercase tracking-[0.18em] ${p.featured ? "text-[#E2B8A9]" : "text-[#A85A46]"}`}>{p.priceLine}</p>

              <p className={`mt-5 leading-relaxed ${p.featured ? "text-[#F9F6F0]/85" : "text-[#1C3F39]/75"}`}>{p.blurb}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {p.bullets.map((b, j) => (
                  <li key={j} className={`flex items-start gap-2 text-[15px] ${p.featured ? "text-[#F9F6F0]/90" : "text-[#1C3F39]/85"}`}>
                    <CheckCircle2 size={16} strokeWidth={1.6} className={p.featured ? "text-[#E2B8A9] mt-0.5 shrink-0" : "text-[#A85A46] mt-0.5 shrink-0"} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                className={`mt-8 inline-flex items-center justify-center gap-2 ${p.featured ? "btn-terra" : "btn-ghost"}`}
                data-testid={`plan-cta-${i}`}
              >
                {p.cta} <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED PROFESSIONAL PLANS -------------------------- */}
      <section className="bg-[#1C3F39] text-[#F9F6F0]" data-testid="dedicated-plans">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-6">
              <p className="kicker text-[#E2B8A9]">Dedicated Offshore Professionals</p>
              <h2 className="font-serif-display text-4xl md:text-5xl mt-4 leading-tight">
                Hire a dedicated offshore team member — not just hours.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="text-[#F9F6F0]/80 text-lg">
                Each dedicated plan provides a named professional, direct communication, and the
                full premium engagement framework. Choose the seniority and scope that fits.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Bookkeeping Professional",
                price: "$1,499",
                unit: "/ month",
                blurb: "Your dedicated accounting resource for accurate and timely bookkeeping.",
                items: [
                  "Dedicated Full-Time Professional (up to 160 Hours/Month)",
                  "Daily, Weekly & Monthly Bookkeeping",
                  "Bank & Credit Card Reconciliations",
                  "Accounts Payable & Accounts Receivable Management",
                  "General Ledger Maintenance",
                  "Month-End & Year-End Closing Support",
                  "Financial Statements & Management Reports",
                  "QuickBooks & Cloud Accounting Expertise",
                  "Direct Communication via Email / Teams / Zoom",
                  "Secure Document Management & Confidentiality",
                  "Dedicated Account Manager",
                  "Quality Review Process",
                  "Flexible Working Hours & Time Zone Coverage",
                  "Process Documentation & Continuous Improvement",
                ],
              },
              {
                tag: "US Tax Professional",
                price: "$1,899",
                unit: "/ month",
                blurb: "Dedicated tax expertise to support your CPA firm throughout the year.",
                items: [
                  "Dedicated US Tax Professional",
                  "Preparation of Forms 1040, 1041, 1065, 1120 & 1120-S",
                  "Tax Workpaper Preparation",
                  "Tax Return Review Support",
                  "Tax Research Assistance",
                  "Tax Planning & Projections",
                  "IRS & State Notice Assistance",
                  "CCH Axcess, UltraTax, ProConnect & Drake Experience",
                  "Busy Season Support",
                  "Direct Communication & Daily Status Updates",
                  "Confidential & Secure Workflow",
                  "Quality Control Process",
                ],
                featured: true,
              },
              {
                tag: "Tax Planning & Advisory Professional",
                price: "$2,199",
                unit: "/ month",
                blurb: "Advanced accounting and tax advisory support for growing CPA firms.",
                items: [
                  "Senior-Level Tax & Advisory Professional",
                  "Tax Planning Strategies",
                  "Multi-Year Tax Projections",
                  "Entity Selection & Tax Impact Analysis",
                  "Complex Tax Research",
                  "Client Meeting Support",
                  "Financial Analysis & Advisory Reports",
                  "Workflow Improvement & Process Optimization",
                  "Dedicated Communication Channel",
                  "Priority Turnaround Time",
                  "Strict Data Security & Confidentiality",
                ],
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`p-8 md:p-9 border flex flex-col ${p.featured ? "bg-[#F9F6F0] text-[#1C3F39] border-[#E2B8A9]" : "bg-[#14302B] border-[#F9F6F0]/15"}`}
                data-testid={`dedicated-plan-${i}`}
              >
                <div className="flex items-center justify-between">
                  <p className={`kicker ${p.featured ? "text-[#A85A46]" : "text-[#E2B8A9]"}`}>{p.tag}</p>
                  {p.featured && (
                    <span className="text-[10px] uppercase tracking-[0.22em] font-sub text-[#F9F6F0] bg-[#1C3F39] px-2 py-1">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className={`font-serif-display text-5xl leading-none ${p.featured ? "text-[#1C3F39]" : "text-[#F9F6F0]"}`}>{p.price}</span>
                  <span className={`font-sub text-base ${p.featured ? "text-[#1C3F39]/60" : "text-[#F9F6F0]/65"}`}>{p.unit}</span>
                </div>
                <p className={`mt-5 leading-relaxed ${p.featured ? "text-[#1C3F39]/80" : "text-[#F9F6F0]/85"}`}>{p.blurb}</p>

                <ul className="mt-6 space-y-2 flex-1">
                  {p.items.map((it, j) => (
                    <li key={j} className={`flex items-start gap-2 text-[14px] leading-snug ${p.featured ? "text-[#1C3F39]/85" : "text-[#F9F6F0]/90"}`}>
                      <CheckCircle2 size={14} strokeWidth={1.7} className={p.featured ? "text-[#A85A46] mt-1 shrink-0" : "text-[#E2B8A9] mt-1 shrink-0"} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book"
                  className={`mt-8 inline-flex items-center justify-center gap-2 ${p.featured ? "btn-primary" : "btn-terra"}`}
                  data-testid={`dedicated-plan-cta-${i}`}
                >
                  Discuss your firm's needs <ArrowUpRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            ))}
          </div>

          {/* Premium features included in all dedicated plans */}
          <div className="mt-16 border-t border-[#F9F6F0]/15 pt-12" data-testid="premium-features">
            <div className="grid md:grid-cols-12 gap-10 mb-8">
              <div className="md:col-span-6">
                <p className="kicker text-[#E2B8A9]">Premium features</p>
                <h3 className="font-serif-display text-3xl md:text-4xl mt-3 leading-tight">
                  Included in all dedicated plans.
                </h3>
              </div>
              <p className="md:col-span-5 md:col-start-8 self-end text-[#F9F6F0]/80 text-lg">
                Every dedicated engagement comes with the full operating framework that makes
                offshore feel internal.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 font-sub">
              {[
                { icon: ShieldCheck,  label: "Secure & Confidential Data Handling" },
                { icon: Users,        label: "Dedicated Offshore Professional" },
                { icon: BadgeCheck,   label: "Direct Communication & Collaboration" },
                { icon: FileSpreadsheet, label: "Regular Progress Updates" },
                { icon: Clock,        label: "Quick Turnaround Time" },
                { icon: Layers,       label: "Scalable Team Support" },
                { icon: Calculator,   label: "Expertise in Leading US Accounting Software" },
                { icon: TrendingUp,   label: "Flexible Time Zone Availability" },
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3 border border-[#F9F6F0]/15 p-4" data-testid={`premium-feature-${i}`}>
                  <f.icon size={20} strokeWidth={1.4} className="text-[#E2B8A9] mt-0.5 shrink-0" />
                  <span className="text-[#F9F6F0]/90 text-[14.5px] leading-snug">{f.label}</span>
                </li>
              ))}
            </ul>

            {/* Summary pricing line */}
            <div className="mt-12 grid md:grid-cols-12 gap-6 items-center border-t border-[#F9F6F0]/15 pt-10">
              <div className="md:col-span-8 grid sm:grid-cols-3 gap-4">
                {[
                  { name: "Bookkeeping",            price: "from $9 / hr · $1,499 / mo" },
                  { name: "US Tax Professional",    price: "from $1,899 / mo" },
                  { name: "Tax Advisory & Planning", price: "from $2,199 / mo" },
                ].map((s, i) => (
                  <div key={i} className="border border-[#F9F6F0]/15 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] font-sub text-[#E2B8A9]">{s.name}</p>
                    <p className="font-serif-display text-lg text-[#F9F6F0] mt-1 leading-snug">{s.price}</p>
                  </div>
                ))}
              </div>
              <p className="md:col-span-4 font-serif-display text-2xl text-[#F9F6F0]/90 leading-snug">
                Professional expertise. Transparent pricing. Scalable offshore support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES INCLUDED ------------------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="pricing-services">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-6">
              <p className="kicker">Services included</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
                Everything your books need — under one engagement.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="text-[#1C3F39]/75 text-lg">
                Bookkeeping, reporting and operational support — all delivered by experienced
                accounting professionals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#FFFFFF] border border-[#1C3F39]/12 p-8" data-testid={`pricing-service-${i}`}>
                <s.icon size={28} strokeWidth={1.3} className="text-[#A85A46]" />
                <h3 className="font-serif-display text-2xl text-[#1C3F39] mt-5 leading-snug">{s.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[15px] text-[#1C3F39]/85">
                      <CheckCircle2 size={16} strokeWidth={1.6} className="text-[#A85A46] mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US ----------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28" data-testid="pricing-why">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="kicker">Why choose us?</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              More than just affordable pricing.
            </h2>
            <p className="mt-5 text-[#1C3F39]/75 text-lg max-w-md">
              The cost is the starting point — quality, security, and reliability are why CPA firms
              and businesses keep their engagement.
            </p>
            <Link to="/book" className="btn-primary mt-8" data-testid="pricing-why-cta">
              Schedule a Free Consultation <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
          <ul className="md:col-span-6 md:col-start-7 grid sm:grid-cols-2 gap-3 font-sub">
            {whyChoose.map((b, i) => (
              <li key={i} className="flex items-start gap-3 border border-[#1C3F39]/12 bg-[#FFFFFF] p-5" data-testid={`why-choose-${i}`}>
                <b.icon size={20} strokeWidth={1.4} className="text-[#A85A46] mt-0.5 shrink-0" />
                <span className="text-[#1C3F39] text-[15px] leading-snug">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARISON TABLE -------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24" data-testid="pricing-comparison">
        <div className="grid md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-6">
            <p className="kicker">At-a-glance</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
              Compare engagements side by side.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 self-end">
            <p className="text-[#1C3F39]/75 text-lg">
              Starting prices for the most common engagement models. Final scoping depends on
              volume, complexity and seniority required.
            </p>
          </div>
        </div>

        <div className="border border-[#1C3F39]/15 bg-[#FFFFFF] overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1C3F39] text-[#F9F6F0] font-sub text-[12px] uppercase tracking-[0.2em]">
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Starting Price</th>
                <th className="px-6 py-4 font-medium">Best For</th>
              </tr>
            </thead>
            <tbody className="font-sub text-[15px]">
              {[
                { svc: "Hourly Bookkeeping",         price: "$9 / hour",       best: "Flexible support & small projects" },
                { svc: "Dedicated Bookkeeper",       price: "$1,499 / month",  best: "Ongoing bookkeeping needs" },
                { svc: "US Tax Professional",        price: "$1,899 / month",  best: "Tax preparation & busy season support" },
                { svc: "Tax Advisory Professional",  price: "$2,199 / month",  best: "Complex tax planning & advisory" },
              ].map((r, i) => (
                <tr key={i} className="border-t border-[#1C3F39]/10" data-testid={`compare-row-${i}`}>
                  <td className="px-6 py-5 font-serif-display text-lg text-[#1C3F39]">{r.svc}</td>
                  <td className="px-6 py-5 text-[#A85A46] font-medium">{r.price}</td>
                  <td className="px-6 py-5 text-[#1C3F39]/80">{r.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs font-sub text-[#1C3F39]/55">
          All prices are starting points — every engagement is scoped to your firm's specific volume, complexity and support needs.
        </p>
      </section>

      {/* WHY CPA FIRMS PARTNER WITH US -------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="pricing-why-cpa">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <p className="kicker">Why CPA Firms Partner With Us</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
                Premium offshore. US-experienced.
              </h2>
              <p className="mt-6 text-[#1C3F39]/75 text-lg max-w-md">
                Beyond competitive pricing — what really makes CPA firms keep their engagement with
                us long-term.
              </p>
              <Link to="/book" className="btn-primary mt-8" data-testid="pricing-why-cpa-cta">
                Discuss Your Offshore Team <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
            <ul className="md:col-span-6 md:col-start-7 grid sm:grid-cols-2 gap-3 font-sub">
              {[
                { icon: BadgeCheck,    text: "Experienced US Tax & Accounting Professionals" },
                { icon: Calculator,    text: "Expertise in CCH Axcess, UltraTax, ProConnect, Drake & QuickBooks" },
                { icon: Users,         text: "Dedicated Team Members" },
                { icon: ShieldCheck,   text: "Secure Document Handling & Confidentiality" },
                { icon: Clock,         text: "Daily Communication & Progress Updates" },
                { icon: TrendingUp,    text: "Busy Season Scalability" },
                { icon: PiggyBank,     text: "Significant Cost Savings Compared to US Hiring" },
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 bg-[#FFFFFF] border border-[#1C3F39]/12 p-5" data-testid={`why-cpa-${i}`}>
                  <b.icon size={20} strokeWidth={1.4} className="text-[#A85A46] mt-0.5 shrink-0" />
                  <span className="text-[#1C3F39] text-[15px] leading-snug">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ --------------------------------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="pricing-faq">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-20 md:py-24">
          <p className="kicker">FAQ</p>
          <h2 className="font-serif-display text-4xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
            Frequently asked questions.
          </h2>

          <Accordion type="single" collapsible className="mt-10 border-t border-[#1C3F39]/15" data-testid="faq-accordion">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#1C3F39]/15">
                <AccordionTrigger
                  className="text-left font-serif-display text-xl md:text-2xl text-[#1C3F39] py-6 hover:no-underline hover:text-[#A85A46]"
                  data-testid={`faq-q-${i}`}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#1C3F39]/80 text-base leading-relaxed pb-6 pr-12" data-testid={`faq-a-${i}`}>
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA --------------------------------------------- */}
      <section className="bg-[#1C3F39] text-[#F9F6F0]" data-testid="pricing-final-cta">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <p className="kicker text-[#E2B8A9]">Ready to scale</p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-4 leading-tight">
            Ready to reduce your accounting costs?
          </h2>
          <p className="mt-6 text-[#F9F6F0]/85 text-lg max-w-2xl mx-auto">
            Get professional offshore accounting support starting at just $9 / hour — or commit to
            a dedicated team member from $1,499 / month.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/book" className="btn-terra" data-testid="final-cta-book">
              Schedule Your Free Consultation Today <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
            <Link to="/contact" className="font-sub text-sm text-[#E2B8A9] underline self-center" data-testid="final-cta-contact">
              or send a message instead
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
