const FALLBACK_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL).replace(
    /\/$/,
    "",
  );
}

export const siteConfig = {
  name: "Lochanreddy Mallakunta",
  shortName: "Lochanreddy",
  initials: "LM",
  headline:
    "Turning data into decisions across BI, business, operations, marketing, and product.",
  description:
    "Junior Data Analyst with experience in SQL, Python, Power BI, Tableau, and Excel. Founder building DigiPae at CEIVIS, with additional analytics work across research, nonprofit operations, and cloud data environments.",
  founderLine: "Founder & Full-Stack Developer · DigiPae (Ceivis LLC)",
  email: "lochanreddy.m64@gmail.com",
  phone: "+1 314 986 4614",
  location: "St. Louis, MO",
  github: "https://github.com/lochanreddym",
  linkedin: "https://www.linkedin.com/in/lochanreddy64m/",
  digipae: "https://www.digipae.com",
  digipaeCaseStudySlug: "digipae-payment-product-analytics",
  socialImage: "/social/og-default.png",
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ],
  get siteUrl() {
    return getSiteUrl();
  },
  resume: {
    relativePath: "resume/Lochanreddy-Mallakunta-Resume.pdf",
    href: "/resume/Lochanreddy-Mallakunta-Resume.pdf",
    fileName: "Lochanreddy-Mallakunta-Resume.pdf",
    /** Flip to false if the PDF is removed from public/resume/. */
    available: true,
  },
  headshot: {
    relativePath: "images/lochanreddy-headshot.webp",
    href: "/images/lochanreddy-headshot.webp",
    alt: "Portrait of Lochanreddy Mallakunta",
    /** Flip to true after adding public/images/lochanreddy-headshot.webp. */
    available: false,
  },
} as const;

export const skillGroups = [
  {
    title: "Data querying and preparation",
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
    skills: [
      "Power BI",
      "DAX",
      "Tableau",
      "Dashboard design",
      "KPI development",
      "Reporting automation",
      "Advanced Excel",
    ],
  },
  {
    title: "Analysis",
    skills: [
      "Exploratory analysis",
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
    skills: [
      "Requirements analysis",
      "Process mapping",
      "Root-cause analysis",
      "Operational metrics",
      "Stakeholder communication",
      "Decision support",
    ],
  },
  {
    title: "Product and marketing",
    skills: [
      "Activation",
      "Retention",
      "Conversion funnels",
      "Campaign performance",
      "Customer segmentation",
      "Attribution concepts",
    ],
  },
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

export const roleMap = [
  {
    title: "Data Analyst",
    capabilities: ["SQL", "Python", "Data quality", "Statistics"],
  },
  {
    title: "BI / Reporting Analyst",
    capabilities: ["Power BI", "Excel", "DAX", "KPI reporting"],
  },
  {
    title: "Business Analyst",
    capabilities: [
      "Requirements",
      "Process analysis",
      "Recommendations",
      "Stakeholder communication",
    ],
  },
  {
    title: "Operations Analyst",
    capabilities: ["Process metrics", "Forecasting", "SLA analysis", "Optimization"],
  },
  {
    title: "Marketing Analyst",
    capabilities: [
      "Campaign measurement",
      "Segmentation",
      "Attribution",
      "Experimentation",
    ],
  },
  {
    title: "Product Analyst",
    capabilities: ["Funnels", "Retention", "Behavioral analysis", "Product KPIs"],
  },
] as const;
