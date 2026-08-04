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
    title: "Founder & CEO",
    organization: "CEIVIS · DigiPae",
    period: "Dates pending confirmation",
    description:
      "Building DigiPae, a payments and verified-identity platform. Work includes defining product questions, designing KPIs, evaluating onboarding and payment funnels, prioritizing features, and balancing growth, operations, risk, and compliance. Presented here as applied analytics and business ownership—not as unverified traction claims.",
    tags: [
      "Product analytics",
      "KPI design",
      "Funnel analysis",
      "Stakeholder decisions",
    ],
    pendingDetails: true,
  },
];

export const educationItems: TimelineItem[] = [
  {
    title: "Education details",
    organization: "Pending confirmation",
    period: "Add degree, school, and years",
    description:
      "[Placeholder] Add verified education details before sharing the portfolio with recruiters. Do not invent degrees, schools, or graduation years.",
    tags: ["Education"],
    pendingDetails: true,
  },
];

export const aboutHighlights = [
  "Primary focus: analyst roles across BI, business, operations, marketing, product, and RevOps.",
  "Common foundation: frame the question, validate data, analyze drivers, communicate clearly, recommend action.",
  "Founder experience strengthens product thinking, ownership, and KPI discipline without replacing analyst evidence.",
] as const;
