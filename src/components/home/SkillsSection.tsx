import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="section-space bg-surface" aria-labelledby="skills-heading">
      <div className="container-page">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="Grouped by how the work gets done"
          description="Skills shown here are supported by the resume and portfolio project evidence, including SQL, Python, Power BI, Tableau, and Excel."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-border p-6">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <p className="mt-2 text-sm text-muted">{group.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg bg-background px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
