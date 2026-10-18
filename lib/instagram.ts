/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * SHAPE & STRENGTH GYM Instagram configuration.
 *
 * docs/gym-research.md INSTAGRAM.handle is "@shapeandstrength"
 * (VERIFIED_OFFICIAL, Google Business Profile anchor). INSTAGRAM.profile_url
 * is NOT_FOUND (the report prints the handle but no URL), so `profileUrl` is
 * the standard instagram.com address built directly from that verified
 * handle — nothing else is added. OWNER QUESTION: "Please confirm the
 * official Instagram profile URL."
 *
 * INSTAGRAM.items supplies 3 Reel URLs, each `status: VERIFIED_OFFICIAL`
 * (source "Official Instagram"), wired below exactly as supplied. (The
 * research note that says "no Reel URLs were supplied" is a stale template
 * line that contradicts the items; the items are the authoritative, operator-
 * supplied values.)
 *   1. Strength training session inside the gym
 *   2. Gym interior and equipment walkthrough
 *   3. Gym interior and equipment walkthrough
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: "https://www.instagram.com/shapeandstrength/",
  handle: "@shapeandstrength",
  items: [
    {
      id: "reel-01",
      type: "reel",
      url: "https://www.instagram.com/p/BuCiL4soWiK/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-02",
      type: "reel",
      url: "https://www.instagram.com/p/Bukbg6khjRm/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-03",
      type: "reel",
      url: "https://www.instagram.com/p/BuXes5xBsui/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
  ],
};
