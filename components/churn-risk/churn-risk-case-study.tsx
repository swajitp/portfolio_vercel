"use client";

import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { ToolChips } from "@/components/cs-intelligence/dashboard-ui";
import { churnTools } from "@/data/churn-risk";
import { ImpactSection } from "@/components/churn-risk/impact-section";
import { InteractiveCalculator } from "@/components/churn-risk/interactive-calculator";
import { RiskQueue } from "@/components/churn-risk/risk-queue";
import { SignalArchitecture } from "@/components/churn-risk/signal-architecture";
import {
  CaseStudyStory,
  OperatingWorkflow,
  PlaybookLogic,
} from "@/components/churn-risk/workflow-playbook";

export function ChurnRiskCaseStudy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="site-container py-8 md:py-10">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <header className="mt-10 mb-8">
          <SectionEyebrow>Customer Health Intelligence</SectionEyebrow>
          <div className="mt-6 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                Churn Risk Calculator
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
                A multi-signal Customer Health Index that turns product, relationship, support,
                and Voice of Customer signals into a prioritized churn-risk workflow.
              </p>
            </div>
            <div className="xl:max-w-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Tools used
              </p>
              <ToolChips tools={churnTools} />
            </div>
          </div>
        </header>

        <div className="mb-6 grid gap-3 md:grid-cols-2">
          <DisclosureNote>
            Portfolio reconstruction. Customer-level details anonymized for confidentiality.
          </DisclosureNote>
          <DisclosureNote>
            CHI weights and demo account data are illustrative for portfolio presentation.
          </DisclosureNote>
        </div>

        <div className="space-y-8 md:space-y-10">
          <SignalArchitecture />
          <InteractiveCalculator />
          <RiskQueue />
          <OperatingWorkflow />
          <PlaybookLogic />
          <CaseStudyStory />
          <ImpactSection />
        </div>
      </div>
    </main>
  );
}

function DisclosureNote({ children }: { children: string }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-zinc-500">
      <ShieldAlert className="mt-0.5 h-4 w-4 flex-none text-zinc-500" />
      <p>{children}</p>
    </div>
  );
}
