"use client";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  LifeBuoy,
  MessageSquareText,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";
import { DashboardCard } from "@/components/cs-intelligence/dashboard-ui";
import { signalFamilies } from "@/data/churn-risk";

const signalIcons = [Activity, HeartHandshake, LifeBuoy, MessageSquareText];

export function SignalArchitecture() {
  return (
    <DashboardCard className="overflow-hidden">
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Signal architecture
        </p>
        <h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-white md:text-3xl">
          Four customer signal families feed one CHI score and one action queue.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.25fr_120px_0.85fr_120px_1fr] lg:items-center">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {signalFamilies.map((signal, index) => {
            const Icon = signalIcons[index];

            return (
              <div
                key={signal.key}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                      {signal.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">{signal.summary}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {signal.examples.slice(0, 5).map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-zinc-400"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden justify-center text-zinc-700 lg:grid lg:grid-rows-4 lg:gap-12">
          {signalFamilies.map((signal) => (
            <ArrowRight key={signal.key} className="h-5 w-5" />
          ))}
        </div>

        <div className="rounded-[1.25rem] border border-[#d6c28b]/25 bg-[radial-gradient(circle_at_50%_0%,rgba(214,194,139,0.18),transparent_62%),rgba(255,255,255,0.03)] p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6c28b]/25 bg-[#d6c28b]/10 text-[#d6c28b]">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[#d6c28b]">
            CHI Engine
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
            Weighted Customer Health Score
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            15+ checkpoints rolled into four signal families.
          </p>
          <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-3 font-mono text-[11px] leading-relaxed text-zinc-400">
            CHI = (Adoption x 35%) + (Engagement x 25%) + (Support x 20%) + (VoC x
            20%)
          </div>
        </div>

        <div className="hidden justify-center text-zinc-700 lg:flex">
          <ArrowRight className="h-6 w-6" />
        </div>
        <div className="flex justify-center text-zinc-700 lg:hidden">
          <ArrowDown className="h-5 w-5" />
        </div>

        <div className="grid gap-3">
          {[
            {
              icon: ShieldAlert,
              title: "Flag account",
              body: "Healthy, Watch, High Risk, or Critical.",
            },
            {
              icon: Zap,
              title: "Trigger CSM action",
              body: "Route the account into the right playbook.",
            },
            {
              icon: CheckCircle2,
              title: "Track recovery",
              body: "Monitor CHI movement until risk is resolved.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="grid grid-cols-[36px_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardCard>
  );
}
