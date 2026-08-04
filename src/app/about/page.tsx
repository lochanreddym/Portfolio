import type { Metadata } from "next";
import Link from "next/link";

import {
  aboutHighlights,
  certifications,
  educationItems,
  experienceItems,
} from "@/data/experience";
import { analyticalApproach, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional biography, analytical approach, founder background, and career focus for Lochanreddy Mallakunta.",
  alternates: { canonical: "/about" },
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-[#fff] hover:bg-[#4c3f75]";
const btnSecondary =
  "inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-accent-soft";

export default function AboutPage() {
  return (
    <div className="section-space pt-10">
      <div className="container-page max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">About</li>
          </ol>
        </nav>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold tracking-tight">About</h1>
          <p className="mt-4 text-lg text-muted">{siteConfig.description}</p>
        </header>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Career focus</h2>
          <p className="text-muted">
            This portfolio positions {siteConfig.name} for analyst roles across data,
            BI/reporting, business, operations, marketing, product, RevOps, and financial
            data analysis. Those titles share one foundation: turn complex information
            into decisions stakeholders can use.
          </p>
          <ul className="space-y-3">
            {aboutHighlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">Analytical approach</h2>
          <ol className="grid gap-4 sm:grid-cols-2">
            {analyticalApproach.map((stage) => (
              <li key={stage.step} className="rounded-2xl border border-border p-5">
                <p className="text-sm font-semibold text-accent">0{stage.step}</p>
                <h3 className="mt-2 font-semibold">{stage.title}</h3>
                <p className="mt-2 text-sm text-muted">{stage.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">Founder background</h2>
          <p className="text-muted">
            As Founder & Full-Stack Developer at DigiPae (Ceivis LLC), the work includes
            Mixpanel product analytics, payment and KYC funnel tracking, KPI dashboards,
            multi-vendor data reconciliation, and stakeholder-ready reporting. That
            experience supports analyst positioning; it does not replace project evidence
            and does not include unverified traction claims.
          </p>
          <p className="text-sm text-muted">Based in {siteConfig.location}.</p>
          <div className="flex flex-wrap gap-3">
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
              className={btnSecondary}
            >
              DigiPae website
            </a>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          {experienceItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {item.organization} · {item.period}
              </p>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          {educationItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {item.organization} · {item.period}
              </p>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {certifications.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl bg-accent-soft p-6">
          <h2 className="text-xl font-semibold">Looking for project evidence?</h2>
          <p className="mt-2 text-sm text-muted">
            Start with the featured case studies, then filter the library by the role you
            are hiring for.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/projects" className={btnPrimary}>
              View projects
            </Link>
            <Link href="/contact" className={btnSecondary}>
              Contact
            </Link>
            <Link href="/resume" className="text-sm font-medium text-accent hover:underline">
              Resume page
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
