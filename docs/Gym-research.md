# GYM RESEARCH PACKAGE — Shape & Strength Gym

Researched: October 14, 2026
Researcher: Gemini Deep Research
Phase: PROSPECT_DEMO
Source report: `Shape & Strength Gym Dossier.pdf`

> This file is the schema-normalized research package for the BLOGSPAGE AI gym website factory.
> It preserves the source report's findings while separating verified/publicly reported/inferred information. Non-`VERIFIED_OFFICIAL` fields require owner verification before final-client production.

> Factory-level content excluded: Hero content/artwork, transformation data, Training Intelligence, Between Sessions education, section headings/labels, discount percentages, promotional terms, and unsupported health/nutrition/physiological claims are intentionally excluded from this research package. The source report mentions a trial offer, but its terms require confirmation and it is not normalized as a discount.

## Status vocabulary

- `VERIFIED_OFFICIAL`: directly supported by the supplied primary Google Business Profile (GBP) screenshot/anchor or owner-provided material. No separate owner-provided material was supplied.
- `PUBLICLY_REPORTED`: stated by a public third-party source in the source report; not independently owner-confirmed.
- `INFERRED`: interpretation or synthesis, not an explicit verified business fact.
- `NOT_FOUND`: the report says the information was not found or it is absent from the supplied report.
- `CONFLICTING_SOURCES`: sources materially disagree or a source collision/operational discrepancy is documented.

## 1. BUSINESS

```yaml
BUSINESS:
  name:
    value: "Shape & Strength Gym"
    source: "Primary_Anchor (Google Business Profile screenshot), as cited in source report"
    status: VERIFIED_OFFICIAL
  tagline:
    value: null
    source: "Not explicitly supplied; source report describes Instagram bio wording separately"
    status: NOT_FOUND
  description:
    value: "Gym / fitness center in the Srinagar Colony Main Road, Punjagutta area of Hyderabad; public reports describe 24-hour access, personal training, strength training, cardio, weight-loss coaching, and an artificial-turf area."
    source: "Primary_Anchor plus third-party listings/reviews summarized in Shape & Strength Gym Dossier.pdf"
    status: PUBLICLY_REPORTED
  category:
    value: "Gym / Fitness Center"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  primary_locality:
    value: "Srinagar Colony / Punjagutta"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  branch_count:
    value: 1
    source: "Multi-source branch discovery described in source report; no second Hyderabad branch documented"
    status: PUBLICLY_REPORTED
  year_established:
    value: null
    source: "Source report says founding year could not be verified"
    status: NOT_FOUND
```

## 2. CONTACT

```yaml
CONTACT:
  phone:
    value: "+91 91600 69788"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  secondary_phone:
    value: "+91 94920 30062"
    source: "Listed in source report's branch/contact tables; exact primary source is not specified"
    status: PUBLICLY_REPORTED
  whatsapp:
    value: null
    source: "Source report explicitly says WhatsApp is not verified"
    status: NOT_FOUND
  email:
    value: null
    source: "Website/contact discovery in source report"
    status: NOT_FOUND
  website:
    value: null
    source: "Website discovery in source report; GBP reportedly not linked to a website"
    status: NOT_FOUND
  instagram_url:
    value: null
    source: "The report identifies @shapeandstrength but does not provide a profile URL"
    status: NOT_FOUND
  instagram_handle:
    value: "@shapeandstrength"
    source: "Primary_Anchor; Instagram bio text quoted in source report"
    status: VERIFIED_OFFICIAL
  facebook_url:
    value: null
    source: "Source report says no official Facebook profile was found; only third-party directory links"
    status: NOT_FOUND
  youtube_url:
    value: null
    source: "Source report"
    status: NOT_FOUND
  booking_url:
    value: "https://fitpass.co.in/studio/shape-and-strength-gym-srinagar-colony-punjagutta"
    source: "FITPASS listing cited as source 17; report describes FITPASS integration as active"
    status: PUBLICLY_REPORTED
```

## 3. LOCATION

```yaml
LOCATION:
  address_line:
    value: "5th Floor, SVR Towers, Srinagar Colony Main Rd, Opp. Axis Bank, Pratap Nagar, Sri Nagar Colony, VST Colony, Punjagutta"
    source: "Primary_Anchor, as transcribed in source report"
    status: VERIFIED_OFFICIAL
  locality:
    value: "Srinagar Colony / Punjagutta"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  city:
    value: "Hyderabad"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  state:
    value: "Telangana"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  postal_code:
    value: "500082"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  landmark:
    value: "Opposite Axis Bank, Pratap Nagar"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  map_url:
    value: null
    source: "Report says coordinates were used to identify the listing, but supplies no exact Google Maps URL"
    status: NOT_FOUND
  latitude:
    value: null
    source: "Exact coordinates not printed in source report"
    status: NOT_FOUND
  longitude:
    value: null
    source: "Exact coordinates not printed in source report"
    status: NOT_FOUND
  floor:
    value: "5th Floor"
    source: "Primary_Anchor and source report's branch address"
    status: VERIFIED_OFFICIAL
```

## 4. HOURS

```yaml
HOURS:
  monday:
    open: "24 hours"
    close: "24 hours"
    source: "Primary_Anchor; corroborating public directory reports summarized in source report"
    status: PUBLICLY_REPORTED
  tuesday:
    open: "24 hours"
    close: "24 hours"
    source: "Primary_Anchor; corroborating public directory reports summarized in source report"
    status: PUBLICLY_REPORTED
  wednesday:
    open: "24 hours"
    close: "24 hours"
    source: "Primary_Anchor; corroborating public directory reports summarized in source report"
    status: PUBLICLY_REPORTED
  thursday:
    open: "24 hours"
    close: "24 hours"
    source: "Primary_Anchor; corroborating public directory reports summarized in source report"
    status: PUBLICLY_REPORTED
  friday:
    open: "24 hours"
    close: "24 hours"
    source: "Primary_Anchor; corroborating public directory reports summarized in source report"
    status: PUBLICLY_REPORTED
  saturday:
    open: "24 hours"
    close: "24 hours"
    source: "Primary_Anchor; corroborating public directory reports summarized in source report"
    status: PUBLICLY_REPORTED
  sunday:
    open: "24 hours"
    close: "24 hours"
    source: "Primary_Anchor; corroborating public directory reports summarized in source report"
    status: PUBLICLY_REPORTED
  split_shifts_reported:
    value: null
    source: "No split shifts reported; source report records a FITPASS complaint about arriving when gym appeared open but was closed"
    status: NOT_FOUND
  staffed_hours_vs_member_access:
    value: null
    source: "Source report flags uncertainty about staffed hours versus late-night/member-only access"
    status: CONFLICTING_SOURCES
```

## 5. ABOUT

```yaml
ABOUT:
  short_description:
    value: "A gym/fitness center reported at SVR Towers on Srinagar Colony Main Road in Punjagutta, Hyderabad, with reported 24-hour access and training services."
    source: "Primary_Anchor and public listings summarized in source report"
    status: PUBLICLY_REPORTED
  positioning:
    value: "Accessible, spacious general fitness facility with 24-hour access and coaching; this positioning is the report's interpretation of its listed services and reviews."
    source: "Source report synthesis of hours, services, and public reviews"
    status: INFERRED
  story:
    value: null
    source: "No verified founding story, founder names, mission statement, or year established found"
    status: NOT_FOUND
  zones:
    - id: "strength"
      label: "Strength area"
      value: "Resistance machines and free weights are reported/visible in the source anchor and review descriptions."
      source: "Primary_Anchor imagery and public reviews summarized in source report"
      status: PUBLICLY_REPORTED
    - id: "functional-turf"
      label: "Artificial green grass / turf area"
      value: "A distinct artificial-turf area is reported."
      source: "Primary_Anchor and public reviews summarized in source report"
      status: PUBLICLY_REPORTED
    - id: "cardio"
      label: "Cardio area"
      value: "Cardio workouts are listed; specific equipment inventory is not fully verified."
      source: "Primary_Anchor/service listings summarized in source report"
      status: PUBLICLY_REPORTED
  attributes:
    - id: "spacious-floor"
      label: "Spacious floor"
      value: "Public reviews describe the facility as spacious / having a huge space."
      source: "Public reviews summarized in source report; source 9"
      status: PUBLICLY_REPORTED
    - id: "restrooms"
      label: "Restrooms"
      value: "Restrooms/washrooms are reported."
      source: "Primary_Anchor, as summarized in source report"
      status: PUBLICLY_REPORTED
    - id: "parking"
      label: "Customer parking"
      value: "Source report says parking accessibility is verified/promoted, but direct owner confirmation is absent."
      source: "Source report; source 1"
      status: PUBLICLY_REPORTED
    - id: "air-conditioning"
      label: "Air conditioning"
      value: null
      source: "Source report says this is implied rather than explicitly confirmed"
      status: NOT_FOUND
    - id: "showers-lockers"
      label: "Showers and lockers"
      value: null
      source: "Source report identifies shower/locker availability as an unresolved question"
      status: NOT_FOUND
```

## 6. PROGRAMS

```yaml
PROGRAMS:
  - id: "personal-training"
    name: "Personal Training"
    description: "Listed service; report describes individual fitness guidance and coaching."
    category: "personal"
    image_opportunity: "Authentic coach-and-member training-floor image from the operator-approved photo set."
    source: "Primary_Anchor and source report's service table"
    status: PUBLICLY_REPORTED
  - id: "strength-training"
    name: "Strength Training"
    description: "Strength training using reported resistance machines and free weights."
    category: "strength"
    image_opportunity: "Training-floor or free-weight image from the operator-approved photo set."
    source: "Primary_Anchor imagery and service listings summarized in source report"
    status: PUBLICLY_REPORTED
  - id: "cardio-workouts"
    name: "Cardio Workouts"
    description: "Cardio workouts are listed; exact cardio-machine brands and inventory are not confirmed."
    category: "conditioning"
    image_opportunity: "Cardio-equipment image from the operator-approved photo set."
    source: "Primary_Anchor/service listings summarized in source report"
    status: PUBLICLY_REPORTED
  - id: "weight-loss-coaching"
    name: "Weight Loss Coaching"
    description: "Listed service. Avoid quantitative outcomes or physiological promises unless separately substantiated and approved."
    category: "personal"
    image_opportunity: "Coach consultation or general training image from the operator-approved photo set; no transformation imagery without consent."
    source: "Primary_Anchor/service listings summarized in source report"
    status: PUBLICLY_REPORTED
  - id: "nutrition-guidance"
    name: "Nutrition Guidance / Diet Plans"
    description: "Customized diet plans are reported in the source material; provider qualifications and scope require confirmation."
    category: "other"
    image_opportunity: "Operator-approved consultation image, only if this service and image are confirmed."
    source: "Primary_Anchor and public listing summaries in source report"
    status: PUBLICLY_REPORTED
  - id: "hiit"
    name: "HIIT"
    description: "HIIT is reported in service listings; schedule and delivery format are not supplied."
    category: "conditioning"
    image_opportunity: "HIIT training image from the operator-approved photo set."
    source: "Third-party service listing(s) summarized in source report"
    status: PUBLICLY_REPORTED
  - id: "kickboxing"
    name: "Kickboxing"
    description: "Kickboxing is reported in service listings; class schedule and instructor details are not supplied."
    category: "martial arts"
    image_opportunity: "Kickboxing / martial-arts action image from the operator-approved photo set."
    source: "Third-party service listing(s) summarized in source report"
    status: PUBLICLY_REPORTED
  - id: "aerobics"
    name: "Aerobics"
    description: "Listed in the report as a public program; owner confirmation is required."
    category: "group"
    image_opportunity: "Group aerobics image from the operator-approved photo set, if the program is confirmed."
    source: "Third-party service listing(s) summarized in source report"
    status: PUBLICLY_REPORTED
  - id: "online-classes"
    name: "Online Classes"
    description: "Online classes are listed in the source report; availability and format require owner confirmation."
    category: "other"
    image_opportunity: "Operator-approved remote-coaching image, if this program is confirmed."
    source: "Primary_Anchor/service listings as summarized in source report"
    status: PUBLICLY_REPORTED
```

## 7. WHY_CHOOSE_US

```yaml
WHY_CHOOSE_US:
  - title: "Reported 24-hour access"
    description: "Public business information lists the gym as open 24 hours every day; actual access/staffing conditions need owner confirmation."
    basis: "Reported daily hours, with a documented FITPASS hours discrepancy."
    source: "Primary_Anchor, APTS Health and LyfSkills as summarized in source report; FITPASS review source 17"
    status: CONFLICTING_SOURCES
  - title: "Artificial turf area"
    description: "Public reviews and the source anchor report an artificial green grass/turf area."
    basis: "Specific physical feature described in source material."
    source: "Primary_Anchor and public reviews summarized in source report; source 9"
    status: PUBLICLY_REPORTED
  - title: "Variety of training equipment"
    description: "Source imagery and reviews report resistance machines and free weights; exact brands and full inventory are not confirmed."
    basis: "Public review language and visual evidence described in the source report."
    source: "Primary_Anchor imagery and public reviews summarized in source report"
    status: PUBLICLY_REPORTED
  - title: "Personal training listed"
    description: "Personal training is listed as a service; trainer roster and credentials need confirmation."
    basis: "Listed service."
    source: "Primary_Anchor and source report service table"
    status: PUBLICLY_REPORTED
  - title: "Trial offer reported"
    description: "Instagram bio is quoted as advertising up to one week of free training sessions; confirm current availability and full terms before publishing."
    basis: "Reported Instagram bio wording."
    source: "Primary_Anchor, as quoted in source report"
    status: PUBLICLY_REPORTED
```

## 8. REVIEWS

```yaml
REVIEWS:
  google_rating:
    value: 4.6
    source: "Primary_Anchor; source report states checked October 14, 2026"
    status: PUBLICLY_REPORTED
  google_review_count:
    value: 181
    source: "Primary_Anchor; source report states checked October 14, 2026"
    status: PUBLICLY_REPORTED
  google_profile_url:
    value: null
    source: "Report says profile URL was inferred/extracted via anchor coordinates but does not provide the exact URL"
    status: NOT_FOUND
  rating_read_on:
    value: "October 14, 2026"
    source: "Source report"
    status: PUBLICLY_REPORTED
  selected_reviews:
    - quote: "Gym is marvelous with huge space, a number of machines for each and every body part. Thanks for adding a bunch of very experienced and helpful trainers. The open space with artificial green grass is an added attraction which compels one to be regular."
      attribution: "Verified Google Reviewer (reviewer name not supplied)"
      source: "Public review quoted in source report; source 9"
      status: PUBLICLY_REPORTED
    - quote: "I recently had the pleasure of training at Shape and strength Gym under the guidance of excellent trainers."
      attribution: "Verified Reviewer (platform/name not supplied in the quote)"
      source: "Public review quoted in source report; source 9"
      status: PUBLICLY_REPORTED
    - quote: "gym was closed but fitpass shows open my times wasted"
      attribution: "Yogesh Shukla, FITPASS review, as reported in source dossier"
      source: "FITPASS listing, source 17"
      status: PUBLICLY_REPORTED
  sentiment_summary:
    value: "The report synthesizes positive themes around spaciousness, equipment variety, trainer helpfulness, and cleanliness/welcoming atmosphere; one reported FITPASS complaint concerns a mismatch between listed hours and an actual visit."
    source: "Thematic analysis of public reviews in source report"
    status: INFERRED
  secondary_ratings:
    - platform: "LyfSkills"
      rating: 4.7
      review_count: 181
      source: "Source report, source 4"
      status: PUBLICLY_REPORTED
    - platform: "FITPASS"
      rating: 4.6
      review_count: 40
      source: "Source report, source 17"
      status: PUBLICLY_REPORTED
```

## 9. PRICING

```yaml
PRICING:
  currency:
    value: "INR"
    source: "Source report expresses listed price in Indian rupees"
    status: PUBLICLY_REPORTED
  publishes_pricing_publicly:
    value: true
    source: "Source report says aggregator platforms disclose a starting one-month membership price"
    status: PUBLICLY_REPORTED
  plans:
    daily:
      value: null
      source: "Not found in source report"
      status: NOT_FOUND
    weekly:
      value: null
      source: "Not found in source report"
      status: NOT_FOUND
    monthly:
      value: "Starting at ₹3,000 per month"
      source: "Primary_Anchor, as summarized in source report"
      status: PUBLICLY_REPORTED
    quarterly:
      value: null
      source: "Source report says exact quarterly pricing was not found"
      status: NOT_FOUND
    half_year:
      value: null
      source: "Source report says exact half-yearly pricing was not found"
      status: NOT_FOUND
    annual:
      value: null
      source: "Source report says exact annual pricing was not found"
      status: NOT_FOUND
    special_training:
      value: null
      source: "No exact personal-training or special-program prices supplied"
      status: NOT_FOUND
  other_listed_prices:
    value: null
    source: "No other exact gym-specific prices supplied"
    status: NOT_FOUND
  admission_or_joining_fee:
    value: null
    source: "Source report explicitly lists joining fees as needing confirmation"
    status: NOT_FOUND
  trial_offer:
    value: "Instagram bio reportedly says 'Get up to 1 week FREE training sessions!'"
    source: "Primary_Anchor, as quoted in source report"
    status: PUBLICLY_REPORTED
  note:
    value: "Do not infer or estimate any other membership price from competitors or market averages."
    source: "Normalization rule based on the source report's incomplete price matrix"
    status: INFERRED
```

## 10. INSTAGRAM

```yaml
INSTAGRAM:
  profile_url:
    value: null
    source: "Exact profile URL not printed in source report"
    status: NOT_FOUND
  handle:
    value: "@shapeandstrength"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  follower_count:
    value: null
    source: "No follower count supplied"
    status: NOT_FOUND
  bio_text_reported:
    value: "Join the fitness challenge to create the best of you! Get up to 1 week FREE training sessions! Call us today! Nutrition and Fitness for all ages."
    source: "Primary_Anchor, as quoted in source report"
    status: PUBLICLY_REPORTED
  items:
    - url:
        value: "https://www.instagram.com/p/BuCiL4soWiK/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Strength training session inside the gym"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL

    - url:
        value: "https://www.instagram.com/p/Bukbg6khjRm/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Gym interior and equipment walkthrough"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL

 - url:
        value: "https://www.instagram.com/p/BuXes5xBsui/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Gym interior and equipment walkthrough"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL

  items_note: "No individual Reel URLs were supplied in the report. Do not invent Reel URLs."
```

## 11. FAQ

```yaml
FAQ:
  - question: "Where is Shape & Strength Gym located?"
    answer: "The source report identifies the location as the 5th Floor, SVR Towers, Srinagar Colony Main Road, opposite Axis Bank, Pratap Nagar, Punjagutta, Hyderabad, Telangana 500082. Confirm the final address wording with management."
    topic: "location"
    source: "Primary_Anchor, as transcribed in source report"
    status: PUBLICLY_REPORTED
  - question: "Is the gym open 24 hours?"
    answer: "Public business information lists the gym as open 24 hours every day. A FITPASS review reported arriving when the app showed the gym as open but finding it closed; confirm staffed hours and member-access arrangements before publishing an unconditional promise."
    topic: "opening hours"
    source: "Primary_Anchor, APTS Health, LyfSkills and FITPASS review as summarized in source report"
    status: CONFLICTING_SOURCES
  - question: "What training services are listed?"
    answer: "Public information lists personal training, strength training, cardio workouts and weight-loss coaching. HIIT, kickboxing, aerobics, online classes and nutrition/diet plans are also reported in the dossier but require owner confirmation."
    topic: "programs"
    source: "Primary_Anchor and third-party listings summarized in source report"
    status: PUBLICLY_REPORTED
  - question: "Does the gym provide diet plans?"
    answer: "The source report says nutrition guidance/diet plans are publicly listed. Confirm current availability and the service provider's qualifications and scope with management."
    topic: "nutrition"
    source: "Primary_Anchor and public listings summarized in source report"
    status: PUBLICLY_REPORTED
  - question: "Is parking available?"
    answer: "The source report says customer parking is reported, but management should confirm the current arrangements before publication."
    topic: "parking"
    source: "Source report; source 1"
    status: PUBLICLY_REPORTED
  - question: "Are showers and lockers available?"
    answer: null
    topic: "amenities"
    source: "Source report identifies shower and locker availability as unresolved"
    status: NOT_FOUND
  - question: "Does the gym have an official website?"
    answer: "The source report did not find an official website for the Hyderabad gym and states the GBP was not linked to a website. The similarly named shapeandstrength.com site belongs to a Kolkata clinical business and must not be presented as this gym's website."
    topic: "website"
    source: "Website discovery and disambiguation sections in source report"
    status: PUBLICLY_REPORTED
```

## 12. SEO

```yaml
SEO:
  gym_name:
    value: "Shape & Strength Gym"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  locality:
    value: "Srinagar Colony Main Road / Punjagutta"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  city:
    value: "Hyderabad"
    source: "Primary_Anchor"
    status: VERIFIED_OFFICIAL
  natural_location_wording:
    value: "Shape & Strength Gym in Srinagar Colony, Punjagutta, Hyderabad"
    source: "Normalized from reported name and address"
    status: INFERRED
  title_candidate:
    value: "Shape & Strength Gym | 24-Hour Gym in Punjagutta, Hyderabad"
    source: "Derived from reported business name, locality, and hours; hours discrepancy remains unresolved"
    status: INFERRED
  description_candidate:
    value: "Explore Shape & Strength Gym in Srinagar Colony, Punjagutta, Hyderabad. Public listings report 24-hour access, strength training, cardio and personal training. Confirm access arrangements and current services with the gym."
    source: "Derived from source-reported identity, hours, and services"
    status: INFERRED
  alt_text_context:
    value: "If operator-approved photos are collected, describe only visible, confirmed subjects such as the gym exterior, strength equipment, free weights, and artificial turf area. Do not use stock images as if they depict this location."
    source: "Source report's described visual evidence and asset gaps"
    status: INFERRED
  disambiguation:
    value: "Clearly associate this gym with SVR Towers, Srinagar Colony Main Road, Punjagutta, Hyderabad. Do not use shapeandstrength.com as its domain; the report identifies that domain with a separate Kolkata clinical business."
    source: "Source report website/domain collision analysis"
    status: PUBLICLY_REPORTED
```

## 13. ASSET_MANIFEST

```yaml
ASSET_MANIFEST:
  logo:
    value: null
    source: "No standalone logo file or direct asset URL supplied in the report"
    usable: "unknown"
    status: NOT_FOUND
  candidates:
    - role: "about_interior"
      url: null
      subject: "Authentic wide interior photo of the actual gym; collect manually from the operator."
      source: "Operator to collect manually; source report recommends proprietary photography"
      usable: "unknown"
      status: NOT_FOUND
    - role: "why_choose_anchor"
      url: null
      subject: "Authentic artificial green grass/turf area at the gym."
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "gallery"
      url: null
      subject: "Operator-approved photos of strength machines, free weights, cardio equipment and exterior signage."
      source: "Operator to collect manually; source report recommends high-resolution proprietary photography"
      usable: "unknown"
      status: NOT_FOUND
    - role: "pricing_background"
      url: null
      subject: "Authentic gym image suitable for a pricing section, subject to operator approval."
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "faq_background"
      url: null
      subject: "Authentic gym image suitable for an FAQ section, subject to operator approval."
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "og_image"
      url: null
      subject: "Operator-approved branded social-sharing image; final logo and photography are needed."
      source: "Operator to supply approved brand assets"
      usable: "unknown"
      status: NOT_FOUND
```

## 14. SOURCE_LOG

```yaml
SOURCE_LOG:
  - id: "primary_anchor"
    priority: 1
    type: "Primary Google Business Profile screenshot/anchor supplied to Gemini report"
    url: null
    accessed: "October 14, 2026 (report date)"
    fields_supplied:
      [
        "business name",
        "category",
        "location/address",
        "primary phone",
        "Instagram handle/bio",
        "reported hours",
        "services",
        "reported rating/review count",
        "starting monthly price",
      ]
    note: "Underlying screenshot is referenced in the dossier but its direct URL is not provided."
  - id: "idbf"
    priority: 5
    type: "Third-party business directory"
    url: "https://hyderabad.idbf.in/4181864/shape-strength-gym"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied:
      ["listing context", "reported branch/contact/facility information"]
  - id: "nears"
    priority: 6
    type: "Third-party directory"
    url: "https://nears.me/highly-rated-shape-strength-gym-hyderabad-ts/"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied: ["secondary listing context"]
  - id: "kolkata_namesake"
    priority: 2
    type: "Official website for a different, Kolkata-based clinical business with a similar name"
    url: "https://shapeandstrength.com/gym/"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied:
      [
        "evidence of brand/domain collision; not a source for Hyderabad gym services",
      ]
    exclusion_note: "Do not use as the Hyderabad gym's website or source of its services."
  - id: "lyfskills_listing"
    priority: 5
    type: "Third-party gym listing"
    url: "https://discover.lyfskills.com/gyms/listing/6670"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied: ["reported services", "hours", "rating/review count"]
  - id: "pulse8"
    priority: 6
    type: "Competitor website; contextual only"
    url: "https://pulse8gym.com/srinagar-colony/"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied:
      ["competitor context only; not a source for Shape & Strength Gym facts"]
  - id: "justdial"
    priority: 6
    type: "Third-party local directory"
    url: "https://www.justdial.com/Hyderabad/Gyms-in-Srinagar-Colony-Yousufguda/nct-11575244/page-5"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied:
      ["local competitive context; not a primary source for this gym"]
  - id: "cultfit"
    priority: 6
    type: "Competitor/locality listing"
    url: "https://www.cult.fit/fitness/locality/hyderabad/gyms-in-srinagar-colony/260/a"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied: ["local competitive context only"]
  - id: "magicpin_kolkata"
    priority: 7
    type: "Third-party listing for the Kolkata namesake"
    url: "https://magicpin.in/Manoharpukur/Manoharpukur/Healthcare/Shape-And-Strength-physiotherapist-%7C-Physiotherapy-Centre-In-Kolkata-%7C-Fitness-%7C-Weight-Loss-Service/store/3050750"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied:
      [
        "evidence of cross-entity metadata contamination; not a source for Hyderabad gym services",
      ]
  - id: "pagenearby_reviews"
    priority: 6
    type: "Third-party directory/review source"
    url: "https://pagenearby.com/hyderabad/begumpet/shape-strength-gym/"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied: ["quoted public review themes and facility descriptions"]
  - id: "apts_health"
    priority: 5
    type: "Third-party health/gym directory"
    url: "https://www.aptshealth.in/central-hyderabad/shape-strength-gym"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied: ["reported hours and listing context"]
  - id: "fitpass"
    priority: 5
    type: "Third-party fitness aggregator"
    url: "https://fitpass.co.in/studio/shape-and-strength-gym-srinagar-colony-punjagutta"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied:
      [
        "reported booking/integration",
        "service listing",
        "rating/count",
        "trainer review",
        "hours discrepancy review",
      ]
  - id: "workindia"
    priority: 7
    type: "Third-party job listing"
    url: "https://www.workindia.in/jobs/gym_trainer-srinagar_colony-hyderabad-7677770/"
    accessed: "October 14, 2026 (source report date; individual access timestamp not supplied)"
    fields_supplied:
      ["trainer salary context only; not suitable for website content"]
  - id: "other_cited_sources"
    priority: 6
    type: "Third-party directories, competitor listings and commercial property listings"
    url: null
    accessed: "October 14, 2026 (source report date; individual access timestamps not supplied)"
    fields_supplied:
      ["market/competitor context only; not normalized as gym-specific claims"]
    note: "The source report also cites Nears, APTS Health, MagicBricks, OnePass, Cult.fit and additional directory pages. URLs are preserved above where available and relevant to normalized fields."
```

## 15. VERIFICATION_NOTES

### conflicts

```yaml
conflicts:
  - field: "CONTACT.website / BUSINESS web identity"
    values:
      - value: "Hyderabad Shape & Strength Gym: website not found; GBP reportedly not linked"
        source: "Primary_Anchor and website-discovery section of source report"
      - value: "shapeandstrength.com exists but belongs to a Kolkata physiotherapy/clinical business"
        source: "https://shapeandstrength.com/gym/"
    note: "Do not use shapeandstrength.com as the Hyderabad gym's website. The report describes third-party metadata contamination between distinct businesses with similar names. Obtain and confirm a separate official domain."
    status: CONFLICTING_SOURCES
  - field: "HOURS.staffed_access"
    values:
      - value: "Open 24 hours, Monday through Sunday"
        source: "Primary_Anchor; APTS Health and LyfSkills as summarized in source report"
      - value: "A FITPASS reviewer reported the gym was closed when the app showed it as open"
        source: "https://fitpass.co.in/studio/shape-and-strength-gym-srinagar-colony-punjagutta"
    note: "Owner must clarify staffed hours, access-control arrangements, holiday exceptions, and whether 24-hour access applies to all members. Do not imply guaranteed staffed service at every hour until confirmed."
    status: CONFLICTING_SOURCES
  - field: "CONTACT.phone.secondary_phone"
    values:
      - value: "+91 91600 69788"
        source: "Primary_Anchor"
      - value: "+91 94920 30062"
        source: "Secondary number in source report; exact originating evidence is not specified"
    note: "The report presents one number as primary and the other as secondary. Confirm that both are current and approved for publication."
    status: CONFLICTING_SOURCES
  - field: "PROGRAMS.physiotherapy / clinical services"
    values:
      - value: "Some third-party aggregator snippets associate physiotherapy/clinical services with the name"
        source: "FITPASS/Magicpin cross-entity references described in source report"
      - value: "shapeandstrength.com identifies a Kolkata clinical business; the Hyderabad entity is described as a gym at SVR Towers"
        source: "https://shapeandstrength.com/gym/ and Primary_Anchor"
    note: "Do not attribute physiotherapy, pelvic-floor therapy, clinical dietetics or other medical services to the Hyderabad gym. The dossier treats these as cross-entity contamination."
    status: CONFLICTING_SOURCES
```

### not_found

```yaml
not_found:
  - field: "BUSINESS.tagline"
    note: "No distinct tagline supplied; do not convert the Instagram bio into a formal tagline."
    sources_searched: "Primary_Anchor and report's public-footprint discovery"
    status: NOT_FOUND
  - field: "BUSINESS.year_established"
    note: "Founding year and founder names not verified."
    sources_searched: "Public-record and digital-footprint search described in report"
    status: NOT_FOUND
  - field: "CONTACT.email"
    note: "No official business email found."
    sources_searched: "Website and public-directory discovery described in report"
    status: NOT_FOUND
  - field: "CONTACT.whatsapp"
    note: "WhatsApp number not verified."
    sources_searched: "Source report contact analysis"
    status: NOT_FOUND
  - field: "CONTACT.website"
    note: "No official Hyderabad gym website found; GBP reportedly not linked to a website."
    sources_searched: "Domain permutations, social bios, directories and aggregator footprint described in report"
    status: NOT_FOUND
  - field: "CONTACT.instagram_url"
    note: "Handle is reported but exact profile URL was not included."
    sources_searched: "Primary_Anchor"
    status: NOT_FOUND
  - field: "CONTACT.facebook_url / CONTACT.youtube_url"
    note: "No official profile found in report."
    sources_searched: "Social discovery described in report"
    status: NOT_FOUND
  - field: "LOCATION.map_url / latitude / longitude"
    note: "Exact map URL and numeric coordinates are not printed in the dossier."
    sources_searched: "Primary_Anchor address/coordinate description"
    status: NOT_FOUND
  - field: "HOURS.staffed_hours_vs_member_access"
    note: "24-hour listings conflict with a FITPASS complaint about a closed gym."
    sources_searched: "Primary_Anchor, APTS Health, LyfSkills and FITPASS"
    status: NOT_FOUND
  - field: "ABOUT.story"
    note: "No verified founding story, founder message or formal mission/vision."
    sources_searched: "Public digital footprint described in report"
    status: NOT_FOUND
  - field: "ABOUT.attributes.air-conditioning"
    note: "Air conditioning was inferred by the report from review language, not explicitly confirmed."
    sources_searched: "Public reviews summarized in report"
    status: NOT_FOUND
  - field: "ABOUT.attributes.showers-lockers"
    note: "Shower and locker availability unresolved."
    sources_searched: "Source report's website content inventory and missing-information list"
    status: NOT_FOUND
  - field: "PROGRAMS.class_schedules"
    note: "No exact class timings, prerequisites or recurring schedule supplied."
    sources_searched: "Source report service inventory"
    status: NOT_FOUND
  - field: "PRICING.plans.daily / weekly / quarterly / half_year / annual / special_training"
    note: "Only a publicly reported starting monthly price of ₹3,000 and a reported trial offer are present; do not estimate other prices."
    sources_searched: "Pricing section and missing-information section of source report"
    status: NOT_FOUND
  - field: "PRICING.admission_or_joining_fee"
    note: "Joining fee not found."
    sources_searched: "Source report"
    status: NOT_FOUND
  - field: "INSTAGRAM.follower_count"
    note: "No follower count supplied."
    sources_searched: "Source report social section"
    status: NOT_FOUND
  - field: "INSTAGRAM.items"
    note: "No individual Reel URLs supplied."
    sources_searched: "Source report social section"
    status: NOT_FOUND
  - field: "REVIEWS.google_profile_url"
    note: "Exact Google profile URL not supplied."
    sources_searched: "Source report review section"
    status: NOT_FOUND
  - field: "TRAINERS.roster"
    note: "Only Gundarapu Anand Kumar is named in the report; credentials are not verified and remaining trainer identities are missing."
    sources_searched: "FITPASS reviews and public review summaries in source report"
    status: NOT_FOUND
  - field: "TRANSFORMATION_DATA"
    note: "No verified quantitative transformation cases, before/after metrics or consented member stories found."
    sources_searched: "Public digital channels described in source report"
    status: NOT_FOUND
  - field: "ASSET_MANIFEST.logo / candidates"
    note: "No direct logo or asset URLs supplied. Collect authentic high-resolution photos and approved logo from operator."
    sources_searched: "Supplied PDF"
    status: NOT_FOUND
```

### publicly_reported_only

- field: `BUSINESS.description`  
  note: "Synthesized from public listings and reviews; owner confirmation required."
- field: `BUSINESS.branch_count`  
  note: "Report found one location, but owner should confirm there are no additional locations."
- field: `CONTACT.secondary_phone`  
  note: "Publicly reported in the dossier but its exact primary-source evidence is unclear; owner verification required."
- field: `CONTACT.booking_url`  
  note: "FITPASS listing/integration is third-party, not an owned booking URL."
- field: `HOURS.*`  
  note: "Public sources list 24-hour opening; owner must clarify staffed hours and member-access conditions."
- field: `ABOUT.*`  
  note: "Descriptions, zones and amenities include third-party reports or inference; owner verification required."
- field: `PROGRAMS.*`  
  note: "Program list is drawn from the primary anchor and/or public listings; confirm each current service."
- field: `WHY_CHOOSE_US.*`  
  note: "Differentiators are grounded in reported services/reviews but require owner approval for final marketing use."
- field: `REVIEWS.selected_reviews`  
  note: "Quoted from public review sources as reproduced in the report; confirm quote accuracy, attribution, and permission/usage requirements before prominent marketing use."
- field: `REVIEWS.google_rating`  
  note: "Rating and count reflect the report's October 14, 2026 reading and may change."
- field: `PRICING.plans.monthly`  
  note: "Starting ₹3,000/month is publicly reported, not owner-confirmed; reconfirm before publication."
- field: `INSTAGRAM.bio_text_reported`  
  note: "Bio text is reproduced from the report and may be outdated; confirm current offer terms."
- field: `FAQ.*`  
  note: "FAQ answers derived from public research; owner confirmation required before launch."

### owner_questions

1. Confirm the exact public-facing business name and any approved tagline.
2. Confirm the full address wording, especially the 5th-floor reference, SVR Towers, locality names, and landmark.
3. Confirm whether both phone numbers are current and which should be the primary contact.
4. Is either number an official WhatsApp Business number? If so, confirm the exact number and permission to publish it.
5. What official business email should be published?
6. What domain will the Hyderabad gym use? Confirm that it is owned/controlled by this gym and not the Kolkata namesake.
7. Confirm whether the gym is open to members 24 hours every day, whether staff are present at all hours, and whether access restrictions/holiday exceptions apply.
8. Confirm current availability of each listed program: personal training, strength training, cardio, weight-loss coaching, nutrition/diet plans, HIIT, kickboxing, aerobics and online classes.
9. Provide exact class schedules, prerequisites and instructor details for any group programs.
10. Confirm the current monthly membership price and provide exact daily, weekly, quarterly, half-yearly, annual, special-training and joining-fee prices, if offered.
11. Confirm whether the reported up-to-one-week free training offer is still active and provide the exact terms. Do not publish the offer until confirmed.
12. Confirm the current official Instagram account/profile URL and whether any official Facebook or YouTube profiles exist.
13. Supply approved Instagram Reel URLs, if they should be embedded; none were supplied in the report.
14. Confirm the availability of parking, restrooms, showers, lockers, air conditioning and any other amenities.
15. Confirm the complete trainer roster, role titles, biographies, qualifications/certifications and consent to publish names/photos. The report names Gundarapu Anand Kumar but says credentials are not verified.
16. Confirm the current Google rating/review count and provide the exact Google Business Profile URL.
17. Supply the final logo and high-resolution, gym-owned/approved photos of the exterior/signage, turf area, equipment and training floor.
18. Provide any transformation case studies only with verifiable measurements, dates, supporting records and explicit written participant consent.
19. Confirm whether nutrition guidance is currently provided, by whom, and within what scope; do not imply clinical or medical services without evidence.
20. Confirm whether there are any additional branches or a formal founding story/year.
21. Review the reported FITPASS hours complaint and clarify the procedure for communicating temporary closures or access limitations.

## 16. EXCLUDED_BY_CONTRACT

```yaml
EXCLUDED_BY_CONTRACT:
  - item: "Transformations"
    value: "No verified, consented quantitative transformation cases were found. Do not create placeholder statistics or before/after claims as facts."
    status: NOT_FOUND
  - item: "Hero copy and artwork"
    value: "Factory/template layer; do not populate with invented gym-specific claims."
    status: EXCLUDED
  - item: "Training Intelligence"
    value: "Factory/template layer; do not include in this research package."
    status: EXCLUDED
  - item: "Between Sessions educational content"
    value: "Factory/template layer; do not include in this research package."
    status: EXCLUDED
  - item: "Discount percentages and promotional terms"
    value: "No discount percentage or complete promotion terms verified. The source reports an Instagram trial offer, which must be owner-confirmed before use."
    status: EXCLUDED
  - item: "Unsupported health/nutrition/physiological claims"
    value: "Do not claim weight-loss results, injury prevention, posture correction, calorie expenditure, medical benefits or physiological outcomes without substantiation and owner approval."
    status: EXCLUDED
  - item: "Clinical services associated with Kolkata namesake"
    value: "Physiotherapy, pelvic-floor therapy, clinical dietetics and related medical claims must not be attributed to the Hyderabad gym based on the source report's documented entity collision."
    status: EXCLUDED
  - item: "Generic factory section labels/headings"
    value: "Template content is not gym-specific research and should remain in the factory layer."
    status: EXCLUDED
```

## Source report caveats

- The report identifies `Primary_Anchor` as the supplied GBP screenshot/anchor, but the screenshot itself is not separately embedded as a file here and no direct GBP URL is provided.
- The source report contains both strong factual claims and interpretive narrative. This package retains only the latter as `INFERRED` or `PUBLICLY_REPORTED` where appropriate.
- Public ratings, review counts, listings, prices and social-bio wording are time-sensitive and should be reconfirmed before final-client production.
- Do not use `https://shapeandstrength.com/gym/` as the Hyderabad gym's website. The source report identifies it as the Kolkata namesake's website.
- No new web research was performed for this normalization.
