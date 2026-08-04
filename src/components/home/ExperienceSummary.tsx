import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { educationItems, experienceItems } from "@/data/experience";

function Timeline({
  title,
  items,
}: {
  title: string;
  items: typeof experienceItems;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ol className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={`${item.title}-${item.organization}`} className="surface-card p-5">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold text-foreground">{item.title}</p>
              {item.pendingDetails ? <Badge tone="warning">Details pending</Badge> : null}
            </div>
            <p className="mt-1 text-sm text-muted">
              {item.organization} · {item.period}
            </p>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ExperienceSummary() {
  return (
    <section className="section-space bg-surface" aria-labelledby="experience-heading">
      <div className="container-page">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience & education"
          title="Experience grounded in the current resume"
          description="Roles and education below follow the ATS resume on this site. Project case studies carry the detailed analytical evidence."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Timeline title="Experience" items={experienceItems} />
          <Timeline title="Education" items={educationItems} />
        </div>
      </div>
    </section>
  );
}
