import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "teal" | "warning";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium",
        tone === "neutral" && "bg-[#f1eef4] text-muted",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "teal" && "bg-teal-soft text-teal",
        tone === "warning" && "bg-warning-soft text-[#8a5a12]",
        className,
      )}
    >
      {children}
    </span>
  );
}
