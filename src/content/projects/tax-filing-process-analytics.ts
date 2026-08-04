import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "tax-filing-process-analytics";

export const taxFilingProcessAnalytics = {
  slug,
  title: "H&R Block Tax Analytics & Automation",
  shortTitle: "Tax Filing Analytics",
  oneLineOutcome:
    "Analyzed filing patterns and workflow bottlenecks, restructured ETL pipelines for about 40% faster processing, and delivered Power BI dashboards with automated validation.",
  summary:
    "Project-based tax analytics and automation work focused on filing-pattern analysis, ETL restructuring, Power BI error-tracking dashboards, and Python automation for recurring reporting and backups. Presented as a project from the resume—not as an implied endorsement by H&R Block.",
  businessContext:
    "Tax filing platforms generate seasonal volume, exception load, and operational reporting demand. Analysts need visibility into workflow bottlenecks, error patterns, and processing efficiency so leadership can act during peak periods.",
  businessQuestion:
    "Where do filing workflows bottleneck, which error patterns need attention, and how can ETL and reporting automation improve processing efficiency and leadership visibility?",
  role: "Data analyst · project contributor",
  responsibilities: [
    "Analyze user filing patterns and financial process data for bottlenecks",
    "Restructure ETL pipelines to improve processing efficiency",
    "Create Power BI dashboards with automated data validation",
    "Build Python scripts for recurring reporting and backups",
    "Collaborate in a small team to resolve data inconsistencies",
  ],
  projectType: "Independent",
  domain: "Tax / Finance",
  roleCategories: ["Data", "BI / Reporting", "Business", "Operations"],
  tools: ["Excel", "Power BI", "SQL", "Power Query", "Python", "DAX"],
  skills: [
    "ETL restructuring",
    "Process bottleneck analysis",
    "Dashboard design",
    "Reporting automation",
    "Data validation",
  ],
  date: "May 2024",
  status: "Featured",
  featured: true,
  evidenceTypes: [
    "ETL redesign",
    "Power BI dashboards",
    "Python automation",
    "Error-tracking views",
  ],
  problem:
    "Filing workflows and reporting processes needed clearer bottleneck analysis, better error visibility, and less manual reporting effort.",
  approach:
    "Analyzed filing patterns, restructured ETL pipelines, built Power BI dashboards with validation, and automated recurring reporting/backups with Python in a 3-member team.",
  datasetName: "Tax filing process and platform activity data (project dataset)",
  datasetSource:
    "Project dataset used for tax analytics and automation work listed on the resume. A Wix project URL was provided by the author but returned HTTP 404 when verified on 2026-08-04; link omitted until the live page is restored.",
  dataClassification: "Pending confirmation",
  dataVolume: null,
  dataPeriod: "May 2024",
  dataQualityIssues: [
    "Status and error codes can be inconsistent across workflow stages",
    "Manual reporting paths increase reconciliation risk",
    "Team-resolved inconsistencies need documented source-of-truth rules",
  ],
  methods: [
    "Filing-pattern and bottleneck analysis",
    "ETL pipeline restructuring",
    "Power BI dashboarding with validation",
    "Python reporting and backup automation",
    "Team-based data inconsistency resolution",
  ],
  kpis: [
    "Processing efficiency",
    "Error-tracking visibility",
    "Manual reporting effort",
    "Filing workflow bottleneck indicators",
  ],
  verifiedResults: [
    {
      label: "ETL efficiency",
      value: "~40% faster processing",
      detail: "Resume-stated improvement after ETL pipeline restructuring.",
    },
    {
      label: "Reporting automation",
      value: "~50% less manual effort",
      detail: "Resume-stated reduction from Python automation of routine reporting/backups.",
    },
    {
      label: "Leadership visibility",
      value: "Power BI dashboards",
      detail: "Automated validation and real-time platform activity insight per resume.",
    },
    pendingResult("Public dashboard screenshots once publication rights are confirmed"),
  ],
  findings: [
    "Workflow bottlenecks become actionable when filing patterns and exception categories are analyzed together.",
    "ETL restructuring can materially reduce processing lag before dashboard work starts.",
    "Automated validation improves trust in leadership-facing activity and error views.",
  ],
  recommendations: [
    "Keep exception categories and processing-time metrics on the same operating review cadence.",
    "Document ETL source-of-truth rules after team inconsistency fixes.",
    "Restore or replace the public project page before relying on an external demo link.",
  ],
  limitations: [
    "H&R Block naming appears as the resume project title; this page does not claim current employment or corporate endorsement.",
    "The provided Wix URL (`nalandac98.wixsite.com/final5000`) returned 404 at verification time and is not linked.",
    "Underlying dataset rights should be reconfirmed before uploading detailed screenshots.",
  ],
  futureWork: [
    "Add a working public demo or report link",
    "Upload cleared Power BI screenshots",
    "Clarify whether any synthetic demonstration data should replace restricted extracts",
  ],
  cleaningNotes: [
    "Standardize filing and error status values",
    "Validate ETL outputs before dashboard refresh",
    "Suppress any personal tax attributes from portfolio evidence",
  ],
  analysisNotes: [
    "Locate bottleneck stages in the filing workflow",
    "Track error categories that drive operational load",
    "Measure manual reporting effort before and after automation",
  ],
  impactNotes: [
    "Resume-stated outcomes: about 40% ETL processing efficiency gain and about 50% reduction in manual reporting effort.",
    "These figures come from the candidate resume and are not independently re-measured in this repository.",
  ],
  privacyNotes: [
    "Never publish taxpayer PII or confidential return contents.",
    "Prefer aggregated process metrics and cleared dashboard crops.",
  ],
  technicalWork: [
    "Restructured ETL pipelines for filing/process analytics",
    "Built Power BI dashboards with automated validation",
    "Automated reporting and backups with Python",
  ],
  disclaimers: [
    "Project title follows the candidate resume. No endorsement by H&R Block is implied.",
    "External demo link omitted while the provided Wix URL returns 404.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing tax filing process analytics",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Filing workflow bottleneck view",
      whatThisShows: "Planned view of process stages and delay points.",
      whyItMatters: "Helps prioritize ETL and operations fixes.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Error-tracking Power BI dashboard",
      whatThisShows: "Planned dashboard for error visibility and platform activity.",
      whyItMatters: "Supports leadership review during peak filing periods.",
    }),
  ],
  links: [],
} satisfies Project;
