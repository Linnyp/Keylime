"use client";

import { useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  /** Image URL (public path). */
  image: string;
}

/**
 * Full-bleed parallax background for a section. Renders an oversized, blurred
 * image layer under a light near-white overlay so foreground copy stays clearly
 * visible. The image drifts vertically on scroll (slower than the page) for a
 * parallax effect. Honors reduced-motion.
 *
 * Drop into any `relative` section as the first child, then give the section's
 * content wrapper `relative z-10`.
 */
export function ParallaxBackground({ image }: ParallaxBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const bg = bgRef.current;
    if (!root || !bg) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const AMPLITUDE = 220; // px of vertical drift across the viewport pass
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (below viewport) → 0 (centered) → 1 (above viewport)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh + rect.height / 2);
      const shift = Math.max(-1, Math.min(1, progress)) * -AMPLITUDE;
      bg.style.transform = `translate3d(0, ${shift}px, 0) scale(1.35)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Oversized so the drift never reveals the image edges */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[40%] h-[180%] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url('${image}')`, transform: "scale(1.35)" }}
      />
      {/* Blur + light overlay to keep foreground copy clearly visible */}
      <div className="absolute inset-0 bg-sand-50/70 backdrop-blur-md" />
    </div>
  );
}
