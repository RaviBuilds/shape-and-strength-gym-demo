import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * SHAPE & STRENGTH GYM — all 9 programs from docs/gym-research.md
 * (PROGRAMS.*). Every entry is PUBLICLY_REPORTED (Google Business Profile
 * anchor / third-party listings); owner verification of current availability
 * is required before final-client production (the research flags aerobics,
 * online classes, HIIT, kickboxing and nutrition guidance specifically).
 * Descriptions are the research descriptions, shortened; no schedule,
 * trainer, outcome, weight-loss or health claim is added. No clinical or
 * physiotherapy service is listed — the research attributes those to a
 * Kolkata namesake, not this gym.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts) and from
 * components/sections/startCheckLogic.ts. These three ids must not be
 * renamed even though the gym-facing program name differs. Here
 * `conditioning` is carried by "Cardio Workouts" (the research's
 * conditioning-category program).
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files
 * in place with real Shape & Strength Gym photography — no code change.
 */
const ASSET = "/assets/programs/shape-and-strength-punjagutta-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description: "Strength training on resistance machines and free weights.",
    icon: "strength",
    image: `${ASSET}-strength-training.jpg`,
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "Individual fitness guidance and coaching on the training floor.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "Cardio Workouts",
    description: "Cardio workouts for endurance and general conditioning.",
    icon: "cardio",
    image: `${ASSET}-cardio-workouts.jpg`,
    verified: true,
    ctaLabel: "Ask about cardio workouts",
    ctaHref: undefined,
  },
  {
    id: "hiit",
    name: "HIIT",
    description: "High-intensity interval training.",
    icon: "equipment",
    image: `${ASSET}-hiit.jpg`,
    verified: true,
    ctaLabel: "Ask about HIIT",
    ctaHref: undefined,
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description: "Kickboxing training.",
    icon: "equipment",
    image: `${ASSET}-kickboxing.jpg`,
    verified: true,
    ctaLabel: "Ask about kickboxing",
    ctaHref: undefined,
  },
  {
    id: "aerobics",
    name: "Aerobics",
    description: "Aerobics fitness sessions.",
    icon: "cardio",
    image: `${ASSET}-aerobics.jpg`,
    verified: true,
    ctaLabel: "Ask about aerobics",
    ctaHref: undefined,
  },
  {
    id: "weight-loss-coaching",
    name: "Weight Loss Coaching",
    description: "Coaching support for members working on weight management.",
    icon: "coaching",
    image: `${ASSET}-weight-loss-coaching.jpg`,
    verified: true,
    ctaLabel: "Ask about weight loss coaching",
    ctaHref: undefined,
  },
  {
    id: "nutrition-guidance",
    name: "Nutrition Guidance",
    description: "Customized diet plans alongside training.",
    icon: "coaching",
    image: `${ASSET}-nutrition-guidance.jpg`,
    verified: true,
    ctaLabel: "Ask about diet plans",
    ctaHref: undefined,
  },
  {
    id: "online-classes",
    name: "Online Classes",
    description: "Online fitness classes. Ask the gym about availability and format.",
    icon: "floor",
    image: `${ASSET}-online-classes.jpg`,
    verified: true,
    ctaLabel: "Ask about online classes",
    ctaHref: undefined,
  },
];
