"use client";

import { Mail, Linkedin, Phone, Copy, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("swajit.patwari@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-sm text-muted-foreground tracking-wider uppercase border border-border rounded-full px-4 py-1.5">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-6">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            Open to customer success operations, RevOps, post-sales strategy, and
            operations transformation roles where scalable systems matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-background border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-base text-muted-foreground">Email</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyEmail}
                  className="h-8 px-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-primary mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <a
                href="mailto:swajit.patwari@gmail.com"
                className="text-xl text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                swajit.patwari@gmail.com
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/swajit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
                <p className="text-base text-muted-foreground">LinkedIn</p>
                <p className="text-lg text-foreground">@swajit</p>
              </a>

              <a
                href="tel:+16047358611"
                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
              >
                <Phone className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
                <p className="text-base text-muted-foreground">Phone</p>
                <p className="text-lg text-foreground">+1 604 735 8611</p>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground mb-4">
                Building a stronger post-sales engine?
              </p>
              <p className="text-lg text-muted-foreground mb-6 max-w-sm leading-relaxed">
                I&apos;d be glad to talk through CS operations, retention systems,
                support workflows, or roles where those problems are central.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <a href="mailto:swajit.patwari@gmail.com">
                  Send a Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
