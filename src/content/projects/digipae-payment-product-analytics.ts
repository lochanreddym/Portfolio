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
    "As Founder & Full-Stack Developer at DigiPae (Ceivis LLC), designed product analytics and KPI reporting for payments and verified-identity workflows—covering Mixpanel funnel instrumentation, onboarding and KYC conversion tracking, multi-vendor data reconciliation, and executive-ready summaries—without publishing confidential production records here.",
  businessContext:
    "DigiPae is a payments and verified-identity platform built by Ceivis LLC. Product and operations decisions require clarity on where users drop off in onboarding and KYC, how payment funnels perform, and how Stripe, Socure, Plaid, and Firebase data can be reconciled into one reporting view. This case study focuses on analytical decision support rather than startup marketing claims.",
  businessQuestion:
    "Where do users and merchants encounter friction across signup, identity verification, bank linking, payment initiation, and successful completion—and which issues should be prioritized?",
  role: "Founder & Full-Stack Developer · product and data analysis",
  responsibilities: [
    "Instrument product analytics for payment funnels, onboarding drop-off, KYC conversion, and retention",
    "Design KPI dashboards for transaction volumes, error rates, and compliance metrics",
    "Reconcile multi-vendor data flows into a consistent reporting view with validation checks",
    "Document data mappings and technical logic for cross-functional stakeholders",
    "Keep publishable portfolio evidence free of confidential payment and identity records",
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
  date: "Oct 2025 – Present",
  status: "Featured",
  featured: true,
  evidenceTypes: [
    "Mixpanel funnel tracking",
    "KPI dashboard",
    "Multi-vendor data reconciliation",
    "Recommendation matrix",
  ],
  problem:
    "Product and operations teams need a shared way to locate friction in onboarding, verification, bank linking, and payment completion.",
  approach:
    "Instrumented Mixpanel product analytics, designed real-time KPI views, and normalized multi-vendor event/data flows into consistent reporting—using demonstration-safe framing for public portfolio evidence.",
  datasetName: "Product analytics and multi-vendor operational data (sanitized for portfolio)",
  datasetSource:
    "Internal DigiPae product analytics (Mixpanel) and vendor integrations (Stripe, Socure, Plaid, Firebase). No production financial, identity, or merchant records are published in this portfolio.",
  dataClassification: "Confidential",
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
    {
      label: "Analytics instrumentation",
      value: "Mixpanel funnels live",
      detail:
        "Payment funnels, onboarding drop-off, KYC conversion, and retention tracking per resume.",
    },
    {
      label: "Reporting view",
      value: "KPI dashboard designed",
      detail:
        "Transaction volumes, error rates, and compliance metrics surfaced for stakeholders.",
    },
    {
      label: "Data integration",
      value: "Multi-vendor reconciliation",
      detail: "Stripe, Socure, Plaid, and Firebase flows normalized into one reporting view.",
    },
    pendingResult("Sanitized funnel visuals for public portfolio"),
  ],
  findings: [
    "Onboarding, KYC conversion, payment completion, and retention need to be measured as a connected lifecycle.",
    "Vendor data must be sourced, normalized, and validated before executive KPI summaries are trustworthy.",
    "Error-rate and compliance metrics belong beside growth metrics so conversion is not optimized in isolation.",
    "Ad hoc reporting requests are faster when event mappings and technical logic are documented once.",
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
    "Instrumented Mixpanel tracking for payment, onboarding, KYC, and retention funnels",
    "Designed structured data schemas supporting transaction analytics and KPI reporting",
    "Built validation checks across multi-vendor data reconciliation workflows",
  ],
  disclaimers: [
    "Portfolio evidence stays sanitized. Confidential production payment and identity records are not published.",
    "DigiPae marketing-site traction or fee figures are not reused as portfolio results.",
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
      href: "https://www.digipae.com",
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
