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
        "inline-flex rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-wider text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
