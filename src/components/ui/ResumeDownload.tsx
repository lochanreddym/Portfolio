import { Download } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function ResumeDownload({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: "primary" | "secondary" | "ghost" | "teal";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  if (!siteConfig.resume.available) {
    return (
      <div className={className}>
        <Button href="/resume" variant="secondary" size={size} className="w-full sm:w-auto">
          Resume details
        </Button>
        {process.env.NODE_ENV === "development" ? (
          <p className="mt-2 text-xs text-[#8a5a12]">
            Dev warning: Resume PDF missing at public/{siteConfig.resume.relativePath}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <Button
      href={siteConfig.resume.href}
      variant={variant}
      size={size}
      className={className}
      download={siteConfig.resume.fileName}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      Download Resume
    </Button>
  );
}
