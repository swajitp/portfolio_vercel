"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Summary", href: "#home", aiAccent: false },
  { label: "AI ✨ & Projects", href: "#ai-projects", aiAccent: true },
  { label: "Experience", href: "#experience", aiAccent: false },
  { label: "Education", href: "#education", aiAccent: false },
  { label: "Contact", href: "#contact", aiAccent: false },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const menuRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

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

  useEffect(() => {
    const updateActiveLink = () => {
      const trigger = window.scrollY + window.innerHeight * 0.3;
      let active = navItems[0].href;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section instanceof HTMLElement && section.offsetTop <= trigger) {
          active = item.href;
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        active = "#contact";
      }

      setActiveHref(active);
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const menu = navMenuRef.current;
      const link = linkRefs.current[activeHref];
      if (!menu || !link) return;

      const menuRect = menu.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - menuRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator, { passive: true });
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeHref]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={menuRef}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="md:hidden border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-white transition-colors hover:text-zinc-300"
          >
            Swajit<span className="text-zinc-600">.</span>
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <nav className="hidden w-full px-4 pt-6 md:block">
        <div className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        <Link
          href="/"
            className="pl-2 text-xl font-bold tracking-tighter text-white transition-opacity duration-200 hover:opacity-80"
        >
            Swajit<span className="text-zinc-500">.</span>
        </Link>

          <div
            ref={navMenuRef}
            className="relative flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] px-2 py-1.5"
          >
            <span
              className="pointer-events-none absolute h-[calc(100%-12px)] rounded-full bg-white/10 transition-[left,width,opacity] duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
                ref={(node) => {
                  linkRefs.current[item.href] = node;
                }}
              className={cn(
                  "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white",
                  activeHref === item.href && "text-white",
              )}
            >
              {item.aiAccent ? (
                <>
                  <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.22)]">AI ✨</span>
                  <span className="text-zinc-400"> &amp; Projects</span>
                </>
              ) : (
                item.label
              )}
            </Link>
          ))}
        </div>

          <a
            href="mailto:swajit.patwari@gmail.com"
            className="group flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:bg-zinc-100 active:scale-95"
          >
              Hire Me
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </nav>

      <div
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed inset-0 z-[60] bg-black transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "translate-y-0"
            : "pointer-events-none -translate-y-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/5 px-6">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold tracking-tighter"
          >
            Swajit<span className="text-zinc-600">.</span>
          </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-6 pt-8 text-3xl font-light">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/10 pb-4 text-white transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {item.aiAccent ? (
                <>
                  <span className="font-semibold text-white">AI ✨</span>
                  <span className="text-zinc-400"> &amp; Projects</span>
                </>
              ) : (
                item.label
              )}
            </Link>
          ))}
          <a
            href="mailto:swajit.patwari@gmail.com"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-xl font-bold text-black transition-transform duration-200 active:scale-95"
          >
            <Briefcase className="h-5 w-5" />
            <span>Hire Me</span>
          </a>
        </div>
      </div>
    </header>
  );
}
