"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartCard,
  ChartFrame,
  ChartTooltip,
  DashboardCard,
  DashboardTable,
} from "@/components/cs-intelligence/dashboard-ui";
import { demoAccounts, getRiskBand } from "@/data/churn-risk";

export function RiskQueue() {
  const chartData = [...demoAccounts].reverse();

  return (
    <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <ChartCard
        eyebrow="Portfolio prioritization"
        title="Accounts sorted by CHI"
        detail="A quick view of where CSM attention should go first."
      >
        <ChartFrame tall>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 8, right: 18, left: 18, bottom: 8 }}
            >
              <CartesianGrid stroke="#27272a" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fill: "#71717a", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                dataKey="account"
                type="category"
                width={96}
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="chi" name="CHI" radius={[0, 8, 8, 0]}>
                {chartData.map((account) => (
                  <Cell key={account.account} fill={getRiskBand(account.chi).tone} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartFrame>
      </ChartCard>

      <DashboardCard>
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Risk queue
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
            Flagged accounts & next best action
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            Anonymized/demo portfolio data, sorted from highest risk to lowest risk.
          </p>
        </div>
        <DashboardTable
          headers={["Account", "CHI", "Trend", "Risk", "Primary Signal", "Next Best Action"]}
          rows={demoAccounts.map((account) => {
            const band = getRiskBand(account.chi);

            return [
              <span key="account" className="font-semibold text-white">
                {account.account}
              </span>,
              <span key="chi" className="font-mono text-base font-bold" style={{ color: band.tone }}>
                {account.chi}
              </span>,
              <span
                key="trend"
                className={account.trend < 0 ? "text-[#d08b8b]" : "text-[#9fd6bd]"}
              >
                {account.trend > 0 ? `+${account.trend}` : account.trend}
              </span>,
              <span
                key="risk"
                className="rounded-full border px-2.5 py-1 text-xs font-medium"
                style={{ borderColor: band.tone, color: band.tone }}
              >
                {account.risk}
              </span>,
              <span key="signal">{account.primarySignal}</span>,
              <span key="action">{account.nextBestAction}</span>,
            ];
          })}
        />
      </DashboardCard>
    </section>
  );
}
