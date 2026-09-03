"use client";

import { useState } from "react";
import {
  Activity,
  BriefcaseBusiness,
  Gauge,
  HeartPulse,
  ShieldAlert,
  Sparkles,
  UsersRound,
  Workflow,
  Boxes,
  MessageSquareText,
  CircleDollarSign,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  adoptionBySegment,
  affectedAccounts,
  ageing,
  conversationMix,
  healthMix,
  money,
  npsTrend,
  ownerPipeline,
  pipeline,
  priorityWork,
  riskAccounts,
  trend,
} from "@/data/cs-intelligence";
import {
  ChartCard,
  ChartFrame,
  ChartTooltip,
  DashboardCard,
  DashboardTable,
  InsightCard,
  MetricCard,
  chartColors,
  illustrativeNote,
} from "@/components/cs-intelligence/dashboard-ui";

const pieColors = [chartColors.green, chartColors.gold, chartColors.red, chartColors.blue];

export function OverviewSection() {
  const csmViews = {
    all: {
      label: "All CSMs",
      arr: "$6.0M",
      accounts: 200,
      avgHealth: 78,
      atRisk: 24,
      lifecycle: [
        { stage: "BOB", customers: 200 },
        { stage: "RPI", customers: 164 },
        { stage: "AGS", customers: 131 },
        { stage: "DFR", customers: 97 },
        { stage: "SR", customers: 62 },
      ],
      health: [
        { name: "Healthy", value: 128 },
        { name: "Watch", value: 48 },
        { name: "At Risk", value: 24 },
      ],
      trend: trend,
    },
    csm1: {
      label: "CSM 1",
      arr: "$2.1M",
      accounts: 68,
      avgHealth: 80,
      atRisk: 7,
      lifecycle: [
        { stage: "BOB", customers: 68 },
        { stage: "RPI", customers: 58 },
        { stage: "AGS", customers: 47 },
        { stage: "DFR", customers: 35 },
        { stage: "SR", customers: 24 },
      ],
      health: [
        { name: "Healthy", value: 46 },
        { name: "Watch", value: 15 },
        { name: "At Risk", value: 7 },
      ],
      trend: trend.map((item, index) => ({
        ...item,
        health: item.health + (index % 2 === 0 ? 2 : 1),
        adoption: item.adoption + 2,
        nps: item.nps + 1,
      })),
    },
    csm2: {
      label: "CSM 2",
      arr: "$1.9M",
      accounts: 64,
      avgHealth: 76,
      atRisk: 9,
      lifecycle: [
        { stage: "BOB", customers: 64 },
        { stage: "RPI", customers: 50 },
        { stage: "AGS", customers: 40 },
        { stage: "DFR", customers: 30 },
        { stage: "SR", customers: 18 },
      ],
      health: [
        { name: "Healthy", value: 38 },
        { name: "Watch", value: 17 },
        { name: "At Risk", value: 9 },
      ],
      trend: trend.map((item, index) => ({
        ...item,
        health: item.health - (index % 2 === 0 ? 1 : 2),
        adoption: item.adoption - 1,
        nps: item.nps - 1,
      })),
    },
    csm3: {
      label: "CSM 3",
      arr: "$2.0M",
      accounts: 68,
      avgHealth: 78,
      atRisk: 8,
      lifecycle: [
        { stage: "BOB", customers: 68 },
        { stage: "RPI", customers: 56 },
        { stage: "AGS", customers: 44 },
        { stage: "DFR", customers: 32 },
        { stage: "SR", customers: 20 },
      ],
      health: [
        { name: "Healthy", value: 44 },
        { name: "Watch", value: 16 },
        { name: "At Risk", value: 8 },
      ],
      trend: trend.map((item, index) => ({
        ...item,
        health: item.health + (index > 2 ? 1 : 0),
        adoption: item.adoption + (index % 2),
        nps: item.nps,
      })),
    },
  } as const;

  const [selectedCsm, setSelectedCsm] = useState<keyof typeof csmViews>("all");
  const view = csmViews[selectedCsm];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.025] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Customer 360</p>
          <p className="mt-2 text-sm text-zinc-400">
            Portfolio snapshot by customer owner. Customer-level details remain anonymized.
          </p>
        </div>
        <label className="flex w-full max-w-[220px] flex-col gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Select CSM
          <select
            value={selectedCsm}
            onChange={(event) => setSelectedCsm(event.target.value as keyof typeof csmViews)}
            className="h-11 rounded-2xl border border-white/10 bg-zinc-950 px-4 text-sm font-semibold normal-case tracking-normal text-white outline-none transition-colors hover:border-white/20 focus:border-white/25"
          >
            <option value="all">Select CSM</option>
            <option value="csm1">CSM 1</option>
            <option value="csm2">CSM 2</option>
            <option value="csm3">CSM 3</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Portfolio ARR" value={view.arr} detail={view.label} icon={<BriefcaseBusiness className="h-4 w-4" />} />
        <MetricCard label="Accounts" value={String(view.accounts)} detail="Accounts in current view" icon={<UsersRound className="h-4 w-4" />} />
        <MetricCard label="Average health" value={String(view.avgHealth)} detail="Portfolio health score" icon={<HeartPulse className="h-4 w-4" />} />
        <MetricCard label="At risk" value={String(view.atRisk)} detail="Accounts needing attention" icon={<ShieldAlert className="h-4 w-4" />} />
      </div>

      <ChartCard
        eyebrow="Customer lifecycle"
        title="Customer movement across BOB → RPI → AGS → DFR → SR"
        detail="An anonymized lifecycle view showing how customers progress through the operating model."
      >
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[760px] items-center justify-center gap-0 py-6">
            {view.lifecycle.map((item, index) => {
              const widths = [220, 196, 172, 148, 124];
              return (
                <div key={item.stage} className="flex items-center">
                  <div
                    className="relative flex h-[112px] flex-col items-center justify-center border-y border-l border-white/10 bg-gradient-to-r from-white/[0.075] to-white/[0.035] px-5 text-center last:border-r"
                    style={{
                      width: widths[index],
                      clipPath:
                        index === 0
                          ? "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)"
                          : "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
                    }}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      {item.stage}
                    </span>
                    <span className="mt-2 text-3xl font-bold tracking-tight text-white">{item.customers}</span>
                    <span className="mt-1 text-xs text-zinc-500">customers</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ChartCard>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_.85fr]">
        <ChartCard
          eyebrow="Portfolio trend"
          title="Health, adoption, and NPS in one view"
          detail={`Showing ${view.label.toLowerCase()} across the current portfolio view.`}
          note={illustrativeNote}
        >
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={view.trend}>
                <CartesianGrid stroke={chartColors.grid} vertical={false} />
                <XAxis dataKey="month" stroke={chartColors.muted} />
                <YAxis stroke={chartColors.muted} />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="health" name="Health" stroke={chartColors.green} strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="adoption" name="Adoption" stroke={chartColors.blue} strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="nps" name="NPS" stroke={chartColors.gold} strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>

        <ChartCard
          eyebrow="Portfolio health"
          title="Health distribution"
          detail="Current account mix across healthy, watch, and at-risk states."
        >
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={view.health}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={72}
                  outerRadius={112}
                  paddingAngle={3}
                >
                  {view.health.map((entry, index) => (
                    <Cell key={entry.name} fill={[chartColors.green, chartColors.gold, chartColors.red][index]} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard
          eyebrow="Adoption"
          title="Adoption by customer segment"
          detail="Current versus prior-period adoption gives CSMs a fast read on movement."
        >
          <ChartFrame>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={adoptionBySegment}>
                <CartesianGrid stroke={chartColors.grid} vertical={false} />
                <XAxis dataKey="segment" stroke={chartColors.muted} />
                <YAxis stroke={chartColors.muted} />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                <Bar dataKey="current" name="Current" fill={chartColors.green} radius={[8, 8, 0, 0]} />
                <Bar dataKey="prior" name="Prior" fill={chartColors.slate} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>

        <ChartCard
          eyebrow="Operating flow"
          title="Signal to customer action"
          detail="The dashboard connected customer context, product friction, and commercial follow-through."
        >
          <div className="grid gap-3">
            {[
              ["Health & Usage", "MAU/WAU, onboarding, NPS"],
              ["Customer Context", "Connects, risk, lifecycle"],
              ["Product Friction", "Support and engineering visibility"],
              ["Customer Action", "Adoption, recovery, renewal, expansion"],
            ].map(([title, detail], index) => (
              <div
                key={title}
                className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-zinc-500">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
}

export function HealthRiskSection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Healthy" value="64%" detail="Portfolio mix" icon={<HeartPulse className="h-4 w-4" />} />
        <MetricCard label="Watch" value="24%" detail="Needs intervention" icon={<Activity className="h-4 w-4" />} />
        <MetricCard label="At Risk" value="12%" detail="Priority recovery" icon={<ShieldAlert className="h-4 w-4" />} />
        <MetricCard label="Early warning" value="2 of 3" detail="Potential churns identified early" icon={<Sparkles className="h-4 w-4" />} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard eyebrow="Health mix" title="Account health distribution" detail="Composite view across adoption, support, engagement, and relationship signals.">
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={healthMix} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={4}>
                  {healthMix.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index]} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>

        <ChartCard eyebrow="Adoption" title="Adoption by segment" detail="Used to identify accounts needing enablement before renewal risk appeared." note={illustrativeNote}>
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={adoptionBySegment}>
                <CartesianGrid stroke={chartColors.grid} vertical={false} />
                <XAxis dataKey="segment" stroke={chartColors.muted} />
                <YAxis stroke={chartColors.muted} />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                <Bar dataKey="prior" name="Prior" fill={chartColors.slate} radius={[8, 8, 0, 0]} />
                <Bar dataKey="current" name="Current" fill={chartColors.blue} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>
      </div>

      <ChartCard eyebrow="Intervention queue" title="Anonymized accounts requiring intervention" detail="No customer names, ticket subjects, Jira IDs, or private links are exposed.">
        <DashboardTable
          headers={["Account", "ARR", "Health", "Leading Signal", "Owner", "Next Best Action"]}
          rows={riskAccounts.map((account) => [
            account.account,
            account.arr,
            <span key={account.account} className="rounded-full border border-amber-200/20 bg-amber-100/10 px-2.5 py-1 text-xs font-semibold text-amber-100/80">
              {account.health}
            </span>,
            account.signal,
            account.owner,
            account.action,
          ])}
        />
      </ChartCard>
    </div>
  );
}

export function EngagementSection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="NPS" value="46" detail="Voice of customer" icon={<MessageSquareText className="h-4 w-4" />} />
        <MetricCard label="Response coverage" value="77%" detail="Feedback visibility" icon={<UsersRound className="h-4 w-4" />} />
        <MetricCard label="Adoption connects" value="31%" detail="Of tracked conversations" icon={<Activity className="h-4 w-4" />} />
        <MetricCard label="Risk connects" value="17%" detail="Focused recovery activity" icon={<ShieldAlert className="h-4 w-4" />} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard eyebrow="Voice of customer" title="NPS and response coverage trend" detail="Score movement and coverage were read together to avoid isolated NPS interpretation." note={illustrativeNote}>
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={npsTrend}>
                <CartesianGrid stroke={chartColors.grid} vertical={false} />
                <XAxis dataKey="month" stroke={chartColors.muted} />
                <YAxis stroke={chartColors.muted} />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="score" name="NPS" stroke={chartColors.gold} strokeWidth={3} />
                <Line type="monotone" dataKey="response" name="Response coverage" stroke={chartColors.green} strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>

        <ChartCard eyebrow="Customer motion" title="Conversation distribution" detail="Shows whether teams were spending time on value creation or reactive recovery.">
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={conversationMix} dataKey="value" nameKey="name" outerRadius={110}>
                  {conversationMix.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index]} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>
      </div>

      <InsightCard title="Engagement insight" icon={<Sparkles className="h-4 w-4" />}>
        <p>
          Engagement data becomes useful when it changes the next customer action. This view helped
          move the team from tracking activity to tracking customer outcomes.
        </p>
      </InsightCard>
    </div>
  );
}

export function PipelineSection() {
  const total = pipeline.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Total tracked pipeline" value={money(total)} detail="Across expansion stages" icon={<CircleDollarSign className="h-4 w-4" />} />
        <MetricCard label="Tracked deals" value="14" detail="Anonymized opportunities" icon={<BriefcaseBusiness className="h-4 w-4" />} />
        <MetricCard label="Largest stage" value="$157,100" detail="Potential Opportunity" icon={<Activity className="h-4 w-4" />} />
        <MetricCard label="Closed Won" value="$21,100" detail="Recorded in view" icon={<Gauge className="h-4 w-4" />} />
      </div>

      <ChartCard
        eyebrow="Expansion"
        title="Revenue pipeline flow"
        detail="A left-to-right commercial funnel showing stage progression; aggregate stage totals are shown inside each step."
      >
        <div className="overflow-x-auto pb-3">
          <div className="flex min-w-[980px] items-center py-8">
            {pipeline.map((stage, index) => {
              const heights = [176, 152, 128, 104, 80];
              return (
                <div key={stage.stage} className="flex items-center">
                  <div
                    className={`relative flex flex-col items-center justify-center border-y border-l border-white/10 bg-gradient-to-r from-[#d6c28b]/30 to-[#d6c28b]/12 px-5 text-center last:border-r ${index > 0 ? "-ml-4" : ""}`}
                    style={{
                      width: 188,
                      height: heights[index],
                      clipPath:
                        index === 0
                          ? "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)"
                          : "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%, 12% 50%)",
                    }}
                  >
                    <span className="max-w-[130px] text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                      {stage.stage}
                    </span>
                    <span className="mt-2 text-2xl font-bold tracking-tight text-white">{money(stage.value)}</span>
                    <span className="mt-1 text-xs text-zinc-500">{stage.deals} deals</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ChartCard>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard eyebrow="Ownership" title="Owner distribution" detail="Anonymized CSM labels keep the commercial view portfolio-safe.">
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ownerPipeline}>
                <CartesianGrid stroke={chartColors.grid} vertical={false} />
                <XAxis dataKey="owner" stroke={chartColors.muted} />
                <YAxis stroke={chartColors.muted} tickFormatter={(value) => `$${Math.round(Number(value) / 1000)}k`} />
                <Tooltip content={<ChartTooltip />} />
                <Bar dataKey="pipeline" name="Pipeline" fill={chartColors.blue} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>

        <ChartCard eyebrow="Stage mix" title="Pipeline value by stage" detail="Stage value remains visible alongside the funnel without exposing customer names.">
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipeline}>
                <CartesianGrid stroke={chartColors.grid} vertical={false} />
                <XAxis dataKey="stage" stroke={chartColors.muted} interval={0} angle={-16} textAnchor="end" height={72} />
                <YAxis stroke={chartColors.muted} tickFormatter={(value) => `$${Math.round(Number(value) / 1000)}k`} />
                <Tooltip content={<ChartTooltip />} />
                <Bar dataKey="value" name="Pipeline" fill={chartColors.gold} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>
      </div>

      <ChartCard eyebrow="Stage table" title="Expansion pipeline view">
        <DashboardTable
          headers={["Stage", "Pipeline", "Deals", "CSM Question"]}
          rows={pipeline.map((stage) => [
            stage.stage,
            money(stage.value),
            stage.deals,
            stage.stage === "Potential Opportunity"
              ? "What customer outcome could unlock value?"
              : stage.stage === "Active Conversation"
                ? "Is there a validated problem and sponsor?"
                : stage.stage === "Pitch Qualified"
                  ? "Is value quantified and decision process clear?"
                  : stage.stage === "Proposal Sent"
                    ? "What is blocking the next commitment?"
                    : "What made this expansion successful?",
          ])}
        />
      </ChartCard>
    </div>
  );
}

export function ProductIntelligenceSection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Open Bugs" value="29" detail="P0-P2 summary" icon={<Boxes className="h-4 w-4" />} />
        <MetricCard label="Open Tasks" value="60" detail="Product follow-through" icon={<Workflow className="h-4 w-4" />} />
        <MetricCard label="P1 workload" value="68" detail="25 bugs + 43 tasks" icon={<ShieldAlert className="h-4 w-4" />} />
        <MetricCard label="Traceability" value="Support → Product" detail="Customer issue context" icon={<Activity className="h-4 w-4" />} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard eyebrow="Priority view" title="Product work by priority" detail="CS could understand customer impact without exposing internal issue identifiers.">
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={priorityWork}>
                <CartesianGrid stroke={chartColors.grid} vertical={false} />
                <XAxis dataKey="priority" stroke={chartColors.muted} />
                <YAxis stroke={chartColors.muted} />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                <Bar dataKey="bugs" name="Bugs" fill={chartColors.red} radius={[8, 8, 0, 0]} />
                <Bar dataKey="tasks" name="Tasks" fill={chartColors.blue} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>

        <ChartCard eyebrow="Account impact" title="Anonymized customer impact" detail="Support and product load are grouped under anonymized account labels.">
          <ChartFrame tall>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={affectedAccounts} layout="vertical" margin={{ left: 22 }}>
                <CartesianGrid stroke={chartColors.grid} horizontal={false} />
                <XAxis type="number" stroke={chartColors.muted} />
                <YAxis dataKey="account" type="category" width={112} stroke={chartColors.muted} />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                <Bar dataKey="support" stackId="a" name="Support" fill={chartColors.green} />
                <Bar dataKey="bugs" stackId="a" name="Bugs" fill={chartColors.red} />
                <Bar dataKey="tasks" stackId="a" name="Tasks" fill={chartColors.blue} />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </ChartCard>
      </div>

      <ChartCard
        eyebrow="Traceability flow"
        title="Customer-facing context connected to product work"
        detail="This connected customer-facing support data with product engineering work so CS could understand customer impact and communicate escalations clearly."
      >
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Customer", "Support Ticket", "Jira Issue", "Priority", "Owner", "Status", "Age"].map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="min-w-[116px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center text-xs font-semibold text-zinc-300">
                {step}
              </span>
              {index < 6 ? <span className="text-zinc-600">→</span> : null}
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
}

export function EscalationsSection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="31-150 days" value="31" detail="13 bugs + 18 tasks" icon={<ShieldAlert className="h-4 w-4" />} />
        <MetricCard label="151+ days" value="25" detail="2 bugs + 23 tasks" icon={<Activity className="h-4 w-4" />} />
        <MetricCard label="P0 workload" value="5" detail="2 bugs + 3 tasks" icon={<Gauge className="h-4 w-4" />} />
        <MetricCard label="Escalation lens" value="Impact first" detail="Then severity and age" icon={<Sparkles className="h-4 w-4" />} />
      </div>

      <ChartCard eyebrow="Ageing" title="Issue ageing by work type" detail="Made older, high-impact issues visible before they became relationship or renewal problems." className="xl:col-span-2">
        <ChartFrame tall>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageing}>
              <CartesianGrid stroke={chartColors.grid} vertical={false} />
              <XAxis dataKey="bucket" stroke={chartColors.muted} />
              <YAxis stroke={chartColors.muted} />
              <Tooltip content={<ChartTooltip />} />
              <Legend />
              <Bar dataKey="bugs" name="Bugs" fill={chartColors.red} radius={[8, 8, 0, 0]} />
              <Bar dataKey="tasks" name="Tasks" fill={chartColors.blue} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartFrame>
      </ChartCard>

      <div className="grid gap-6 xl:grid-cols-2">
        <InsightCard title="Escalation rule" icon={<ShieldAlert className="h-4 w-4" />}>
          <p>Prioritize by customer impact first, then severity, then age.</p>
        </InsightCard>
        <InsightCard title="CSM action" icon={<UsersRound className="h-4 w-4" />}>
          <p>
            Translate product status into customer language: what happened, who owns it, what
            happens next, and when the customer will hear from us again.
          </p>
        </InsightCard>
      </div>
    </div>
  );
}
