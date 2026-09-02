"use client";

import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

interface ExperienceItem {
  company: string;
  companyUrl: string;
  detailUrl?: string;
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
    companyUrl: "https://www.wooqer.com/",
    detailUrl: "/wooqer-experience",
    role: "Customer Success Operations Lead | Program Manager",
    period: "2022 - 2025",
    type: "SaaS, B2B Workflow Automation",
    context: "B2B SaaS · India / MENA / US",
    metrics: ["$6M ARR", "20%+ MoM growth", "60 to 30 day payment cycle"],
    highlights: [
      "Owned CS Operations across 8 pods, directly managing Helpdesk, Skilling, and Onboarding",
      "Built AI-assisted churn-risk scoring identifying 2/3 potential churns before notice",
      "Created dashboard tracking MAU/WAU driving 0.5% NRR lift and 1% retention improvement",
      "Led USD 6M ARR portfolio across Middle East, US, and India with 20%+ MoM adoption growth",
      "Reduced payment cycles from 60+ days to 30 days through RevOps optimization",
    ],
  },
  {
    company: "Intellipaat",
    companyUrl: "https://intellipaat.com/",
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
    companyUrl: "https://intellipaat.com/",
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
    companyUrl: "https://byjus.com/",
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
  const router = useRouter();

  return (
    <section id="experience" className="site-container py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <SectionEyebrow>EXPERIENCE</SectionEyebrow>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Building and scaling customer success operations across SaaS and EdTech.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-zinc-500">
            My roles have centered on turning post-sales complexity into measurable systems:
            dashboards, retention signals, SOPs, SLAs, onboarding programs, and RevOps workflows.
          </p>
        </Reveal>

        <Reveal delay={120} className="md:col-span-7">
          <div className="section-panel h-full p-6 transition-colors hover:border-white/10 md:p-8">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <article
              key={index}
              role={exp.detailUrl ? "link" : undefined}
              tabIndex={exp.detailUrl ? 0 : undefined}
              onClick={() => {
                if (exp.detailUrl) router.push(exp.detailUrl);
              }}
              onKeyDown={(event) => {
                if (exp.detailUrl && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  router.push(exp.detailUrl);
                }
              }}
                  className={`group relative border-l border-white/10 pl-6 transition-colors hover:border-white ${
                exp.detailUrl
                      ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  : ""
              }`}
            >
                  <div className="mb-1 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => event.stopPropagation()}
                      className="inline-flex w-fit items-center gap-2 rounded-sm text-xl font-bold text-white transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      {exp.company}
                      <ExternalLink className="h-4 w-4 text-zinc-500" />
                    </a>
                    <span className="font-mono text-xs text-zinc-500">{exp.period}</span>
                  </div>

                  <div className="mb-2 font-medium text-zinc-300">{exp.role}</div>
                  <p className="mb-4 text-sm text-zinc-500">{exp.type} / {exp.context}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {exp.metrics.map((metric) => (
                      <Badge key={metric} variant="metric">
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
                </div>
              </div>
        </Reveal>
      </div>
    </section>
  );
}
