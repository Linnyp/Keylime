/**
 * Single source of truth for the KeyLime booking link.
 *
 * The Google Meet / phone-call choice is configured on the Calendly event
 * itself (Event type -> Location -> "Ask invitee"), so the invitee picks the
 * format inside the widget. No second URL is needed here — but if the event
 * is ever split into two separate types, add the second URL below and render
 * a picker instead of a single embed.
 */
export const CALENDLY_URL = "https://calendly.com/gohandud/30min";

/**
 * Brand styling passed to the embed. Calendly only honours custom colours on
 * paid plans; on the free plan these are ignored and the default blue is used.
 * Hex values are intentionally written without `#` — Calendly's API requires that.
 */
export const CALENDLY_PAGE_SETTINGS = {
  backgroundColor: "fbfbf7", // --color-sand-50
  primaryColor: "a4d639", // --color-lime-500
  textColor: "1c1e1a", // --color-sand-950
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  hideGdprBanner: true,
} as const;
