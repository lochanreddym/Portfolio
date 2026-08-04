import Link from "next/link";

import type { Project } from "@/types/project";
import {
  FILTER_DOMAINS,
  FILTER_ROLES,
  FILTER_TOOLS,
  FILTER_TYPES,
} from "@/types/project";

export type FilterState = {
  role: string[];
  tool: string[];
  domain: string[];
  type: string[];
};

function asArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function parseFilters(
  params: Record<string, string | string[] | undefined>,
): FilterState {
  return {
    role: asArray(params.role).filter((value) =>
      (FILTER_ROLES as readonly string[]).includes(value),
    ),
    tool: asArray(params.tool).filter((value) =>
      (FILTER_TOOLS as readonly string[]).includes(value),
    ),
    domain: asArray(params.domain).filter((value) =>
      (FILTER_DOMAINS as readonly string[]).includes(value),
    ),
    type: asArray(params.type).filter((value) =>
      (FILTER_TYPES as readonly string[]).includes(value),
    ),
  };
}

export function filterProjects(projects: Project[], filters: FilterState): Project[] {
  return projects.filter((project) => {
    const roleOk =
      filters.role.length === 0 ||
      filters.role.some((role) => project.roles.includes(role));
    const toolOk =
      filters.tool.length === 0 ||
      filters.tool.some((tool) => project.tools.includes(tool));
    const domainOk =
      filters.domain.length === 0 || filters.domain.includes(project.domain);
    const typeOk =
      filters.type.length === 0 || filters.type.includes(project.projectType);
    return roleOk && toolOk && domainOk && typeOk;
  });
}

function toggle(current: string[], value: string): string[] {
  return current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];
}

function hrefFor(filters: FilterState, key: keyof FilterState, value: string): string {
  const next = { ...filters, [key]: toggle(filters[key], value) };
  const params = new URLSearchParams();
  for (const role of next.role) params.append("role", role);
  for (const tool of next.tool) params.append("tool", tool);
  for (const domain of next.domain) params.append("domain", domain);
  for (const type of next.type) params.append("type", type);
  const query = params.toString();
  return query ? `/projects?${query}` : "/projects";
}

function ChipGroup({
  label,
  options,
  selected,
  filterKey,
  filters,
}: {
  label: string;
  options: readonly string[];
  selected: string[];
  filterKey: keyof FilterState;
  filters: FilterState;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <Link
              key={option}
              href={hrefFor(filters, filterKey, option)}
              scroll={false}
              className={`rounded-xl border px-3 py-1.5 text-sm ${
                active
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border bg-surface text-muted hover:bg-background"
              }`}
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
  filters: FilterState;
  resultCount: number;
}) {
  const activeCount =
    filters.role.length +
    filters.tool.length +
    filters.domain.length +
    filters.type.length;

  return (
    <section className="surface-card p-5 sm:p-6" aria-labelledby="filters-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="filters-heading" className="text-lg font-semibold">
            Filter projects
          </h2>
          <p className="mt-1 text-sm text-muted">
            Combine filters. State stays in the URL.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="rounded-lg bg-background px-3 py-1.5 text-muted">
            {activeCount} active
          </span>
          {activeCount > 0 ? (
            <Link href="/projects" className="font-medium text-accent hover:underline" scroll={false}>
              Reset
            </Link>
          ) : null}
        </div>
      </div>
      <div className="mt-6 space-y-6">
        <ChipGroup label="Role" options={FILTER_ROLES} selected={filters.role} filterKey="role" filters={filters} />
        <ChipGroup label="Tool" options={FILTER_TOOLS} selected={filters.tool} filterKey="tool" filters={filters} />
        <ChipGroup label="Domain" options={FILTER_DOMAINS} selected={filters.domain} filterKey="domain" filters={filters} />
        <ChipGroup label="Type" options={FILTER_TYPES} selected={filters.type} filterKey="type" filters={filters} />
      </div>
      <p className="mt-6 text-sm text-muted" aria-live="polite" aria-atomic="true">
        Showing {resultCount} project{resultCount === 1 ? "" : "s"}.
      </p>
    </section>
  );
}
