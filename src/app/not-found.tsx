import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="section-space">
      <div className="container-page max-w-xl">
        <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-muted">
          That route does not exist. Try the project library or return home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Home</Button>
          <Button href="/projects" variant="secondary">
            Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
