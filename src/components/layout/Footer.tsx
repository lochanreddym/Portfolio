import Link from "next/link";

import { siteConfig } from "@/data/site";
import { primaryNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="no-print border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm text-muted">
            Analytics portfolio focused on clear decisions across BI, business,
            operations, marketing, and product.
          </p>
          <p className="mt-4 text-sm text-muted">{siteConfig.founderLine}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Connect</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={siteConfig.digipae} target="_blank" rel="noreferrer">
                DigiPae
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built as an evidence-based analytics portfolio. No invented metrics.</p>
        </div>
      </div>
    </footer>
  );
}
