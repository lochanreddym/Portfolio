import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "marketing-attribution-customer-segmentation";

export const marketingAttributionCustomerSegmentation = {
  slug,
  title: "Marketing Attribution and Customer Segmentation",
  shortTitle: "Marketing Attribution",
  oneLineOutcome:
    "An analysis framework that distinguishes channel quality and retained customer value from low-quality inexpensive conversions using synthetic campaign data.",
  summary:
    "Independent marketing analytics project focused on channel comparison, segmentation, retention concepts, and clear separation between rule-based attribution, experiments, and correlation.",
  businessContext:
    "Marketing and growth teams often optimize for cheap conversions. The more useful question is which channels and segments create valuable, retained customers.",
  businessQuestion:
    "Which channels and customer segments create valuable, retained customers rather than inexpensive but low-quality conversions?",
  role: "Independent marketing / product analyst project",
  responsibilities: [
    "Define acquisition and retention KPIs",
    "Compare channels on value, not only CPA",
    "Segment customers by behavior or value",
    "Separate attribution types and evidence strength",
    "Recommend budget and segment follow-ups",
  ],
  projectType: "Independent",
  domain: "Marketing",
  roleCategories: ["Marketing", "Product", "Data", "Business"],
  tools: ["SQL", "Python", "Excel", "Power BI"],
  skills: [
    "Campaign performance",
    "Segmentation",
    "Cohort analysis",
    "Attribution concepts",
    "Experimentation concepts",
  ],
  date: "Independent portfolio project",
  status: "Published",
  featured: false,
  evidenceTypes: [
    "Channel comparison",
    "Cohort heatmap",
    "Segmentation summary",
    "Budget scenario",
  ],
  problem:
    "Channel reporting that stops at clicks or CPA can hide weak retention and low customer value.",
  approach:
    "Designed a synthetic marketing analytics workflow covering funnel metrics, channel value comparisons, segmentation, and evidence-strength labels for attribution claims.",
  datasetName: "Synthetic campaign and customer dataset",
  datasetSource:
    "Clearly labeled synthetic portfolio dataset for demonstration analysis.",
  dataClassification: "Synthetic",
  dataVolume: null,
  dataPeriod: null,
  dataQualityIssues: [
    "Attribution windows can double-count or under-count journeys",
    "Missing identity stitching weakens cross-channel views",
    "Experiment assignment must be separated from observational attribution",
  ],
  methods: [
    "Marketing funnel metrics",
    "Channel value comparison",
    "RFM or behavioral segmentation concepts",
    "Cohort retention framing",
    "Evidence-strength labeling for attribution",
  ],
  kpis: [
    "CTR",
    "Conversion rate",
    "CPA",
    "ROAS",
    "LTV",
    "LTV:CAC",
    "Repeat purchase rate",
    "Retention",
  ],
  verifiedResults: [
    pendingResult("Channel value scorecard outlined"),
    pendingResult("Segmentation approach documented"),
    pendingResult("Attribution caveats specified"),
  ],
  findings: [
    "Low CPA does not guarantee valuable retained customers.",
    "Rule-based attribution should not be described as causal lift.",
    "Segment-level retention changes the budget conversation.",
  ],
  recommendations: [
    "Report channel quality with retention or LTV proxies beside CPA.",
    "Label last-touch and other rule-based models as observational.",
    "Use experiments when incremental lift decisions are high stakes.",
  ],
  limitations: [
    "Synthetic data cannot prove real campaign ROI.",
    "Observational attribution is not causal evidence.",
  ],
  futureWork: [
    "Add cohort heatmap export",
    "Add A/B analysis example with clear design notes",
    "Publish SQL for channel value table",
  ],
  cleaningNotes: [
    "Normalize channel names",
    "Deduplicate conversions by defined attribution window",
    "Keep experiment assignments in a separate table",
  ],
  analysisNotes: [
    "Compare channels on acquisition cost and downstream value",
    "Use cohorts for retention patterns",
    "State evidence type beside each recommendation",
  ],
  impactNotes: [
    "Demonstrated a decision framework for channel and segment quality.",
    "No claim of measured ROAS improvement from a live intervention.",
  ],
  privacyNotes: [
    "Synthetic customer and campaign data only.",
  ],
  technicalWork: [
    "Defined marketing entities and KPI dictionary",
    "Outlined cohort and segmentation reporting outputs",
  ],
  disclaimers: [
    "Independent portfolio project. Observational attribution is not presented as causal.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing marketing attribution and segmentation analytics",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Channel quality comparison",
      whatThisShows: "Planned comparison of CPA, conversion, and value proxies by channel.",
      whyItMatters: "Prevents over-investment in cheap but low-quality acquisition.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Retention cohort heatmap",
      whatThisShows: "Planned cohort view of retained customers by acquisition period or channel.",
      whyItMatters: "Links acquisition choices to longer-term customer quality.",
    }),
  ],
  links: [],
} satisfies Project;
