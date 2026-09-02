export type SignalKey = "adoption" | "engagement" | "support" | "voc";

export type RiskBandName = "Healthy" | "Watch" | "High Risk" | "Critical";

export type SignalScore = Record<SignalKey, number>;

export const churnTools = ["Google Sheets", "HubSpot", "Gainsight", "Power BI"];

export const defaultSignals: SignalScore = {
  adoption: 72,
  engagement: 78,
  support: 67,
  voc: 74,
};

export const signalFamilies = [
  {
    key: "adoption",
    title: "Product Adoption & Usage",
    shortTitle: "Adoption",
    weight: 0.35,
    examples: [
      "MAU / WAU",
      "login frequency",
      "feature adoption",
      "adoption depth",
      "onboarding completion",
      "activation",
      "usage trends",
    ],
    summary: "Usage, activation, adoption depth",
  },
  {
    key: "engagement",
    title: "Engagement & Relationship",
    shortTitle: "Engagement",
    weight: 0.25,
    examples: [
      "executive sponsor health",
      "meeting cadence",
      "responsiveness",
      "stakeholder engagement",
      "success-plan progress",
      "relationship strength",
    ],
    summary: "Sponsor health, cadence, success plans",
  },
  {
    key: "support",
    title: "Support & Technical Health",
    shortTitle: "Support",
    weight: 0.2,
    examples: [
      "support ticket volume",
      "P0/P1 issues",
      "issue ageing",
      "escalations",
      "unresolved product issues",
      "recurring technical friction",
    ],
    summary: "Severity, ageing, escalations",
  },
  {
    key: "voc",
    title: "Voice of Customer (VoC)",
    shortTitle: "VoC",
    weight: 0.2,
    examples: [
      "NPS",
      "CSAT",
      "detractor signals",
      "qualitative feedback",
      "customer sentiment",
      "renewal confidence",
    ],
    summary: "NPS, CSAT, sentiment",
  },
] as const;

export const riskBands = [
  {
    label: "Healthy",
    range: "75-100",
    motion: "Maintain value and explore expansion.",
    nextBestAction: "Maintain value & explore expansion",
    tone: "#9fd6bd",
  },
  {
    label: "Watch",
    range: "55-74",
    motion: "Target the weakest signal with a 30-day intervention.",
    nextBestAction: "Target weakest signal with a 30-day plan",
    tone: "#d6c28b",
  },
  {
    label: "High Risk",
    range: "35-54",
    motion: "Launch a formal customer recovery plan.",
    nextBestAction: "Launch formal recovery plan",
    tone: "#d0a18b",
  },
  {
    label: "Critical",
    range: "0-34",
    motion: "Executive save motion immediately.",
    nextBestAction: "Executive save motion immediately",
    tone: "#d08b8b",
  },
] as const;

export const demoAccounts = [
  {
    account: "Enterprise E",
    chi: 32,
    trend: -19,
    risk: "Critical",
    primarySignal: "Adoption collapse + unresolved support",
    nextBestAction: "Save plan + leadership sponsor",
  },
  {
    account: "Mid-market C",
    chi: 43,
    trend: -14,
    risk: "High Risk",
    primarySignal: "Low engagement + NPS detractor",
    nextBestAction: "Executive intervention",
  },
  {
    account: "Scaled D",
    chi: 55,
    trend: -5,
    risk: "Watch",
    primarySignal: "Onboarding lag",
    nextBestAction: "Enablement sprint",
  },
  {
    account: "Enterprise B",
    chi: 61,
    trend: -8,
    risk: "Watch",
    primarySignal: "Usage decline + 2 P1 issues",
    nextBestAction: "30-day recovery plan",
  },
  {
    account: "Enterprise A",
    chi: 84,
    trend: 6,
    risk: "Healthy",
    primarySignal: "Strong adoption + sponsor engagement",
    nextBestAction: "Expansion discovery",
  },
] as const;

export const workflowSteps = [
  {
    number: "01",
    title: "Ingest",
    description: "Pull product, CRM, support, and customer-feedback signals.",
  },
  {
    number: "02",
    title: "Normalize",
    description: "Convert 15+ checkpoints into comparable health signals.",
  },
  {
    number: "03",
    title: "Score",
    description: "Calculate CHI and identify the weakest health pillar.",
  },
  {
    number: "04",
    title: "Flag",
    description: "Classify the account as Healthy, Watch, High Risk, or Critical.",
  },
  {
    number: "05",
    title: "Route",
    description: "Trigger the appropriate CSM playbook and next-best action.",
  },
  {
    number: "06",
    title: "Review",
    description: "Track CHI movement until the risk is resolved.",
  },
] as const;

export const caseStudyStory = [
  {
    title: "The Problem",
    body: "Customer health signals were fragmented across product usage, customer conversations, support issues, and feedback, making risk identification reactive.",
  },
  {
    title: "The Approach",
    body: "Created a Customer Health Index combining 15+ checkpoints across four signal families.",
  },
  {
    title: "The Decision Layer",
    body: "Instead of simply displaying metrics, the model translated health signals into risk categories and next-best actions.",
  },
  {
    title: "The Outcome",
    body: "The model identified 2 of 3 potential churns before formal notice and gave Customer Success teams a more structured way to prioritize intervention.",
  },
] as const;

export const playbookMotions = [
  {
    band: "Healthy",
    start: "Maintain value",
    actions: ["Identify expansion opportunities"],
  },
  {
    band: "Watch",
    start: "Identify weakest signal",
    actions: ["Create targeted intervention"],
  },
  {
    band: "High Risk",
    start: "Recovery plan",
    actions: ["Increase customer engagement", "Resolve blockers"],
  },
  {
    band: "Critical",
    start: "Executive intervention",
    actions: ["Save plan", "Leadership sponsorship"],
  },
] as const;

export function calculateChi(signals: SignalScore) {
  return Math.round(
    signals.adoption * 0.35 +
      signals.engagement * 0.25 +
      signals.support * 0.2 +
      signals.voc * 0.2,
  );
}

export function getRiskBand(score: number) {
  if (score >= 75) return riskBands[0];
  if (score >= 55) return riskBands[1];
  if (score >= 35) return riskBands[2];
  return riskBands[3];
}

export function getWeakestSignal(signals: SignalScore) {
  return signalFamilies.reduce((weakest, signal) =>
    signals[signal.key] < signals[weakest.key] ? signal : weakest,
  );
}
