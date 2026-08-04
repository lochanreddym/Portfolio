import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lochanreddy Mallakunta about analyst, BI, business, operations, marketing, product, or RevOps roles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="section-space pt-10">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-4 text-lg text-muted">
            Use the form or email directly. Until the Netlify form is verified in a
            deployed preview, email is the reliable path.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-border bg-surface p-6">
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                Open email app
              </Button>
              <CopyEmailButton email={siteConfig.email} />
            </div>
            <div className="border-t border-border pt-4 text-sm text-muted">
              <p>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  LinkedIn
                </a>
                {" · "}
                <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
