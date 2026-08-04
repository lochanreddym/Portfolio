import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.visuals[0];

  return (
    <article className="surface-card flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-accent-soft">
        <Image
          src={cover?.src ?? "/images/project-placeholder.svg"}
          alt={cover?.alt ?? `${project.title} cover`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-lg bg-accent-soft px-2.5 py-1 font-medium text-accent">
            {project.featured ? "Featured" : project.projectType}
          </span>
          <span className="rounded-lg bg-[#f1eef4] px-2.5 py-1 font-medium text-muted">
            {project.domain}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
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
            className="text-sm font-medium text-accent hover:underline"
          >
            View case study
          </Link>
        </div>
      </div>
    </article>
  );
}
