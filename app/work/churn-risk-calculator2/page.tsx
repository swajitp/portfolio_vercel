import type { Metadata } from "next";
import { ChurnRiskCalculatorClientPage } from "../churn-risk-calculator/client-page";

export const metadata: Metadata = {
  title: "AI-Powered Churn Risk Intelligence | Swajit Patwari",
  description: "A predictive AI churn-risk workflow that learns from historical customer outcomes and prioritizes current accounts for Customer Success review.",
};

export default function AIChurnRiskPage() {
  return <ChurnRiskCalculatorClientPage initialActive="ai" />;
}
