import { existsSync } from "node:fs";
import path from "node:path";

import { getSiteUrl } from "@/lib/site-url";

const resumeRelativePath = "resume/Lochanreddy-Mallakunta-Resume.pdf";
const headshotRelativePath = "images/lochanreddy-headshot.webp";

function publicAssetExists(relativePath: string): boolean {
  return existsSync(path.join(process.cwd(), "public", relativePath));
}

export const siteConfig = {
  name: "Lochanreddy Mallakunta",
  shortName: "Lochanreddy",
  initials: "LM",
  headline:
    "Turning data into decisions across BI, business, operations, marketing, and product.",
  description:
    "Junior Data Analyst with experience in SQL, Python, Power BI, Tableau, and Excel. Founder building DigiPae at CEIVIS, with additional analytics work across research, nonprofit operations, and cloud data environments.",
  founderLine: "Founder & Full-Stack Developer · DigiPae (Ceivis LLC)",
  email: "lochanreddy.m64@gmail.com",
  phone: "+1 314 986 4614",
  location: "St. Louis, MO",
  github: "https://github.com/lochanreddym",
  linkedin: "https://www.linkedin.com/in/lochanreddy64m/",
  portfolioRepo: "https://github.com/lochanreddym/Portfolio",
  digipae: "https://www.digipae.com",
  digipaeCaseStudySlug: "digipae-payment-product-analytics",
  locale: "en_US",
  get siteUrl() {
    return getSiteUrl();
  },
  resume: {
    relativePath: resumeRelativePath,
    href: `/${resumeRelativePath}`,
    fileName: "Lochanreddy-Mallakunta-Resume.pdf",
    get available() {
      return publicAssetExists(resumeRelativePath);
    },
  },
  headshot: {
    relativePath: headshotRelativePath,
    href: `/${headshotRelativePath}`,
    alt: "Portrait of Lochanreddy Mallakunta",
    get available() {
      return publicAssetExists(headshotRelativePath);
    },
  },
  socialImage: "/social/og-default.png",
} as const;

export type SiteConfig = typeof siteConfig;
