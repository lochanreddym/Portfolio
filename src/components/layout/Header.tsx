import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/80 bg-[rgba(247,245,249,0.88)] backdrop-blur">
      <div className="container-page flex items-center justify-between gap-4 py-4">
        <Link href="/" className="min-w-0">
          <span className="block truncate text-base font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
          <span className="block text-xs text-muted">Analytics portfolio</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-accent-soft hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          {siteConfig.resume.available ? (
            <Button href={siteConfig.resume.href} size="sm">
              Resume
            </Button>
          ) : (
            <Button href="/resume" variant="secondary" size="sm">
              Resume
            </Button>
          )}
        </div>

        <MobileNav
          resumeAvailable={siteConfig.resume.available}
          resumeHref={siteConfig.resume.href}
        />
      </div>
    </header>
  );
}
