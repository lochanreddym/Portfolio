import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Message sent",
  robots: { index: false, follow: false },
};

export default function ContactSuccessPage() {
  return (
    <div className="section-space">
      <div className="container-page max-w-2xl">
        <div className="surface-card p-8">
          <h1 className="text-3xl font-semibold tracking-tight">Thank you</h1>
          <p className="mt-4 text-muted">
            If this page was reached from a Netlify-deployed form submission, your message
            should appear in the Netlify Forms inbox. If you tested locally, Netlify may
            not have received the submission.
          </p>
          <p className="mt-4 text-muted">
            You can also email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
              {siteConfig.email}
            </a>{" "}
            directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-[#fff]"
            >
              Back to home
            </Link>
            <Link
              href="/projects"
              className="inline-flex rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent-soft"
            >
              View projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
