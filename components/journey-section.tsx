import { Briefcase, GraduationCap } from "lucide-react";

const journey = [
  {
    type: "work",
    title: "CS Operations Lead | Program Manager",
    company: "Wooqer",
    period: "2022 - 2025",
    description:
      "Owned CS Operations across 8 pods. Built dashboards, churn-risk systems, and led a $6M ARR portfolio with 20%+ MoM adoption growth.",
    highlight: "SaaS Operations & Analytics",
  },
  {
    type: "work",
    title: "Head of Operations",
    company: "Intellipaat",
    period: "2021 - 2022",
    description:
      "Led Operations, Learning Management, and Support scaling to ~90 team members. Built SOPs and quality systems maintaining 80%+ SLA.",
    highlight: "Operations Leadership",
  },
  {
    type: "work",
    title: "Manager, Customer Operations",
    company: "Intellipaat",
    period: "2020 - 2021",
    description:
      "Led 50+ member team. Drove 12-15x increase in positive reviews by shifting from efficiency to CSAT-focused metrics.",
    highlight: "Customer Experience",
  },
  {
    type: "work",
    title: "Product & Retention Expert",
    company: "Byju's",
    period: "2018 - 2019",
    description:
      "Managed retention for 400-500 trial users/year with ~85% retention. Core team for Disney-Byju's pilot launch.",
    highlight: "Customer Retention",
  },
  {
    type: "education",
    title: "MBA, Business Analytics",
    company: "SFU Beedie School of Business",
    period: "2025 - 2026",
    description:
      "Focusing on business analytics and digital transformation to bridge operations expertise with strategic leadership.",
    highlight: "Vancouver, Canada",
  },
];

export function JourneySection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5">
            MY JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Career Timeline
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            From customer retention to leading operations at scale.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {journey.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div
                    className={`bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    } max-w-lg`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {item.type === "education" ? (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="text-primary font-medium">{item.company}</span>
                      <span>•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
