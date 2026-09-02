import { Users, BarChart3, Zap, Target } from "lucide-react";
import { InfoCard } from "@/components/info-card";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

const competencies = [
  {
    icon: Users,
    title: "Customer Success & Growth",
    description:
      "Onboarding, adoption, value realization, renewals, retention, and customer relationship management.",
    evidence: "Managed 120 B2B SaaS accounts with 95% logo retention and 115% NRR.",
  },
  {
    icon: BarChart3,
    title: "Customer Health & Analytics",
    description:
      "Customer health, churn risk, MAU/WAU, NPS, adoption signals, and performance dashboards.",
    evidence: "Built churn-risk models that identified 2 of 3 potential churns before notice.",
  },
  {
    icon: Zap,
    title: "Operations & Automation",
    description:
      "Workflow automation, SOPs, SLAs, playbooks, CRM processes, and scalable customer operations.",
    evidence: "Built systems and workflows supporting Customer Success across 8 teams.",
  },
  {
    icon: Target,
    title: "Leadership & Programs",
    description:
      "Team leadership, cross-functional collaboration, enablement, support, and program management.",
    evidence: "Scaled post-sales operations to ~90 team members and 250+ simultaneous sessions.",
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
