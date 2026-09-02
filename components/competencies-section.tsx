import { Users, BarChart3, Zap, Target } from "lucide-react";
import { InfoCard } from "@/components/info-card";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

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
    <section id="skills" className="site-container pt-16 pb-20 md:pt-20">
      <Reveal className="section-panel relative overflow-hidden p-8 md:p-16">
        <div className="mb-12">
          <SectionEyebrow>COMPETENCIES</SectionEyebrow>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Areas of Expertise
          </h2>
        </div>

        <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((item, index) => (
            <InfoCard
              key={item.title}
              className="border-0 bg-transparent p-0 shadow-none hover:-translate-y-2"
              contentClassName="p-0"
              icon={<item.icon className="h-6 w-6" />}
              title={item.title}
              description={item.description}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {item.evidence}
              </p>
            </InfoCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
