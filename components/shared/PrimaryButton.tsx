import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  /** `primary` = charcoal fill, `lime` = high-emphasis accent, `secondary` = outline. */
  variant?: "primary" | "lime" | "secondary";
}

/** Pill-shaped CTA in the Citrus & Charcoal system. Anchor only — internal
    routes render through `next/link` so navigation stays client-side; hashes
    and external URLs stay plain anchors. */
export function PrimaryButton({
  children,
  variant = "primary",
  className = "",
  href,
  ...rest
}: PrimaryButtonProps) {
  const variantClass =
    variant === "lime"
      ? "wf-btn-lime"
      : variant === "secondary"
        ? "wf-btn-secondary"
        : "wf-btn-primary";
  const classes = `wf-btn ${variantClass} ${className}`;

  if (href?.startsWith("/")) {
    return (
      <Link {...rest} href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a {...rest} href={href} className={classes}>
      {children}
    </a>
  );
}
