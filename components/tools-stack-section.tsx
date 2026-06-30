import { SectionEyebrow } from "@/components/section-eyebrow";
import { Badge } from "@/components/ui/badge";

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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <SectionEyebrow>STACK & TOOLS</SectionEyebrow>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {toolGroups.map((group) => (
            <div key={group.category} className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground-subtle">
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
      </div>
    </section>
  );
}
