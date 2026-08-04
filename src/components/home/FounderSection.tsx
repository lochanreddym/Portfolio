import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const founderPoints = [
  "Defining measurable product questions",
  "Evaluating payment and identity workflows",
  "Tracking user and merchant funnels",
  "Understanding payment failures",
  "Analyzing product adoption",
  "Prioritizing features with trade-offs",
  "Interpreting user feedback",
  "Balancing growth, risk, operations, and compliance",
] as const;

export function FounderSection() {
  return (
    <section className="section-space" aria-labelledby="founder-heading">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <SectionHeading
          id="founder-heading"
          eyebrow="Founder perspective"
          title="Founder perspective, analyst discipline"
          description="Building CEIVIS and DigiPae is presented here as applied analytics and business ownership—not as a startup landing page and not with unverified traction numbers."
        />
        <div className="surface-card p-6 sm:p-8">
          <p className="text-sm text-muted">
            Founder & CEO of CEIVIS · Building DigiPae, a payments and verified-identity
            platform.{" "}
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
            {founderPoints.map((point) => (
              <li
                key={point}
                className="rounded-xl bg-background px-4 py-3 text-sm text-foreground"
              >
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/projects/${siteConfig.digipaeCaseStudySlug}`}>
              DigiPae case study
            </Button>
            <Button href="/about" variant="secondary">
              About and approach
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted">
            Prefer the product site?{" "}
            <Link href={siteConfig.digipae} className="text-accent hover:underline">
              Visit DigiPae
            </Link>
            . Portfolio claims stay limited to analytical framing until verified metrics
            are added.
          </p>
        </div>
      </div>
    </section>
  );
}
