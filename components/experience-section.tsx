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
  period: string;
  roles: {
    role: string;
    period?: string;
    type?: string;
    context?: string;
    metrics: string[];
    highlights: string[];
  }[];
}

const experienceTags = [
  "Customer Success",
  "Adoption",
  "Retention",
  "Renewals",
  "Customer Health",
  "Risk Management",
  "Automation",
];

const experiences: ExperienceItem[] = [
  {
    company: "Wooqer",
    companyUrl: "https://www.wooqer.com/",
    detailUrl: "/wooqer-experience",
    period: "2022 - 2025",
    roles: [
      {
        role: "Customer Success Manager",
        period: "2024 - 2025",
        type: "SaaS, B2B Workflow Automation",
        context: "India / MENA / US",
        metrics: ["120 accounts", "95% retention", "115% NRR"],
        highlights: [
          "Managed 120 B2B SaaS accounts across onboarding, adoption, renewals, and risk while maintaining 95% logo retention and 115% NRR.",
        ],
      },
      {
        role: "Customer Success Operations Lead | Program Manager",
        period: "2022 - 2024",
        metrics: ["8 CS pods", "2/3 churn risks identified", "60 → 30 day payment cycle"],
        highlights: [
          "Built customer success systems across 8 teams, including health models, dashboards, playbooks, and automations that improved churn visibility and operational efficiency.",
        ],
      },
    ],
  },
  {
    company: "Intellipaat",
    companyUrl: "https://intellipaat.com/",
    period: "2021 - 2022",
    roles: [
      {
        role: "Head of Operations (Customer Success & Post-Sales)",
        type: "EdTech, Online Learning Platform",
        context: "EdTech · India",
        metrics: ["~90 member org", "250+ live sessions", "80%+ SLA"],
        highlights: [
          "Scaled post-sales operations to ~90 team members while building SOPs, SLAs, and quality systems supporting 250+ simultaneous sessions.",
        ],
      },
    ],
  },
  {
    company: "Intellipaat",
    companyUrl: "https://intellipaat.com/",
    period: "2020 - 2021",
    roles: [
      {
        role: "Manager, Customer Operations & Technical Support",
        type: "EdTech, Online Learning Platform",
        context: "EdTech · India",
        metrics: ["50+ team members", "40-45 NPS", "12-15× review growth"],
        highlights: [
          "Led 50+ team members across customer operations and support while maintaining 40-45 NPS and driving 12-15× growth in positive reviews.",
        ],
      },
    ],
  },
  {
    company: "Byju's",
    companyUrl: "https://byjus.com/",
    period: "2018 - 2019",
    roles: [
      {
        role: "Product & Retention Expert",
        type: "EdTech, Online Learning Platform",
        context: "EdTech · India",
        metrics: ["400–500 customers/year", "~85% retention", "K–12 pilots"],
        highlights: [
          "Managed 400–500 customers annually with ~85% retention and supported the launch of Disney-BYJU'S and K–12 one-on-one pilots.",
        ],
      },
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
            Customer Success, backed by strong operations.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-zinc-500">
            7+ years across SaaS and EdTech, helping customers adopt products, realize value,
            manage risk, and retain & grow accounts.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {experienceTags.map((tag) => (
              <Badge key={tag} variant="metric">
                {tag}
              </Badge>
            ))}
          </div>
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

                  <div className="space-y-6">
                    {exp.roles.map((role, roleIndex) => (
                      <div
                        key={`${role.role}-${role.period}`}
                        className={roleIndex > 0 ? "border-t border-white/10 pt-5" : ""}
                      >
                        <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                          <div className="font-medium text-zinc-300">{role.role}</div>
                          {role.period ? (
                            <span className="font-mono text-xs text-zinc-500">
                              {role.period}
                            </span>
                          ) : null}
                        </div>
                        {role.type && role.context ? (
                          <p className="mb-4 text-sm text-zinc-500">
                            {role.type} · {role.context}
                          </p>
                        ) : null}

                        <div className="mb-5 flex flex-wrap gap-2">
                          {role.metrics.map((metric) => (
                            <Badge key={metric} variant="metric">
                              {metric}
                            </Badge>
                          ))}
                        </div>

                        <ul className="space-y-3">
                          {role.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
                </div>
              </div>
        </Reveal>
      </div>
    </section>
  );
}
