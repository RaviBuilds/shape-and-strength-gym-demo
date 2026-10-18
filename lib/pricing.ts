import type { PricingConfiguration } from "./types";

/**
 * Master pricing/membership data — the single source of truth for Section 06.
 *
 * PURE FRONTEND: there is no CMS, database, API or backend pricing source.
 * Everything the pricing register renders is authored here; the component in
 * components/sections/Membership.tsx consumes this verbatim and never hardcodes
 * a price, name, duration, label or CTA. To re-price the site for a real gym,
 * edit ONLY this file.
 *
 * Do not add discounts, savings, "best value" / "most popular" tags, urgency,
 * scarcity or guarantees — none of those exist in this contract by design.
 *
 * PRICE STATUS
 *   "exact"   -> render the numeric `price`, INR-formatted.
 *   "contact" -> render `contactLabel` ("Consult management") instead of an
 *                amount; `price` may be omitted.
 *   "hidden"  -> the entry does not render publicly at all.
 * Change a single plan's `priceStatus` to move it between these states without
 * touching the component.
 */
/**
 * SHAPE & STRENGTH GYM pricing/membership data — Section 06.
 *
 * MIXED PRICING (prospect-demo rules, Cases A/B/D):
 *
 * docs/gym-research.md PRICING: only ONE gym-specific amount exists — a
 * PUBLICLY_REPORTED "starting at INR 3,000 per month" for the one-month
 * membership (Google Business Profile anchor, not owner-confirmed).
 *
 *  - RESEARCHED price APPLIED: `monthly` = INR 3,000, with the term line
 *    worded "Starting price, per month" so it is not read as a fixed rate.
 *    OWNER VERIFICATION REQUIRED before final-client production.
 *  - Every other plan (daily, weekly, quarterly, half-year, annual) and the
 *    personal-coaching row are NOT_FOUND in the research and KEEP THE
 *    EXISTING TEMPLATE DEMO PRICE. None of those amounts is a verified
 *    Shape & Strength Gym price.
 *  - The reported "up to 1 week free training" Instagram-bio offer and any
 *    joining fee are unconfirmed and are not published here.
 *
 * No "Consult management" state was introduced; all plans stay
 * `priceStatus: "exact"` (the `contactLabel` field below is the template's
 * dormant default and is not rendered while no plan uses "contact"). The
 * festival offer engine (lib/festival-offers.ts) references the `half-year`
 * and `annual` plan IDs below — do not rename those IDs. No second pricing or
 * offer calculation exists; the engine derives every discounted amount from
 * these prices.
 */
export const pricing: PricingConfiguration = {
  enabled: true,
  currency: "INR",
  locale: "en-IN",
  eyebrow: "Membership / Pricing",
  index: "06",
  headlineLines: ["Train on", "your terms."],
  accentLastLine: true,
  deck: "Flexible day passes and memberships for every commitment level. Reach out on WhatsApp or by phone and the team will get you started.",
  contactLabel: "Consult management",
  specialLabel: "Special training",
  plans: [
    {
      id: "daily",
      name: "Daily Pass",
      duration: "1 Day",
      term: "One day",
      price: 300,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "weekly",
      name: "Weekly Pass",
      duration: "1 Week",
      term: "One week",
      price: 1000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "monthly",
      name: "1 Month",
      duration: "1 Month",
      term: "Starting price, per month",
      price: 3000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "quarterly",
      name: "3 Months",
      duration: "3 Months",
      term: "Billed once",
      price: 6000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "half-year",
      name: "6 Months",
      duration: "6 Months",
      term: "Billed once",
      price: 10000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "annual",
      name: "1 Year",
      duration: "12 Months",
      term: "Billed once",
      price: 18000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
  ],
  special: {
    id: "special-training",
    name: "Personal Coaching",
    duration: "1 Month",
    term: "Per month",
    price: 8000,
    priceStatus: "exact",
    description:
      "One-on-one personal training and dedicated trainer guidance, programmed around your goals.",
    ctaLabel: "Enquire",
  },
};
