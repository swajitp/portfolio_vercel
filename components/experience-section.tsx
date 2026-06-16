"use client";

import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  context: string;
  metrics: string[];
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Wooqer",
    role: "Customer Success Operations Lead | Program Manager",
    period: "2022 - 2025",
    type: "SaaS, B2B Workflow Automation",
    context: "B2B SaaS · India / MENA / US",
    metrics: ["$2M ARR", "20%+ MoM growth", "60 to 30 day payment cycle"],
    highlights: [
      "Owned CS Operations across 8 pods, directly managing Helpdesk, Skilling, and Onboarding",
      "Built AI-assisted churn-risk scoring identifying 2/3 potential churns before notice",
      "Created dashboard tracking MAU/WAU driving 0.5% NRR lift and 1% retention improvement",
      "Led USD 2M ARR portfolio across Middle East, US, and India with 20%+ MoM adoption growth",
      "Reduced payment cycles from 60+ days to 30 days through RevOps optimization",
    ],
  },
  {
    company: "Intellipaat",
    role: "Head of Operations (Customer Success & Post-Sales)",
    period: "2021 - 2022",
    type: "EdTech, Online Learning Platform",
    context: "EdTech · India",
    metrics: ["~90 member org", "80%+ SLA adherence", "USD 20k-25k monthly revenue"],
    highlights: [
      "Led Operations, Learning Management, and Support functions scaling team to ~90 members",
      "Built SOPs, SLAs, and 20+ quality checkpoints maintaining 80%+ SLA adherence",
      "Established Learning Managers function driving USD 20k-25k monthly revenue",
      "Owned delivery for 250+ simultaneous online sessions/webinars",
    ],
  },
  {
    company: "Intellipaat",
    role: "Manager, Customer Operations & Technical Support",
    period: "2020 - 2021",
    type: "EdTech, Online Learning Platform",
    context: "EdTech · India",
    metrics: ["50+ team members", "40-45% NPS", "12-15x review growth"],
    highlights: [
      "Led Operations and Technical Support teams of 50+ members",
      "Maintained NPS of 40-45% and trainer satisfaction above 95%",
      "Drove 12-15x increase in monthly positive reviews through CSAT goals",
    ],
  },
  {
    company: "Byju's",
    role: "Product and Retention Expert",
    period: "2018 - 2019",
    type: "EdTech, Online Learning Platform",
    context: "EdTech · India",
    metrics: ["400-500 trial users/year", "~85% retention", "K12 pilot launch"],
    highlights: [
      "Managed retention for 400-500 trial users/year maintaining ~85% retention",
      "Core team member for Disney-Byju's and K12 one-on-one pilots",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5">
            EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-2">
            Building and scaling customer success operations across SaaS and EdTech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-base text-muted-foreground mt-1">{exp.type}</p>
                </div>
                <span className="text-base text-muted-foreground">{exp.period}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-lg text-primary font-medium">{exp.company}</span>
                <ExternalLink className="w-4 h-4 text-primary" />
                <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                  {exp.context}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {exp.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="px-3 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-base text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
