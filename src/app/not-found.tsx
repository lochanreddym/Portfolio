import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-space">
      <div className="container-page max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-muted">
          That route does not exist. Try the project library or return home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-[#fff]"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent-soft"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
