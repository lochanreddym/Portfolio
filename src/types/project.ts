import { z } from "zod";

export const roleCategorySchema = z.enum([
  "Data",
  "BI / Reporting",
  "Business",
  "Operations",
  "Marketing",
  "Product",
  "RevOps",
  "Machine Learning",
]);

export const toolSchema = z.enum([
  "SQL",
  "Excel",
  "Power BI",
  "Python",
  "DAX",
  "Power Query",
  "Tableau",
  "Machine Learning",
]);

export const domainSchema = z.enum([
  "Fintech",
  "Smart City",
  "Tax / Finance",
  "Healthcare",
  "SaaS",
  "Marketing",
  "Operations",
]);

export const projectTypeSchema = z.enum([
  "Startup",
  "Research",
  "Academic",
  "Independent",
  "Professional",
]);

export const dataClassificationSchema = z.enum([
  "Public",
  "Synthetic",
  "Anonymized",
  "Confidential",
  "Pending confirmation",
]);

export const projectStatusSchema = z.enum([
  "Featured",
  "Published",
  "In progress",
  "Placeholder",
]);

export const projectLinkTypeSchema = z.enum([
  "Source code",
  "GitHub repository",
  "Notebook",
  "Live dashboard",
  "Dataset",
  "PDF report",
  "Presentation",
  "External project",
  "Demo video",
]);

export const verifiedResultSchema = z.object({
  label: z.string().min(1),
  value: z.union([z.string(), z.number()]).nullable(),
  detail: z.string().optional(),
});

export const galleryItemSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  title: z.string().min(1),
  caption: z.string().min(1),
  whatThisShows: z.string().min(1),
  whyItMatters: z.string().min(1),
  recommendedAction: z.string().optional(),
  isPlaceholder: z.boolean().default(false),
  table: z
    .object({
      headers: z.array(z.string()),
      rows: z.array(z.array(z.string())),
    })
    .optional(),
});

export const projectLinkSchema = z.object({
  type: projectLinkTypeSchema,
  label: z.string().min(1),
  href: z.string().url(),
});

export const projectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  shortTitle: z.string().min(1),
  oneLineOutcome: z.string().min(1),
  summary: z.string().min(1),
  businessContext: z.string().min(1),
  businessQuestion: z.string().min(1),
  role: z.string().min(1),
  responsibilities: z.array(z.string()).min(1),
  projectType: projectTypeSchema,
  domain: domainSchema,
  roleCategories: z.array(roleCategorySchema).min(1),
  tools: z.array(toolSchema).min(1),
  skills: z.array(z.string()).min(1),
  date: z.string().min(1),
  status: projectStatusSchema,
  featured: z.boolean(),
  evidenceTypes: z.array(z.string()).min(1),
  problem: z.string().min(1),
  approach: z.string().min(1),
  datasetName: z.string().min(1),
  datasetSource: z.string().min(1),
  dataClassification: dataClassificationSchema,
  dataVolume: z.string().nullable(),
  dataPeriod: z.string().nullable(),
  dataQualityIssues: z.array(z.string()),
  methods: z.array(z.string()).min(1),
  kpis: z.array(z.string()),
  verifiedResults: z.array(verifiedResultSchema),
  findings: z.array(z.string()).min(1),
  recommendations: z.array(z.string()).min(1),
  limitations: z.array(z.string()).min(1),
  futureWork: z.array(z.string()),
  cleaningNotes: z.array(z.string()),
  analysisNotes: z.array(z.string()),
  impactNotes: z.array(z.string()),
  privacyNotes: z.array(z.string()),
  technicalWork: z.array(z.string()),
  disclaimers: z.array(z.string()),
  coverImage: z.string().min(1),
  coverAlt: z.string().min(1),
  gallery: z.array(galleryItemSchema),
  links: z.array(projectLinkSchema),
  codeSample: z
    .object({
      title: z.string(),
      language: z.string(),
      code: z.string(),
      caption: z.string(),
    })
    .optional(),
});

export type RoleCategory = z.infer<typeof roleCategorySchema>;
export type Tool = z.infer<typeof toolSchema>;
export type Domain = z.infer<typeof domainSchema>;
export type ProjectType = z.infer<typeof projectTypeSchema>;
export type DataClassification = z.infer<typeof dataClassificationSchema>;
export type ProjectStatus = z.infer<typeof projectStatusSchema>;
export type ProjectLinkType = z.infer<typeof projectLinkTypeSchema>;
export type VerifiedResult = z.infer<typeof verifiedResultSchema>;
export type GalleryItem = z.infer<typeof galleryItemSchema>;
export type ProjectLink = z.infer<typeof projectLinkSchema>;
export type Project = z.infer<typeof projectSchema>;

export type ProjectCardData = Pick<
  Project,
  | "slug"
  | "title"
  | "shortTitle"
  | "oneLineOutcome"
  | "problem"
  | "domain"
  | "roleCategories"
  | "tools"
  | "evidenceTypes"
  | "status"
  | "featured"
  | "projectType"
  | "coverImage"
  | "coverAlt"
  | "dataClassification"
>;
