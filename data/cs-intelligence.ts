export const tools = ["Google Sheets", "Redash", "Power BI", "Looker Studio"];

export const trend = [
  { month: "Jan", health: 71, adoption: 63, nps: 37 },
  { month: "Feb", health: 74, adoption: 66, nps: 39 },
  { month: "Mar", health: 72, adoption: 70, nps: 41 },
  { month: "Apr", health: 78, adoption: 73, nps: 43 },
  { month: "May", health: 81, adoption: 77, nps: 45 },
  { month: "Jun", health: 84, adoption: 82, nps: 46 },
];

export const healthMix = [
  { name: "Healthy", value: 64 },
  { name: "Watch", value: 24 },
  { name: "At Risk", value: 12 },
];

export const adoptionBySegment = [
  { segment: "Enterprise", current: 84, prior: 75 },
  { segment: "Mid-market", current: 76, prior: 69 },
  { segment: "Scaled", current: 68, prior: 61 },
];

export const riskAccounts = [
  {
    account: "Enterprise A",
    arr: "$220k",
    health: "41",
    signal: "Usage down 18%",
    owner: "CSM A",
    action: "Executive success plan",
  },
  {
    account: "Enterprise B",
    arr: "$145k",
    health: "48",
    signal: "3 open P1s",
    owner: "CSM B",
    action: "Product escalation",
  },
  {
    account: "Mid-market C",
    arr: "$82k",
    health: "53",
    signal: "NPS detractor",
    owner: "CSM C",
    action: "Recovery call",
  },
  {
    account: "Scaled D",
    arr: "$36k",
    health: "58",
    signal: "Onboarding lag",
    owner: "CSM D",
    action: "Enablement sprint",
  },
];

export const npsTrend = [
  { month: "Jan", score: 39, response: 62 },
  { month: "Feb", score: 41, response: 64 },
  { month: "Mar", score: 40, response: 67 },
  { month: "Apr", score: 43, response: 70 },
  { month: "May", score: 44, response: 73 },
  { month: "Jun", score: 46, response: 77 },
];

export const conversationMix = [
  { name: "Strategic reviews", value: 42 },
  { name: "Adoption connects", value: 31 },
  { name: "Risk connects", value: 17 },
  { name: "Expansion", value: 10 },
];

export const pipeline = [
  { stage: "Potential Opportunity", value: 157100, deals: 2 },
  { stage: "Active Conversation", value: 6000, deals: 2 },
  { stage: "Pitch Qualified", value: 70490, deals: 2 },
  { stage: "Proposal Sent", value: 6900, deals: 8 },
  { stage: "Closed Won", value: 21100, deals: 2 },
];

export const ownerPipeline = [
  { owner: "CSM A", pipeline: 109500 },
  { owner: "CSM B", pipeline: 77600 },
  { owner: "CSM C", pipeline: 72240 },
  { owner: "CSM D", pipeline: 2250 },
];

export const priorityWork = [
  { priority: "P0", bugs: 2, tasks: 3 },
  { priority: "P1", bugs: 25, tasks: 43 },
  { priority: "P2", bugs: 2, tasks: 14 },
];

export const affectedAccounts = [
  { account: "Enterprise A", support: 11, bugs: 4, tasks: 3 },
  { account: "Enterprise B", support: 2, bugs: 2, tasks: 4 },
  { account: "Mid-market C", support: 4, bugs: 2, tasks: 1 },
  { account: "Scaled D", support: 2, bugs: 2, tasks: 2 },
];

export const ageing = [
  { bucket: "1-4 days", bugs: 0, tasks: 1 },
  { bucket: "5-10 days", bugs: 4, tasks: 1 },
  { bucket: "11-30 days", bugs: 8, tasks: 16 },
  { bucket: "31-150 days", bugs: 13, tasks: 18 },
  { bucket: "151+ days", bugs: 2, tasks: 23 },
];

export function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
