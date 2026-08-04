export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Data querying and preparation",
    description: "Getting trustworthy tables ready for analysis.",
    skills: [
      "SQL",
      "Excel",
      "Power Query",
      "Python",
      "Relational databases",
      "Data validation",
      "Data cleaning",
    ],
  },
  {
    title: "Business intelligence",
    description: "Turning metrics into decision-ready reporting.",
    skills: [
      "Power BI",
      "DAX",
      "Dashboard design",
      "KPI development",
      "Reporting automation",
    ],
  },
  {
    title: "Analysis",
    description: "Finding patterns, causes, and decision levers.",
    skills: [
      "Exploratory analysis",
      "Descriptive statistics",
      "Trend analysis",
      "Segmentation",
      "Cohort analysis",
      "Funnel analysis",
      "Forecasting",
      "Anomaly detection",
      "Model evaluation",
    ],
  },
  {
    title: "Business and operations",
    description: "Connecting analysis to process and stakeholder decisions.",
    skills: [
      "Requirements analysis",
      "Process mapping",
      "Root-cause analysis",
      "Operational metrics",
      "Stakeholder communication",
      "Recommendation development",
      "Decision support",
    ],
  },
  {
    title: "Product and marketing",
    description: "Measuring adoption, retention, and channel quality.",
    skills: [
      "Activation",
      "Retention",
      "Engagement",
      "Conversion funnels",
      "Experimentation concepts",
      "Campaign performance",
      "Customer segmentation",
      "Attribution concepts",
    ],
  },
];

export const credibilityItems = [
  "SQL and relational analysis",
  "Power BI and dashboard development",
  "Data quality and transformation",
  "Business and operational reporting",
  "Product and funnel analytics",
  "Python and machine-learning analysis",
] as const;

export const analyticalApproach = [
  {
    step: 1,
    title: "Frame the business question",
    description:
      "Translate a decision need into a measurable question with clear success criteria.",
  },
  {
    step: 2,
    title: "Validate and prepare the data",
    description:
      "Assess coverage, quality, and definitions before drawing conclusions.",
  },
  {
    step: 3,
    title: "Analyze patterns and causes",
    description:
      "Compare segments, trends, and exceptions to isolate what drives outcomes.",
  },
  {
    step: 4,
    title: "Communicate findings visually",
    description:
      "Present the few charts and tables that help stakeholders decide quickly.",
  },
  {
    step: 5,
    title: "Recommend and measure action",
    description:
      "Propose next steps with owners, expected signals, and follow-up metrics.",
  },
] as const;
