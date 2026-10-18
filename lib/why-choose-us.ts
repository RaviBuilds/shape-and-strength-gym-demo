import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — what sets the floor apart. It does
 * not repeat opening hours, address, review figures or the full program list.
 * Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns zones, attributes and hours;
 *   - Section 02 (lib/services.ts) owns individual programs.
 *
 * SHAPE & STRENGTH GYM — from docs/gym-research.md (WHY_CHOOSE_US.*). Each
 * reason is PUBLICLY_REPORTED and needs owner approval for final marketing
 * use.
 *
 * Deliberately NOT used:
 *   - "Reported 24-hour access" — CONFLICTING_SOURCES (a FITPASS review
 *     reports a closed gym while listed as open). Hours stay in About and
 *     Location with the unresolved status documented in lib/business.ts.
 *   - "Trial offer reported" — the up-to-one-week free-training claim is an
 *     Instagram-bio quote whose terms are unconfirmed; the research
 *     explicitly says not to publish it until confirmed.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Artificial turf area",
    description:
      "A distinct artificial green grass area on the floor, described in public reviews as a reason to stay regular.",
  },
  {
    title: "Machines and free weights",
    description:
      "Resistance machines and free weights for training across the body.",
  },
  {
    title: "Personal training on the floor",
    description:
      "Personal training is a listed service, with trainers described in public reviews as experienced and helpful.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the verified reasons
 * (machines, free weights, turf area); it is never a superlative. A clone
 * edits this object and the array, never the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Machines, free weights and a turf area.",
};
