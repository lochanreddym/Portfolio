import { AnalyticalApproach } from "@/components/home/AnalyticalApproach";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { ExperienceSummary } from "@/components/home/ExperienceSummary";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FounderSection } from "@/components/home/FounderSection";
import { Hero } from "@/components/home/Hero";
import { SkillsSection } from "@/components/home/SkillsSection";
import { TitleMap } from "@/components/home/TitleMap";
import { getFeaturedProjects } from "@/content/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />
      <TitleMap />
      <CredibilityStrip />
      <FeaturedProjects projects={featured} />
      <SkillsSection />
      <FounderSection />
      <ExperienceSummary />
      <AnalyticalApproach />
      <ContactCTA />
    </>
  );
}
