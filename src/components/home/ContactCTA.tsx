import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="section-space pt-0" aria-labelledby="contact-cta-heading">
      <div className="container-page">
        <div className="surface-card bg-[linear-gradient(135deg,#ffffff,#f4f0fa_55%,#eef7f6)] p-8 sm:p-10">
          <p className="text-sm font-medium text-accent">Next step</p>
          <h2
            id="contact-cta-heading"
            className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight"
          >
            Looking for an analyst who can connect data to decisions?
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Reach out for analyst, BI, business, operations, marketing, product, or
            RevOps conversations. Email remains the most reliable contact method until
            the Netlify form is verified in a deployed preview.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact" size="lg">
              Contact form
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="secondary" size="lg">
              Email {siteConfig.email}
            </Button>
            <CopyEmailButton email={siteConfig.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
