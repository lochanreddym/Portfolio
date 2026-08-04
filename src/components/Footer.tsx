import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="no-print border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm text-muted">
            Analytics portfolio focused on clear decisions across BI, business,
            operations, marketing, and product.
          </p>
          <p className="mt-4 text-sm text-muted">{siteConfig.founderLine}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Connect</p>
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
        <div className="container-page py-5 text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Evidence-based portfolio —
          no invented metrics.
        </div>
      </div>
    </footer>
  );
}
