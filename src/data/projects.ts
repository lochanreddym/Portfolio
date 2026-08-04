import type { Project } from "@/types/project";

const placeholder = "/images/project-placeholder.svg";

export const projects: Project[] = [
  {
    slug: "digipae-payment-product-analytics",
    title: "DigiPae Payment and Product Analytics",
    featured: true,
    domain: "Fintech",
    roles: ["Product", "Data", "Business", "Operations"],
    projectType: "Startup",
    date: "Oct 2025 – Present",
    summary:
      "As Founder & Full-Stack Developer at DigiPae (Ceivis LLC), designed product analytics and KPI reporting for payments and verified-identity workflows—covering Mixpanel funnel instrumentation, onboarding and KYC conversion tracking, multi-vendor data reconciliation, and executive-ready summaries—without publishing confidential production records here.",
    problem:
      "Where do users and merchants encounter friction across signup, identity verification, bank linking, payment initiation, and successful completion—and which issues should be prioritized?",
    approach: [
      "Instrument Mixpanel analytics for payment funnels, onboarding drop-off, KYC conversion, and retention",
      "Design KPI dashboards for transaction volumes, error rates, and compliance metrics",
      "Reconcile Stripe, Socure, Plaid, and Firebase data into one validated reporting view",
      "Document data mappings and technical logic for cross-functional stakeholders",
    ],
    tools: ["SQL", "Excel", "Power BI", "Python"],
    skills: [
      "Funnel analysis",
      "KPI development",
      "Payment lifecycle analysis",
      "Stakeholder communication",
    ],
    visuals: [
      {
        src: placeholder,
        alt: "Placeholder for DigiPae funnel analytics evidence",
        caption:
          "Evidence placeholder — add a sanitized Mixpanel or KPI dashboard export.",
      },
    ],
    findings: [
      "Onboarding, KYC conversion, payment completion, and retention need to be measured as a connected lifecycle.",
      "Vendor data must be sourced, normalized, and validated before executive KPI summaries are trustworthy.",
      "Error-rate and compliance metrics belong beside growth metrics so conversion is not optimized in isolation.",
    ],
    outcome:
      "A measurement framework for identifying friction across onboarding, verification, bank linking, and payment completion.",
    recommendations: [
      "Keep a consistent event taxonomy across signup, verification, bank linking, and payment states.",
      "Review top failure reasons weekly with product and operations owners.",
      "Prioritize fixes by expected funnel recovery and operational risk, not volume alone.",
    ],
    results: [
      { label: "Analytics instrumentation", value: "Mixpanel funnels live" },
      { label: "Reporting view", value: "KPI dashboard designed" },
      { label: "Data integration", value: "Multi-vendor reconciliation" },
    ],
    details: {
      dataset:
        "Internal DigiPae product analytics (Mixpanel) and vendor integrations. No production financial, identity, or merchant records are published here.",
      classification: "Confidential — sanitized methods only in this portfolio",
      limitations: [
        "Production payment and identity records are not published.",
        "DigiPae marketing-site traction figures are not reused as portfolio results.",
      ],
    },
    links: [{ label: "DigiPae website", url: "https://www.digipae.com" }],
  },
  {
    slug: "smart-city-research-analytics",
    title: "Smart-City Research Analytics",
    featured: true,
    domain: "Smart City",
    roles: ["Data", "BI / Reporting", "Operations"],
    projectType: "Research",
    date: "Aug – Dec 2025",
    summary:
      "As Data & BI Lead on a Saint Louis University master’s research project, built Python ETL pipelines, forecasting models, and a responsive BI dashboard with live telemetry, scenario testing, and early-warning signals for cross-functional city stakeholders.",
    problem:
      "Where is traffic and PM2.5 pressure concentrated across monitored junctions, how do conditions change over time, and which early-warning signals should operators review first?",
    approach: [
      "Lead backend data systems and BI reporting for the urban analytics prototype",
      "Engineer Python ETL pipelines with validation for traffic and air-quality feeds",
      "Develop heuristic predictive models for forecasting",
      "Design a responsive dashboard with live telemetry and scenario testing",
    ],
    tools: ["Python", "SQL", "Excel", "Power BI"],
    skills: [
      "ETL pipelines",
      "Forecasting",
      "Dashboard design",
      "Data quality validation",
    ],
    visuals: [
      {
        src: placeholder,
        alt: "Placeholder for smart-city traffic and air-quality evidence",
        caption:
          "Evidence placeholder — add research dashboard or notebook exports.",
      },
    ],
    findings: [
      "Junction-level monitoring is more actionable when traffic and air-quality feeds share consistent location keys.",
      "Early-warning signals are useful only when data-quality and missingness are visible beside the alert.",
      "Scenario testing helps stakeholders explore responses without treating forecasts as certainty.",
    ],
    outcome:
      "Led data systems and BI reporting for an urban analytics prototype monitoring real-time traffic and PM2.5 across 5+ city junctions.",
    recommendations: [
      "Publish coverage and data-quality notes beside any hotspot or alert visual.",
      "Review forecast error by junction segment before expanding the prototype.",
      "Link the research archive or cleared screenshots once available.",
    ],
    results: [
      { label: "Coverage", value: "5+ junctions" },
      { label: "Delivery", value: "ETL + BI dashboard" },
      { label: "Decision support", value: "Early-warning signals" },
    ],
    details: {
      dataset:
        "Real-time traffic and PM2.5 air-quality feeds from a Saint Louis University master’s research prototype. Local research archive not yet checked into this repository.",
      classification: "Pending confirmation",
      limitations: [
        "Research source archive still needs to be added or linked.",
        "Do not imply causation from correlational junction patterns.",
      ],
    },
  },
  {
    slug: "tax-filing-process-analytics",
    title: "H&R Block Tax Analytics & Automation",
    featured: true,
    domain: "Tax / Finance",
    roles: ["Data", "BI / Reporting", "Business", "Operations"],
    projectType: "Independent",
    date: "May 2024",
    summary:
      "Project-based tax analytics and automation work focused on filing-pattern analysis, ETL restructuring, Power BI error-tracking dashboards, and Python automation for recurring reporting and backups. Presented as a resume project—not as an implied endorsement by H&R Block.",
    problem:
      "Where do filing workflows bottleneck, which error patterns need attention, and how can ETL and reporting automation improve processing efficiency and leadership visibility?",
    approach: [
      "Analyze user filing patterns and process data for bottlenecks",
      "Restructure ETL pipelines to improve processing efficiency",
      "Create Power BI dashboards with automated data validation",
      "Build Python scripts for recurring reporting and backups",
    ],
    tools: ["Excel", "Power BI", "SQL", "Power Query", "Python", "DAX"],
    skills: [
      "ETL restructuring",
      "Process bottleneck analysis",
      "Dashboard design",
      "Reporting automation",
    ],
    visuals: [
      {
        src: placeholder,
        alt: "Placeholder for tax filing analytics evidence",
        caption:
          "Evidence placeholder — add cleared Power BI screenshots when rights allow.",
      },
    ],
    findings: [
      "Workflow bottlenecks become actionable when filing patterns and exception categories are analyzed together.",
      "ETL restructuring can reduce processing lag before dashboard work starts.",
      "Automated validation improves trust in leadership-facing activity and error views.",
    ],
    outcome:
      "Analyzed filing patterns and bottlenecks, restructured ETL pipelines for about 40% faster processing, and delivered Power BI dashboards with automated validation.",
    recommendations: [
      "Keep exception categories and processing-time metrics on the same operating review cadence.",
      "Document ETL source-of-truth rules after inconsistency fixes.",
      "Restore or replace the public project page before relying on an external demo link.",
    ],
    results: [
      { label: "ETL efficiency", value: "~40% faster processing" },
      { label: "Reporting automation", value: "~50% less manual effort" },
      { label: "Leadership visibility", value: "Power BI dashboards" },
    ],
    details: {
      dataset:
        "Tax filing process and platform activity data from the resume project. A previously provided Wix URL returned HTTP 404 and is not linked.",
      classification: "Pending confirmation",
      limitations: [
        "H&R Block naming follows the resume project title; no corporate endorsement is implied.",
        "Resume metrics are candidate-reported and not re-measured in this repository.",
      ],
    },
  },
  {
    slug: "ai-driven-healthcare-analysis",
    title: "AI-Driven Healthcare Analysis & Reporting",
    featured: true,
    domain: "Healthcare",
    roles: ["Data", "Machine Learning", "Business"],
    projectType: "Academic",
    date: "Oct 2024",
    summary:
      "Project work combining Python and MySQL anomaly detection with HIPAA-conscious BI dashboards and role-based access. Public product framing also appears on the Hello Doctor project site. Presented as educational/experimental decision support—not a clinically validated diagnostic system.",
    problem:
      "Which health-metric patterns should receive additional review, how can anomaly detection reduce time-to-insight, and what access controls are required for trustworthy monitoring?",
    approach: [
      "Build anomaly detection workflows in Python with MySQL-backed data",
      "Design BI dashboards with role-based access controls",
      "Validate data accuracy across user roles in a small team",
      "Translate model outputs into monitoring and review questions",
    ],
    tools: ["Python", "SQL", "Excel", "Machine Learning"],
    skills: [
      "Anomaly detection",
      "Model evaluation concepts",
      "Dashboard design",
      "Data validation",
    ],
    visuals: [
      {
        src: placeholder,
        alt: "Placeholder for healthcare anomaly detection evidence",
        caption:
          "Evidence placeholder — add evaluation charts or cleared dashboard crops.",
      },
    ],
    findings: [
      "Anomaly detection is most useful when paired with clear review ownership and access controls.",
      "Dashboard speed and entitlement design affect whether monitoring insights are used in time.",
      "Cross-role validation is required before treating flagged patterns as decision-ready.",
    ],
    outcome:
      "Built an AI-powered anomaly detection and reporting workflow for critical health-metric patterns, paired with role-based BI dashboards for faster monitoring.",
    recommendations: [
      "Report precision/recall-style trade-offs beside any anomaly threshold before operational use.",
      "Keep role-based access tests in the release checklist for every dashboard change.",
      "Treat the system as decision support for review prioritization, not diagnosis.",
    ],
    results: [
      { label: "Pattern identification", value: "~30% improvement" },
      { label: "Dashboard performance", value: "~25% faster load times" },
      { label: "Access model", value: "Role-based dashboards" },
    ],
    details: {
      dataset:
        "Health-metric monitoring dataset supporting Hello Doctor–style cardiovascular metrics.",
      classification: "Pending confirmation",
      limitations: [
        "Not clinically validated and not presented as safe for diagnosis.",
        "Does not replace medical professionals.",
        "Resume metrics are candidate-reported and not re-run in this repository.",
      ],
    },
    links: [
      {
        label: "Hello Doctor project site",
        url: "https://lochanreddygp.wixsite.com/my-site",
      },
    ],
  },
  {
    slug: "saas-revenue-operations-analytics",
    title: "SaaS Revenue Operations Analytics",
    featured: false,
    domain: "SaaS",
    roles: ["RevOps", "Business", "BI / Reporting"],
    projectType: "Independent",
    date: "Independent portfolio project",
    summary:
      "Independent RevOps analytics project on a clearly labeled synthetic CRM and subscription model. Focuses on pipeline conversion, stage aging, coverage, and forecast comparison—not claimed revenue growth from unimplemented recommendations.",
    problem:
      "Where are qualified prospects being lost, which channels create valuable opportunities, and is the current pipeline sufficient to meet revenue goals?",
    approach: [
      "Model CRM entities into an analysis-ready schema",
      "Define funnel and revenue KPIs",
      "Analyze stage conversion and aging",
      "Compare pipeline coverage to targets and draft prioritization recommendations",
    ],
    tools: ["SQL", "Power BI", "Excel", "DAX", "Power Query"],
    skills: [
      "Pipeline analysis",
      "Funnel analysis",
      "Forecast comparison",
      "KPI reporting",
    ],
    visuals: [
      {
        src: placeholder,
        alt: "Placeholder for SaaS RevOps funnel evidence",
        caption: "Evidence placeholder — synthetic CRM dashboard export pending.",
      },
    ],
    findings: [
      "Stage aging reveals risk that conversion rates alone can hide.",
      "Channel quality should be judged by downstream opportunity value, not lead volume alone.",
      "Pipeline coverage must be interpreted with stage mix and historical win rates.",
    ],
    outcome:
      "A decision-support dashboard framing that identifies funnel bottlenecks, pipeline risk, and opportunities to improve sales prioritization using synthetic CRM data.",
    recommendations: [
      "Review aging opportunities in late stages weekly.",
      "Reallocate attention toward channels with stronger opportunity quality.",
      "Track forecast error separately from pipeline value.",
    ],
    details: {
      dataset: "Synthetic CRM and subscription dataset",
      classification: "Synthetic",
      limitations: [
        "Synthetic data cannot prove real company revenue impact.",
        "Recommendations are decision support, not measured interventions.",
      ],
    },
  },
  {
    slug: "marketing-attribution-customer-segmentation",
    title: "Marketing Attribution and Customer Segmentation",
    featured: false,
    domain: "Marketing",
    roles: ["Marketing", "Product", "Data", "Business"],
    projectType: "Independent",
    date: "Independent portfolio project",
    summary:
      "Independent marketing analytics project focused on channel comparison, segmentation, retention concepts, and clear separation between rule-based attribution, experiments, and correlation.",
    problem:
      "Which channels and customer segments create valuable, retained customers rather than inexpensive but low-quality conversions?",
    approach: [
      "Define acquisition and retention KPIs",
      "Compare channels on value, not only CPA",
      "Segment customers by behavior or value",
      "Label attribution evidence strength clearly",
    ],
    tools: ["SQL", "Python", "Excel", "Power BI"],
    skills: [
      "Campaign performance",
      "Segmentation",
      "Cohort analysis",
      "Attribution concepts",
    ],
    visuals: [
      {
        src: placeholder,
        alt: "Placeholder for marketing attribution evidence",
        caption: "Evidence placeholder — synthetic channel and cohort visuals pending.",
      },
    ],
    findings: [
      "Low CPA does not guarantee valuable retained customers.",
      "Rule-based attribution should not be described as causal lift.",
      "Segment-level retention changes the budget conversation.",
    ],
    outcome:
      "An analysis framework that distinguishes channel quality and retained customer value from low-quality inexpensive conversions using synthetic campaign data.",
    recommendations: [
      "Report channel quality with retention or LTV proxies beside CPA.",
      "Label last-touch and other rule-based models as observational.",
      "Use experiments when incremental lift decisions are high stakes.",
    ],
    details: {
      dataset: "Synthetic campaign and customer dataset",
      classification: "Synthetic",
      limitations: [
        "Synthetic data cannot prove real campaign ROI.",
        "Observational attribution is not causal evidence.",
      ],
    },
  },
  {
    slug: "operations-inventory-performance-analytics",
    title: "Operations and Inventory Performance Analytics",
    featured: false,
    domain: "Operations",
    roles: ["Operations", "Business", "BI / Reporting"],
    projectType: "Independent",
    date: "Independent portfolio project",
    summary:
      "Independent operations analytics project covering order cycle time, fill rate, stockouts, supplier lead time, and forecast error. Recommendations focus on service-level and inventory trade-offs without claiming unverified cost savings.",
    problem:
      "How can the organization reduce delayed orders, stockouts, and excess inventory while maintaining service levels?",
    approach: [
      "Define service and inventory KPIs",
      "Map order and fulfillment process metrics",
      "Analyze stockout and aging risk",
      "Compare supplier performance and recommend monitoring follow-ups",
    ],
    tools: ["SQL", "Excel", "Power BI", "Power Query", "Python"],
    skills: [
      "Operational metrics",
      "Process analysis",
      "Forecast error review",
      "Dashboard design",
    ],
    visuals: [
      {
        src: placeholder,
        alt: "Placeholder for operations inventory evidence",
        caption:
          "Evidence placeholder — synthetic operations dashboard export pending.",
      },
    ],
    findings: [
      "Service-level and inventory efficiency must be reviewed together.",
      "Supplier lead-time variability is a major stockout-risk driver.",
      "Forecast error should be monitored by item segment, not only in aggregate.",
    ],
    outcome:
      "A monitoring and decision framework for balancing inventory availability, fulfillment performance, and working capital using synthetic operations data.",
    recommendations: [
      "Create a weekly exception queue for aging orders and high stockout-risk SKUs.",
      "Review supplier lead-time reliability beside unit cost.",
      "Simulate reorder-policy changes before broad rollout.",
    ],
    details: {
      dataset: "Synthetic order, inventory, supplier, and warehouse dataset",
      classification: "Synthetic",
      limitations: [
        "Synthetic data cannot prove real warehouse savings.",
        "No claim is made that recommendations reduced cost or stockouts in a live operation.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllSlugs(): string[] {
  return projects.map((project) => project.slug);
}
