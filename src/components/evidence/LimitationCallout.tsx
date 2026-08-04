import { InsightCallout } from "@/components/evidence/InsightCallout";

export function LimitationCallout({ items }: { items: string[] }) {
  return (
    <InsightCallout title="Limitations and assumptions" tone="warning">
      <ul className="list-disc space-y-1 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </InsightCallout>
  );
}
