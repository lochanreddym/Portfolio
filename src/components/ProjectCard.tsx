import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.visuals[0];

  return (
    <article className="project-card lift-hover group flex h-full flex-col overflow-hidden border border-border bg-surface">
      <div className="project-card-media relative aspect-[16/10] overflow-hidden bg-accent-soft">
        <Image
          src={cover?.src ?? "/images/project-placeholder.svg"}
          alt={cover?.alt ?? `${project.title} cover`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-accent-soft px-2.5 py-1 font-medium text-accent">
            {project.featured ? "Featured" : project.projectType}
          </span>
          <span className="bg-background px-2.5 py-1 font-medium text-muted">
            {project.domain}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-muted">
          <span className="font-medium text-foreground">Problem: </span>
          {project.problem}
        </p>
        <p className="mt-2 text-sm text-muted">
          <span className="font-medium text-foreground">Outcome: </span>
          {project.outcome}
        </p>
        <p className="mt-4 text-xs text-muted">Tools: {project.tools.join(" · ")}</p>
        <div className="mt-auto pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-transform duration-300 group-hover:translate-x-0.5"
          >
            View case study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
