import { Link2, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ResumeDownload } from "@/components/ui/ResumeDownload";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="section-space pb-16 pt-14" aria-labelledby="hero-heading">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-medium text-accent">Data & analytics professional</p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]"
          >
            {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            {siteConfig.headline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-muted">{siteConfig.founderLine}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
            <Button href="/projects" size="lg">
              View Projects
            </Button>
            <ResumeDownload size="lg" variant="secondary" />
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
            <li>
              <a
                href={siteConfig.github}
                className="inline-flex items-center gap-2 hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <Link2 className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                className="inline-flex items-center gap-2 hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                <Link2 className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <div className="surface-card relative overflow-hidden p-4">
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
                <span className="text-6xl font-semibold tracking-tight text-accent">
                  {siteConfig.initials}
                </span>
                <span className="mt-4 px-6 text-center text-sm text-muted">
                  Professional headshot pending
                  <br />
                  Add at public/{siteConfig.headshot.relativePath}
                </span>
              </div>
            )}
            <p className="mt-4 text-center text-sm text-muted">
              Analyst first.{" "}
              <Link
                href={`/projects/${siteConfig.digipaeCaseStudySlug}`}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                DigiPae case study
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
