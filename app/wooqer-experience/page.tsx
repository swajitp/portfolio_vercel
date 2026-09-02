import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { WooqerMapEmbed } from "@/components/wooqer-map-embed";
import { SectionEyebrow } from "@/components/section-eyebrow";

export default function WooqerExperiencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <section className="site-container py-8 sm:py-10">
        <div>
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionEyebrow>WOOQER EXPERIENCE</SectionEyebrow>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tighter text-white sm:text-6xl">
                CS Ops / Program Manager ownership map
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-xl">
                A visual map of the customer success operations scope, team touchpoints,
                and project ownership across onboarding, retention, support, growth,
                and RevOps workstreams.
              </p>
            </div>

            <a
              href="/wooqer-experience/map"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Open full screen
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 shadow-2xl">
            <WooqerMapEmbed className="h-[760px] w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
