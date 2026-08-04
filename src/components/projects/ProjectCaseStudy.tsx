import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CodeBlock } from "@/components/evidence/CodeBlock";
import { DashboardEmbed } from "@/components/evidence/DashboardEmbed";
import { EvidenceGallery } from "@/components/evidence/EvidenceGallery";
import { InsightCallout } from "@/components/evidence/InsightCallout";
import { KPIStat, QualitativeResult } from "@/components/evidence/KPIStat";
import { LimitationCallout } from "@/components/evidence/LimitationCallout";
import { ProjectLinks } from "@/components/evidence/ProjectLinks";
import { RecommendationMatrix } from "@/components/evidence/RecommendationMatrix";
import { ProjectPagination } from "@/components/projects/ProjectPagination";
import { ProjectToc } from "@/components/projects/ProjectToc";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context and question" },
  { id: "data", label: "Data and preparation" },
  { id: "analysis", label: "Analysis and evidence" },
  { id: "findings", label: "Findings and outcome" },
  { id: "recommendations", label: "Recommendations and limitations" },
  { id: "resources", label: "Resources" },
];

export function ProjectCaseStudy({
  project,
  previous,
  next,
}: {
  project: Project;
  previous: Project | null;
  next: Project | null;
}) {
  const verified = project.verifiedResults.filter(
    (result) => result.value !== null && result.value !== undefined && result.value !== "",
  );
  const qualitative = project.verifiedResults.filter(
    (result) => result.value === null || result.value === undefined || result.value === "",
  );
  const dashboardLink = project.links.find((link) => link.type === "Live dashboard");

  return (
    <article className="section-space pt-10">
      <div className="container-page">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.shortTitle },
          ]}
        />

        <header className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="accent">{project.status}</Badge>
              <Badge>{project.domain}</Badge>
              <Badge>{project.projectType}</Badge>
              <Badge tone="warning">{project.dataClassification}</Badge>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">{project.title}</h1>
            <p className="mt-4 text-lg text-muted">{project.oneLineOutcome}</p>
            <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-foreground">My role</dt>
                <dd className="text-muted">{project.role}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Date</dt>
                <dd className="text-muted">{project.date}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-foreground">Tools</dt>
                <dd className="text-muted">{project.tools.join(" · ")}</dd>
              </div>
            </dl>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-background">
            <Image
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </header>

        {verified.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {verified.map((result) => (
              <KPIStat key={result.label} result={result} />
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {qualitative.map((result) => (
              <QualitativeResult key={result.label} result={result} />
            ))}
          </div>
        )}

        <div className="mt-6">
          <ProjectLinks links={project.links} />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <ProjectToc items={tocItems} />

          <div className="space-y-16">
            <section id="overview" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-muted">{project.summary}</p>
              {project.disclaimers.map((disclaimer) => (
                <InsightCallout key={disclaimer} title="Disclaimer" tone="warning">
                  {disclaimer}
                </InsightCallout>
              ))}
            </section>

            <section id="context" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-semibold">Context and question</h2>
              <div className="prose-portfolio">
                <h3 className="text-lg font-semibold text-foreground">Business context</h3>
                <p>{project.businessContext}</p>
              </div>
              <div className="prose-portfolio">
                <h3 className="text-lg font-semibold text-foreground">
                  Problem or business question
                </h3>
                <p>{project.businessQuestion}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  My role and responsibilities
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="data" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-semibold">Data and preparation</h2>
              <dl className="grid gap-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium">Dataset</dt>
                  <dd className="mt-1 text-sm text-muted">{project.datasetName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium">Source</dt>
                  <dd className="mt-1 text-sm text-muted">{project.datasetSource}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium">Classification</dt>
                  <dd className="mt-1 text-sm text-muted">{project.dataClassification}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium">Volume / period</dt>
                  <dd className="mt-1 text-sm text-muted">
                    {project.dataVolume ?? "Not published"} ·{" "}
                    {project.dataPeriod ?? "Not published"}
                  </dd>
                </div>
              </dl>
              <div>
                <h3 className="text-lg font-semibold">Data privacy and confidentiality</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.privacyNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Data quality issues</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.dataQualityIssues.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Cleaning and transformation</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.cleaningNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.kpis.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold">KPI definitions</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.kpis.map((kpi) => (
                      <li
                        key={kpi}
                        className="rounded-lg bg-teal-soft px-3 py-1.5 text-sm text-teal"
                      >
                        {kpi}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>

            <section id="analysis" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-semibold">Analysis and evidence</h2>
              <div>
                <h3 className="text-lg font-semibold">Analytical approach</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.methods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">SQL, Python, DAX, Excel, or Power Query work</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.technicalWork.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.codeSample ? <CodeBlock {...project.codeSample} /> : null}
              <DashboardEmbed
                title="Dashboard, analysis, or model"
                src={dashboardLink?.href}
              />
              <div>
                <h3 className="mb-4 text-lg font-semibold">Evidence gallery</h3>
                <EvidenceGallery items={project.gallery} />
              </div>
            </section>

            <section id="findings" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-semibold">Findings and outcome</h2>
              <div>
                <h3 className="text-lg font-semibold">Findings and insights</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.findings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Business impact</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.impactNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <InsightCallout title="Final outcome" tone="teal">
                {project.oneLineOutcome}
              </InsightCallout>
            </section>

            <section id="recommendations" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-semibold">Recommendations and limitations</h2>
              <RecommendationMatrix recommendations={project.recommendations} />
              <div>
                <h3 className="text-lg font-semibold">Future analysis and next steps</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {project.futureWork.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <LimitationCallout items={project.limitations} />
            </section>

            <section id="resources" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-semibold">Resources</h2>
              <ProjectLinks links={project.links} />
            </section>

            <ProjectPagination previous={previous} next={next} />
          </div>
        </div>
      </div>
    </article>
  );
}
