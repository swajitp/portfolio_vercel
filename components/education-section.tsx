"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
}

const education: EducationItem[] = [
  {
    degree: "MBA | Business Analytics and Digital Transformation",
    school: "Simon Fraser University, Beedie School of Business",
    location: "Vancouver, Canada",
    period: "2025 – 2026",
  },
  {
    degree: "Bachelor of Engineering | Mechanical Engineering",
    school: "Nitte Meenakshi Institute of Technology",
    location: "Bangalore, India",
    period: "2014 - 2018",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="site-container py-20">
      <Reveal>
        <div className="mb-12">
          <SectionEyebrow>EDUCATION</SectionEyebrow>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Academic Background
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="section-panel p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-xl font-bold leading-tight text-white">
                      {edu.degree}
                    </h3>
                    <span className="whitespace-nowrap font-mono text-xs text-zinc-500">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-zinc-300">{edu.school}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-sm text-zinc-500">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
