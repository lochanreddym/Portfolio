"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

export type TocItem = {
  id: string;
  label: string;
};

export function ProjectToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const first = visible[0]?.target.id;
        if (first) setActiveId(first);
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    for (const heading of headings) observer.observe(heading);
    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={cn(
              "block rounded-lg px-3 py-2 text-sm transition-colors",
              activeId === item.id
                ? "bg-accent-soft font-medium text-accent"
                : "text-muted hover:bg-background hover:text-foreground",
            )}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="no-print mb-6 lg:hidden">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          On this page
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        {open ? <div className="mt-3 rounded-xl border border-border bg-surface p-3">{list}</div> : null}
      </div>

      <nav
        aria-label="On this page"
        className="no-print sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-auto rounded-2xl border border-border bg-surface p-4 lg:block"
      >
        <p className="mb-3 text-sm font-semibold text-foreground">On this page</p>
        {list}
      </nav>
    </>
  );
}
