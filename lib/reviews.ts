import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * SHAPE & STRENGTH GYM — rating 4.6 / reviewCount 181 are PUBLICLY_REPORTED
 * (Google Business Profile anchor, read October 14, 2026 per
 * docs/gym-research.md REVIEWS). Both figures are time-sensitive: re-read the
 * live Google values before launch.
 *
 * Two of the three research `selected_reviews` are displayed, reproduced
 * exactly as supplied. The research gives no reviewer names for them, only
 * the attributions "Verified Google Reviewer" and "Verified Reviewer", which
 * are used as the displayed name — no name is invented. Quote accuracy,
 * attribution and permission need confirming before prominent marketing use.
 *
 * The third research entry (a FITPASS review about arriving at a closed gym)
 * is NOT a Google review and is not shown in the Google reviews block; it
 * stays documented in docs/gym-research.md and in the hours conflict note in
 * lib/business.ts.
 *
 * `tagline` is a plain restatement of the themes in the two displayed
 * reviews (space, machines, trainers) — not a quotation.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a third-party
 * directory URL for the Google review CTA. googleBusinessProfileUrl uses a
 * Google Maps search-by-name-and-address query (the same safe fallback
 * pattern as lib/business.ts mapUrl). No Place ID or profile slug is
 * invented. `reviewUrl` / `reviewQrSrc` stay unset until the owner supplies
 * the Google "write a review" link.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.6,
  reviewCount: 181,
  tagline:
    "Reviewers mention a spacious floor, machines for every body part and helpful trainers.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Shape+%26+Strength+Gym+SVR+Towers+Srinagar+Colony+Main+Road+Punjagutta+Hyderabad+500082",
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Sailaish Racha",
      text: "I have been a member since the gym opened, restarted my training routine after gaining lot of weight since lockdown. Neaju Reddy has been a great trainer and motivator, he has helped be get in shape to transform. My journey is still in progress, with help of Neaju Reddy surely feel with reach my destination. As for the gym it has a great vibe and all the equipment you need to train",
    },
    {
      name: "Chakali Shashi vardhan",
      text: "Gym is marvelous with huge space , an number of machines for each and every body part.Thanks for adding  bunch of very  experienced and helpful trainers.the open space with artificial green grass is added atraction which compell one to be regular  without missing a single day. Personal trainer Neaju Reddy is an experience hand and conduct all exercises  systematically and scientifically correct..He is ver polite respectful and highly motivating.",
    },
    {
      name: "santhoshi bukka",
      text: "Excellent place to workout. All the trainers are very experienced. My personal trainer vasu is very friendly and helped me achieve my fitness goals. He ensured that I’m always very focused and motivated. I have seen continual improvement from my sessions.",
    },
    {
      name: "Divya Rani",
      text: "Mr. Vasu is an excellent fitness trainer I have ever seen. He has great knowledge in fitness, additionally he shares the nutrition diet plan which is very helpful. His effort for making me fit is awesome. I appreciate his dedication and admire him for the same. Talking about the gym, it is fully equipped with all the required equipments and sanitized regularly.",
    },
  ],
};
