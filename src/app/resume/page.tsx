import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ResumeDownload } from "@/components/ui/ResumeDownload";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume overview and download options for Lochanreddy Mallakunta.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  const available = siteConfig.resume.available;

  return (
    <div className="section-space pt-10">
      <div className="container-page max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resume" },
          ]}
        />
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
                <ResumeDownload />
              </div>
            </>
          ) : (
            <>
              <p className="font-medium text-foreground">Resume PDF not uploaded yet</p>
              <p className="mt-2 text-sm text-muted">
                Add an ATS-friendly PDF at:
              </p>
              <code className="mt-3 block rounded-xl bg-background px-4 py-3 text-sm">
                public/{siteConfig.resume.relativePath}
              </code>
              <p className="mt-3 text-sm text-muted">
                The site configuration detects the file at build/runtime and enables the
                download button automatically. No fake PDF is generated.
              </p>
              {process.env.NODE_ENV === "development" ? (
                <p className="mt-4 rounded-xl bg-warning-soft px-4 py-3 text-sm text-[#8a5a12]">
                  Development warning: resume download is currently disabled because the
                  PDF is missing.
                </p>
              ) : null}
              <div className="mt-5">
                <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                  Request resume by email
                </Button>
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
