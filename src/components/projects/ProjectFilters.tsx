import Link from "next/link";

import {
  buildFilterHref,
  countActiveFilters,
  domainFilters,
  projectTypeFilters,
  roleFilters,
  toggleParamValue,
  toolFilters,
  type ProjectFilterState,
} from "@/lib/filters";
import { cn } from "@/lib/cn";

function FilterGroup({
  label,
  options,
  selected,
  onToggleHref,
}: {
  label: string;
  options: readonly string[];
  selected: string[];
  onToggleHref: (value: string) => string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-foreground">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <Link
              key={option}
              href={onToggleHref(option)}
              className={cn(
                "rounded-xl border px-3 py-1.5 text-sm transition-colors",
                active
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border bg-surface text-muted hover:bg-background",
              )}
              scroll={false}
            >
              {option}
            </Link>
          );
        })}
      </div>
    </fieldset>
  );
}

export function ProjectFilters({
  filters,
  resultCount,
}: {
  filters: ProjectFilterState;
  resultCount: number;
}) {
  const activeCount = countActiveFilters(filters);

  return (
    <section className="surface-card p-5 sm:p-6" aria-labelledby="filters-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="filters-heading" className="text-lg font-semibold">
            Filter projects
          </h2>
          <p className="mt-1 text-sm text-muted">
            Combine role, tool, domain, and project type. Filter state stays in the URL.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="rounded-lg bg-background px-3 py-1.5 text-muted">
            {activeCount} active filter{activeCount === 1 ? "" : "s"}
          </span>
          {activeCount > 0 ? (
            <Link href="/projects" className="font-medium text-accent hover:underline" scroll={false}>
              Reset filters
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <FilterGroup
          label="Role"
          options={roleFilters}
          selected={filters.role}
          onToggleHref={(value) =>
            buildFilterHref(filters, {
              role: toggleParamValue(filters.role, value) as ProjectFilterState["role"],
            })
          }
        />
        <FilterGroup
          label="Tool"
          options={toolFilters}
          selected={filters.tool}
          onToggleHref={(value) =>
            buildFilterHref(filters, {
              tool: toggleParamValue(filters.tool, value) as ProjectFilterState["tool"],
            })
          }
        />
        <FilterGroup
          label="Domain"
          options={domainFilters}
          selected={filters.domain}
          onToggleHref={(value) =>
            buildFilterHref(filters, {
              domain: toggleParamValue(filters.domain, value) as ProjectFilterState["domain"],
            })
          }
        />
        <FilterGroup
          label="Project type"
          options={projectTypeFilters}
          selected={filters.type}
          onToggleHref={(value) =>
            buildFilterHref(filters, {
              type: toggleParamValue(filters.type, value) as ProjectFilterState["type"],
            })
          }
        />
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite" aria-atomic="true">
        Showing {resultCount} project{resultCount === 1 ? "" : "s"}.
      </p>
    </section>
  );
}
