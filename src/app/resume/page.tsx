import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig, skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume overview and download options for Lochanreddy Mallakunta.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  const available = siteConfig.resume.available;

  return (
    <div className="section-space pt-10">
      <div className="container-page max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Resume</li>
          </ol>
        </nav>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold tracking-tight">Resume</h1>
          <p className="mt-4 text-lg text-muted">
            ATS-friendly PDF download when the file is present. If the PDF is missing,
            the download action stays disabled and this page explains exactly where to add
            it.
          </p>
        </header>

        <section className="mt-8 rounded-2xl border border-border bg-surface p-6">
          {available ? (
            <>
              <p className="font-medium text-foreground">Resume PDF is available.</p>
              <p className="mt-2 text-sm text-muted">
                File path: public/{siteConfig.resume.relativePath}
              </p>
              <div className="mt-5">
                <a
                  href={siteConfig.resume.href}
                  download={siteConfig.resume.fileName}
                  className="inline-flex rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-[#fff]"
                >
                  Download Resume
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="font-medium text-foreground">Resume PDF not uploaded yet</p>
              <p className="mt-2 text-sm text-muted">Add an ATS-friendly PDF at:</p>
              <code className="mt-3 block rounded-xl bg-background px-4 py-3 text-sm">
                public/{siteConfig.resume.relativePath}
              </code>
              <p className="mt-3 text-sm text-muted">
                The site detects the file at build/runtime and enables the download
                automatically. No fake PDF is generated.
              </p>
              <div className="mt-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent-soft"
                >
                  Request resume by email
                </a>
              </div>
            </>
          )}
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Resume snapshot</h2>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <span className="font-medium text-foreground">Positioning: </span>
              {siteConfig.headline}
            </li>
            <li>
              <span className="font-medium text-foreground">Contact: </span>
              {siteConfig.email}
            </li>
            <li>
              <span className="font-medium text-foreground">Profiles: </span>
              LinkedIn and GitHub linked from the site header and footer.
            </li>
            <li>
              <span className="font-medium text-foreground">Founder note: </span>
              {siteConfig.founderLine}
            </li>
          </ul>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Skill groups reflected on the site</h2>
          <ul className="space-y-3">
            {skillGroups.map((group) => (
              <li key={group.title} className="rounded-xl border border-border px-4 py-3">
                <p className="font-medium">{group.title}</p>
                <p className="mt-1 text-sm text-muted">{group.skills.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
