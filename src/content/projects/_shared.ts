import type { GalleryItem } from "@/types/project";

export function placeholderFigure(args: {
  slug: string;
  index: number;
  title: string;
  whatThisShows: string;
  whyItMatters: string;
  recommendedAction?: string;
}): GalleryItem {
  return {
    src: `/projects/${args.slug}/figure-${args.index}.svg`,
    alt: `${args.title} — evidence placeholder`,
    title: args.title,
    caption: `[Placeholder] Replace with exported chart, dashboard screenshot, or notebook output for: ${args.title}.`,
    whatThisShows: args.whatThisShows,
    whyItMatters: args.whyItMatters,
    recommendedAction: args.recommendedAction,
    isPlaceholder: true,
  };
}

export function pendingResult(label: string, detail?: string) {
  return {
    label,
    value: null as string | number | null,
    detail:
      detail ??
      "[Placeholder — add verified metric when available; no invented values.]",
  };
}
