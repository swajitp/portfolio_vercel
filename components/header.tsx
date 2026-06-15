"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          Swajit.
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-card/80 backdrop-blur-md rounded-full px-2 py-1.5 border border-border">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          asChild
          className="bg-card hover:bg-secondary text-foreground border border-border rounded-full"
        >
          <a href="mailto:swajit.patwari@gmail.com">
            Hire Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </nav>
    </header>
  );
}
