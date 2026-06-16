"use client";

import { GraduationCap, MapPin } from "lucide-react";

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
    period: "2025 - 2026",
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
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5">
            EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Academic Background
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-base text-muted-foreground whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground mt-1">{edu.school}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-base text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
