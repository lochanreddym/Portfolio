import { Button } from "@/components/ui/Button";

export function ContactForm() {
  return (
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
        <label htmlFor="name" className="text-sm font-medium text-foreground">
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
        <label htmlFor="email" className="text-sm font-medium text-foreground">
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
        <label htmlFor="company" className="text-sm font-medium text-foreground">
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
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
          placeholder="Role, timeline, or what you would like to discuss"
        />
      </div>

      <Button type="submit">Send message</Button>
      <p className="text-xs text-muted">
        Form is Netlify-compatible. Delivery is not claimed as verified until tested in a
        deployed Netlify preview. Email remains available as a direct alternative.
      </p>
    </form>
  );
}
