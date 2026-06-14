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
    blurb: "Perfect for businesses requiring flexible bookkeeping support.",
    bullets: [
      "Daily / Weekly / Monthly Bookkeeping",
      "Bank & Credit Card Reconciliation",
      "Accounts Payable & Receivable",
      "Financial Reporting",
      "QuickBooks Support",
      "Catch-up & Cleanup Bookkeeping",
      "Flexible Hours Based on Your Needs",
    ],
    cta: "Get started",
  },
  {
    tag: "Dedicated Monthly Resource",
    price: "$1,500",
    unit: "/ month",
    priceLine: "Starting at $1,500 / month",
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
    cta: "Book a consultation",
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
          Premium offshore bookkeeping solutions.
        </h1>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2" data-testid="hero-price-line">
          <p className="font-serif-display text-2xl md:text-3xl text-[#A85A46]">
            Starting at <span className="text-[#1C3F39] font-medium">$9</span>
            <span className="text-[#1C3F39]/70 text-xl"> / hour</span>
          </p>
          <span className="text-[#1C3F39]/30 text-2xl">|</span>
          <p className="font-serif-display text-2xl md:text-3xl text-[#A85A46]">
            Dedicated Resource from{" "}
            <span className="text-[#1C3F39] font-medium">$1,500</span>
            <span className="text-[#1C3F39]/70 text-xl"> / month</span>
          </p>
        </div>

        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-3xl leading-relaxed">
          Reduce your accounting costs without compromising on quality. Access experienced
          bookkeeping professionals, secure processes, and reliable support tailored to your
          business needs.
        </p>

        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl font-sub" data-testid="hero-benefits">
          {heroBenefits.map((b, i) => (
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
            Or request a free capacity assessment
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
            Get professional offshore bookkeeping support starting at just $9 / hour — or commit to
            a dedicated bookkeeper from $1,500 / month.
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
