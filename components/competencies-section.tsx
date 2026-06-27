import { Users, BarChart3, Zap, Target } from "lucide-react";

const competencies = [
  {
    icon: Users,
    title: "Customer Success Strategy",
    description:
      "Customer lifecycle design, onboarding programs, health scoring, and churn prevention systems.",
    evidence: "Built health scoring and lifecycle programs managing $6M ARR",
  },
  {
    icon: BarChart3,
    title: "Operations & Analytics",
    description:
      "KPI dashboards, NPS/NRR tracking, MAU/WAU analytics, and data-driven decision making.",
    evidence: "Delivered NRR lift and MAU/WAU dashboards across 8 CS pods",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Workflow automation, SOP development, CRM optimization, and cross-functional playbooks.",
    evidence: "Automated workflows in Zapier and n8n; built 20+ SOPs and SLAs",
  },
  {
    icon: Target,
    title: "Revenue Operations",
    description:
      "RevOps infrastructure, billing systems, payment cycle optimization, and GTM execution.",
    evidence: "Cut payment cycles from 60+ to 30 days through RevOps optimization",
  },
];

export function CompetenciesSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5">
            COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Areas of Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {item.evidence}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
