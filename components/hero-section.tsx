"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";

const stats = [
  { value: "7+", label: "Years in CS & RevOps" },
  { value: "$6M", label: "ARR Portfolio Owned" },
  { value: "90+", label: "Team Members Led" },
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
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Open to CS Ops, RevOps, and customer operations roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-[1.12]">
              Customer success systems for teams that are
              <span className="text-primary"> ready to scale.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I turn messy post-sales operations into measurable systems: onboarding programs,
              health dashboards, support workflows, and retention plays that give leaders
              visibility and teams a clearer way to execute.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <a href="#case-studies">
                  See Selected Work
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
                <Badge key={skill} variant="tag" className="text-muted-foreground">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-8">
            <div className="relative">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/swajit-photo.png"
                  alt="Swajit Patwari"
                  width={256}
                  height={288}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-3 right-3 bg-card border border-border rounded-full px-4 py-2 flex items-center gap-2 text-sm whitespace-nowrap shadow-lg">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Vancouver, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-4xl sm:text-5xl font-bold text-stat-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-muted-foreground">
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
