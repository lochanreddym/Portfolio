import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-[#ffffff] hover:bg-[#4c3f75] border border-transparent",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-accent-soft",
  ghost: "bg-transparent text-foreground border border-transparent hover:bg-accent-soft",
  teal: "bg-teal text-[#ffffff] hover:bg-[#265c58] border border-transparent",
} as const;

const sizes = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
} as const;

type ButtonBase = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type ButtonAsButton = ButtonBase &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBase &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const linkProps = props as Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<ComponentProps<"button">, "className" | "children">;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
