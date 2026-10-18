import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * SHAPE & STRENGTH GYM — real gym photography supplied by the operator in
 * public/assets/gallery/. Files are referenced by their supplied filenames.
 *
 * ALT TEXT describes only what is visible in each frame.
 *
 * NOT USED (left in the folder on purpose):
 *   - ...fitness-centres-hea70uug6f.jpg is a promotional graphic (stock
 *     models, a "Be stronger then your excuses" slogan and a phone number,
 *     88007 64892, that does not match the verified business phone). It must
 *     not appear as a gym photo.
 *
 * RIGHTS NOTE: two photographs (the entrance signage and the chest-press
 * machine) carry a "Jd" (Justdial) watermark, so they came from a
 * third-party listing. Replace them with owner-supplied originals before
 * final-client production.
 *
 * No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery";
const P = "shape-and-strength-cardio-gym-sri-nagar-colony-hyderabad";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}/shape-and-strength-punjagutta-about-gym-interior.jpg`,
    alt: "Wide view of the training floor at Shape & Strength Gym with strength machines, a Precor cardio machine and a rubber-matted weights area",
  },
  {
    src: `${GALLERY}/${P}-fitness-centres-ftgmgs9m61.jpg`,
    alt: "Selectorised strength machines and plate-loaded racks on the wooden-effect floor at Shape & Strength Gym",
  },
  {
    src: `${GALLERY}/${P}-fitness-centres-lgup97hpd1.jpg`,
    alt: "Cable machine and plate-loaded row machine in front of a mirrored wall at Shape & Strength Gym",
  },
  {
    src: `${GALLERY}/${P}-weight-loss-centres-twcuu.jpg`,
    alt: "Plate-loaded chest press machine on the training floor at Shape & Strength Gym",
  },
  {
    src: `${GALLERY}/${P}-weight-loss-centres-he6xu.jpg`,
    alt: "Smith machine with colored weight plates, barbells and an adjustable bench at Shape & Strength Gym",
  },
  {
    src: `${GALLERY}/${P}-fitness-centres-kdvos638n5.jpg`,
    alt: "Low view across the rubber-matted weights area at Shape & Strength Gym with plate-loaded racks and mirrors",
  },
  {
    src: `${GALLERY}/${P}-fitness-centres-kdu4gwz3fd.jpg`,
    alt: "Cardio area at Shape & Strength Gym with treadmills and elliptical trainers beside the windows",
  },
  {
    src: `${GALLERY}/${P}-fitness-centres-vpf9hgppto.jpg`,
    alt: "Artificial turf area at Shape & Strength Gym with hurdles, medicine balls, a weighted bag and a tractor tyre",
  },
  {
    src: `${GALLERY}/${P}-fitness-centres-c3g6tzy1n6.jpg`,
    alt: "Person sitting on the artificial turf at Shape & Strength Gym with a kettlebell, a sledgehammer and red boxing gloves",
  },
  {
    src: `${GALLERY}/${P}-fitness-centres-v45hlnwakt.jpg`,
    alt: "Welcome signage at the Shape & Strength Gym entrance listing cardio, CrossFit, kickboxing, weight training and personal training",
  },
  {
    src: `${GALLERY}/shape-and-strength-cardio-gym-hyderabad-02jow.jpg`,
    alt: "Shape & Strength logo on the glass wall at the gym, with the turf area visible behind it",
  },
];
