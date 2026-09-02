"use client";

import { ArrowRight, CheckCircle2, GitBranch, Layers3, Route, ScanLine, Target } from "lucide-react";
import { DashboardCard, InsightCard } from "@/components/cs-intelligence/dashboard-ui";
import { caseStudyStory, playbookMotions, workflowSteps } from "@/data/churn-risk";

const workflowIcons = [ScanLine, Layers3, Target, GitBranch, Route, CheckCircle2];

export function OperatingWorkflow() {
  return (
    <section>
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Operating workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            From signal to flag to intervention
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-zinc-500 md:text-right">
          The calculator is valuable because risk produces a clear CSM motion.
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_24px_1fr_24px_1fr_24px_1fr_24px_1fr_24px_1fr] lg:items-stretch">
        {workflowSteps.map((step, index) => {
          const Icon = workflowIcons[index];

          return (
            <div key={step.number} className="contents">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#d6c28b]">{step.number}</span>
                  <Icon className="h-4 w-4 text-zinc-500" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-500">{step.description}</p>
              </div>
              {index < workflowSteps.length - 1 ? (
                <div className="hidden items-center justify-center text-zinc-700 lg:flex">
                  <ArrowRight className="h-4 w-4" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function PlaybookLogic() {
  return (
    <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <DashboardCard>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Playbook logic
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
          Data to decision to CSM action
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          CHI is not just a dashboard score. It translates customer health into a specific
          operating motion.
        </p>
      </DashboardCard>

      <div className="grid gap-3 sm:grid-cols-2">
        {playbookMotions.map((motion) => (
          <DashboardCard key={motion.band}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">{motion.band}</h3>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-400">
                Motion
              </span>
            </div>
            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <p className="font-medium text-zinc-200">{motion.start}</p>
              {motion.actions.map((action) => (
                <div key={action} className="flex items-center gap-3">
                  <ArrowRight className="h-3.5 w-3.5 text-zinc-600" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </DashboardCard>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyStory() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {caseStudyStory.map((item) => (
        <InsightCard key={item.title} title={item.title}>
          {item.body}
        </InsightCard>
      ))}
    </section>
  );
}
