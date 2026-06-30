"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <SectionEyebrow>CONTACT</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Open to customer success operations, RevOps, post-sales strategy, and
            operations transformation roles where scalable systems matter.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <div>
              <p className="text-3xl font-bold text-foreground mb-4">
                Building a stronger post-sales engine?
              </p>
              <p className="text-lg text-muted-foreground mb-6 max-w-sm leading-relaxed">
                I&apos;d be glad to talk through CS operations, retention systems,
                support workflows, or roles where those problems are central.
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                Open to full-time CS Ops and RevOps roles in Vancouver — available immediately.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <a href="mailto:swajit.patwari@gmail.com">
                  Send an Email
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border bg-transparent text-primary hover:bg-secondary"
                >
                  <a
                    href="https://linkedin.com/in/swajit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn @swajit
                  </a>
                </Button>
                <a
                  href="tel:+16047358611"
                  className="text-base text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  +1 604 735 8611
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
