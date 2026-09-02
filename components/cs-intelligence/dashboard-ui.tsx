"use client";

import type { ReactNode } from "react";
import type { TooltipProps } from "recharts";
import { Badge } from "@/components/ui/badge";
import { money } from "@/data/cs-intelligence";

export const chartColors = {
  white: "#f4f4f5",
  muted: "#71717a",
  grid: "#27272a",
  gold: "#d6c28b",
  blue: "#9aa9ff",
  green: "#9fd6bd",
  red: "#d08b8b",
  slate: "#3f3f46",
};

export function ToolChips({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((tool) => (
        <Badge key={tool} variant="metric">
          {tool}
        </Badge>
      ))}
    </div>
  );
}

export function DashboardCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-panel p-5 transition-colors hover:border-white/10 md:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
}) {
  return (
    <DashboardCard className="relative min-h-[132px]">
      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
        {icon}
      </div>
      <p className="max-w-[70%] text-xs font-semibold uppercase tracking-widest text-zinc-500">
        {label}
      </p>
      <p className="mt-5 text-3xl font-bold tracking-tight text-white">{value}</p>
      <p className="mt-2 text-xs leading-relaxed text-zinc-500">{detail}</p>
    </DashboardCard>
  );
}

export function ChartCard({
  eyebrow,
  title,
  detail,
  note,
  children,
  className = "",
}: {
  eyebrow: string;
  title: string;
  detail?: string;
  note?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <DashboardCard className={className}>
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{eyebrow}</p>
          <h3 className="mt-2 text-lg font-bold tracking-tight text-white">{title}</h3>
        </div>
        {detail ? (
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500 md:text-right">{detail}</p>
        ) : null}
      </div>
      {children}
      {note ? <p className="mt-4 text-xs leading-relaxed text-zinc-600">{note}</p> : null}
    </DashboardCard>
  );
}

export function InsightCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <DashboardCard>
      <div className="flex gap-4">
        {icon ? (
          <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
            {icon}
          </div>
        ) : null}
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <div className="mt-2 text-sm leading-relaxed text-zinc-400">{children}</div>
        </div>
      </div>
    </DashboardCard>
  );
}

export function DashboardTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-white/10 px-3 pb-3 text-left text-[11px] font-semibold uppercase tracking-widest text-zinc-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="transition-colors hover:bg-white/[0.03]">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border-b border-white/5 px-3 py-4 text-zinc-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ChartTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 shadow-2xl">
      <p className="mb-1 font-semibold text-white">{label}</p>
      {payload.map((item) => (
        <p key={item.dataKey} style={{ color: item.color }}>
          {item.name}:{" "}
          {typeof item.value === "number" && item.value > 1000 ? money(item.value) : item.value}
        </p>
      ))}
    </div>
  );
}

export function ChartFrame({ children, tall = false }: { children: ReactNode; tall?: boolean }) {
  return <div className={tall ? "h-[340px]" : "h-[280px]"}>{children}</div>;
}

export const illustrativeNote =
  "Illustrative trend visualization based on the original operating model.";
