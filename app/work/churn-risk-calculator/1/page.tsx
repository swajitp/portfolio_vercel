import type { Metadata } from "next";
import { ChurnRiskCalculatorClientPage } from "../client-page";

export const metadata: Metadata = {
  title: "Weighted Customer Health Index | Swajit Patwari",
  description: "A rules-based Customer Health Index that combines adoption, engagement, support, and Voice of Customer signals into churn-risk prioritization.",
};

export default function WeightedChurnRiskPage() {
  return <ChurnRiskCalculatorClientPage initialActive="weighted" />;
}
