import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Clock3,
  Gauge,
  MessageSquareMore,
  MessageCircle,
  ReceiptText,
  Star,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

const caseStudies = [
  {
    visual: "dashboard" as const,
    title: "CS Operations Dashboard",
    category: "Analytics & Visibility",
    description:
      "Built a live Customer Success dashboard tracking MAU/WAU, product engagement, and NPS across the full portfolio.",
    metrics: ["0.5% NRR lift", "1% retention improvement", "Real-time visibility"],
    tags: ["Power BI", "HubSpot", "Gainsight"],
    href: "/work/cs-intelligence",
    aiEnabled: false,
  },
  {
    visual: "risk" as const,
    title: "Churn Risk Calculator",
    category: "Retention & Prevention",
    description:
      "Designed an AI-assisted churn-risk scoring system using 15+ checkpoints to identify at-risk accounts before notice.",
    metrics: ["2 of 3 churns predicted", "Early warning system", "Proactive outreach"],
    tags: ["Automation", "AI", "Retention"],
    href: "/work/churn-risk-calculator",
    aiEnabled: true,
  },
  {
    visual: "reviews" as const,
    title: "Support Review Growth System",
    category: "Customer Experience",
    description:
      "Transformed support operations by shifting from efficiency metrics to CSAT-focused performance goals.",
    metrics: ["12-15x review increase", "NPS 40-45%", "95%+ trainer satisfaction"],
    tags: ["Support Ops", "CSAT", "Reviews"],
    aiEnabled: false,
  },
  {
    visual: "revops" as const,
    title: "RevOps Payment Optimization",
    category: "Revenue Operations",
    description:
      "Structured RevOps follow-up workflows and billing processes to accelerate payment collection cycles.",
    metrics: ["60+ to 30 days", "50% cycle reduction", "Improved cash flow"],
    tags: ["RevOps", "Billing", "Process"],
    aiEnabled: false,
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="site-container py-20">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <Reveal>
          <SectionEyebrow>SELECTED WORK</SectionEyebrow>
          <h2 className="mt-6 text-4xl font-bold tracking-tighter text-white md:text-6xl">
            Impact-Driven Projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Systems I&apos;ve built that delivered measurable outcomes for customer success,
            retention, and operational efficiency.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-sm text-zinc-500">Selected operating systems and measurable outcomes.</p>
        </Reveal>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {caseStudies.map((study, index) => (
          <Reveal key={study.title} delay={index * 100} className="group">
            <article className={study.href ? "h-full cursor-pointer" : "h-full cursor-default"}>
              {study.href ? (
                <Link
                  href={study.href}
                  className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <StudyCard study={study} />
                </Link>
              ) : (
                <StudyCard study={study} />
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180} className="mt-12">
        <div className="flex flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">Find anything interesting?</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400 md:text-base">
                Let&apos;s connect and chat about it.
              </p>
            </div>
          </div>
          <a
            href="https://linkedin.com/in/swajit"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Connect on LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectGraphic({ visual }: { visual: (typeof caseStudies)[number]["visual"] }) {
  const shell = "relative h-full w-full overflow-hidden rounded-[1.1rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))]";

  if (visual === "dashboard") {
    return (
      <div className={shell}>
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            <BarChart3 className="h-4 w-4 text-zinc-300" /> Portfolio health
          </div>
          <span className="h-2 w-2 rounded-full bg-zinc-500" />
        </div>
        <div className="absolute inset-x-4 bottom-4 top-12 rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="mb-3 grid grid-cols-3 gap-2">
            {["NRR", "WAU", "NPS"].map((label, i) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.025] p-2">
                <div className="text-[9px] text-zinc-600">{label}</div>
                <div className="mt-1 h-1.5 rounded-full bg-zinc-800">
                  <div className="h-full rounded-full bg-zinc-400" style={{ width: `${[72, 58, 81][i]}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex h-16 items-end gap-2 border-b border-l border-white/10 pl-2 pb-1">
            {[38, 52, 45, 68, 61, 78, 72].map((height, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-zinc-500/70" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (visual === "risk") {
    return (
      <div className={shell}>
        <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <Gauge className="h-4 w-4 text-zinc-300" /> Risk intelligence
        </div>
        <div className="absolute left-1/2 top-[58%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10">
          <div className="absolute inset-3 rounded-full border border-white/10" />
          <div className="absolute inset-7 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-px w-[72px] origin-left -rotate-[28deg] bg-zinc-400" />
          <div className="absolute left-[71%] top-[32%] h-3 w-3 rounded-full border border-zinc-300 bg-zinc-950 shadow-[0_0_0_5px_rgba(255,255,255,0.05)]" />
          <AlertTriangle className="absolute -right-6 bottom-1 h-6 w-6 text-zinc-400" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 text-center text-[9px] text-zinc-600">
          <span>Signals</span><span>Score</span><span>Action</span>
        </div>
      </div>
    );
  }

  if (visual === "reviews") {
    return (
      <div className={shell}>
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            <MessageSquareMore className="h-4 w-4 text-zinc-300" /> Customer voice
          </div>
          <TrendingUp className="h-4 w-4 text-zinc-500" />
        </div>
        <div className="absolute left-4 right-4 top-12 rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < 4 ? "fill-zinc-300 text-zinc-300" : "text-zinc-700"}`} />
            ))}
          </div>
          <div className="mt-4 flex h-16 items-end gap-2">
            {[24, 35, 48, 62, 82].map((height, i) => (
              <div key={i} className="flex-1 rounded-t-sm border border-white/5 bg-zinc-500/70" style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[9px] text-zinc-600"><span>Before</span><span>Review growth</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className={shell}>
      <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
        <ReceiptText className="h-4 w-4 text-zinc-300" /> Payment cycle
      </div>
      <div className="absolute left-4 right-4 top-12 rounded-xl border border-white/10 bg-black/20 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-zinc-600">Cycle time</div>
            <div className="mt-1 text-xl font-semibold text-zinc-200">60 → 30</div>
          </div>
          <Clock3 className="h-7 w-7 text-zinc-500" />
        </div>
        <div className="mt-4 space-y-2">
          {["Invoice sent", "Follow-up", "Payment"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-zinc-500 bg-zinc-950" />
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-[9px] text-zinc-600">{label}</span>
              {i < 2 ? <ArrowUpRight className="h-3 w-3 text-zinc-600" /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StudyCard({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <>
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/5 bg-zinc-900 p-4 shadow-2xl md:mb-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.055),transparent_35%),linear-gradient(135deg,rgba(39,39,42,0.94),rgba(9,9,11,0.99))]" />
        <div className="relative h-full transition-transform duration-500 group-hover:scale-[1.015]">
          <ProjectGraphic visual={study.visual} />
        </div>
        {study.aiEnabled ? (
          <div className="pointer-events-none absolute right-6 top-6 inline-flex items-center rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-zinc-200 backdrop-blur-sm">
            AI-enabled ✨
          </div>
        ) : null}
        {study.href ? (
          <div className="pointer-events-none absolute right-6 top-16 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 text-zinc-300 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        ) : null}
      </div>

      <div className="px-1">
        <div className="mb-3">
          <h3 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-zinc-300 md:text-xl">
            {study.title}
          </h3>
          <p className="text-sm font-medium text-zinc-500">{study.category}</p>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">{study.description}</p>
        <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="tag">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}
