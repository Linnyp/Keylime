import type { AnchorHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  size?: "md" | "lg";
}

/** Brand-accent CTA. Anchor only — used for in-page links and contact jumps. */
export function PrimaryButton({
  children,
  size = "lg",
  className = "",
  ...rest
}: PrimaryButtonProps) {
  const sizing =
    size === "lg"
      ? "px-8 py-4 min-h-[52px] text-[13px]"
      : "px-7 py-3.5 min-h-[48px] text-[12px]";
  return (
    <a
      {...rest}
      className={`inline-flex items-center gap-2.5 border-2 border-clay-500 bg-clay-500 font-brand font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:border-clay-700 hover:bg-clay-700 ${sizing} ${className}`}
    >
      {children}
    </a>
  );
}
