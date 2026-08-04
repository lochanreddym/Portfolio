"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({
  title,
  language,
  code,
  caption,
}: {
  title: string;
  language: string;
  code: string;
  caption?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-[#1b2430] text-white">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-white/60">{language}</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium hover:bg-white/15"
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              Copy code
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
      {caption ? (
        <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-white/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
