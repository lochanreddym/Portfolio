export interface ProjectVisual {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  tools: string[];
  skills: string[];
  visuals: ProjectVisual[];
  findings: string[];
  outcome: string;
  recommendations: string[];
  links?: ProjectLink[];
  featured?: boolean;
  /** Used for filters and compact project details */
  domain: string;
  roles: string[];
  projectType: string;
  date: string;
  details?: {
    dataset?: string;
    classification?: string;
    limitations?: string[];
  };
  results?: ProjectResult[];
}

export const FILTER_ROLES = [
  "Data",
  "BI / Reporting",
  "Business",
  "Operations",
  "Marketing",
  "Product",
  "RevOps",
  "Machine Learning",
] as const;

export const FILTER_TOOLS = [
  "SQL",
  "Excel",
  "Power BI",
  "Python",
  "DAX",
  "Power Query",
  "Tableau",
  "Machine Learning",
] as const;

export const FILTER_DOMAINS = [
  "Fintech",
  "Smart City",
  "Tax / Finance",
  "Healthcare",
  "SaaS",
  "Marketing",
  "Operations",
] as const;

export const FILTER_TYPES = [
  "Startup",
  "Research",
  "Academic",
  "Independent",
  "Professional",
] as const;
