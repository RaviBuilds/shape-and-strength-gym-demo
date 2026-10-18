import type { SocialConfiguration } from "./types";

/**
 * Master social/Instagram data. Curated content only — no live authenticated
 * Instagram API dependency in Factory v1. An empty posts array is valid and
 * renders a "Follow us on Instagram" fallback CTA, never a broken widget.
 *
 * NOTE: `social` below is not currently imported by any component — the live
 * Instagram section (components/sections/Instagram.tsx) reads from
 * lib/instagram.ts. See docs/gym-customization-manifest.md §9.1
 * ("lib/social.ts is orphaned"). Left in sync with lib/instagram.ts for data
 * consistency in case a future section consumes this module; not a live
 * rendering path. `socialLinks` further down IS live (footer icons).
 *
 * SHAPE & STRENGTH GYM — mirrors lib/instagram.ts: the handle
 * @shapeandstrength is VERIFIED_OFFICIAL; the profile URL is built from that
 * verified handle only.
 */
export const social: SocialConfiguration = {
  instagramHandle: "@shapeandstrength",
  instagramUrl: "https://www.instagram.com/shapeandstrength/",
  posts: [],
};

/**
 * Footer social icons (Facebook, Justdial, X) shown next to Instagram.
 *
 * SOURCE-FIRST: no handle or username is invented.
 *  - Facebook: CONTACT.facebook_url is NOT_FOUND (the research found no
 *    official page, only third-party directory links). Network homepage.
 *  - Justdial: the research cites only a Justdial locality listing used as
 *    competitive context, not this gym's own listing, so it is not linked.
 *    Network homepage.
 *  - X: no profile supplied. Network homepage.
 *
 * Instagram is configured separately in lib/instagram.ts (it also drives the
 * Reel embeds) and is not repeated here.
 */
export interface SocialLink {
  id: "facebook" | "justdial" | "x";
  /** Accessible name for the icon, e.g. "Facebook". */
  label: string;
  /** Profile URL. Defaults to the network homepage until the gym's own is set. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "justdial", label: "Justdial", href: "https://www.justdial.com" },
  { id: "x", label: "X", href: "https://x.com" },
];
