"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Expand, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { ResultTable } from "@/components/evidence/ResultTable";
import { Badge } from "@/components/ui/Badge";
import type { GalleryItem } from "@/types/project";

export function EvidenceGallery({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : items[activeIndex];

  return (
    <div>
      <ul className="grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="surface-card overflow-hidden">
            <div className="relative aspect-[16/10] bg-background">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-accent">Figure {index + 1}</p>
                {item.isPlaceholder ? <Badge tone="warning">Placeholder</Badge> : null}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.caption}</p>
              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">What this shows: </span>
                {item.whatThisShows}
              </p>
              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">Why it matters: </span>
                {item.whyItMatters}
              </p>
              {item.recommendedAction ? (
                <p className="text-sm text-muted">
                  <span className="font-medium text-foreground">Recommended action: </span>
                  {item.recommendedAction}
                </p>
              ) : null}
              {item.table ? (
                <ResultTable
                  caption={`Accessible data for ${item.title}`}
                  headers={item.table.headers}
                  rows={item.table.rows}
                />
              ) : null}
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-medium hover:bg-accent-soft"
                onClick={() => setActiveIndex(index)}
              >
                <Expand className="h-4 w-4" aria-hidden="true" />
                Open full screen
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Dialog.Root
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-[rgba(27,36,48,0.72)]" />
          <Dialog.Content className="fixed inset-4 z-50 overflow-auto rounded-2xl bg-surface p-4 shadow-soft focus:outline-none md:inset-10">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <Dialog.Title className="text-xl font-semibold">
                  {active?.title ?? "Evidence figure"}
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-muted">
                  {active?.caption}
                </Dialog.Description>
              </div>
              <Dialog.Close className="rounded-xl border border-border p-2 hover:bg-background">
                <X className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Close dialog</span>
              </Dialog.Close>
            </div>
            {active ? (
              <div className="relative mx-auto aspect-[16/10] w-full max-w-5xl bg-background">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
