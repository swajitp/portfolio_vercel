"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  LineChart,
  MapPin,
  Settings2,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const stats = [
  { value: "7+", label: "Years in CS & RevOps" },
  { value: "$6M", label: "ARR Portfolio Owned" },
  { value: "90+", label: "Team Members Led" },
];

const skills = [
  { label: "CS Operations", icon: Users },
  { label: "Program Management", icon: Target },
  { label: "RevOps / GTM", icon: LineChart },
  { label: "Dashboards & Automation", icon: BarChart3 },
  { label: "Customer Lifecycle", icon: Workflow },
  { label: "Retention Systems", icon: Sparkles },
  { label: "Process Design", icon: Settings2 },
];

export function HeroSection() {
  const marqueeItems = [...skills, ...skills];

  return (
    <section
      id="home"
      className="site-container flex min-h-screen flex-col justify-start pb-16 pt-32 md:pb-20 md:pt-36 lg:pt-40"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-end lg:gap-10 xl:grid-cols-[1fr_auto] xl:gap-12">
        <div className="max-w-3xl space-y-5 xl:space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-400">
              <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] motion-safe:animate-pulse" />
              Open to CS Ops, RevOps, and customer operations roles
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mb-3 text-4xl font-bold leading-[1.08] tracking-tighter text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Swajit.
              <span className="mt-2 block text-3xl text-zinc-500 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                Customer Success Operations Manager
              </span>
              <span className="mt-2 block text-2xl font-light italic text-zinc-600 sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                SaaS, RevOps, and post-sales systems
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-2xl text-base font-light leading-relaxed text-zinc-400 md:text-sm lg:text-base xl:text-2xl">
              I build the systems behind customer success: onboarding programs, health dashboards,
              and retention plays that give teams visibility and a clear way to execute.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-sm font-medium text-zinc-500 md:text-base">
              SaaS / EdTech / Vancouver, Canada
            </p>
          </Reveal>

          <Reveal delay={400} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105 hover:bg-zinc-200 active:scale-95"
            >
              See Selected Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:border-white hover:bg-white/5 active:scale-95"
            >
              Get in Touch
            </a>
          </Reveal>
        </div>

        <Reveal
          delay={500}
          className="relative mx-auto aspect-[3/4] w-full max-w-[300px] select-none overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 md:mx-0 md:ml-auto md:w-[340px] md:max-w-full xl:aspect-[4/5] xl:w-[403px] xl:max-w-none"
        >
          <Image
            src="/images/swajit-photo.png"
            alt="Swajit Patwari"
            width={640}
            height={800}
            className="h-full w-full object-cover object-center opacity-90 grayscale transition-all duration-700 ease-out hover:scale-105 hover:grayscale-0"
            priority
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-zinc-400" />
              Vancouver, Canada
            </div>
            <span className="h-2 w-2 rounded-full bg-white" />
          </div>
        </Reveal>
      </div>

      <Reveal delay={600} className="mt-12 w-full border-t border-white/5 pt-10 md:mt-16 md:pt-16 lg:mt-20">
        <div className="grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-white/5"
            >
              <div className="mb-2 text-4xl font-bold tracking-tighter text-white md:text-6xl">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={700} className="marquee-container relative mt-12 overflow-hidden border-y border-white/5 bg-black/50 py-10 md:mt-16 md:py-12">
        <div className="animate-marquee flex w-max min-w-full gap-16">
          {marqueeItems.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.label}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap text-lg font-medium text-zinc-500"
              >
                <Icon className="h-6 w-6" />
                {skill.label}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
