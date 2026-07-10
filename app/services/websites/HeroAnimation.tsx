"use client";

import { useEffect, useRef } from "react";

export function HeroAnimation() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.playbackRate = 2;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src="/websiteAnimation.mp4"
      muted
      playsInline
      preload="metadata"
      aria-hidden
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
