import { Link } from "react-router-dom";
import {
  TrendingUp, Clock, Target, Building2, Layers, ArrowUpRight, Quote, CalendarClock, FileSearch,
} from "lucide-react";

const cases = [
  {
    icon: CalendarClock,
    tag: "Case 01 · Busy Season",
    title: "Scaling Capacity During Busy Season",
    featured: true,
    challenge:
      "A growing CPA firm faced increasing return volume during peak tax season, creating pressure on partners and internal teams to maintain turnaround times and quality.",
    solution:
      "Provided dedicated support for individual, partnership, corporate, and non-profit tax engagements while aligning with the firm's existing workflows and review standards.",
    impact: [
      "Increased tax season capacity",
      "Reduced partner workload",
      "Improved turnaround consistency",
      "Maintained review-ready quality",
    ],
  },
  {
    icon: TrendingUp,
    tag: "Case 02 · Advisory Expansion",
    title: "Transforming Compliance Work Into Advisory Opportunities",
    featured: true,
    challenge:
      "The CPA firm wanted to dedicate more time to strategic tax planning and advisory services but was limited by compliance workload.",
    solution:
      "Supported tax projections, scenario analysis, research, and advisory-ready deliverables, enabling the firm to focus more on client strategy.",
    impact: [
      "Greater advisory capacity",
      "Enhanced client value",
      "More time for high-level planning discussions",
      "Better year-round engagement opportunities",
    ],
  },
  {
    icon: Clock,
    tag: "Case 03 · Year-Round",
    title: "Year-Round Tax & Extension Support",
    featured: true,
    challenge:
      "The firm required reliable support beyond the traditional tax season, including extensions, amendments, and ongoing client needs.",
    solution:
      "Provided consistent support throughout the year with organized workpapers, clear communication, and adherence to firm processes.",
    impact: [
      "Continuous capacity throughout the year",
      "Faster turnaround on priority engagements",
      "Improved workflow efficiency",
      "Greater flexibility during workload fluctuations",
    ],
  },
  {
    icon: Layers,
    tag: "Case 04 · Complex Engagements",
    title: "Complex Tax Engagement Support",
    challenge:
      "CPA firms often manage clients with multi-entity structures, changing tax situations, and industry-specific considerations requiring detailed attention.",
    solution:
      "Assisted with complex tax engagements involving partnerships, corporations, S-corporations, non-profits, and planning-related analysis.",
    impact: [
      "More confidence in handling complex workloads",
      "Better organization and documentation",
      "Improved partner efficiency",
      "Stronger client service delivery",
    ],
  },
  {
    icon: FileSearch,
    tag: "Case 05 · Notices & Cleanup",
    title: "Tax Notice & Cleanup Projects",
    challenge:
      "Firms frequently encounter historical bookkeeping issues, tax notices, and incomplete records that require significant staff time.",
    solution:
      "Contributed to reconciliation projects, documentation organization, notice response preparation, and tax-ready file cleanup.",
    impact: [
      "Faster resolution of outstanding matters",
      "Better organized client files",
      "Reduced administrative burden",
      "More time for client advisory work",
    ],
  },
];

export default function Results() {
  return (
    <div data-testid="page-results">
      {/* HERO ---------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <p className="kicker">Results</p>
        <h1 className="font-serif-display text-5xl md:text-7xl text-[#1C3F39] mt-4 leading-[0.95] max-w-5xl">
          Real CPA Firm Success Stories. Meaningful Outcomes.
        </h1>
        <p className="mt-8 text-xl text-[#1C3F39]/75 max-w-3xl">
          Examples of how CPA firms have increased capacity, improved workflows, and created more
          time for high-value client relationships.
        </p>
      </section>

      {/* CASES --------------------------------------------------- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16 space-y-12">
        {cases.map((c, i) => (
          <article
            key={i}
            className={`grid md:grid-cols-12 gap-8 border-t border-[#1C3F39]/15 pt-10 fade-up ${c.featured ? "" : ""}`}
            style={{ animationDelay: `${i * 100}ms` }}
            data-testid={`case-${i}`}
          >
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <c.icon size={32} strokeWidth={1.3} className="text-[#A85A46]" />
                {c.featured && (
                  <span className="text-[10px] uppercase tracking-[0.22em] font-sub text-[#A85A46] border border-[#A85A46] px-2 py-0.5">
                    Featured
                  </span>
                )}
              </div>
              <p className="kicker mt-5">{c.tag}</p>
              <h2 className="font-serif-display text-2xl md:text-3xl text-[#1C3F39] leading-snug mt-2">{c.title}</h2>
            </div>
            <div className="md:col-span-4 space-y-5">
              <div>
                <p className="kicker">Challenge</p>
                <p className="mt-2 text-[#1C3F39]/85 leading-relaxed">{c.challenge}</p>
              </div>
              <div>
                <p className="kicker">Solution</p>
                <p className="mt-2 text-[#1C3F39]/85 leading-relaxed">{c.solution}</p>
              </div>
            </div>
            <div className="md:col-span-4">
              <p className="kicker mb-3">Impact</p>
              <ul className="space-y-2.5">
                {c.impact.map((m, j) => (
                  <li key={j} className="flex items-start gap-3 border border-[#1C3F39]/12 bg-[#FFFFFF] p-4">
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#A85A46] shrink-0" />
                    <span className="text-[#1C3F39] text-[15px] leading-snug">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* PARTNERSHIP STATEMENT ---------------------------------- */}
      <section className="bg-[#F2EEE5]" data-testid="partnership-statement">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <Quote size={36} strokeWidth={1.3} className="text-[#A85A46] mx-auto" />
          <p className="font-serif-display text-3xl md:text-5xl text-[#1C3F39] mt-6 leading-tight">
            Not isolated projects — a proof of partnership through every stage of your firm's year.
          </p>
          <p className="mt-6 text-[#1C3F39]/75 text-lg max-w-2xl mx-auto">
            Busy season. Extensions. Compliance. Planning. Special projects. The same trusted hands
            across the entire calendar.
          </p>
        </div>
      </section>

      {/* CTA ---------------------------------------------------- */}
      <section className="bg-[#1C3F39] text-[#F9F6F0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif-display text-4xl md:text-6xl leading-tight">
              Want outcomes like these for your firm?
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10 flex flex-col gap-3">
            <Link to="/book" className="btn-terra justify-center" data-testid="results-cta">
              Book a CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
            <Link to="/audit" className="btn-ghost justify-center bg-transparent border-[#F9F6F0] text-[#F9F6F0] hover:bg-[#F9F6F0] hover:text-[#1C3F39]" data-testid="results-audit">
              Take the Free Capacity Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
