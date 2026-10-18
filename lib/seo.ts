import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * SHAPE & STRENGTH GYM SEO configuration, from docs/gym-research.md
 * (SEO.title_candidate / description_candidate — INFERRED from verified
 * business data). The title keeps the researched "24-Hour Gym" wording, which
 * rests on the public 24-hour listings; the staffed-hours conflict is
 * documented in lib/business.ts and needs owner confirmation. The description
 * is the researched candidate, which already states that access and services
 * should be confirmed with the gym.
 *
 * canonical is a placeholder domain pending the client's real production URL:
 * the research found NO website for the Hyderabad gym, and
 * shapeandstrength.com belongs to an unrelated Kolkata clinical business, so
 * it must NOT be used here.
 */
export const seo: SEOConfiguration = {
  title: "Shape & Strength Gym | 24-Hour Gym in Punjagutta, Hyderabad",
  description:
    "Explore Shape & Strength Gym in Srinagar Colony, Punjagutta, Hyderabad. Public listings report 24-hour access, strength training, cardio and personal training. Confirm access arrangements and current services with the gym.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
