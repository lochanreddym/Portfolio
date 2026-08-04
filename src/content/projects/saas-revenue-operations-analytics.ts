import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "saas-revenue-operations-analytics";

export const saasRevenueOperationsAnalytics = {
  slug,
  title: "SaaS Revenue Operations Analytics",
  shortTitle: "SaaS RevOps Analytics",
  oneLineOutcome:
    "A decision-support dashboard framing that identifies funnel bottlenecks, pipeline risk, and opportunities to improve sales prioritization using synthetic CRM data.",
  summary:
    "Designed an independent RevOps analytics project on a clearly labeled synthetic CRM and subscription model. The focus is pipeline conversion, stage aging, coverage, and forecast comparison—not claimed revenue growth from unimplemented recommendations.",
  businessContext:
    "SaaS revenue teams need to know where qualified prospects stall, which channels create valuable opportunities, and whether pipeline coverage is sufficient relative to goals.",
  businessQuestion:
    "Where are qualified prospects being lost, which channels create valuable opportunities, and is the current pipeline sufficient to meet revenue goals?",
  role: "Independent RevOps / BI analyst project",
  responsibilities: [
    "Model CRM entities into an analysis-ready schema",
    "Define funnel and revenue KPIs",
    "Analyze stage conversion and aging",
    "Compare pipeline coverage to targets",
    "Produce prioritization recommendations",
  ],
  projectType: "Independent",
  domain: "SaaS",
  roleCategories: ["RevOps", "Business", "BI / Reporting"],
  tools: ["SQL", "Power BI", "Excel", "DAX", "Power Query"],
  skills: [
    "Pipeline analysis",
    "Funnel analysis",
    "Forecast comparison",
    "KPI reporting",
    "Recommendation development",
  ],
  date: "Independent portfolio project",
  status: "Published",
  featured: false,
  evidenceTypes: [
    "Star schema",
    "Funnel chart",
    "Stage aging",
    "Forecast comparison",
  ],
  problem:
    "Revenue leaders need visibility into conversion leakage, stage aging, and whether pipeline coverage supports goals.",
  approach:
    "Built an independent analytics blueprint on synthetic CRM entities with SQL transformations, funnel metrics, and a recommendation matrix.",
  datasetName: "Synthetic CRM and subscription dataset",
  datasetSource:
    "Clearly labeled synthetic portfolio dataset (replace with public dataset citation if a specific source is later used).",
  dataClassification: "Synthetic",
  dataVolume: null,
  dataPeriod: null,
  dataQualityIssues: [
    "Synthetic stage timestamps may not reflect real CRM hygiene issues",
    "Owner and channel fields need consistent mapping",
    "Subscription and opportunity grains must not be mixed casually",
  ],
  methods: [
    "CRM star-schema design",
    "SQL transformation",
    "Stage conversion and aging analysis",
    "Pipeline coverage calculation",
    "Recommendation matrix",
  ],
  kpis: [
    "Lead-to-opportunity conversion",
    "Opportunity-to-win conversion",
    "Stage aging",
    "Win rate",
    "Pipeline coverage",
    "Average contract value",
    "MRR",
    "Churn",
  ],
  verifiedResults: [
    pendingResult("Synthetic funnel dashboard outlined"),
    pendingResult("Stage-aging view specified"),
    pendingResult("Pipeline-risk recommendations drafted"),
  ],
  findings: [
    "Stage aging reveals risk that conversion rates alone can hide.",
    "Channel quality should be judged by downstream opportunity value, not lead volume alone.",
    "Pipeline coverage must be interpreted with stage mix and historical win rates.",
  ],
  recommendations: [
    "Review aging opportunities in late stages weekly.",
    "Reallocate attention toward channels with stronger opportunity quality.",
    "Track forecast error separately from pipeline value.",
  ],
  limitations: [
    "Synthetic data cannot prove real company revenue impact.",
    "Recommendations are decision support, not measured interventions.",
  ],
  futureWork: [
    "Add synthetic dashboard screenshots",
    "Publish SQL transformation examples",
    "Add forecast-versus-actual chart",
  ],
  cleaningNotes: [
    "Enforce one grain per fact table",
    "Standardize stage names",
    "Handle closed-lost reasons consistently",
  ],
  analysisNotes: [
    "Build funnel and aging views side by side",
    "Segment pipeline by channel and customer segment",
    "Compare coverage to goal using historical conversion assumptions",
  ],
  impactNotes: [
    "Demonstrated a monitoring framework for funnel bottlenecks and pipeline risk.",
    "Did not claim that recommendations increased revenue.",
  ],
  privacyNotes: [
    "Synthetic data only in the public portfolio version.",
  ],
  technicalWork: [
    "Designed CRM star schema entities",
    "Specified SQL metrics for conversion, aging, and coverage",
  ],
  disclaimers: [
    "Independent portfolio project using synthetic data.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing SaaS revenue operations analytics",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "CRM funnel and stage conversion",
      whatThisShows: "Planned conversion view across lead and opportunity stages.",
      whyItMatters: "Locates where qualified prospects are lost.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Pipeline coverage versus goal",
      whatThisShows: "Planned coverage and risk comparison against revenue goals.",
      whyItMatters: "Helps leaders judge whether current pipeline is sufficient.",
    }),
  ],
  links: [],
  codeSample: {
    title: "Illustrative stage conversion SQL (synthetic)",
    language: "sql",
    caption: "Example query against a synthetic opportunities table.",
    code: `SELECT
  stage_name,
  COUNT(*) AS opportunities,
  AVG(age_days) AS avg_age_days,
  SUM(amount) AS pipeline_value
FROM opportunities_synthetic
WHERE is_open = TRUE
GROUP BY stage_name
ORDER BY pipeline_value DESC;`,
  },
} satisfies Project;
