import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  children?: ReactNode;
}

export function InfoCard({
  icon,
  title,
  description,
  footer,
  className,
  contentClassName,
  iconClassName,
  titleClassName,
  children,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "group h-full bg-card border border-border rounded-2xl hover:border-primary/50 transition-all",
        className,
      )}
    >
      <div className={cn("p-6", contentClassName)}>
        {icon ? (
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-primary/10 border border-white/5 flex items-center justify-center mb-4",
              iconClassName,
            )}
          >
            {icon}
          </div>
        ) : null}
        <h3
          className={cn(
            "text-xl font-semibold text-foreground mb-2 transition-colors group-hover:text-primary",
            titleClassName,
          )}
        >
          {title}
        </h3>
        {description ? (
          <p className="text-[17px] text-muted-foreground leading-relaxed">
            {description}
          </p>
        ) : null}
        {children}
        {footer ? <div className="mt-6">{footer}</div> : null}
      </div>
    </div>
  );
}
