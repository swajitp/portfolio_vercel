import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function WooqerExperiencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5">
                WOOQER EXPERIENCE
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
                CS Ops / Program Manager ownership map
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                A visual map of the customer success operations scope, team touchpoints,
                and project ownership across onboarding, retention, support, growth,
                and RevOps workstreams.
              </p>
            </div>

            <a
              href="/wooqer-cs-ops-map.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Open full screen
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <iframe
              title="Interactive CS Ops / Program Manager Org Map"
              src="/wooqer-cs-ops-map.html"
              className="h-[760px] w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
