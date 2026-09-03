"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ChurnRiskModelsCombined } from "@/components/churn-risk-combined/churn-risk-models-combined";
import "@/components/churn-risk-combined/churn-risk-models-combined.css";

export function ChurnRiskCalculatorClientPage({ initialActive = "weighted" }: { initialActive?: "weighted" | "ai" }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-[min(1240px,92vw)] pt-8 md:pt-10">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>
      <ChurnRiskModelsCombined initialActive={initialActive} />
    </div>
  );
}
