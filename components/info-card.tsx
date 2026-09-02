import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
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
  ...props
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "group h-full rounded-[2rem] border border-white/5 bg-zinc-900/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20",
        className,
      )}
      {...props}
    >
      <div className={cn("p-6", contentClassName)}>
        {icon ? (
          <div
            className={cn(
              "mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-white transition-colors group-hover:bg-white group-hover:text-black",
              iconClassName,
            )}
          >
            {icon}
          </div>
        ) : null}
        <h3
          className={cn(
            "mb-2 text-xl font-bold text-white transition-colors group-hover:text-zinc-300",
            titleClassName,
          )}
        >
          {title}
        </h3>
        {description ? (
          <p className="text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        ) : null}
        {children}
        {footer ? <div className="mt-6">{footer}</div> : null}
      </div>
    </div>
  );
}
