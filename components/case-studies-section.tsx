import { AlertTriangle, ArrowUpRight, BarChart3, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

const caseStudies = [
  {
    icon: BarChart3,
    title: "CS Operations Dashboard",
    category: "Analytics & Visibility",
    description:
      "Built a live Customer Success dashboard tracking MAU/WAU, product engagement, and NPS across the full portfolio.",
    metrics: ["0.5% NRR lift", "1% retention improvement", "Real-time visibility"],
    tags: ["Dashboard", "KPIs", "Analytics"],
  },
  {
    icon: AlertTriangle,
    title: "Churn Risk Calculator",
    category: "Retention & Prevention",
    description:
      "Designed an AI-assisted churn-risk scoring system using 15+ checkpoints to identify at-risk accounts before notice.",
    metrics: ["2 of 3 churns predicted", "Early warning system", "Proactive outreach"],
    tags: ["Automation", "AI", "Retention"],
  },
  {
    icon: Star,
    title: "Support Review Growth System",
    category: "Customer Experience",
    description:
      "Transformed support operations by shifting from efficiency metrics to CSAT-focused performance goals.",
    metrics: ["12-15x review increase", "NPS 40-45%", "95%+ trainer satisfaction"],
    tags: ["Support Ops", "CSAT", "Reviews"],
  },
  {
    icon: Clock,
    title: "RevOps Payment Optimization",
    category: "Revenue Operations",
    description:
      "Structured RevOps follow-up workflows and billing processes to accelerate payment collection cycles.",
    metrics: ["60+ to 30 days", "50% cycle reduction", "Improved cash flow"],
    tags: ["RevOps", "Billing", "Process"],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="site-container py-20">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <Reveal>
          <SectionEyebrow>SELECTED WORK</SectionEyebrow>
          <h2 className="mt-6 text-4xl font-bold tracking-tighter text-white md:text-6xl">
            Impact-Driven Projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Systems I&apos;ve built that delivered measurable outcomes for customer success, 
            retention, and operational efficiency.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-sm text-zinc-500">Selected operating systems and measurable outcomes.</p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {caseStudies.map((study, index) => {
          const Icon = study.icon;

          return (
            <Reveal key={study.title} delay={index * 100} className="group">
              <article className="h-full cursor-default">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/5 bg-zinc-900 shadow-2xl md:mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.22),transparent_34%),linear-gradient(135deg,rgba(39,39,42,0.95),rgba(9,9,11,0.98))]" />
                  <div className="absolute inset-4 rounded-[1.1rem] border border-white/10 bg-black/20 p-4 transition-transform duration-700 group-hover:scale-[1.03]">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-black">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex h-10 w-10 translate-y-0 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-100 backdrop-blur-md transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                          {study.category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.metrics.slice(0, 2).map((metric) => (
                            <Badge key={metric} variant="metric">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
                </div>

                <div className="px-1">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-zinc-300 md:text-xl">
                        {study.title}
                      </h3>
                      <p className="text-sm font-medium text-zinc-500">{study.category}</p>
                    </div>
                    <span className="rounded-md border border-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-600">
                      2025
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
              </div>
    </section>
  );
}
