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
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5">
            STACK & TOOLS
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {toolGroups.map((group) => (
            <div key={group.category} className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
