"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function MobileNav({
  resumeAvailable,
  resumeHref,
}: {
  resumeAvailable: boolean;
  resumeHref: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={openButtonRef}
        type="button"
        className="inline-flex items-center justify-center rounded-xl border border-border bg-surface p-2.5"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
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
              openButtonRef.current?.focus();
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
                ref={closeButtonRef}
                type="button"
                className="rounded-xl border border-border p-2"
                onClick={() => {
                  setOpen(false);
                  openButtonRef.current?.focus();
                }}
              >
                <X className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-accent-soft",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-border p-4">
              {resumeAvailable ? (
                <Button href={resumeHref} className="w-full" onClick={() => setOpen(false)}>
                  Download Resume
                </Button>
              ) : (
                <Button
                  href="/resume"
                  variant="secondary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  View Resume Page
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
