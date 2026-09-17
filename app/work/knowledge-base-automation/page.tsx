import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, FileText, ShieldCheck } from "lucide-react";
import { Flow } from "@/components/knowledge-base/flow";
import { WorkflowImage } from "@/components/knowledge-base/workflow-image";
import styles from "@/components/knowledge-base/knowledge-base.module.css";

export const metadata: Metadata = {
  title: "n8n · AI Knowledge Base Automation",
  description: "An independent n8n prototype that turns resolved support cases into knowledge drafts, with human review before publication.",
};

function Section({ number, label, title, children, id }: { number: string; label: string; title: string; children: ReactNode; id?: string }) {
  return <section id={id} className={styles.section} aria-labelledby={`heading-${number}`}>
    <div className={styles.heading}><div className={styles.eyebrow}>{number} · {label}</div><h2 id={`heading-${number}`}>{title}</h2></div>
    {children}
  </section>;
}

const decisions = [
  { question: "Is this worth saving?", body: "Keep reusable solutions. Skip one-off requests and billing issues.", outcomes: [["KB candidate", "Continue"], ["Not reusable", "Stop"]] },
  { question: "Do we already have it?", body: "Look for an existing answer before adding another article.", outcomes: [["Already documented", "Stop"], ["Gap found", "Continue"]] },
  { question: "Can we write it safely?", body: "Use the resolved case as evidence. Never fill gaps by guessing.", outcomes: [["Enough info", "Draft it"], ["Missing info", "Ask a human"]] },
];

export default function KnowledgeBasePage() {
  return <main className={styles.page}><div className={styles.container}>
    <Link href="/#case-studies" className={styles.back}><ArrowLeft size={15} aria-hidden="true" /> Back to portfolio</Link>
    <header className={styles.hero}>
      <div className={styles.eyebrow}>CUSTOMER SUCCESS OPERATIONS · AI AUTOMATION</div>
      <h1><span className={styles.titleAccent}>n8n</span> · AI Knowledge<br className={styles.desktopBreak} /> Base Automation</h1>
      <p className={styles.subtitle}>Turning resolved support cases into reusable customer knowledge — without adding a single task to the support agent&apos;s plate.</p>
      <ul className={styles.tags} aria-label="Tools and disciplines">{["n8n", "Zoho Desk", "AI", "Knowledge Management", "Customer Success Operations"].map(tag => <li key={tag}>{tag}</li>)}</ul>
      <a href="#the-problem" className={styles.cta}>See how it works <ArrowDown size={16} aria-hidden="true" /></a>
      <p className={styles.context}>I previously managed a manual version of this process at Wooqer. I rebuilt it independently in n8n to explore how AI could remove the administrative overhead. This is a personal prototype, not a Wooqer deployment.</p>
    </header>

    <Section number="01" label="THE PROBLEM" title="Solve the problem. Lose the knowledge." id="the-problem">
      <div className={styles.comparison}>
        <article className={styles.card}><div className={styles.eyebrow}>BEFORE · MANUAL, EASY TO SKIP</div>
          <Flow label="Manual knowledge capture" steps={["Customer solved", "Agent remembers to document", "Checks for duplicates", "Writes article", "Updates tracker", "Sends for review"].map(label => ({ label }))} />
          <p>Every step depended on the agent remembering, on top of their actual job.</p>
        </article>
        <article className={`${styles.card} ${styles.accentCard}`}><div className={styles.eyebrow}>AFTER · AUTOMATIC</div>
          <Flow label="Automated knowledge capture" steps={[{ label: "Customer solved" }, { label: "Ticket closes", note: "Agent’s job ends" }, { label: "Automation takes over", note: "Draft → human review", human: true }]} />
          <p>The agent&apos;s job ends the moment the ticket closes. Everything after is invisible to them.</p>
        </article>
      </div>
      <div className={styles.callout}>Support agents solve customers. The system captures the knowledge.</div>
    </Section>

    <Section number="02" label="THREE DECISIONS" title="Three decisions, one ticket.">
      <div className={styles.decisions}>{decisions.map((decision, index) => <article key={decision.question} className={styles.card}>
        <span className={styles.decisionNumber}>0{index + 1}</span><h3>{decision.question}</h3><p>{decision.body}</p>
        <div className={styles.outcomes}>{decision.outcomes.map(([label, outcome]) => <Flow key={label} label={`${label}: ${outcome}`} steps={[{ label }, { label: outcome, human: outcome === "Ask a human" }]} />)}</div>
      </article>)}</div>
    </Section>

    <Section number="03" label="SEE IT WORK" title="One solved case. A reusable answer.">
      <p className={styles.exampleNote}>Based on a real support scenario. AI decisions and draft preview illustrate the prototype’s intended response.</p>
      <div className={styles.example}>
        <div className={styles.beats}>
          <div><span className={styles.eyebrow}>1 · CUSTOMER ASKED</span><blockquote>“How can I mass assign a process to multiple stores?”</blockquote></div>
          <div><span className={styles.eyebrow}>2 · AGENT RESOLVED IT</span><p>Download the bulk-upload Excel template, enter the users’ details against the process name, then upload it to complete the mass assignment.</p></div>
          <div><span className={styles.eyebrow}>3 · AI’S READ</span><Flow label="Illustrative AI decisions" steps={[{ label: "KB candidate: Yes" }, { label: "No existing article found" }, { label: "Drafting now" }]} /></div>
        </div>
        <article className={`${styles.card} ${styles.draft}`}>
          <div className={styles.draftTop}><FileText size={22} aria-hidden="true" /><span className={styles.pill}>DRAFT · NOT PUBLISHED</span></div>
          <span className={styles.eyebrow}>4 · RESULTING DRAFT PREVIEW</span>
          <h3>How to mass assign a process to multiple stores</h3>
          <p>Use bulk upload to assign a process to multiple users at once. Download the Excel template, fill in the users’ details against the process name, and upload the completed file to make the assignments.</p>
          <div className={styles.review}><ShieldCheck size={20} aria-hidden="true" /><span>Human review required<br /><small>Check the instructions before publishing.</small></span></div>
        </article>
      </div>
    </Section>

    <Section number="04" label="THE ACTUAL WORKFLOW" title="The automation behind the idea.">
      <WorkflowImage />
      <p className={styles.caption}>Here&apos;s what that decision-making looks like as an actual automation — each box is a step the system takes on its own.</p>
      <details className={styles.details}><summary>A note on the prototype</summary><p>The screenshot shows qualification, duplicate checking, drafting, tracking and reviewer notification. The information-sufficiency decision is part of the intended drafting logic; this image alone does not verify that safeguard.</p></details>
    </Section>

    <Section number="05" label="GOVERNANCE" title="Human review stays the gate.">
      <Flow label="Publication requires human approval" steps={[{ label: "Resolved case" }, { label: "AI qualifies" }, { label: "AI drafts" }, { label: "Human reviews", note: "Required approval", human: true }, { label: "Published", note: "Only after approval", human: true }]} />
      <p className={styles.caption}>The system never publishes on its own. It only removes the busywork before a human decision.</p>
    </Section>

    <footer className={styles.close}><h2>Every solved customer problem<br />can make the next one easier.</h2><p>Instead of relying on agents to remember, knowledge capture becomes an automatic side effect of solving the ticket.</p><small>Manual process based on prior Customer Success Operations experience. Automation built independently as an applied concept.</small></footer>
  </div></main>;
}
