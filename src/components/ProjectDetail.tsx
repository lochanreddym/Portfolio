import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="section-space pt-10">
      <div className="container-page max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/projects" className="hover:text-foreground">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{project.title}</li>
          </ol>
        </nav>

        <header className="mt-6">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-lg bg-accent-soft px-2.5 py-1 font-medium text-accent">
              {project.domain}
            </span>
            <span className="rounded-lg bg-[#f1eef4] px-2.5 py-1 font-medium text-muted">
              {project.projectType}
            </span>
            <span className="rounded-lg bg-[#f1eef4] px-2.5 py-1 font-medium text-muted">
              {project.date}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{project.title}</h1>
          <p className="mt-4 text-lg text-muted">{project.outcome}</p>
          <p className="mt-3 text-sm text-muted">Tools: {project.tools.join(" · ")}</p>
        </header>

        {project.results && project.results.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {project.results.map((result) => (
              <div key={result.label} className="rounded-2xl border border-border p-5">
                <p className="text-sm text-muted">{result.label}</p>
                <p className="mt-2 text-xl font-semibold text-teal">{result.value}</p>
              </div>
            ))}
          </div>
        ) : null}

        {project.links && project.links.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-accent-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 text-muted">{project.summary}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Business problem</h2>
            <p className="mt-4 text-muted">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Analysis and approach</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Skills: {project.skills.join(" · ")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Evidence and visuals</h2>
            <ul className="mt-6 grid gap-6">
              {project.visuals.map((visual) => (
                <li key={visual.caption} className="surface-card overflow-hidden">
                  <div className="relative aspect-[16/10] bg-background">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                  </div>
                  <p className="p-5 text-sm text-muted">{visual.caption}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Findings and outcome</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {project.findings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-teal-soft p-5 text-sm text-foreground">
              <span className="font-semibold text-teal">Outcome: </span>
              {project.outcome}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Recommendations</h2>
            <ol className="mt-4 space-y-3">
              {project.recommendations.map((item, index) => (
                <li
                  key={item}
                  className="grid gap-3 rounded-2xl border border-border p-4 sm:grid-cols-[auto_1fr]"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-soft text-sm font-semibold text-teal">
                    {index + 1}
                  </span>
                  <p className="text-sm text-muted">{item}</p>
                </li>
              ))}
            </ol>
          </section>

          {project.details ? (
            <section className="rounded-2xl border border-dashed border-border p-6">
              <h2 className="text-xl font-semibold">Project details</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {project.details.dataset ? (
                  <div>
                    <dt className="font-medium">Dataset / source</dt>
                    <dd className="mt-1 text-muted">{project.details.dataset}</dd>
                  </div>
                ) : null}
                {project.details.classification ? (
                  <div>
                    <dt className="font-medium">Data classification</dt>
                    <dd className="mt-1 text-muted">{project.details.classification}</dd>
                  </div>
                ) : null}
                {project.details.limitations && project.details.limitations.length > 0 ? (
                  <div>
                    <dt className="font-medium">Limitations</dt>
                    <dd className="mt-1">
                      <ul className="list-disc space-y-1 pl-5 text-muted">
                        {project.details.limitations.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </section>
          ) : null}
        </div>
      </div>
    </article>
  );
}
