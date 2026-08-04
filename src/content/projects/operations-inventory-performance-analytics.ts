import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "operations-inventory-performance-analytics";

export const operationsInventoryPerformanceAnalytics = {
  slug,
  title: "Operations and Inventory Performance Analytics",
  shortTitle: "Operations Inventory Analytics",
  oneLineOutcome:
    "A monitoring and decision framework for balancing inventory availability, fulfillment performance, and working capital using synthetic operations data.",
  summary:
    "Independent operations analytics project covering order cycle time, fill rate, stockouts, supplier lead time, and forecast error. Recommendations focus on service-level and inventory trade-offs without claiming unverified cost savings.",
  businessContext:
    "Operations teams must reduce delayed orders, stockouts, and excess inventory at the same time. That requires shared KPIs across orders, warehouses, suppliers, and forecasts.",
  businessQuestion:
    "How can the organization reduce delayed orders, stockouts, and excess inventory while maintaining service levels?",
  role: "Independent operations / BI analyst project",
  responsibilities: [
    "Define service and inventory KPIs",
    "Map order and fulfillment process metrics",
    "Analyze stockout and aging risk",
    "Compare supplier performance",
    "Recommend monitoring and policy follow-ups",
  ],
  projectType: "Independent",
  domain: "Operations",
  roleCategories: ["Operations", "Business", "BI / Reporting"],
  tools: ["SQL", "Excel", "Power BI", "Power Query", "Python"],
  skills: [
    "Operational metrics",
    "Process analysis",
    "Forecast error review",
    "Dashboard design",
    "Recommendation development",
  ],
  date: "Independent portfolio project",
  status: "Published",
  featured: false,
  evidenceTypes: [
    "Process flow",
    "Bottleneck analysis",
    "Inventory aging",
    "Supplier matrix",
  ],
  problem:
    "Delayed orders, stockouts, and excess inventory often compete for attention without a shared decision framework.",
  approach:
    "Designed a synthetic operations analytics model spanning orders, inventory snapshots, suppliers, and forecasts, with dashboards for service levels and risk.",
  datasetName: "Synthetic order, inventory, supplier, and warehouse dataset",
  datasetSource:
    "Clearly labeled synthetic portfolio dataset for demonstration analysis.",
  dataClassification: "Synthetic",
  dataVolume: null,
  dataPeriod: null,
  dataQualityIssues: [
    "Inventory snapshots may lag shipments",
    "Supplier lead times can be incomplete",
    "Returns and backorders need explicit status handling",
  ],
  methods: [
    "Operations data modeling",
    "Process bottleneck analysis",
    "Inventory aging and stockout-risk views",
    "Supplier performance matrix",
    "Forecast-versus-actual review",
  ],
  kpis: [
    "Order cycle time",
    "On-time fulfillment",
    "Fill rate",
    "Stockout rate",
    "Inventory turnover",
    "Days of inventory",
    "Supplier lead time",
    "Forecast error",
  ],
  verifiedResults: [
    pendingResult("Operations KPI dictionary defined"),
    pendingResult("Bottleneck monitoring outline completed"),
    pendingResult("Inventory and supplier views specified"),
  ],
  findings: [
    "Service-level and inventory efficiency must be reviewed together.",
    "Supplier lead-time variability is a major stockout-risk driver.",
    "Forecast error should be monitored by item segment, not only in aggregate.",
  ],
  recommendations: [
    "Create a weekly exception queue for aging orders and high stockout-risk SKUs.",
    "Review supplier lead-time reliability beside unit cost.",
    "Simulate reorder-policy changes before broad rollout.",
  ],
  limitations: [
    "Synthetic data cannot prove real warehouse savings.",
    "No claim is made that recommendations reduced cost or stockouts in a live operation.",
  ],
  futureWork: [
    "Add inventory aging chart",
    "Add supplier scorecard visual",
    "Publish reorder-policy scenario notes",
  ],
  cleaningNotes: [
    "Align order, shipment, and inventory grains",
    "Standardize warehouse and supplier keys",
    "Handle backorders and returns as explicit states",
  ],
  analysisNotes: [
    "Locate process delays by stage",
    "Rank SKUs by stockout risk and excess inventory",
    "Compare forecast error across ABC segments",
  ],
  impactNotes: [
    "Designed a monitoring framework for fulfillment and inventory trade-offs.",
    "Did not claim measured working-capital or SLA improvements.",
  ],
  privacyNotes: [
    "Synthetic operational data only in the public portfolio version.",
  ],
  technicalWork: [
    "Defined operations entities and KPI calculations",
    "Outlined Power BI monitoring pages for service and inventory risk",
  ],
  disclaimers: [
    "Independent portfolio project using synthetic data.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing operations and inventory performance analytics",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Fulfillment bottleneck view",
      whatThisShows: "Planned stage-time view of order processing delays.",
      whyItMatters: "Shows where operational attention can reduce late orders.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Stockout risk versus excess inventory",
      whatThisShows: "Planned comparison of availability risk and surplus stock.",
      whyItMatters: "Makes the service-level versus working-capital trade-off visible.",
    }),
  ],
  links: [],
} satisfies Project;
