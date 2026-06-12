import { Link } from "react-router-dom";
import {
  Stethoscope, Building2, Briefcase, ShoppingBag, Factory, Cpu, Utensils, Truck,
  Landmark, Store, Users, ArrowUpRight, ShieldCheck,
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare & Medical Practices",
    desc: "Working with CPA firms that serve physicians, dentists, clinics, healthcare providers, and other medical professionals across their tax and advisory needs.",
  },
  {
    icon: Building2,
    name: "Real Estate & Construction",
    desc: "Experience across engagements involving real estate investors, property owners, developers, construction companies, and related businesses.",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    desc: "Serving clients across consulting, legal, engineering, architecture, and other knowledge-based service industries.",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce & Retail",
    desc: "Contributing to growing online businesses, retail operations, and consumer-focused enterprises with evolving tax requirements.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Distribution",
    desc: "Working with businesses involved in production, supply chain management, distribution, and operational growth.",
  },
  {
    icon: Cpu,
    name: "Technology & Innovation",
    desc: "Providing tax and advisory assistance for technology companies, startups, software businesses, and innovation-driven enterprises.",
  },
  {
    icon: Utensils,
    name: "Restaurants & Hospitality",
    desc: "Serving engagements in the hospitality sector, including restaurants, food services, and customer-focused establishments.",
  },
  {
    icon: Truck,
    name: "Transportation & Logistics",
    desc: "Experience across transportation companies, logistics providers, and businesses involved in the movement of goods and services.",
  },
  {
    icon: Landmark,
    name: "Non-Profit Organizations",
    desc: "Working with tax-exempt organizations and mission-driven entities on their unique compliance and reporting requirements.",
  },
  {
    icon: Store,
    name: "Small & Mid-Sized Businesses",
    desc: "Serving privately held businesses across various stages of growth and operational complexity.",
  },
  {
    icon: Users,
    name: "High-Net-Worth Individuals & Family Businesses",
    desc: "Contributing to complex individual tax situations, family-owned businesses, and multi-entity structures.",
  },
];

export default function Industries() {
  return (
    <div data-testid="page-industries">
      {/* HERO ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">Industries Supported Through Our CPA Firm Partnerships</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-5xl">
          Helping CPA firms serve diverse client needs.
        </h1>
        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-3xl">
          Every CPA firm serves a unique mix of clients. Through our partnerships with US CPA firms,
          we contribute to tax compliance, tax planning, and advisory engagements across a broad
          range of industries — while aligning with each firm's professional standards, workflows,
          and client expectations.
        </p>
      </section>

      {/* GRID --------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((s, i) => (
          <div key={i} className="surface-card p-8" data-testid={`industry-${i}`}>
            <s.icon size={30} strokeWidth={1.3} className="text-[#A85A46]" />
            <h3 className="font-serif-display text-2xl mt-5 text-[#1C3F39] leading-snug">{s.name}</h3>
            <p className="mt-3 text-[#1C3F39]/70 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* CLOSING STATEMENT --------------------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="industries-closing">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <ShieldCheck size={36} strokeWidth={1.3} className="text-[#A85A46] mx-auto" />
          <p className="kicker mt-6">Closing</p>
          <h2 className="font-serif-display text-3xl md:text-5xl text-[#1C3F39] mt-4 leading-tight">
            Your Clients. Your Standards. Our Commitment.
          </h2>
          <p className="mt-6 text-[#1C3F39]/75 text-lg max-w-2xl mx-auto">
            Whether your CPA firm specializes in a particular niche or serves clients across multiple
            industries, our approach is built around delivering accurate, reliable, and professional
            tax work — aligned with your firm's quality expectations and client service philosophy.
          </p>
        </div>
      </section>

      {/* CTA ---------------------------------------------------- */}
      <section className="bg-[#1C3F39] text-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif-display text-4xl md:text-6xl leading-tight">
              Different industry? Let's talk — odds are I've seen it.
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/book" className="btn-terra" data-testid="industries-cta">
              Book a CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
