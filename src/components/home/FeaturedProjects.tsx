import Link from "next/link";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { ProjectCardData } from "@/types/project";

export function FeaturedProjects({ projects }: { projects: ProjectCardData[] }) {
  return (
    <section className="section-space" aria-labelledby="featured-projects-heading">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured work"
            title="Case studies for a 60-second scan"
            description="Each card states the problem and intended outcome. Detailed evidence lives on the case-study pages."
          />
          <Button href="/projects" variant="secondary">
            All projects
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Prefer filters by role or tool?{" "}
          <Link href="/projects" className="font-medium text-accent hover:underline">
            Browse the full project library
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
