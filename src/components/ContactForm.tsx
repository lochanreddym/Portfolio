"use client";

import { useState } from "react";

import { siteConfig } from "@/data/site";

export function ContactForm() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="space-y-6">
      <form
        name="contact"
        method="POST"
        action="/contact/success"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="surface-card space-y-5 p-6 sm:p-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label htmlFor="bot-field">
            Do not fill this field
            <input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium">
            Company or role context
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-[#fff]"
        >
          Send message
        </button>
        <p className="text-xs text-muted">
          Netlify-compatible form. Delivery is not claimed until verified in a deployed
          Netlify preview.
        </p>
      </form>

      <div className="rounded-2xl border border-border bg-surface p-6">
        <p className="text-sm font-medium">Direct email</p>
        <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-accent hover:underline">
          {siteConfig.email}
        </a>
        <button
          type="button"
          className="mt-4 inline-flex rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-accent-soft"
          onClick={async () => {
            await navigator.clipboard.writeText(siteConfig.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? "Copied" : "Copy email"}
        </button>
      </div>
    </div>
  );
}
