import { credibilityItems } from "@/data/skills";

export function CredibilityStrip() {
  return (
    <section className="border-y border-border bg-surface" aria-labelledby="credibility-heading">
      <div className="container-page py-10">
        <h2 id="credibility-heading" className="text-sm font-semibold text-foreground">
          Core capabilities
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Capability-based until verified project metrics are supplied. No invented
          achievement numbers.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {credibilityItems.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
