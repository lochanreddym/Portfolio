import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { experienceItems, educationItems } from "@/data/experience";
import { getFeaturedProjects } from "@/data/projects";
import {
  analyticalApproach,
  roleMap,
  siteConfig,
  skillGroups,
} from "@/data/site";

const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-base font-medium text-[#fff] hover:bg-[#4c3f75]";
const btnSecondary =
  "inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-base font-medium text-foreground hover:bg-accent-soft";

export function HomeSections() {
  const featured = getFeaturedProjects();
  const resumeAvailable = siteConfig.resume.available;

  return (
    <>
      {/* Hero */}
      <section className="section-space pb-16 pt-14" aria-labelledby="hero-heading">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-medium text-accent">Data & analytics professional</p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]"
            >
              {siteConfig.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium leading-relaxed sm:text-2xl">
              {siteConfig.headline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm text-muted">{siteConfig.founderLine}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className={btnPrimary}>
                View Projects
              </Link>
              <Link
                href={resumeAvailable ? siteConfig.resume.href : "/resume"}
                className={btnSecondary}
                {...(resumeAvailable
                  ? { download: siteConfig.resume.fileName }
                  : {})}
              >
                {resumeAvailable ? "Download Resume" : "Resume details"}
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
              <li>
                <a href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="justify-self-center lg:justify-self-end">
            <div className="surface-card p-4">
              {siteConfig.headshot.available ? (
                <Image
                  src={siteConfig.headshot.href}
                  alt={siteConfig.headshot.alt}
                  width={420}
                  height={480}
                  priority
                  className="h-auto w-[min(100%,22rem)] rounded-[0.85rem] object-cover"
                />
              ) : (
                <div
                  className="flex h-[22rem] w-[min(100%,22rem)] flex-col items-center justify-center rounded-[0.85rem] bg-[linear-gradient(160deg,#efeaf8,#e7f2f1)]"
                  role="img"
                  aria-label="Initials placeholder for Lochanreddy Mallakunta headshot"
                >
                  <span className="text-6xl font-semibold text-accent">
                    {siteConfig.initials}
                  </span>
                  <span className="mt-4 px-6 text-center text-sm text-muted">
                    Professional headshot pending
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Role map */}
      <section className="section-space pt-0" aria-labelledby="title-map-heading">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-accent">Role map</p>
            <h2 id="title-map-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              One analytical foundation
            </h2>
            <p className="mt-4 text-muted">
              Data → Insight → Decision. The titles differ. The analytical craft stays
              consistent.
            </p>
          </div>
          <div className="relative mx-auto mt-12 max-w-5xl">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 1000 640"
              aria-hidden="true"
            >
              <g fill="none" stroke="var(--border)" strokeWidth="2">
                <path d="M500 320 L220 120" />
                <path d="M500 320 L500 90" />
                <path d="M500 320 L780 120" />
                <path d="M500 320 L220 520" />
                <path d="M500 320 L500 560" />
                <path d="M500 320 L780 520" />
              </g>
            </svg>
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              <div className="surface-card order-first col-span-full mx-auto flex min-h-40 max-w-md flex-col items-center justify-center bg-[linear-gradient(180deg,#ffffff,#f7f3fc)] p-8 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:w-[18rem] lg:-translate-x-1/2 lg:-translate-y-1/2">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent">
                  ONE ANALYTICAL FOUNDATION
                </p>
                <p className="mt-3 text-sm text-muted">Data → Insight → Decision</p>
              </div>
              {roleMap.map((role) => (
                <article key={role.title} className="surface-card p-5 lg:min-h-[12.5rem]">
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    {role.capabilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <div className="hidden lg:col-span-3 lg:block lg:h-40" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-space" aria-labelledby="featured-heading">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium text-accent">Featured work</p>
              <h2 id="featured-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Case studies for a 60-second scan
              </h2>
              <p className="mt-4 text-muted">
                Each card states the problem and outcome. Detailed evidence lives on the
                case-study pages.
              </p>
            </div>
            <Link href="/projects" className={btnSecondary}>
              All projects
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-space bg-surface" aria-labelledby="skills-heading">
        <div className="container-page">
          <h2 id="skills-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Skills grouped by how the work gets done
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg bg-background px-3 py-1.5 text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-space" aria-labelledby="founder-heading">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium text-accent">Founder perspective</p>
            <h2 id="founder-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Founder perspective, analyst discipline
            </h2>
            <p className="mt-4 text-muted">
              Building DigiPae at CEIVIS is presented as applied analytics and business
              ownership—not as a startup pitch and not with unverified traction numbers.
            </p>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <p className="text-sm text-muted">
              {siteConfig.founderLine}.{" "}
              <a
                href={siteConfig.digipae}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent hover:underline"
              >
                digipae.com
              </a>
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Measurable product questions",
                "Payment and identity workflows",
                "User and merchant funnels",
                "KPI and compliance reporting",
              ].map((item) => (
                <li key={item} className="rounded-xl bg-background px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/projects/${siteConfig.digipaeCaseStudySlug}`}
              className={`${btnPrimary} mt-8`}
            >
              DigiPae case study
            </Link>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-space bg-surface" aria-labelledby="experience-heading">
        <div className="container-page">
          <h2 id="experience-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience and education
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Experience</h3>
              <ol className="mt-5 space-y-4">
                {experienceItems.map((item) => (
                  <li key={item.title} className="surface-card p-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {item.organization} · {item.period}
                    </p>
                    <p className="mt-3 text-sm text-muted">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Education</h3>
              <ol className="mt-5 space-y-4">
                {educationItems.map((item) => (
                  <li key={item.title} className="surface-card p-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {item.organization} · {item.period}
                    </p>
                    <p className="mt-3 text-sm text-muted">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-space" aria-labelledby="approach-heading">
        <div className="container-page">
          <h2 id="approach-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Analytical approach
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {analyticalApproach.map((stage) => (
              <li key={stage.step} className="surface-card p-5">
                <p className="text-sm font-semibold text-accent">0{stage.step}</p>
                <h3 className="mt-3 text-base font-semibold">{stage.title}</h3>
                <p className="mt-3 text-sm text-muted">{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-space pt-0" aria-labelledby="cta-heading">
        <div className="container-page">
          <div className="surface-card bg-[linear-gradient(135deg,#ffffff,#f4f0fa_55%,#eef7f6)] p-8 sm:p-10">
            <h2 id="cta-heading" className="max-w-2xl text-3xl font-semibold tracking-tight">
              Looking for an analyst who can connect data to decisions?
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Reach out for analyst, BI, business, operations, marketing, product, or
              RevOps conversations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={btnPrimary}>
                Contact form
              </Link>
              <a href={`mailto:${siteConfig.email}`} className={btnSecondary}>
                Email {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
