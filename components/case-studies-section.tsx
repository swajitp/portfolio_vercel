import { BarChart3, AlertTriangle, Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InfoCard } from "@/components/info-card";
import { SectionEyebrow } from "@/components/section-eyebrow";

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
    <section id="case-studies" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <SectionEyebrow>SELECTED WORK</SectionEyebrow>
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
            <InfoCard
              key={study.title}
              className="flex flex-col"
              contentClassName="p-8"
              icon={<study.icon className="w-6 h-6 text-primary" />}
              title={study.title}
              description={study.description}
              footer={
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-sm text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              }
            >
              <p className="-mt-1 mb-5 text-xs uppercase tracking-wider text-muted-foreground-subtle">
                {study.category}
              </p>

              <div className="flex flex-wrap gap-2">
                {study.metrics.map((metric) => (
                  <Badge key={metric} variant="metric">
                    {metric}
                  </Badge>
                ))}
              </div>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
