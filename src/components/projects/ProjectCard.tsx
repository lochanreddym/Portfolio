import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import type { ProjectCardData } from "@/types/project";

export function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <article className="surface-card flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-accent-soft">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <Badge tone="accent">{project.status}</Badge>
          <Badge>{project.domain}</Badge>
          <Badge tone="warning">{project.dataClassification}</Badge>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent"
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
          {project.oneLineOutcome}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.roleCategories.slice(0, 4).map((role) => (
            <Badge key={role}>{role}</Badge>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Tools: {project.tools.join(" · ")}
        </p>
        <p className="mt-1 text-xs text-muted">
          Evidence: {project.evidenceTypes.join(" · ")}
        </p>
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
