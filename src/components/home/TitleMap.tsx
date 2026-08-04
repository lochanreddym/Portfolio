const roles = [
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

export function TitleMap() {
  return (
    <section className="section-space pt-0" aria-labelledby="title-map-heading">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-accent">Role map</p>
          <h2
            id="title-map-heading"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            One analytical foundation
          </h2>
          <p className="mt-4 text-muted">
            Data → Insight → Decision. The titles differ. The analytical craft stays
            consistent.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1000 640"
            aria-hidden="true"
          >
            <g fill="none" stroke="var(--border)" strokeWidth="2">
              <path d="M500 320 L220 120" />
              <path d="M500 320 L500 90" />
              <path d="M500 320 L780 120" />
              <path d="M500 320 L220 520" />
              <path d="M500 320 L500 560" />
              <path d="M500 320 L780 520" />
            </g>
          </svg>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div className="surface-card order-first col-span-full mx-auto flex min-h-40 max-w-md flex-col items-center justify-center bg-[linear-gradient(180deg,#ffffff,#f7f3fc)] p-8 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:w-[18rem] lg:-translate-x-1/2 lg:-translate-y-1/2">
              <p className="text-xs font-semibold tracking-[0.14em] text-accent">
                ONE ANALYTICAL FOUNDATION
              </p>
              <p className="mt-3 text-sm text-muted">Data → Insight → Decision</p>
            </div>

            {roles.map((role, index) => (
              <article
                key={role.title}
                className={[
                  "surface-card p-5",
                  index === 0 ? "lg:col-start-1 lg:row-start-1" : "",
                  index === 1 ? "lg:col-start-2 lg:row-start-1 lg:mt-0" : "",
                  index === 2 ? "lg:col-start-3 lg:row-start-1" : "",
                  index === 3 ? "lg:col-start-1 lg:row-start-3" : "",
                  index === 4 ? "lg:col-start-2 lg:row-start-3" : "",
                  index === 5 ? "lg:col-start-3 lg:row-start-3" : "",
                  "lg:min-h-[12.5rem]",
                ].join(" ")}
              >
                <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {role.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </article>
            ))}
            <div className="hidden lg:col-span-3 lg:row-start-2 lg:block lg:h-40" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
