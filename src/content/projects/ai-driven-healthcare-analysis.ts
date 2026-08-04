import { placeholderFigure, pendingResult } from "./_shared";
import type { Project } from "@/types/project";

const slug = "ai-driven-healthcare-analysis";

export const aiDrivenHealthcareAnalysis = {
  slug,
  title: "AI-Driven Healthcare Analysis",
  shortTitle: "Healthcare ML Analysis",
  oneLineOutcome:
    "An educational machine-learning analysis framework that evaluates model performance trade-offs and translates them into review-priority questions—not clinical deployment claims.",
  summary:
    "Documented an educational healthcare ML analysis pattern covering dataset source requirements, target definition, train/test design, class imbalance, baseline comparison, and error-aware evaluation. The work is explicitly experimental and not clinically validated.",
  businessContext:
    "Healthcare analytics projects often ask how limited review resources should be prioritized. Machine-learning outputs are only useful when metrics, limitations, and false-negative costs are communicated clearly to non-modeling stakeholders.",
  businessQuestion:
    "Which cases should receive additional review, what is the cost of false negatives, and what evidence would be required before any real-world use?",
  role: "Data / machine-learning analyst (educational project framing)",
  responsibilities: [
    "Define target variable and unit of analysis",
    "Document train/test design and missing-data strategy",
    "Compare baseline and selected model metrics",
    "Analyze threshold trade-offs and error types",
    "Translate technical results into operational review questions",
  ],
  projectType: "Academic",
  domain: "Healthcare",
  roleCategories: ["Data", "Machine Learning", "Business"],
  tools: ["Python", "SQL", "Excel", "Machine Learning"],
  skills: [
    "Model evaluation",
    "Class imbalance handling",
    "Exploratory analysis",
    "Error analysis",
    "Stakeholder communication",
  ],
  date: "Dates pending confirmation",
  status: "Featured",
  featured: true,
  evidenceTypes: [
    "Target distribution",
    "Confusion matrix",
    "Metric comparison",
    "Threshold analysis",
  ],
  problem:
    "Stakeholders need a transparent way to evaluate an experimental model and understand review trade-offs without mistaking it for a clinical system.",
  approach:
    "Planned a reproducible evaluation narrative: data documentation, baseline, selected model, confusion matrix, precision/recall trade-offs, and operational interpretation with an educational-use disclaimer.",
  datasetName: "Healthcare dataset (source pending confirmation)",
  datasetSource:
    "[Pending confirmation] Cite the public educational dataset or approved source before publishing detailed results.",
  dataClassification: "Pending confirmation",
  dataVolume: null,
  dataPeriod: null,
  dataQualityIssues: [
    "Missing clinical attributes can bias subgroups",
    "Class imbalance can inflate accuracy while hiding poor recall",
    "Label noise can limit ceiling performance",
  ],
  methods: [
    "Train/test split documentation",
    "Baseline comparison",
    "Classification metrics",
    "Threshold trade-off analysis",
    "Error and limitation review",
  ],
  kpis: [
    "Precision",
    "Recall",
    "F1",
    "Support",
    "False-negative rate",
    "Baseline lift",
  ],
  verifiedResults: [
    pendingResult("Evaluation protocol defined"),
    pendingResult("Baseline comparison planned"),
    pendingResult("Educational disclaimer included"),
  ],
  findings: [
    "Accuracy alone is insufficient when classes are imbalanced or false negatives are costly.",
    "Threshold choice is an operational decision, not only a modeling detail.",
    "Subgroup performance and calibration need review before any practical use discussion.",
  ],
  recommendations: [
    "Report precision, recall, and false-negative implications together.",
    "Choose review thresholds with explicit cost assumptions.",
    "Keep the model labeled educational/experimental until external validation exists.",
  ],
  limitations: [
    "Not clinically validated",
    "Not safe for diagnosis or deployment claims",
    "Does not replace medical professionals",
    "Verified numeric metrics are not yet published",
  ],
  futureWork: [
    "Add dataset citation and target definition",
    "Export confusion matrix and PR/ROC figures",
    "Add notebook link",
  ],
  cleaningNotes: [
    "Document missing-data strategy before modeling",
    "Prevent leakage from post-outcome fields",
    "Preserve subgroup identifiers needed for fairness checks when ethically allowed",
  ],
  analysisNotes: [
    "Compare selected model against a simple baseline",
    "Inspect false negatives for operational risk",
    "Discuss threshold trade-offs in business language",
  ],
  impactNotes: [
    "Intended impact: clearer evaluation discipline and review prioritization questions.",
    "No clinical outcome improvement is claimed.",
  ],
  privacyNotes: [
    "Do not publish protected health information.",
    "Use public educational or approved anonymized datasets only.",
  ],
  technicalWork: [
    "Outlined Python evaluation workflow",
    "Specified required metric and error-analysis artifacts",
  ],
  disclaimers: [
    "Educational / experimental use only.",
    "This model is not clinically validated, not ready for deployment, and does not replace medical professionals.",
  ],
  coverImage: `/projects/${slug}/cover.svg`,
  coverAlt: "Abstract cover representing educational healthcare machine-learning analysis",
  gallery: [
    placeholderFigure({
      slug,
      index: 1,
      title: "Baseline versus model comparison",
      whatThisShows: "Planned metric comparison between a simple baseline and selected model.",
      whyItMatters: "Shows whether modeling complexity earns better decision-relevant performance.",
    }),
    placeholderFigure({
      slug,
      index: 2,
      title: "Confusion matrix and threshold trade-off",
      whatThisShows: "Planned view of error types and threshold sensitivity.",
      whyItMatters: "Connects model scores to false-negative and false-positive costs.",
    }),
  ],
  links: [],
} satisfies Project;
