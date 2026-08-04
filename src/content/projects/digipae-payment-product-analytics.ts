import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "digipae-payment-product-analytics";

export const digipaePaymentProductAnalytics = {
  slug,
  title: "DigiPae Payment and Product Analytics",
  shortTitle: "DigiPae Product Analytics",
  oneLineOutcome:
    "A measurement framework for identifying where users and merchants encounter friction across onboarding, verification, bank linking, and payment completion.",
  summary:
    "Designed an analytics framing for DigiPae’s payments and verified-identity workflows so product and operations decisions can be tied to measurable funnel stages, failure reasons, and activation signals—without exposing confidential production records.",
  businessContext:
    "DigiPae is a payments and verified-identity platform built by CEIVIS. Early product decisions require clarity on where users and merchants drop off, why payments fail, and which operational exceptions deserve priority. This case study focuses on analytical decision support rather than startup marketing claims.",
  businessQuestion:
    "Where do users and merchants encounter friction across signup, identity verification, bank linking, payment initiation, and successful completion—and which issues should be prioritized?",
  role: "Founder-led product and data analysis",
  responsibilities: [
    "Define measurable product and operations questions",
    "Outline funnel stages and KPI definitions for onboarding and payments",
    "Separate activation, conversion, failure, and risk-review signals",
    "Draft recommendation priorities for product and operations follow-up",
    "Establish confidentiality boundaries for any publishable evidence",
  ],
  projectType: "Startup",
  domain: "Fintech",
  roleCategories: ["Product", "Data", "Business", "Operations"],
  tools: ["SQL", "Excel", "Power BI", "Python"],
  skills: [
    "Funnel analysis",
    "KPI development",
    "Payment lifecycle analysis",
    "Root-cause framing",
    "Stakeholder communication",
  ],
  date: "Dates pending confirmation",
  status: "Featured",
  featured: true,
  evidenceTypes: [
    "Funnel framework",
    "KPI dictionary",
    "Failure taxonomy",
    "Recommendation matrix",
  ],
  problem:
    "Product and operations teams need a shared way to locate friction in onboarding, verification, bank linking, and payment completion.",
  approach:
    "Mapped lifecycle stages, defined decision-oriented KPIs, and outlined analysis views for failures, activation, and exceptions using demonstration-safe framing.",
  datasetName: "Demonstration / synthetic product-event schema (pending confirmation)",
  datasetSource:
    "[Pending confirmation] No production financial, identity, or merchant records are published in this portfolio.",
  dataClassification: "Pending confirmation",
  dataVolume: null,
  dataPeriod: null,
  dataQualityIssues: [
    "Event naming and stage definitions must be stable before trend comparisons",
    "Identity, bank-linking, and payment entities can mismatch without careful keys",
    "Support and risk-review signals may lag product events",
  ],
  methods: [
    "Funnel stage design",
    "Failure-reason categorization",
    "Cohort framing for activation and retention",
    "KPI dictionary and dashboard requirements",
    "Priority recommendation matrix",
  ],
  kpis: [
    "Signup-to-verification completion",
    "Bank-linking completion",
    "Payment initiation rate",
    "Payment success rate",
    "Failure reason share",
    "User / merchant activation",
    "Repeat usage",
    "Risk-review volume",
  ],
  verifiedResults: [
    pendingResult("Primary friction stages identified"),
    pendingResult("Payment failure taxonomy drafted"),
    pendingResult("KPI dictionary defined"),
    pendingResult("Priority recommendations framed"),
  ],
  findings: [
    "Onboarding, verification, bank linking, and payment completion should be measured as a connected lifecycle rather than isolated page metrics.",
    "Payment success analysis is incomplete without failure-reason and exception categories.",
    "User and merchant activation need separate definitions because success criteria differ.",
    "Risk and compliance review volume should be monitored alongside growth metrics to avoid optimizing conversion alone.",
  ],
  recommendations: [
    "Instrument a consistent event taxonomy across signup, verification, bank linking, and payment states.",
    "Review the top failure reasons weekly with product and operations owners.",
    "Track verification and payment mismatches as an explicit exception queue.",
    "Prioritize fixes by expected funnel recovery and operational risk, not volume alone.",
  ],
  limitations: [
    "Verified production metrics are not published here.",
    "Any demonstration charts are labeled placeholders until sanitized evidence is added.",
    "No claim is made about transaction volume, revenue, fraud reduction, or conversion lift.",
  ],
  futureWork: [
    "Add sanitized funnel and failure-reason visuals",
    "Publish a KPI dictionary excerpt",
    "Add SQL examples against a synthetic event model",
  ],
  cleaningNotes: [
    "Normalize stage timestamps and late-arriving events before funnel calculation",
    "Deduplicate identity and payment attempts that retry within the same session",
    "Exclude confidential free-text support notes from publishable outputs",
  ],
  analysisNotes: [
    "Compare completion rates by stage and segment (user vs merchant)",
    "Break payment failures into actionable reason groups",
    "Monitor activation and early retention as leading product-health signals",
  ],
  impactNotes: [
    "Intended impact: faster identification of friction points and clearer product/ops prioritization.",
    "Quantitative business impact remains unclaimed until verified post-intervention metrics exist.",
  ],
  privacyNotes: [
    "Do not publish personally identifiable information, bank details, identity documents, or merchant records.",
    "Use synthetic or heavily sanitized aggregates only.",
    "Treat uncertain sources as pending confirmation.",
  ],
  technicalWork: [
    "Drafted stage-level funnel definitions for product analytics",
    "Outlined SQL-friendly event and entity relationships for payments and identity",
    "Specified dashboard views for success trends, failure reasons, and exceptions",
  ],
  disclaimers: [
    "This case study describes analytical framing and decision support. It does not claim access to unpublished production financial data.",
    "DigiPae product marketing metrics from the public website are not reused as portfolio results.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt:
    "Abstract cover diagram representing DigiPae payment and identity funnel analytics",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Onboarding-to-payment funnel framework",
      whatThisShows:
        "Planned stages from signup through verification, bank linking, payment initiation, and completion.",
      whyItMatters:
        "Gives product and operations a shared map of where friction can block activation.",
      recommendedAction:
        "Replace with a sanitized funnel chart once demonstration data is ready.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Payment failure reason breakdown",
      whatThisShows:
        "Intended category view of why payment attempts fail or require review.",
      whyItMatters:
        "Failure reasons turn a single success-rate KPI into actionable operational work.",
      recommendedAction:
        "Add an exported chart with synthetic or anonymized reason shares.",
    }),
    placeholderFigure({
      slug,
      index: 3,
      title: "Recommendation priority matrix",
      whatThisShows:
        "A prioritization view balancing funnel recovery potential and operational risk.",
      whyItMatters:
        "Helps stakeholders choose the next product or process fix with clear trade-offs.",
    }),
  ],
  links: [
    {
      type: "External project",
      label: "DigiPae website",
      href: "https://digipae.com",
    },
  ],
  codeSample: {
    title: "Illustrative funnel stage query (synthetic schema)",
    language: "sql",
    caption:
      "Example only. Not connected to production DigiPae data. Replace table/column names with your sanctioned warehouse model.",
    code: `-- Synthetic example: stage completion by user cohort week
SELECT
  DATE_TRUNC('week', u.created_at) AS signup_week,
  COUNT(DISTINCT u.user_id) AS signups,
  COUNT(DISTINCT CASE WHEN e.stage = 'verification_complete' THEN u.user_id END) AS verified,
  COUNT(DISTINCT CASE WHEN e.stage = 'bank_linked' THEN u.user_id END) AS bank_linked,
  COUNT(DISTINCT CASE WHEN e.stage = 'payment_success' THEN u.user_id END) AS paid
FROM users_synthetic u
LEFT JOIN product_events_synthetic e
  ON e.user_id = u.user_id
GROUP BY 1
ORDER BY 1;`,
  },
} satisfies Project;
