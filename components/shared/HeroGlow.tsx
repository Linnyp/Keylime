interface HeroGlowProps {
  /**
   * Positioning and size utilities for the glow (e.g. `-right-40 top-0 h-[520px]
   * w-[520px]`). The component supplies the layers; the caller places them.
   */
  className?: string;
}

/**
 * Pronounced lime glow for section backgrounds. Three stacked blur layers — a
 * wide halo, a mid body, and a bright core — so the falloff reads as light
 * bleeding through the surface rather than a flat translucent circle.
 *
 * Drop into any `relative` section as the first child, then give the section's
 * content wrapper `relative` (or `relative z-10`) so copy stays above it.
 */
export function HeroGlow({ className = "" }: HeroGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
    >
      {/* Wide halo — carries the glow well past the element bounds */}
      <div className="absolute -inset-[33%] rounded-full bg-lime-500/25 blur-[150px]" />
      {/* Mid body */}
      <div className="absolute inset-0 rounded-full bg-lime-500/45 blur-[90px]" />
      {/* Bright core */}
      <div className="absolute inset-[26%] rounded-full bg-lime-300/55 blur-[55px]" />
    </div>
  );
}
