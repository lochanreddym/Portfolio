import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "ai-driven-healthcare-analysis";

export const aiDrivenHealthcareAnalysis = {
  slug,
  title: "AI-Driven Healthcare Analysis & Reporting",
  shortTitle: "Healthcare ML Analysis",
  oneLineOutcome:
    "Built an AI-powered anomaly detection and reporting workflow for critical health-metric patterns, paired with role-based BI dashboards for faster monitoring.",
  summary:
    "Project work combining Python and MySQL anomaly detection with HIPAA-conscious BI dashboards and role-based access. Public product framing is also reflected on the Hello Doctor project site. This portfolio presents the work as analytical and educational/experimental decision support—not as a clinically validated diagnostic system.",
  businessContext:
    "Healthcare monitoring tools collect cardiovascular metrics such as blood pressure, pulse, lipid profiles, and ECG-related signals. Analysts and product teams need faster detection of unusual patterns and reliable dashboards that respect access controls.",
  businessQuestion:
    "Which health-metric patterns should receive additional review, how can anomaly detection reduce time-to-insight, and what access controls are required for trustworthy monitoring?",
  role: "Data / machine-learning analyst · project contributor",
  responsibilities: [
    "Build anomaly detection workflows in Python with MySQL-backed data",
    "Design BI dashboards with role-based access controls",
    "Validate data accuracy across user roles in a small team",
    "Translate model outputs into monitoring and review questions",
    "Keep clinical-validation claims out of scope unless externally supported",
  ],
  projectType: "Academic",
  domain: "Healthcare",
  roleCategories: ["Data", "Machine Learning", "Business"],
  tools: ["Python", "SQL", "Excel", "Machine Learning"],
  skills: [
    "Anomaly detection",
    "Model evaluation concepts",
    "Dashboard design",
    "Data validation",
    "Stakeholder communication",
  ],
  date: "Oct 2024",
  status: "Featured",
  featured: true,
  evidenceTypes: [
    "Anomaly detection workflow",
    "Role-based BI dashboards",
    "Data validation",
    "Project site",
  ],
  problem:
    "Clinical and product stakeholders needed faster identification of unusual health-metric patterns and secure, role-aware reporting.",
  approach:
    "Built a Python + MySQL anomaly detection workflow, designed HIPAA-conscious BI dashboards with role-based access, and validated accuracy across roles in a 4-member team.",
  datasetName: "Health-metric monitoring dataset (project / application data)",
  datasetSource:
    "Project dataset supporting Hello Doctor–style cardiovascular monitoring metrics. Public project site: https://lochanreddygp.wixsite.com/my-site",
  dataClassification: "Pending confirmation",
  dataVolume: null,
  dataPeriod: "Oct 2024",
  dataQualityIssues: [
    "Missing vitals or lab fields can bias anomaly flags",
    "Class imbalance and rare events can distort apparent accuracy",
    "Role-based views require consistent entitlement tests",
  ],
  methods: [
    "Python anomaly detection",
    "MySQL data access and validation",
    "BI dashboarding with role-based access",
    "Team-based accuracy validation",
    "Operational review framing for flagged cases",
  ],
  kpis: [
    "Critical pattern identification improvement",
    "Time-to-insight",
    "Dashboard load time",
    "Cross-role data consistency",
  ],
  verifiedResults: [
    {
      label: "Pattern identification",
      value: "~30% improvement",
      detail:
        "Resume-stated improvement in identifying critical health-metric patterns.",
    },
    {
      label: "Dashboard performance",
      value: "~25% faster load times",
      detail: "Resume-stated reduction in BI dashboard load times.",
    },
    {
      label: "Access model",
      value: "Role-based dashboards",
      detail: "HIPAA-conscious reporting with role-based access controls per resume.",
    },
    pendingResult("Confusion matrix / threshold charts for public evidence gallery"),
  ],
  findings: [
    "Anomaly detection is most useful when paired with clear review ownership and access controls.",
    "Dashboard speed and entitlement design affect whether monitoring insights are used in time.",
    "Cross-role validation is required before treating flagged patterns as decision-ready.",
  ],
  recommendations: [
    "Report precision/recall-style trade-offs beside any anomaly threshold before operational use.",
    "Keep role-based access tests in the release checklist for every dashboard change.",
    "Treat the system as decision support for review prioritization, not diagnosis.",
  ],
  limitations: [
    "Not clinically validated and not presented as safe for diagnosis or deployment as a medical device.",
    "Does not replace medical professionals.",
    "Resume metrics are candidate-reported and not re-run inside this repository.",
  ],
  futureWork: [
    "Add evaluation figures (confusion matrix, threshold trade-off)",
    "Document train/test design and missing-data strategy in more detail",
    "Clarify dataset licensing for any public extracts",
  ],
  cleaningNotes: [
    "Document missing-data handling before scoring anomalies",
    "Prevent leakage from post-outcome fields",
    "Validate role entitlements after each schema change",
  ],
  analysisNotes: [
    "Inspect false negatives for high-risk miss scenarios",
    "Compare baseline rules against the anomaly model",
    "Translate flags into review-queue prioritization questions",
  ],
  impactNotes: [
    "Resume-stated outcomes include about 30% better critical-pattern identification and about 25% faster dashboard loads.",
    "No claim is made of clinical outcome improvement in a deployed care setting.",
  ],
  privacyNotes: [
    "Do not publish protected health information.",
    "Keep portfolio evidence aggregated, synthetic, or otherwise cleared.",
  ],
  technicalWork: [
    "Python + MySQL anomaly detection workflow",
    "Role-based BI dashboards with performance tuning",
    "Cross-role data accuracy validation in a 4-member team",
  ],
  disclaimers: [
    "Educational / experimental analytics project. Not clinically validated, not ready for diagnosis, and not a replacement for medical professionals.",
    "Public product narrative also appears on the Hello Doctor project site.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing educational healthcare machine-learning analysis",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Anomaly detection monitoring view",
      whatThisShows: "Planned view of flagged health-metric patterns over time.",
      whyItMatters: "Supports faster review prioritization for unusual cases.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Role-based BI dashboard",
      whatThisShows: "Planned dashboard layout with access-aware monitoring widgets.",
      whyItMatters: "Shows how reporting can stay usable without exposing every field to every role.",
    }),
  ],
  links: [
    {
      type: "External project",
      label: "Hello Doctor project site",
      href: "https://lochanreddygp.wixsite.com/my-site",
    },
  ],
} satisfies Project;
