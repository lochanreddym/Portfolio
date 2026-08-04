import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function InsightCallout({
  title,
  children,
  tone = "accent",
}: {
  title: string;
  children: ReactNode;
  tone?: "accent" | "teal" | "warning";
}) {
  return (
    <aside
      className={cn(
        "rounded-2xl border p-5",
        tone === "accent" && "border-accent/20 bg-accent-soft",
        tone === "teal" && "border-teal/20 bg-teal-soft",
        tone === "warning" && "border-[#e2c48a] bg-warning-soft",
      )}
    >
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <div className="mt-2 text-sm text-muted">{children}</div>
    </aside>
  );
}
