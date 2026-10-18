import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * SHAPE & STRENGTH GYM (Srinagar Colony, Punjagutta, Hyderabad) — populated
 * from docs/gym-research.md. VERIFIED_OFFICIAL: name, phone, address, city,
 * state, postal code, landmark. PUBLICLY_REPORTED (owner verification
 * required before final-client production): description, hours.
 *
 * HOURS — DOCUMENTED SOURCE CONFLICT (not silently resolved):
 *   Public listings (Google Business Profile anchor, APTS Health, LyfSkills)
 *   report the gym as open 24 hours, Monday to Sunday. One FITPASS review
 *   reports arriving when the gym showed as open but was closed. Staffed
 *   hours versus member-only access are unresolved (HOURS.staffed_hours_vs_
 *   member_access = CONFLICTING_SOURCES).
 *   The hours table is typed `hh:mm AM/PM`, so "open 24 hours" is entered as
 *   12:00 AM – 11:59 PM (the schema.org convention for all-day opening) on
 *   all seven days. Owner must confirm staffed hours and access
 *   arrangements; do not imply guaranteed staffing at every hour.
 *
 * TAGLINE: research BUSINESS.tagline is NOT_FOUND (the Instagram bio must not
 * be turned into a tagline). The required `tagline` slot therefore carries a
 * plain factual descriptor built only from the listed services.
 *
 * PHONE: +91 91600 69788 is the VERIFIED_OFFICIAL primary number. The
 * secondary number +91 94920 30062 is PUBLICLY_REPORTED/CONFLICTING and is
 * intentionally not published until the owner confirms it.
 *
 * WHATSAPP: CONTACT.whatsapp is NOT_FOUND (explicitly unverified). The
 * existing architecture requires a WhatsApp config, so the verified primary
 * phone is used as the wa.me target — OWNER MUST CONFIRM that this number is
 * on WhatsApp before final-client production.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted. shapeandstrength.com
 * belongs to a different (Kolkata) clinical business and must never be linked
 * here.
 *
 * mapUrl: no verified Google Maps / Place URL was found in research. This is
 * a standard Google Maps search-by-name-and-address URL built from the
 * VERIFIED_OFFICIAL address text. No latitude, longitude or Place ID has been
 * invented.
 */
export const business: Business = {
  name: "Shape & Strength Gym",
  tagline: "Strength, cardio and personal training.",
  description:
    "Shape & Strength Gym is a gym on Srinagar Colony Main Road in Punjagutta, Hyderabad. Public listings report 24-hour access, personal training, strength training with resistance machines and free weights, cardio workouts, weight-loss coaching and an artificial-turf area.",
  phone: "+919160069788",
  whatsapp: {
    number: "+919160069788",
    message: "Hi, I'd like to know more about membership and training at Shape & Strength Gym, Punjagutta.",
  },
  email: undefined,
  address: {
    // Research LOCATION.address_line ends with "Punjagutta"; that part is
    // carried by `locality` below so the rendered address does not repeat it.
    addressLine:
      "5th Floor, SVR Towers, Srinagar Colony Main Rd, Opp. Axis Bank, Pratap Nagar, Sri Nagar Colony, VST Colony",
    locality: "Punjagutta",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500082",
    landmark: "Opposite Axis Bank, Pratap Nagar",
  },
  hours: [
    { day: "Monday", open: "12:00 AM", close: "11:59 PM" },
    { day: "Tuesday", open: "12:00 AM", close: "11:59 PM" },
    { day: "Wednesday", open: "12:00 AM", close: "11:59 PM" },
    { day: "Thursday", open: "12:00 AM", close: "11:59 PM" },
    { day: "Friday", open: "12:00 AM", close: "11:59 PM" },
    { day: "Saturday", open: "12:00 AM", close: "11:59 PM" },
    { day: "Sunday", open: "12:00 AM", close: "11:59 PM" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Shape+%26+Strength+Gym+SVR+Towers+Srinagar+Colony+Main+Road+Punjagutta+Hyderabad+500082",
  // Prompt A — PRIMARY brand colour "Athletic Green" #39D600 (logo-extracted).
  // The authentic hex is entered here exactly once and is never altered;
  // app/globals.css derives the UI variants from it, and lib/color.ts picks a
  // dark foreground for text on primary fills because white on this green
  // does not reach WCAG AA.
  accentColor: "#39D600",
  // Prompt A — SECONDARY brand colour "Strength Crimson" #D71938
  // (logo-extracted). Entered once here; every --brand-secondary-* variant is
  // derived from it in app/globals.css.
  secondaryColor: "#D71938",
};
