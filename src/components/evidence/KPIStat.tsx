import type { VerifiedResult } from "@/types/project";

export function KPIStat({ result }: { result: VerifiedResult }) {
  if (result.value === null || result.value === undefined || result.value === "") {
    return null;
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <p className="text-sm text-muted">{result.label}</p>
      <p className="mt-2 text-2xl font-semibold text-teal">{result.value}</p>
      {result.detail ? <p className="mt-2 text-sm text-muted">{result.detail}</p> : null}
    </div>
  );
}

export function QualitativeResult({ result }: { result: VerifiedResult }) {
  if (result.value !== null && result.value !== undefined && result.value !== "") {
    return null;
  }

  return (
    <div className="rounded-2xl border border-dashed border-border bg-background p-5">
      <p className="text-sm font-medium text-foreground">{result.label}</p>
      <p className="mt-2 text-sm text-muted">
        {result.detail ?? "Verified metric pending. No invented value shown."}
      </p>
    </div>
  );
}
