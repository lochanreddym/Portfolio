export function RecommendationMatrix({
  recommendations,
}: {
  recommendations: string[];
}) {
  return (
    <ol className="space-y-3">
      {recommendations.map((item, index) => (
        <li
          key={item}
          className="grid gap-3 rounded-2xl border border-border bg-surface p-4 sm:grid-cols-[auto_1fr]"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-soft text-sm font-semibold text-teal">
            {index + 1}
          </span>
          <p className="text-sm text-foreground">{item}</p>
        </li>
      ))}
    </ol>
  );
}
