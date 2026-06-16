"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Work", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMenuOpen]);

  return (
    <header ref={menuRef} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          Swajit.
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-card/90 backdrop-blur-md rounded-full px-2 py-1.5 border border-border shadow-lg shadow-black/20">
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Button
            asChild
            className="bg-card hover:bg-secondary text-foreground border border-border rounded-full"
          >
            <a href="mailto:swajit.patwari@gmail.com">
              Hire Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="md:hidden mt-3 w-full rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-lg shadow-black/20">
          <div className="flex flex-col p-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-4 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
