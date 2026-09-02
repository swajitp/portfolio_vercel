import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-white/5 bg-zinc-800/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
