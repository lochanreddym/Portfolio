import type { MetadataRoute } from "next";

import { getAllSlugs } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const staticRoutes = ["", "/projects", "/about", "/resume", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );

  const projectRoutes = getAllSlugs().map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
