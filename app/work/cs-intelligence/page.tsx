import type { Metadata } from "next";
import { DashboardShell } from "@/components/cs-intelligence/dashboard-shell";

export const metadata: Metadata = {
  title: "Customer 360 | Swajit Patwari",
  description:
    "A connected customer success operating layer across customer health, engagement, product issues, retention, and expansion.",
};

export default function CustomerSuccessIntelligencePage() {
  return <DashboardShell />;
}
