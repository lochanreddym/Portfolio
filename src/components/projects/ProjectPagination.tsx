import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { Project } from "@/types/project";

export function ProjectPagination({
  previous,
  next,
}: {
  previous: Project | null;
  next: Project | null;
}) {
  return (
    <nav
      aria-label="Project pagination"
      className="grid gap-4 border-t border-border pt-8 md:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/projects/${previous.slug}`}
          className="rounded-2xl border border-border p-5 hover:bg-accent-soft"
        >
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Previous project
          </p>
          <p className="mt-2 font-semibold text-foreground">{previous.title}</p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="rounded-2xl border border-border p-5 text-right hover:bg-accent-soft md:justify-self-end"
        >
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted">
            Next project
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </p>
          <p className="mt-2 font-semibold text-foreground">{next.title}</p>
        </Link>
      ) : null}
    </nav>
  );
}
