import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "tax-filing-process-analytics";

export const taxFilingProcessAnalytics = {
  slug,
  title: "Tax Filing Process and Customer Analytics",
  shortTitle: "Tax Filing Analytics",
  oneLineOutcome:
    "An operations-oriented analytics framing for seasonal filing volume, exception categories, turnaround time, and customer-service demand.",
  summary:
    "Structured a tax-filing process analytics case around volume seasonality, customer segments, exceptions, and operational bottlenecks. The public title intentionally omits any unverified employer brand until relationship and publication rights are confirmed.",
  businessContext:
    "Tax filing operations are highly seasonal. Teams need to understand volume peaks, exception load, processing turnaround, and where assisted versus digital paths create different service demand.",
  businessQuestion:
    "How do filing volume, exceptions, and turnaround times vary across the season—and where should staffing, education, or workflow attention be focused?",
  role: "Financial and operations analyst framing",
  responsibilities: [
    "Define seasonal and process KPIs",
    "Segment filing and service demand patterns",
    "Design exception and turnaround analyses",
    "Translate findings into staffing and workflow recommendations",
    "Keep employer naming and data rights accurate",
  ],
  projectType: "Independent",
  domain: "Tax / Finance",
  roleCategories: ["Data", "BI / Reporting", "Business", "Operations"],
  tools: ["Excel", "Power BI", "SQL", "Power Query", "DAX"],
  skills: [
    "Process metrics",
    "Seasonality analysis",
    "Exception analysis",
    "Dashboard design",
    "Operational recommendations",
  ],
  date: "Dates pending confirmation",
  status: "Featured",
  featured: true,
  evidenceTypes: [
    "Seasonal volume chart",
    "Exception Pareto",
    "Turnaround distribution",
    "Operations dashboard",
  ],
  problem:
    "Seasonal filing operations need clearer visibility into volume peaks, exception drivers, and turnaround bottlenecks.",
  approach:
    "Planned reporting across volume, segments, exceptions, and turnaround, with recommendations for staffing and workflow follow-up using public, synthetic, or rights-cleared data only.",
  datasetName: "Tax filing process dataset (source pending confirmation)",
  datasetSource:
    "[Pending confirmation] Use public, synthetic, or explicitly approved anonymized data only. Do not publish private taxpayer information.",
  dataClassification: "Pending confirmation",
  dataVolume: null,
  dataPeriod: null,
  dataQualityIssues: [
    "Status codes may be inconsistent across channels",
    "Turnaround timestamps can be missing for exception paths",
    "Assisted versus digital labels may be incomplete",
  ],
  methods: [
    "Seasonal volume analysis",
    "Segment comparison",
    "Exception Pareto analysis",
    "Turnaround-time distribution",
    "Operations dashboard requirements",
  ],
  kpis: [
    "Filing volume",
    "Exception rate",
    "Median turnaround time",
    "Customer-service demand",
    "Digital versus assisted mix",
  ],
  verifiedResults: [
    pendingResult("Seasonal KPI set defined"),
    pendingResult("Exception analysis plan drafted"),
    pendingResult("Operations dashboard outline completed"),
  ],
  findings: [
    "Seasonality should drive staffing and education planning, not only retrospective reporting.",
    "Exception categories are more actionable than a single error rate.",
    "Turnaround distributions matter more than averages when queues form.",
  ],
  recommendations: [
    "Monitor top exception categories weekly during peak season.",
    "Align staffing plans to historical volume curves and current queue age.",
    "Use segment comparisons to target education or workflow changes.",
  ],
  limitations: [
    "Employer or brand relationships are not claimed in this public version.",
    "Verified results are not yet available.",
    "Any confidential tax data is excluded from publication.",
  ],
  futureWork: [
    "Confirm project relationship and naming rights",
    "Add synthetic seasonal charts",
    "Publish dashboard screenshots when cleared",
  ],
  cleaningNotes: [
    "Standardize filing status values",
    "Validate turnaround calculations across channels",
    "Remove or suppress any personal tax attributes",
  ],
  analysisNotes: [
    "Compare peak versus off-peak weeks",
    "Rank exception reasons by volume and handling time",
    "Separate digital and assisted pathways in process views",
  ],
  impactNotes: [
    "Intended impact: better seasonal planning and clearer exception ownership.",
    "No measured cost or time savings are claimed yet.",
  ],
  privacyNotes: [
    "Never publish taxpayer PII, return contents, or confidential employer extracts.",
    "Prefer synthetic process data for portfolio evidence.",
  ],
  technicalWork: [
    "Outlined Power BI operations dashboard pages",
    "Defined DAX/Excel-friendly KPI calculations for volume and turnaround",
  ],
  disclaimers: [
    "Public title intentionally avoids unverified company branding.",
    "Internal references must not be published until permission and accuracy are confirmed.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing tax filing process analytics",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Seasonal filing volume",
      whatThisShows: "Planned weekly or monthly filing volume curve.",
      whyItMatters: "Supports staffing and capacity planning discussions.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Exception category Pareto",
      whatThisShows: "Planned ranking of exception or error categories.",
      whyItMatters: "Focuses remediation on the few categories that create most operational load.",
    }),
  ],
  links: [],
} satisfies Project;
