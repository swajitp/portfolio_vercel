import type { Metadata } from "next";
import { ChurnRiskCalculatorClientPage } from "./client-page";

export const metadata: Metadata = {
  title: "Churn Risk Calculator | Swajit Patwari",
  description:
    "A multi-signal Customer Health Index that turns product, relationship, support, and Voice of Customer signals into a prioritized churn-risk workflow.",
};

export default function ChurnRiskCalculatorPage() {
  return <ChurnRiskCalculatorClientPage />;
}
