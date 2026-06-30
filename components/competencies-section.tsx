import { Users, BarChart3, Zap, Target } from "lucide-react";
import { InfoCard } from "@/components/info-card";
import { SectionEyebrow } from "@/components/section-eyebrow";

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
          <SectionEyebrow>COMPETENCIES</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Areas of Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((item) => (
            <InfoCard
              key={item.title}
              icon={<item.icon className="w-6 h-6 text-primary" />}
              title={item.title}
              description={item.description}
            >
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {item.evidence}
              </p>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
