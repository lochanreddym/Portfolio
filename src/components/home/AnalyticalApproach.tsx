import { SectionHeading } from "@/components/ui/SectionHeading";
import { analyticalApproach } from "@/data/skills";

export function AnalyticalApproach() {
  return (
    <section className="section-space" aria-labelledby="approach-heading">
      <div className="container-page">
        <SectionHeading
          id="approach-heading"
          eyebrow="Analytical approach"
          title="A simple five-stage process"
          description="Business outcomes first. Technical detail only as far as it supports the decision."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {analyticalApproach.map((stage) => (
            <li key={stage.step} className="surface-card p-5">
              <p className="text-sm font-semibold text-accent">0{stage.step}</p>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{stage.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
