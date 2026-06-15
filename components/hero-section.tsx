"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const stats = [
  { value: "7+", label: "Years in SaaS Ops" },
  { value: "$2M", label: "ARR Portfolio Managed" },
  { value: "20%+", label: "MoM Adoption Growth" },
];

const skills = [
  "CS Operations",
  "Program Management",
  "RevOps / GTM Ops",
  "Dashboards & Automation",
  "Customer Lifecycle",
  "Support Operations",
];

export function HeroSection() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Open to new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.1]">
              I build systems that<br />
              <span className="text-primary">scale customer success.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Customer Success Operations Manager with 7+ years turning messy operations into 
              scalable systems. I design onboarding programs, build health dashboards, and 
              create visibility that drives retention.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <a href="#case-studies">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border hover:bg-secondary"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-muted-foreground bg-secondary rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-8">
            <div className="relative">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/swajit-photo.png"
                  alt="Swajit Patwari"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-4 py-2 flex items-center gap-2 text-sm whitespace-nowrap shadow-lg">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Vancouver, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
