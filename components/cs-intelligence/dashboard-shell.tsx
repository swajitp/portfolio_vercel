"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Boxes,
  CircleDollarSign,
  HeartPulse,
  LayoutDashboard,
  MessageSquareText,
  ShieldAlert,
} from "lucide-react";
import { ToolChips } from "@/components/cs-intelligence/dashboard-ui";
import {
  EngagementSection,
  EscalationsSection,
  HealthRiskSection,
  OverviewSection,
  PipelineSection,
  ProductIntelligenceSection,
} from "@/components/cs-intelligence/dashboard-sections";
import { tools } from "@/data/cs-intelligence";

const sections = [
  {
    id: "customer-360",
    label: "Customer 360",
    icon: LayoutDashboard,
    component: OverviewSection,
  },
  {
    id: "health-risk",
    label: "Health & Risk",
    icon: HeartPulse,
    component: HealthRiskSection,
  },
  {
    id: "engagement-nps",
    label: "Engagement & NPS",
    icon: MessageSquareText,
    component: EngagementSection,
  },
  {
    id: "expansion-pipeline",
    label: "Growth Pipeline",
    icon: CircleDollarSign,
    component: PipelineSection,
  },
  {
    id: "product-intelligence",
    label: "Active Product Bugs and Issues",
    icon: Boxes,
    component: ProductIntelligenceSection,
  },
  {
    id: "escalations",
    label: "Escalations",
    icon: ShieldAlert,
    component: EscalationsSection,
  },
];

export function DashboardShell() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const active = useMemo(
    () => sections.find((section) => section.id === activeSection) ?? sections[0],
    [activeSection],
  );
  const ActiveComponent = active.component;

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

        <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-6">
              <div className="section-panel p-5">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white text-black">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">CS Intelligence</p>
                  </div>
                </div>
                <nav className="space-y-2" aria-label="Dashboard sections">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => setActiveSection(section.id)}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left text-sm transition-colors ${
                          isActive
                            ? "border-white/15 bg-white/10 text-white"
                            : "border-transparent text-zinc-500 hover:border-white/10 hover:bg-white/5 hover:text-zinc-200"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {section.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
              <p className="px-2 text-xs leading-relaxed text-zinc-600">
                Portfolio reconstruction. Customer-level details anonymized for confidentiality.
              </p>
            </div>
          </aside>

          <div className="min-w-0">
            <header className="mb-8 flex justify-end">
              <div className="xl:max-w-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Tools used
                </p>
                <ToolChips tools={tools} />
              </div>
            </header>

            <div className="mb-6 overflow-x-auto border-y border-white/5 py-3 lg:hidden">
              <div className="flex min-w-max gap-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setActiveSection(section.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "border-white/15 bg-white/10 text-white"
                          : "border-white/5 bg-white/[0.03] text-zinc-500"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {section.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Active view
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  {active.label}
                </h2>
              </div>
              <p className="max-w-xl text-xs leading-relaxed text-zinc-600 sm:text-right">
                Portfolio reconstruction. Customer-level details anonymized for confidentiality.
              </p>
            </div>

            <ActiveComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
