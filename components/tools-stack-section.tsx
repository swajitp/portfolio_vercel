import { SectionEyebrow } from "@/components/section-eyebrow";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

const toolGroups = [
  {
    category: "CRM & CS Platforms",
    tools: ["HubSpot", "Salesforce", "Gainsight", "ChurnZero"],
  },
  {
    category: "Automation",
    tools: ["Zapier", "n8n"],
  },
  {
    category: "Analytics & BI",
    tools: ["Redash", "Power BI", "Google Sheets"],
  },
  {
    category: "Project & Ops",
    tools: ["Jira", "Notion", "Wooqer"],
  },
];

export function ToolsStackSection() {
  return (
    <section className="site-container py-16">
      <Reveal>
        <div className="mb-8">
          <SectionEyebrow>STACK & TOOLS</SectionEyebrow>
        </div>

        <div className="grid gap-6 rounded-[2rem] border border-white/5 bg-zinc-900/30 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-4">
          {toolGroups.map((group) => (
            <div key={group.category} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <Badge key={tool} variant="tag">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
