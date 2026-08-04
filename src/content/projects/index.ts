import { aiDrivenHealthcareAnalysis } from "./ai-driven-healthcare-analysis";
import { digipaePaymentProductAnalytics } from "./digipae-payment-product-analytics";
import { marketingAttributionCustomerSegmentation } from "./marketing-attribution-customer-segmentation";
import { operationsInventoryPerformanceAnalytics } from "./operations-inventory-performance-analytics";
import { saasRevenueOperationsAnalytics } from "./saas-revenue-operations-analytics";
import { smartCityResearchAnalytics } from "./smart-city-research-analytics";
import { taxFilingProcessAnalytics } from "./tax-filing-process-analytics";
import { projectSchema, type Project, type ProjectCardData } from "@/types/project";

const projectSources = [
  digipaePaymentProductAnalytics,
  smartCityResearchAnalytics,
  taxFilingProcessAnalytics,
  aiDrivenHealthcareAnalysis,
  saasRevenueOperationsAnalytics,
  marketingAttributionCustomerSegmentation,
  operationsInventoryPerformanceAnalytics,
] as const;

function validateProjects(sources: readonly Project[]): Project[] {
  return sources.map((project, index) => {
    const parsed = projectSchema.safeParse(project);
    if (!parsed.success) {
      const details = parsed.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("\n");
      throw new Error(
        `Invalid project content at index ${index} (slug: ${project.slug ?? "unknown"}):\n${details}`,
      );
    }

    for (const link of parsed.data.links) {
      if (!link.href || link.href === "#") {
        throw new Error(
          `Project ${parsed.data.slug} has an invalid link href for ${link.label}`,
        );
      }
    }

    return parsed.data;
  });
}

export const projects: Project[] = validateProjects([...projectSources]);

export function getProjectCards(): ProjectCardData[] {
  return projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    shortTitle: project.shortTitle,
    oneLineOutcome: project.oneLineOutcome,
    problem: project.problem,
    domain: project.domain,
    roleCategories: project.roleCategories,
    tools: project.tools,
    evidenceTypes: project.evidenceTypes,
    status: project.status,
    featured: project.featured,
    projectType: project.projectType,
    coverImage: project.coverImage,
    coverAlt: project.coverAlt,
    dataClassification: project.dataClassification,
  }));
}

export function getFeaturedProjects(): ProjectCardData[] {
  return getProjectCards().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? (projects[index - 1] ?? null) : null,
    next: index < projects.length - 1 ? (projects[index + 1] ?? null) : null,
  };
}
