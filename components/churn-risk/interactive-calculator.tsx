"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  HeartHandshake,
  LifeBuoy,
  MessageSquareText,
  Target,
} from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  ChartCard,
  ChartFrame,
  ChartTooltip,
  DashboardCard,
} from "@/components/cs-intelligence/dashboard-ui";
import {
  calculateChi,
  defaultSignals,
  getRiskBand,
  getWeakestSignal,
  riskBands,
  signalFamilies,
  type SignalKey,
  type SignalScore,
} from "@/data/churn-risk";

const signalIcons = {
  adoption: Activity,
  engagement: HeartHandshake,
  support: LifeBuoy,
  voc: MessageSquareText,
};

export function InteractiveCalculator() {
  const [signals, setSignals] = useState<SignalScore>(defaultSignals);
  const chi = useMemo(() => calculateChi(signals), [signals]);
  const band = getRiskBand(chi);
  const weakestSignal = getWeakestSignal(signals);
  const radarData = signalFamilies.map((signal) => ({
    signal: signal.shortTitle,
    score: signals[signal.key],
  }));

  function updateSignal(key: SignalKey, value: number) {
    setSignals((current) => ({ ...current, [key]: value }));
  }

  return (
    <section className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
      <DashboardCard>
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Interactive calculator
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              Test the CHI logic
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-500 md:text-right">
            Move any signal. The weighted CHI score, risk band, radar chart, and next-best
            action update instantly.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {signalFamilies.map((signal) => {
            const Icon = signalIcons[signal.key];
            const value = signals[signal.key];

            return (
              <div
                key={signal.key}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="grid grid-cols-[40px_1fr_auto] items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{signal.title}</h3>
                    <p className="mt-1 text-xs text-zinc-500">
                      {Math.round(signal.weight * 100)}% CHI weight
                    </p>
                  </div>
                  <p className="font-mono text-2xl font-bold text-white">{value}</p>
                </div>
                <input
                  aria-label={signal.title}
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(event) => updateSignal(signal.key, Number(event.target.value))}
                  className="mt-6 h-2 w-full accent-[#d6c28b]"
                />
                <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                  <span>Risk</span>
                  <span>Strong</span>
                </div>
              </div>
            );
          })}
        </div>
      </DashboardCard>

      <div className="grid gap-6">
        <DashboardCard className="flex min-h-[380px] flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Customer Health Index
            </p>
            <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row xl:flex-col 2xl:flex-row">
              <ChiGauge score={chi} tone={band.tone} />
              <div className="text-center sm:text-left xl:text-center 2xl:text-left">
                <p className="text-lg font-semibold" style={{ color: band.tone }}>
                  {band.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  Weakest signal:{" "}
                  <span className="font-medium text-zinc-300">{weakestSignal.title}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border-l-2 bg-white/[0.03] p-4" style={{ borderColor: band.tone }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Next Best Action
            </p>
            <p className="mt-2 text-base font-semibold text-white">{band.nextBestAction}</p>
          </div>
        </DashboardCard>

        <ChartCard
          eyebrow="Signal balance"
          title="What is driving this customer's health score?"
          note="CHI weights and demo account data are illustrative for portfolio presentation."
        >
          <ChartFrame>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#27272a" />
                <PolarAngleAxis dataKey="signal" tick={{ fill: "#a1a1aa", fontSize: 12 }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  dataKey="score"
                  name="Signal score"
                  stroke="#9aa9ff"
                  fill="#9aa9ff"
                  fillOpacity={0.24}
                  strokeWidth={2}
                />
                <Tooltip content={<ChartTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>
      </div>

      <div className="xl:col-span-2">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {riskBands.map((riskBand) => (
            <div
              key={riskBand.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-white">{riskBand.label}</h3>
                <span
                  className="rounded-full border px-2.5 py-1 font-mono text-[11px]"
                  style={{ borderColor: riskBand.tone, color: riskBand.tone }}
                >
                  {riskBand.range}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-500">{riskBand.motion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChiGauge({ score, tone }: { score: number; tone: string }) {
  return (
    <div
      className="grid h-36 w-36 place-items-center rounded-full"
      style={{
        background: `conic-gradient(${tone} ${score * 3.6}deg, #27272a 0deg)`,
      }}
    >
      <div className="grid h-28 w-28 place-items-center rounded-full border border-white/10 bg-zinc-950 text-center">
        <div>
          <p className="font-mono text-4xl font-bold tracking-tight text-white">{score}</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">CHI</p>
        </div>
      </div>
    </div>
  );
}
