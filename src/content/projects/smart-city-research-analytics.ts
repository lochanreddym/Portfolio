import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "smart-city-research-analytics";

export const smartCityResearchAnalytics = {
  slug,
  title: "Smart-City Research Analytics",
  shortTitle: "Smart-City Analytics",
  oneLineOutcome:
    "A research analytics structure for locating demand concentration, recurring operational issues, and priority areas for resource attention.",
  summary:
    "Framed a smart-city research analysis around service demand, temporal patterns, and location-based operational variation. Geographic conclusions are included only as planned methods until the underlying dataset and coverage are confirmed.",
  businessContext:
    "City and research stakeholders often need to understand where operational issues recur and how conditions vary by period. The goal is decision support for prioritization—not causal claims from correlational findings.",
  businessQuestion:
    "Where is service demand concentrated, which locations show recurring operational issues, and where should resources be prioritized?",
  role: "Data and research analyst",
  responsibilities: [
    "Clarify policy/operations questions and success metrics",
    "Assess dataset coverage and quality constraints",
    "Design trend, comparison, and hotspot analysis approaches",
    "Document limitations and non-causal interpretation rules",
    "Translate findings into prioritization recommendations",
  ],
  projectType: "Research",
  domain: "Smart City",
  roleCategories: ["Data", "BI / Reporting", "Operations"],
  tools: ["Python", "SQL", "Excel", "Power BI"],
  skills: [
    "Exploratory analysis",
    "Trend analysis",
    "Geospatial framing",
    "Data quality assessment",
    "Reporting",
  ],
  date: "Dates pending confirmation",
  status: "Featured",
  featured: true,
  evidenceTypes: [
    "Data-source overview",
    "Trend analysis",
    "Regional comparison",
    "Limitations memo",
  ],
  problem:
    "Decision makers need a clear view of where demand and recurring issues concentrate before allocating attention or resources.",
  approach:
    "Planned a reproducible workflow: source assessment, cleaning summary, time trends, regional comparisons, and prioritization outputs with explicit limitation notes.",
  datasetName: "Smart-city research dataset (source pending confirmation)",
  datasetSource:
    "[Pending confirmation] Add public dataset citation or approved research source before publishing detailed geographic evidence.",
  dataClassification: "Pending confirmation",
  dataVolume: null,
  dataPeriod: null,
  dataQualityIssues: [
    "Incomplete geographic coverage can bias hotspot interpretation",
    "Missing timestamps distort seasonality and peak-period analysis",
    "Inconsistent location keys complicate aggregation",
  ],
  methods: [
    "Source and coverage assessment",
    "Cleaning and validation summary",
    "Time-trend analysis",
    "Regional comparison",
    "Priority scoring with caveat documentation",
  ],
  kpis: [
    "Demand volume by period",
    "Issue recurrence rate",
    "Location concentration share",
    "Service condition indicators",
  ],
  verifiedResults: [
    pendingResult("Priority-question framework defined"),
    pendingResult("Quality checks outlined"),
    pendingResult("Reporting structure designed"),
  ],
  findings: [
    "Resource prioritization should combine volume, recurrence, and data-confidence—not volume alone.",
    "Time and location cuts are only trustworthy after coverage and missingness are documented.",
    "Association between factors and poor outcomes must be labeled as association, not causation.",
  ],
  recommendations: [
    "Publish a data-coverage statement beside any map or hotspot visual.",
    "Review recurring issue locations on a fixed reporting cadence.",
    "Pair quantitative hotspots with operational context before recommending interventions.",
  ],
  limitations: [
    "Dataset source and geography are pending confirmation.",
    "No causal claims are made from correlational analysis.",
    "Evidence figures are placeholders until approved exports are available.",
  ],
  futureWork: [
    "Add verified dataset citation",
    "Export trend and comparison charts",
    "Add notebook link if public",
  ],
  cleaningNotes: [
    "Standardize location identifiers",
    "Handle missing period values explicitly",
    "Flag low-coverage zones before ranking priorities",
  ],
  analysisNotes: [
    "Compare periods before declaring seasonal patterns",
    "Use small multiples or ranked bars when maps are not justified",
    "Report confidence and sample-size caveats with rankings",
  ],
  impactNotes: [
    "Intended impact: clearer prioritization for research or operations stakeholders.",
    "No claim of measured service-level improvement is made yet.",
  ],
  privacyNotes: [
    "Avoid publishing personally identifiable resident information.",
    "Aggregate sensitive location detail when required by data-use rules.",
  ],
  technicalWork: [
    "Defined reproducible analysis sections for trends and comparisons",
    "Outlined Power BI / Python reporting outputs for stakeholders",
  ],
  disclaimers: [
    "Geographic hotspot conclusions will not be presented as final until the dataset supports them.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing smart-city research analytics",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Demand and issue trend over time",
      whatThisShows: "Planned time-series view of demand or issue volume.",
      whyItMatters: "Shows whether operational pressure is rising, falling, or seasonal.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Regional comparison chart",
      whatThisShows: "Planned comparison of locations or regions by selected indicators.",
      whyItMatters: "Supports prioritization discussions with transparent rankings.",
    }),
  ],
  links: [],
} satisfies Project;
