import { siteConfig } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        email: siteConfig.email,
        sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.digipae],
        jobTitle: "Data and Analytics Professional",
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        name: `${siteConfig.name} · Analytics Portfolio`,
        url: siteConfig.siteUrl,
        description: siteConfig.headline,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
