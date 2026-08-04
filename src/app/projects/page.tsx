import type { Metadata } from "next";
import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import {
  filterProjects,
  parseFilters,
  ProjectFilters,
} from "@/components/ProjectFilters";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Filterable analytics project library spanning product, BI, operations, marketing, RevOps, and machine-learning case studies.",
  alternates: { canonical: "/projects" },
};

type ProjectsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const filters = parseFilters(params);
  const filtered = filterProjects(projects, filters);

  return (
    <div className="section-space pt-10">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Projects</li>
          </ol>
        </nav>

        <header className="mt-6 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">Project library</h1>
          <p className="mt-4 text-lg text-muted">
            Filter by role, tool, domain, or project type. Cards stay usable without
            JavaScript. Detailed evidence lives on each case-study page.
          </p>
        </header>

        <div className="mt-10 space-y-8">
          <ProjectFilters filters={filters} resultCount={filtered.length} />

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-surface p-8">
              <h2 className="text-xl font-semibold">No projects match these filters</h2>
              <p className="mt-2 text-muted">
                Reset filters or remove one dimension to broaden the results.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
