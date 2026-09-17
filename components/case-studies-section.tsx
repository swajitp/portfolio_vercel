import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowUpRight,
  Clock3,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

const caseStudies = [
  {
    visual: "dashboard" as const,
    title: "CS Org dashboard",
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
    title: "AI Churn Risk Calculator",
    category: "Retention & Prevention",
    description:
      "Designed an AI-assisted churn-risk scoring system using 15+ checkpoints to identify at-risk accounts before notice.",
    metrics: ["2 of 3 churns predicted", "Early warning system", "Proactive outreach"],
    tags: ["Automation", "AI", "Retention"],
    href: "/work/churn-risk-calculator",
    aiEnabled: true,
  },
  {
    visual: "knowledge" as const,
    title: "n8n · AI Knowledge Base Automation",
    category: "Knowledge & Automation",
    description:
      "An independent n8n prototype that turns resolved support cases into reusable article drafts, with human review before publication.",
    metrics: [],
    tags: ["n8n", "Zoho Desk", "AI"],
    href: "/work/knowledge-base-automation",
    aiEnabled: true,
  },
  {
    visual: "revops" as const,
    title: "RevOps, Time-to-pay project",
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

function GraphicTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative z-10 shrink-0">
      <div className="text-5xl lg:text-[40px] xl:text-5xl font-bold tracking-tighter text-[#c9bb82]">{title}</div>
      <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-300">{subtitle}</div>
    </div>
  );
}

function ProjectGraphic({ visual }: { visual: (typeof caseStudies)[number]["visual"] }) {
  const labels = {
    dashboard: ["CS Org", "Portfolio health, in focus."],
    risk: ["Churn", "Risk, made visible."],
    knowledge: ["n8n", "Knowledge, captured."],
    revops: ["RevOps", "Payments, moving faster."],
  };
  const [title, subtitle] = labels[visual];

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.1rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] px-4 pb-4 pt-10">
      <GraphicTitle title={title} subtitle={subtitle} />
      <div aria-hidden="true" className="relative mt-4 min-h-0 flex-1 border-t border-white/5 pt-3 text-zinc-500">
        {visual === "dashboard" && (
          <div className="flex h-full items-end gap-2 border-b border-white/10 opacity-40">
            {[38, 52, 45, 68, 61, 78, 72].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-sm bg-zinc-500" style={{ height: `${height}%` }} />
            ))}
          </div>
        )}
        {visual === "risk" && (
          <div className="flex h-full items-center justify-center gap-5 opacity-40">
            <div className="relative aspect-square h-full max-h-20 rounded-full border border-zinc-500">
              <div className="absolute inset-[22%] rounded-full border border-zinc-500" />
              <div className="absolute left-1/2 top-1/2 h-px w-[43%] origin-left -rotate-[28deg] bg-zinc-300" />
            </div>
            <AlertTriangle className="h-6 w-6 shrink-0" />
          </div>
        )}
        {visual === "knowledge" && (
          <Image
            src="/images/knowledge-base/n8n-workflow.png"
            alt=""
            width={2048}
            height={914}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-contain opacity-30"
          />
        )}
        {visual === "revops" && (
          <div className="flex h-full items-center justify-between gap-3 opacity-40">
            <div>
              <div className="text-[9px] uppercase tracking-widest">Time to pay</div>
              <div className="mt-1 whitespace-nowrap text-2xl font-semibold">60 → 30</div>
            </div>
            <Clock3 className="h-7 w-7 shrink-0" />
          </div>
        )}
      </div>
    </div>
  );
}

function StudyCard({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <>
      <div className="relative mb-4 w-full aspect-[4/3] min-h-[260px] overflow-hidden rounded-[1.5rem] border border-white/5 bg-zinc-900 p-4 shadow-2xl md:mb-6">
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
          <div className="pointer-events-none absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 text-zinc-300 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
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
