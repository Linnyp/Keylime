import type { AnchorHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  /** `primary` = charcoal fill, `lime` = high-emphasis accent, `secondary` = outline. */
  variant?: "primary" | "lime" | "secondary";
}

/** Pill-shaped CTA in the Citrus & Charcoal system. Anchor only. */
export function PrimaryButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: PrimaryButtonProps) {
  const variantClass =
    variant === "lime"
      ? "wf-btn-lime"
      : variant === "secondary"
        ? "wf-btn-secondary"
        : "wf-btn-primary";
  return (
    <a {...rest} className={`wf-btn ${variantClass} ${className}`}>
      {children}
    </a>
  );
}
