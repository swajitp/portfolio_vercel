"use client";

import { DashboardCard } from "@/components/cs-intelligence/dashboard-ui";

export function ImpactSection() {
  return (
    <section>
      <DashboardCard className="bg-[radial-gradient(circle_at_80%_0%,rgba(214,194,139,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Impact
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Designed to make churn risk visible before the renewal conversation.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">
              Instead of relying on a single lagging indicator, the model combines behavioral,
              relational, technical, and customer-sentiment signals into one decision layer for
              Customer Success teams.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="font-mono text-4xl font-bold tracking-tight text-white">2 of 3</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Potential churns identified before formal notice
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="font-mono text-4xl font-bold tracking-tight text-white">15+</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Risk checkpoints across the customer lifecycle
              </p>
            </div>
          </div>
        </div>
      </DashboardCard>
    </section>
  );
}
