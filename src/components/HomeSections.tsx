import Image from "next/image";
import Link from "next/link";

import { HeroMotionGraphic } from "@/components/HeroMotionGraphic";
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
  "inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-base font-medium text-[#fff] transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#453869] hover:-translate-y-0.5";
const btnSecondary =
  "inline-flex items-center justify-center rounded-xl border border-border bg-surface/80 px-6 py-3 text-base font-medium text-foreground backdrop-blur-sm transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-soft hover:-translate-y-0.5";

export function HomeSections() {
  const featured = getFeaturedProjects();
  const resumeAvailable = siteConfig.resume.available;

  return (
    <>
      <div className="scroll-progress no-print" aria-hidden="true" />

      {/* Hero — one composition: brand, headline, support, CTAs, motion plane */}
      <section className="hero-shell" aria-labelledby="hero-heading">
        <div className="container-page hero-grid">
          <div className="relative z-[1]">
            <p className="hero-enter text-sm font-medium tracking-[0.08em] text-accent uppercase">
              Analytics portfolio
            </p>
            <h1
              id="hero-heading"
              className="hero-enter hero-enter-delay-1 mt-4 text-[clamp(2.6rem,6vw,4.35rem)] font-semibold tracking-tight leading-[1.05]"
            >
              {siteConfig.name}
            </h1>
            <p className="hero-enter hero-enter-delay-2 mt-6 max-w-xl text-xl font-medium leading-snug text-foreground/90 sm:text-2xl">
              {siteConfig.headline}
            </p>
            <p className="hero-enter hero-enter-delay-3 mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              SQL, Python, Power BI, and Tableau — turned into decisions stakeholders can
              act on.
            </p>
            <div className="hero-enter hero-enter-delay-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            <ul className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-underline hover:text-foreground"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="hero-visual hero-visual-enter" aria-hidden="true">
            <HeroMotionGraphic />
            <div className="hero-portrait motion-float">
              {siteConfig.headshot.available ? (
                <Image
                  src={siteConfig.headshot.href}
                  alt={siteConfig.headshot.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 20rem"
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center"
                  role="img"
                  aria-label="Initials placeholder for Lochanreddy Mallakunta headshot"
                >
                  <span className="text-7xl font-semibold tracking-tight text-accent">
                    {siteConfig.initials}
                  </span>
                  <span className="mt-3 text-sm text-muted">St. Louis, MO</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Role map */}
      <section className="section-space pt-4" aria-labelledby="title-map-heading">
        <div className="container-page">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-[0.08em] text-accent uppercase">
              Role map
            </p>
            <h2
              id="title-map-heading"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              One analytical foundation
            </h2>
            <p className="mt-4 text-muted">
              Data → Insight → Decision. Titles change. The craft stays consistent.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 1000 640"
              aria-hidden="true"
            >
              <g fill="none" stroke="var(--accent)" strokeOpacity="0.22" strokeWidth="1.5">
                <path className="approach-line" pathLength="1" d="M500 320 L220 120" />
                <path className="approach-line" pathLength="1" d="M500 320 L500 90" />
                <path className="approach-line" pathLength="1" d="M500 320 L780 120" />
                <path className="approach-line" pathLength="1" d="M500 320 L220 520" />
                <path className="approach-line" pathLength="1" d="M500 320 L500 560" />
                <path className="approach-line" pathLength="1" d="M500 320 L780 520" />
              </g>
            </svg>
            <div className="reveal-stagger relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              <div className="role-hub order-first col-span-full mx-auto flex min-h-40 max-w-md flex-col items-center justify-center border border-border p-8 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:w-[18rem] lg:-translate-x-1/2 lg:-translate-y-1/2">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent">
                  FOUNDATION
                </p>
                <p className="mt-3 font-display text-lg font-semibold tracking-tight">
                  Data → Insight → Decision
                </p>
              </div>
              {roleMap.map((role) => (
                <article
                  key={role.title}
                  className="lift-hover border border-border bg-surface/90 p-5 backdrop-blur-sm lg:min-h-[12.5rem]"
                >
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

      <div className="container-page">
        <div className="section-rule" aria-hidden="true" />
      </div>

      {/* Featured projects */}
      <section className="section-space" aria-labelledby="featured-heading">
        <div className="container-page">
          <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium tracking-[0.08em] text-accent uppercase">
                Featured work
              </p>
              <h2
                id="featured-heading"
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Case studies for a 60-second scan
              </h2>
              <p className="mt-4 text-muted">
                Each study leads with the problem and outcome. Evidence lives on the detail
                pages.
              </p>
            </div>
            <Link href="/projects" className={btnSecondary}>
              All projects
            </Link>
          </div>
          <div className="reveal-stagger mt-12 grid gap-8 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        className="section-space relative overflow-hidden"
        aria-labelledby="skills-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.65),transparent)]"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <h2
            id="skills-heading"
            className="reveal text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Skills grouped by how the work gets done
          </h2>
          <div className="reveal-stagger mt-10 grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="border-t border-border pt-5">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-accent-soft/70 px-3 py-1.5 text-sm text-foreground/90"
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
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="reveal">
            <p className="mb-3 text-sm font-medium tracking-[0.08em] text-accent uppercase">
              Founder perspective
            </p>
            <h2
              id="founder-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Founder perspective, analyst discipline
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Building DigiPae at CEIVIS is applied analytics and business ownership—not a
              startup pitch, and not unverified traction.
            </p>
            <p className="mt-4 text-sm text-muted">{siteConfig.founderLine}</p>
          </div>
          <div className="reveal-scale relative overflow-hidden border border-border bg-surface p-7 sm:p-9">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-teal-soft/80"
              aria-hidden="true"
            />
            <ul className="relative grid gap-3 sm:grid-cols-2">
              {[
                "Measurable product questions",
                "Payment and identity workflows",
                "User and merchant funnels",
                "KPI and compliance reporting",
              ].map((item) => (
                <li key={item} className="border-l-2 border-accent/40 pl-4 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/projects/${siteConfig.digipaeCaseStudySlug}`}
                className={btnPrimary}
              >
                DigiPae case study
              </Link>
              <a
                href={siteConfig.digipae}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-sm font-medium text-accent"
              >
                digipae.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page">
        <div className="section-rule" aria-hidden="true" />
      </div>

      {/* Experience */}
      <section className="section-space" aria-labelledby="experience-heading">
        <div className="container-page">
          <h2
            id="experience-heading"
            className="reveal text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Experience and education
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="reveal">
              <h3 className="text-lg font-semibold">Experience</h3>
              <ol className="mt-6 space-y-0">
                {experienceItems.map((item) => (
                  <li
                    key={item.title}
                    className="relative border-l border-border py-5 pl-6 first:pt-1 last:pb-0"
                  >
                    <span
                      className="absolute top-[1.4rem] left-[-4px] h-2 w-2 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {item.organization} · {item.period}
                    </p>
                    <p className="mt-3 text-sm text-muted">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="reveal">
              <h3 className="text-lg font-semibold">Education</h3>
              <ol className="mt-6 space-y-0">
                {educationItems.map((item) => (
                  <li
                    key={item.title}
                    className="relative border-l border-teal/40 py-5 pl-6 first:pt-1 last:pb-0"
                  >
                    <span
                      className="absolute top-[1.35rem] left-[-4px] h-2 w-2 rounded-full bg-teal"
                      aria-hidden="true"
                    />
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
      <section className="section-space pt-2" aria-labelledby="approach-heading">
        <div className="container-page">
          <h2
            id="approach-heading"
            className="reveal text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Analytical approach
          </h2>
          <ol className="reveal-stagger mt-12 grid gap-0 md:grid-cols-5">
            {analyticalApproach.map((stage, index) => (
              <li
                key={stage.step}
                className="relative border-t border-border pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-5 md:first:border-l-0 md:first:pl-0"
              >
                <p className="font-display text-3xl font-semibold text-accent/25">
                  0{stage.step}
                </p>
                <h3 className="mt-3 text-base font-semibold">{stage.title}</h3>
                <p className="mt-3 text-sm text-muted">{stage.description}</p>
                {index < analyticalApproach.length - 1 ? (
                  <span
                    className="absolute top-2 right-2 hidden text-accent/30 md:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-space pt-4 pb-20" aria-labelledby="cta-heading">
        <div className="container-page">
          <div className="reveal-scale relative overflow-hidden border border-border px-8 py-12 sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(84,69,127,0.08),transparent_42%,rgba(44,106,101,0.1))]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-16 -bottom-20 h-64 w-64 rounded-full bg-accent/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative max-w-2xl">
              <h2
                id="cta-heading"
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Looking for an analyst who can connect data to decisions?
              </h2>
              <p className="mt-4 text-muted">
                Reach out for analyst, BI, business, operations, marketing, product, or
                RevOps conversations.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={btnPrimary}>
                  Contact form
                </Link>
                <a href={`mailto:${siteConfig.email}`} className={btnSecondary}>
                  Email {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
