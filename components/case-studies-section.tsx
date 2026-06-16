import { BarChart3, AlertTriangle, Star, Clock } from "lucide-react";

const caseStudies = [
  {
    icon: BarChart3,
    title: "CS Operations Dashboard",
    category: "Analytics & Visibility",
    description:
      "Built a live Customer Success dashboard tracking MAU/WAU, product engagement, and NPS across the full portfolio.",
    metrics: ["0.5% NRR lift", "1% retention improvement", "Real-time visibility"],
    tags: ["Dashboard", "KPIs", "Analytics"],
    href: "#",
  },
  {
    icon: AlertTriangle,
    title: "Churn Risk Calculator",
    category: "Retention & Prevention",
    description:
      "Designed an AI-assisted churn-risk scoring system using 15+ checkpoints to identify at-risk accounts before notice.",
    metrics: ["2 of 3 churns predicted", "Early warning system", "Proactive outreach"],
    tags: ["Automation", "AI", "Retention"],
    href: "#",
  },
  {
    icon: Star,
    title: "Support Review Growth System",
    category: "Customer Experience",
    description:
      "Transformed support operations by shifting from efficiency metrics to CSAT-focused performance goals.",
    metrics: ["12-15x review increase", "NPS 40-45%", "95%+ trainer satisfaction"],
    tags: ["Support Ops", "CSAT", "Reviews"],
    href: "#",
  },
  {
    icon: Clock,
    title: "RevOps Payment Optimization",
    category: "Revenue Operations",
    description:
      "Structured RevOps follow-up workflows and billing processes to accelerate payment collection cycles.",
    metrics: ["60+ to 30 days", "50% cycle reduction", "Improved cash flow"],
    tags: ["RevOps", "Billing", "Process"],
    href: "#",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Impact-Driven Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Systems I&apos;ve built that delivered measurable outcomes for customer success, 
            retention, and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group flex h-full flex-col bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <study.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {study.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {study.title}
              </h3>

              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {study.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {study.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="px-3 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                href={study.href}
                className="mt-3 inline-flex w-fit text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
