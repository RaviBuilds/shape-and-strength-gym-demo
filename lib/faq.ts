import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * SHAPE & STRENGTH GYM — from docs/gym-research.md (FAQ.*). Only entries the
 * research answers are used, worded as "reported" because everything except
 * the address is PUBLICLY_REPORTED and needs owner confirmation before
 * final-client production.
 *
 * Deliberately NOT created:
 *   - Showers and lockers (research answer is null / unresolved).
 *   - "Does the gym have an official website?" (a meta answer; the research
 *     only says none was found, and the Kolkata namesake domain must never
 *     be presented as this gym's).
 *   - Free trial: the "up to 1 week free" Instagram-bio offer has unconfirmed
 *     terms and the research says not to publish it until confirmed.
 *   - Cancellation / freeze / joining-fee / guest / refund / class-schedule
 *     questions: the research supports none of them.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Shape & Strength Gym located?",
    answer:
      "5th Floor, SVR Towers, Srinagar Colony Main Road, opposite Axis Bank, Pratap Nagar, Punjagutta, Hyderabad, Telangana 500082.",
  },
  {
    id: "02",
    question: "Is the gym open 24 hours?",
    answer:
      "Public business listings show the gym open 24 hours, every day. Confirm staffed hours and member-access arrangements with the team before you visit.",
  },
  {
    id: "03",
    question: "What training services are listed?",
    answer:
      "Public listings include personal training, strength training, cardio workouts and weight loss coaching. HIIT, kickboxing, aerobics, online classes and diet plans are also reported; confirm current availability with the gym.",
  },
  {
    id: "04",
    question: "Does the gym provide diet plans?",
    answer:
      "Customized diet plans are publicly listed. Confirm current availability and scope with the team.",
  },
  {
    id: "05",
    question: "Is parking available?",
    answer:
      "Customer parking is publicly reported. Confirm the current arrangements with the team before you visit.",
  },
  {
    id: "06",
    question: "What are the current membership prices?",
    answer:
      "A one-month membership is publicly reported from ₹3,000 per month. Confirm current plans, rates and any joining fee with the team on WhatsApp or by phone.",
  },
];
