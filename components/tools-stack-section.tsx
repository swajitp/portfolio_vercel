import { SectionEyebrow } from "@/components/section-eyebrow";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

const tools = [
  "HubSpot",
  "Salesforce",
  "Gainsight",
  "ChurnZero",
  "Zapier",
  "n8n",
  "Redash",
  "Power BI",
  "Google Sheets",
  "Jira",
  "Notion",
  "Wooqer",
];

export function ToolsStackSection() {
  return (
    <section id="ai-projects" className="site-container py-8 md:py-10">
      <Reveal>
        <div className="flex flex-col gap-5 border-y border-white/5 py-6 md:flex-row md:items-center md:gap-8">
          <SectionEyebrow>STACK & TOOLS</SectionEyebrow>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="tag">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
