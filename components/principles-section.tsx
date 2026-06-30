import { Eye, Zap, Settings, Users, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";

const principles = [
  {
    icon: Eye,
    title: "Build Visibility",
    description: "Create dashboards and reporting that give leadership clear sight into what matters.",
  },
  {
    icon: Zap,
    title: "Reduce Manual Work",
    description: "Automate repetitive tasks so teams can focus on high-impact customer interactions.",
  },
  {
    icon: Settings,
    title: "Turn Chaos into Systems",
    description: "Transform messy, ad-hoc processes into scalable, documented operational frameworks.",
  },
  {
    icon: Users,
    title: "Align Teams Around Metrics",
    description: "Define KPIs that connect individual work to business outcomes everyone understands.",
  },
  {
    icon: TrendingUp,
    title: "Drive Customer Outcomes",
    description: "Every system I build is designed to improve retention, adoption, or satisfaction.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <SectionEyebrow className="bg-background">HOW I WORK</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Operating Principles
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            The mindset I bring to every operations challenge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group text-center lg:text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-white/5 flex items-center justify-center mx-auto lg:mx-0 mb-4 group-hover:bg-primary/20 transition-colors">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs text-muted-foreground mb-2">0{index + 1}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
