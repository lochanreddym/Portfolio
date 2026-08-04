import { ExternalLink } from "lucide-react";

import type { ProjectLink } from "@/types/project";

export function ProjectLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) {
    return (
      <p className="text-sm text-muted">
        No external project links are published yet. Missing links are hidden rather than
        shown as “#”.
      </p>
    );
  }

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <li key={`${link.type}-${link.href}`}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm hover:bg-accent-soft"
          >
            <span>
              <span className="block font-medium text-foreground">{link.label}</span>
              <span className="text-muted">{link.type}</span>
            </span>
            <ExternalLink className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
