"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";

export function DashboardEmbed({
  title,
  src,
  thumbnailLabel = "Interactive dashboard placeholder",
}: {
  title: string;
  src?: string;
  thumbnailLabel?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (!src) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-background p-6">
        <p className="font-medium text-foreground">{title}</p>
        <p className="mt-2 text-sm text-muted">
          No live dashboard URL supplied. Add a cleared Power BI / Tableau / demo link
          when available. Never use “#” as a placeholder href.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-medium">{title}</p>
        {!loaded ? (
          <Button type="button" size="sm" onClick={() => setLoaded(true)}>
            Load interactive dashboard
          </Button>
        ) : null}
      </div>
      {!loaded ? (
        <div className="mt-4 flex min-h-64 items-center justify-center rounded-xl bg-background text-sm text-muted">
          {thumbnailLabel}
        </div>
      ) : (
        <iframe
          title={title}
          src={src}
          className="mt-4 h-[28rem] w-full rounded-xl border border-border"
          loading="lazy"
        />
      )}
    </div>
  );
}
