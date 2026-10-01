import type { Metadata } from "next";
import { WorkflowImage } from "@/components/knowledge-base/workflow-image";
import styles from "@/components/knowledge-base/knowledge-base.module.css";

export const metadata: Metadata = {
  title: "n8n · AI Knowledge Base Automation",
  description:
    "Turning resolved support cases into reusable customer knowledge — automatically, with human review before publication.",
};

export default function KnowledgeBasePage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <nav>
          <span className={styles.name}>
            Swajit Patwari<span style={{ color: "#c9bb82" }}>.</span>
          </span>
          <a href="/#case-studies">Back to portfolio</a>
        </nav>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>
            Customer Success Operations · AI Automation
          </div>
          <h1>
            <span className={styles.accent}>n8n</span>{" "}
            <span className={styles.dot}>·</span> AI Knowledge
            <br />
            Base Automation
          </h1>
          <p>
            Turning resolved support cases into reusable customer knowledge —
            automatically.
          </p>
          <ul className={styles.tags} aria-label="Tools and disciplines">
            <li>n8n</li>
            <li>Zoho Desk</li>
            <li>AI</li>
            <li>Knowledge Management</li>
            <li>Customer Success Operations</li>
          </ul>
        </header>
        <div>
          <section id="automation">
            <div className={styles.sectiontop}>
              <div>
                <div className={styles.eyebrow}>01 · The automation</div>
                <h2>
                  From closed ticket to
                  <br />
                  review-ready knowledge.
                </h2>
              </div>
              <span className={styles.meta}>ONE WORKFLOW / 12 STEPS</span>
            </div>
            <WorkflowImage />
            <div className={styles.flow}>
              <span>Ticket closes</span>
              <b>→</b>
              <span>Qualify</span>
              <b>→</b>
              <span>Check existing KB</span>
              <b>→</b>
              <span>Draft</span>
              <b>→</b>
              <span>Human review</span>
            </div>
            <p className={styles.description}>
              The workflow identifies reusable knowledge, checks whether it
              already exists, and creates a draft for review.
            </p>
            <details>
              <summary>
                <span className={styles.code}>&lt;/&gt;</span> Learn the tech
                behind this workflow{" "}
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
              </summary>
              <ol className={styles.tech}>
                <li>
                  <div>
                    <h3>Trigger</h3>
                    <small>POST · Webhook</small>
                  </div>
                  <p>
                    Zoho Desk sends a POST request to the n8n webhook when a
                    ticket closes, passing its ticket ID.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Get ticket details</h3>
                    <small>GET · Zoho Desk API</small>
                  </div>
                  <p>
                    Use the ticket ID to retrieve the ticket’s metadata from
                    Zoho Desk.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Get conversation</h3>
                    <small>GET · Zoho Desk API</small>
                  </div>
                  <p>
                    Retrieve the conversation and resolution history behind the
                    support case.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Prepare context</h3>
                    <small>JavaScript · JSON</small>
                  </div>
                  <p>
                    Clean and structure the ticket data into focused context for
                    the AI.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Identify knowledge</h3>
                    <small>OpenAI · Structured output</small>
                  </div>
                  <p>
                    Evaluate whether the resolution contains reusable knowledge
                    and return a structured decision.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Route the decision</h3>
                    <small>IF</small>
                  </div>
                  <p>Useful knowledge → continue. One-off resolution → stop.</p>
                </li>
                <li>
                  <div>
                    <h3>Search existing KB</h3>
                    <small>GET · API</small>
                  </div>
                  <p>
                    Search the knowledge base for articles related to the
                    identified solution.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Check for duplicates</h3>
                    <small>OpenAI · Semantic comparison</small>
                  </div>
                  <p>
                    Compare meaning, not just keywords, to check whether the
                    solution is already documented.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Route again</h3>
                    <small>IF</small>
                  </div>
                  <p>
                    Already documented → stop. A knowledge gap → continue to
                    drafting.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Generate the draft</h3>
                    <small>OpenAI</small>
                  </div>
                  <p>
                    Turn the resolved case into a clear knowledge-base article
                    draft.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Log for review</h3>
                    <small>Google Sheets · Append</small>
                  </div>
                  <p>
                    Append the draft and ticket reference to the knowledge
                    tracker.
                  </p>
                </li>
                <li>
                  <div>
                    <h3>Notify the reviewer</h3>
                    <small>Gmail</small>
                  </div>
                  <p>
                    Email the reviewer so they can check the draft before
                    publication.
                  </p>
                </li>
              </ol>
            </details>
          </section>
          <section>
            <div className={styles.eyebrow}>02 · The business view</div>
            <h2>Your team solves it. The system remembers.</h2>
            <div className={styles.business}>
              <article className={styles.card}>
                <span className={styles.num}>01 / RESOLVE</span>
                <span className={styles.symbol} aria-hidden="true">
                  ✓
                </span>
                <h3>Ticket resolved</h3>
                <p>The agent closes the case. Knowledge capture begins.</p>
              </article>
              <article className={styles.card}>
                <span className={styles.num}>02 / QUALIFY</span>
                <span className={styles.symbol} aria-hidden="true">
                  ◇
                </span>
                <h3>Worth documenting?</h3>
                <p>Keep reusable solutions. Skip one-off requests.</p>
              </article>
              <article className={styles.card}>
                <span className={styles.num}>03 / CHECK</span>
                <span className={styles.symbol} aria-hidden="true">
                  ≍
                </span>
                <h3>Already documented?</h3>
                <p>Find the gap before creating another article.</p>
              </article>
              <article className={styles.card}>
                <span className={styles.num}>04 / CREATE</span>
                <span className={styles.symbol} aria-hidden="true">
                  ≡
                </span>
                <h3>Draft the answer</h3>
                <p>Turn the resolution into a useful first draft.</p>
              </article>
              <article className={styles.card}>
                <span className={styles.num}>05 / APPROVE</span>
                <span className={styles.symbol} aria-hidden="true">
                  ◎
                </span>
                <h3>Human review</h3>
                <p>A person checks the answer before it goes live.</p>
              </article>
            </div>
            <p className={styles.review}>
              <span aria-hidden="true">◇</span> Human approval required before
              publishing.
            </p>
          </section>
          <section>
            <div className={styles.comparison}>
              <article>
                <div className={styles.eyebrow}>Before · Manual</div>
                <h3>Solved. Then forgotten.</h3>
                <p>
                  Agents remember, check, write, track, and send for review.
                </p>
              </article>
              <article>
                <div className={`${styles.eyebrow} ${styles.after}`}>
                  After · Automated
                </div>
                <h3>Closed. Then captured.</h3>
                <p>
                  The workflow prepares the draft. A human makes the final call.
                </p>
              </article>
            </div>
          </section>
          <div className={styles.closing}>
            <h2>
              Solve once.
              <br />
              <span>Reuse the knowledge.</span>
            </h2>
          </div>
        </div>
        <footer>
          <span>Swajit Patwari</span>
          <span>Customer Success Operations · Selected work</span>
        </footer>
      </div>
    </main>
  );
}
