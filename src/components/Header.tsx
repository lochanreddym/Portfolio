"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const resumeAvailable = siteConfig.resume.available;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/80 bg-[rgba(247,245,249,0.88)] backdrop-blur">
      <div className="container-page flex items-center justify-between gap-4 py-4">
        <Link href="/" className="min-w-0">
          <span className="block truncate text-base font-semibold tracking-tight">
            {siteConfig.name}
          </span>
          <span className="block text-xs text-muted">Analytics portfolio</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-accent-soft hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={resumeAvailable ? siteConfig.resume.href : "/resume"}
          className="hidden rounded-xl bg-accent px-3.5 py-2 text-sm font-medium text-[#fff] md:inline-flex"
          {...(resumeAvailable ? { download: siteConfig.resume.fileName } : {})}
        >
          Resume
        </Link>

        <div className="md:hidden">
          <button
            ref={openRef}
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface p-2.5"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen(true)}
          >
            <span aria-hidden="true">☰</span>
            <span className="sr-only">Open menu</span>
          </button>

          {open ? (
            <div className="fixed inset-0 z-50">
              <button
                type="button"
                className="absolute inset-0 bg-[rgba(27,36,48,0.45)]"
                aria-label="Dismiss menu"
                onClick={() => {
                  setOpen(false);
                  openRef.current?.focus();
                }}
              />
              <div
                id={panelId}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-surface shadow-soft"
              >
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <p className="font-semibold">Menu</p>
                  <button
                    ref={closeRef}
                    type="button"
                    className="rounded-xl border border-border px-3 py-2 text-sm"
                    onClick={() => {
                      setOpen(false);
                      openRef.current?.focus();
                    }}
                  >
                    Close menu
                  </button>
                </div>
                <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile">
                  {siteConfig.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-xl px-4 py-3 text-base font-medium ${
                        pathname === item.href
                          ? "bg-accent-soft text-accent"
                          : "text-foreground"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
