import type {
  Domain,
  ProjectCardData,
  ProjectType,
  RoleCategory,
  Tool,
} from "@/types/project";

export const roleFilters: RoleCategory[] = [
  "Data",
  "BI / Reporting",
  "Business",
  "Operations",
  "Marketing",
  "Product",
  "RevOps",
  "Machine Learning",
];

export const toolFilters: Tool[] = [
  "SQL",
  "Excel",
  "Power BI",
  "Python",
  "DAX",
  "Power Query",
  "Tableau",
  "Machine Learning",
];

export const domainFilters: Domain[] = [
  "Fintech",
  "Smart City",
  "Tax / Finance",
  "Healthcare",
  "SaaS",
  "Marketing",
  "Operations",
];

export const projectTypeFilters: ProjectType[] = [
  "Startup",
  "Research",
  "Academic",
  "Independent",
  "Professional",
];

export type ProjectFilterState = {
  role: RoleCategory[];
  tool: Tool[];
  domain: Domain[];
  type: ProjectType[];
};

function asArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function parseFilters(
  params: Record<string, string | string[] | undefined>,
): ProjectFilterState {
  const role = asArray(params.role).filter((value): value is RoleCategory =>
    roleFilters.includes(value as RoleCategory),
  );
  const tool = asArray(params.tool).filter((value): value is Tool =>
    toolFilters.includes(value as Tool),
  );
  const domain = asArray(params.domain).filter((value): value is Domain =>
    domainFilters.includes(value as Domain),
  );
  const type = asArray(params.type).filter((value): value is ProjectType =>
    projectTypeFilters.includes(value as ProjectType),
  );

  return { role, tool, domain, type };
}

export function countActiveFilters(filters: ProjectFilterState): number {
  return (
    filters.role.length +
    filters.tool.length +
    filters.domain.length +
    filters.type.length
  );
}

export function filterProjects(
  projects: ProjectCardData[],
  filters: ProjectFilterState,
): ProjectCardData[] {
  return projects.filter((project) => {
    const roleOk =
      filters.role.length === 0 ||
      filters.role.some((role) => project.roleCategories.includes(role));
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

export function toggleParamValue(
  current: string[],
  value: string,
): string[] {
  return current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];
}

export function buildFilterHref(
  filters: ProjectFilterState,
  updates: Partial<ProjectFilterState>,
): string {
  const next = { ...filters, ...updates };
  const params = new URLSearchParams();
  for (const role of next.role) params.append("role", role);
  for (const tool of next.tool) params.append("tool", tool);
  for (const domain of next.domain) params.append("domain", domain);
  for (const type of next.type) params.append("type", type);
  const query = params.toString();
  return query ? `/projects?${query}` : "/projects";
}
