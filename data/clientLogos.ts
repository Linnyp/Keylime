import type { ClientLogoItem } from "../types";

/* width/height are the *rendered* size at LogoLoop's 48px logoHeight (CSS still
   governs the painted size). They exist so each item reserves its box before the
   image decodes, which keeps the marquee from measuring a zero-width sequence. */
export const clientLogos: ClientLogoItem[] = [
  {
    src: "/logos/fourleafLogoNoTitle.webp",
    alt: "Four Leaf Charters",
    title: "Four Leaf Charters",
    width: 56,
    height: 48,
  },
  {
    src: "/logos/veronacabinet.webp",
    alt: "Verona Cabinets",
    title: "Verona Cabinets",
    width: 120,
    height: 48,
  },
  {
    src: "/logos/mk-kitchen-logo.webp",
    alt: "MK Kitchen",
    title: "MK Kitchen",
    width: 99,
    height: 48,
  },
  {
    src: "/logos/ordx-logo-light.webp",
    alt: "ORDX",
    title: "ORDX",
    width: 102,
    height: 48,
  },
  {
    src: "/logos/virtuelogo.webp",
    alt: "Virtue",
    title: "Virtue",
    width: 48,
    height: 48,
  },
  {
    src: "/logos/mycelia-logo.svg",
    alt: "Mycelia Foundation",
    title: "Mycelia Foundation",
    width: 48,
    height: 48,
  },
];
