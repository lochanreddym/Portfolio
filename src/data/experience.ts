export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  pendingDetails?: boolean;
};

export const experienceItems: TimelineItem[] = [
  {
    title: "Founder & Full-Stack Developer",
    organization: "DigiPae (Ceivis LLC)",
    period: "Oct 2025 – Present · St. Louis, MO",
    description:
      "Building DigiPae, a payments and verified-identity platform. Instrumented product analytics with Mixpanel for payment funnels, onboarding drop-off, KYC conversion, and retention; designed KPI dashboards for transaction volumes, error rates, and compliance metrics; reconciled multi-vendor data flows (Stripe, Socure, Plaid, Firebase) into consistent reporting views.",
    tags: [
      "Product analytics",
      "KPI dashboards",
      "Funnel analysis",
      "Data validation",
    ],
  },
  {
    title: "Data & BI Lead",
    organization: "Smart-City Research Project · Saint Louis University",
    period: "Aug – Dec 2025 · St. Louis, MO",
    description:
      "Led backend data systems and BI reporting for an urban analytics prototype monitoring real-time traffic and PM2.5 air quality across 5+ city junctions. Built Python ETL pipelines with forecasting models and a responsive BI dashboard with live telemetry, scenario testing, and early-warning signals.",
    tags: ["ETL", "Python", "BI dashboards", "Research"],
  },
  {
    title: "Data Analyst Intern",
    organization: "Gateway Region YMCA",
    period: "May – Oct 2024 · St. Louis, MO",
    description:
      "Wrote complex SQL against SQL Server for membership, program, and financial reporting. Built Power BI dashboards and Excel reports with validation checks. Automated recurring extraction and reporting with Python (Pandas), reducing manual reporting effort by approximately 35% per resume.",
    tags: ["SQL Server", "Power BI", "Excel", "Python automation"],
  },
  {
    title: "Cloud Developer",
    organization: "TVM Infotech Private Limited",
    period: "Oct 2023 – Dec 2024 · Chennai, India",
    description:
      "Developed and optimized SQL against PostgreSQL and MySQL; built Python ETL across AWS (S3, RDS, Lambda, EC2); wrote stored procedures and cursors for recurring reporting workflows, reducing manual data preparation time by approximately 30% per resume.",
    tags: ["PostgreSQL", "MySQL", "AWS", "ETL"],
  },
];

export const educationItems: TimelineItem[] = [
  {
    title: "Master of Science — Information Systems",
    organization: "Saint Louis University",
    period: "St. Louis, MO",
    description:
      "Graduate study in Information Systems, including master’s research work on smart-city analytics.",
    tags: ["Information Systems", "Research"],
  },
  {
    title: "Bachelor of Technology — Computer Science & Engineering",
    organization: "Sree Vidyanikethan Engineering College",
    period: "Undergraduate degree",
    description:
      "Computer Science & Engineering foundation supporting data systems, cloud, and analytics work.",
    tags: ["Computer Science"],
  },
];

export const certifications = [
  "AWS Academy Graduate — Cloud Foundations & Architecture",
  "Microsoft Azure AI Essentials — Microsoft & LinkedIn",
  "Azure AI: Workloads & Machine Learning",
  "Human Skills in the Age of AI — Microsoft & LinkedIn",
  "The Joy of Computing Using Python — NPTEL",
  "Microsoft Security Essentials: AI-Powered Protection",
  "Integrating Generative AI into the Creative Process",
  "What is Generative AI? — LinkedIn Learning",
] as const;

export const aboutHighlights = [
  "Primary focus: Junior Data Analyst and related BI, business, operations, marketing, product, and RevOps roles.",
  "Hands-on SQL across PostgreSQL, SQL Server, MySQL, and Snowflake, with Python ETL and Power BI / Tableau reporting.",
  "Founder experience at DigiPae strengthens product analytics, KPI design, and stakeholder communication without replacing project evidence.",
] as const;
