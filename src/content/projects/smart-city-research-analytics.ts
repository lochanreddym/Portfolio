import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "smart-city-research-analytics";

export const smartCityResearchAnalytics = {
  slug,
  title: "Smart-City Research Analytics",
  shortTitle: "Smart-City Analytics",
  oneLineOutcome:
    "Led data systems and BI reporting for an urban analytics prototype monitoring real-time traffic and PM2.5 air quality across 5+ city junctions.",
  summary:
    "As Data & BI Lead on a Saint Louis University master’s research project, built Python ETL pipelines, forecasting models, and a responsive BI dashboard with live telemetry, scenario testing, and early-warning signals for cross-functional city stakeholders.",
  businessContext:
    "Urban operations and research stakeholders need timely visibility into traffic and air-quality conditions so resources and interventions can be prioritized. The prototype focused on junctions where demand and environmental conditions change quickly.",
  businessQuestion:
    "Where is traffic and PM2.5 pressure concentrated across monitored junctions, how do conditions change over time, and which early-warning signals should operators review first?",
  role: "Data & BI Lead",
  responsibilities: [
    "Lead backend data systems and BI reporting for the urban analytics prototype",
    "Engineer Python ETL pipelines with validation for traffic and air-quality feeds",
    "Develop heuristic predictive models for forecasting",
    "Design a responsive dashboard with live telemetry and scenario testing",
    "Document technical logic for city and research stakeholders",
  ],
  projectType: "Research",
  domain: "Smart City",
  roleCategories: ["Data", "BI / Reporting", "Operations"],
  tools: ["Python", "SQL", "Excel", "Power BI"],
  skills: [
    "ETL pipelines",
    "Forecasting",
    "Dashboard design",
    "Data quality validation",
    "Stakeholder reporting",
  ],
  date: "Aug – Dec 2025",
  status: "Featured",
  featured: true,
  evidenceTypes: [
    "ETL pipeline",
    "Live telemetry dashboard",
    "Forecasting model",
    "Early-warning signals",
  ],
  problem:
    "City and research stakeholders needed a reliable way to monitor junction-level traffic and PM2.5 conditions and act on early-warning signals.",
  approach:
    "Built a Python (Pandas, NumPy, scikit-learn) ETL and forecasting layer, validated data accuracy, and delivered a BI dashboard with live feeds, scenario testing, and early-warning views.",
  datasetName: "Real-time traffic and PM2.5 air-quality feeds (research prototype)",
  datasetSource:
    "Saint Louis University master’s research project feeds across 5+ city junctions. Source code archive was referenced locally by the author but is not yet checked into this repository.",
  dataClassification: "Pending confirmation",
  dataVolume: "5+ monitored junctions",
  dataPeriod: "Aug – Dec 2025",
  dataQualityIssues: [
    "Sensor and feed interruptions can create missing intervals",
    "Junction identifiers must stay consistent across traffic and air-quality streams",
    "Forecast accuracy depends on stable historical coverage",
  ],
  methods: [
    "Python ETL with Pandas and NumPy",
    "Heuristic predictive modeling with scikit-learn",
    "Data accuracy validation and documentation",
    "Live telemetry and scenario-testing dashboard design",
    "Early-warning signal framing for operations review",
  ],
  kpis: [
    "Traffic condition indicators by junction",
    "PM2.5 levels by location and period",
    "Forecast vs observed conditions",
    "Early-warning trigger counts",
  ],
  verifiedResults: [
    {
      label: "Coverage",
      value: "5+ junctions",
      detail: "Real-time traffic and PM2.5 monitoring scope per resume.",
    },
    {
      label: "Delivery",
      value: "ETL + BI dashboard",
      detail: "Python pipeline and responsive dashboard with live telemetry.",
    },
    {
      label: "Decision support",
      value: "Early-warning signals",
      detail: "Scenario testing and alerts framed for operational review.",
    },
    pendingResult("Public chart exports from research notebook/dashboard"),
  ],
  findings: [
    "Junction-level monitoring is more actionable when traffic and air-quality feeds share consistent location keys.",
    "Early-warning signals are useful only when data-quality and missingness are visible beside the alert.",
    "Scenario testing helps stakeholders explore operating responses without treating forecasts as certainty.",
  ],
  recommendations: [
    "Publish coverage and data-quality notes beside any hotspot or alert visual.",
    "Review forecast error by junction segment before expanding the prototype.",
    "Keep research source code and dashboard exports linked from this case study once cleared for sharing.",
  ],
  limitations: [
    "Local research archive (`smartcity_vscode.zip`) was not available in this cloud environment and still needs to be added to the repo or linked.",
    "Association between conditions should not be presented as proven causation.",
    "Chart exports remain placeholders until research artifacts are uploaded.",
  ],
  futureWork: [
    "Add repository or notebook link from the research archive",
    "Export trend, junction comparison, and early-warning figures",
    "Clarify public vs restricted data classification for each feed",
  ],
  cleaningNotes: [
    "Align junction identifiers across traffic and air-quality tables",
    "Handle missing telemetry intervals explicitly",
    "Validate forecast inputs before scenario runs",
  ],
  analysisNotes: [
    "Compare junctions by traffic and PM2.5 pressure over time",
    "Surface early-warning thresholds with supporting context",
    "Document model assumptions for non-technical stakeholders",
  ],
  impactNotes: [
    "Enabled data-driven operational discussion through live telemetry and early-warning views.",
    "No claim is made here of measured city-wide outcome improvements beyond the research prototype scope.",
  ],
  privacyNotes: [
    "Confirm whether any location or sensor detail is restricted before publishing raw extracts.",
    "Prefer aggregated junction-level visuals for the public portfolio.",
  ],
  technicalWork: [
    "Python ETL pipeline with Pandas, NumPy, and scikit-learn forecasting components",
    "BI dashboard with live telemetry feeds and scenario testing",
    "Technical documentation for research and city stakeholders",
  ],
  disclaimers: [
    "Master’s research project at Saint Louis University. Geographic conclusions remain limited to monitored junctions and available feed quality.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing smart-city research analytics",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Traffic and PM2.5 trend view",
      whatThisShows: "Planned time-series view of junction conditions.",
      whyItMatters: "Shows whether operational pressure is rising, falling, or episodic.",
      recommendedAction: "Replace with an export from the research dashboard or notebook.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Junction comparison and early-warning board",
      whatThisShows: "Planned comparison of monitored junctions with alert context.",
      whyItMatters: "Supports prioritization discussions with transparent rankings.",
      recommendedAction: "Add cleared screenshots from the prototype BI dashboard.",
    }),
  ],
  links: [],
} satisfies Project;
