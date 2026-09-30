export const site = {
  name: "Sore Fronts Of Dallas",
  phone: "(469) 360-5805",
  phoneHref: "tel:+14693605805",
  email: "info@Sorefrontsofdallas.com",
  emailHref: "mailto:info@Sorefrontsofdallas.com",
  address: {
    street: "10830 N. Central Expressway Ste. 130",
    city: "Dallas",
    state: "TX",
    zip: "75231",
  },
  serviceRadiusMiles: 50,
  hours: "Mon–Sat: 8:00 AM – 5:00 PM · Sunday: Closed",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  // { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const trustPoints = [
  "Licensed & Bonded",
  "Insured",
  "5+ Years Experience",
  "50-Mile Service Area",
  "24/7 Emergency Service",
  "Free Estimates",
];

export const services = [
  {
    n: "01",
    title: "Commercial Glass Door Installation",
    desc: "New glass entrance doors engineered for daily commercial traffic.",
    img: "doors",
  },
  {
    n: "02",
    title: "Commercial Glass Door Repair",
    desc: "Alignment, closers, pivots and glass panel repair on existing doors.",
    img: "hardware",
  },
  {
    n: "03",
    title: "Storefront Glass Installation",
    desc: "Aluminum storefront systems and full glazing packages.",
    img: "storefront",
  },
  {
    n: "04",
    title: "Storefront Glass Repair",
    desc: "Damaged storefront glass assessed, secured and restored.",
    img: "storefront",
  },
  {
    n: "05",
    title: "Commercial Glass Windows",
    desc: "Window installation and replacement for offices and retail buildings.",
    img: "windows",
  },
  {
    n: "06",
    title: "Emergency Commercial Glass Service",
    desc: "Round-the-clock response for break-ins, impacts and failures.",
    img: "night",
  },
  {
    n: "07",
    title: "Commercial Door Hardware",
    desc: "Closers, locks, panic hardware, hinges and thresholds serviced.",
    img: "hardware",
  },
  {
    n: "08",
    title: "Glass Replacement & Maintenance",
    desc: "Scheduled maintenance and replacement for commercial properties.",
    img: "doors",
  },
] as const;

export const whyUs = [
  {
    n: "01",
    title: "Commercial Specialists",
    desc: "Focused specifically on commercial glass door and window solutions.",
  },
  {
    n: "02",
    title: "24/7 Emergency Response",
    desc: "Commercial glass emergencies can happen outside normal business hours.",
  },
  {
    n: "03",
    title: "Licensed · Insured · Bonded",
    desc: "Professional service with business-ready credentials.",
  },
  {
    n: "04",
    title: "5+ Years Experience",
    desc: "Experienced with commercial glass installations and repairs.",
  },
  {
    n: "05",
    title: "50-Mile Service Area",
    desc: "Serving Dallas and surrounding commercial properties.",
  },
  {
    n: "06",
    title: "Free Estimates",
    desc: "Clear project assessment before work begins.",
  },
];

export const processSteps = [
  { n: "01", title: "Consultation", desc: "Understand the commercial property and project requirements." },
  { n: "02", title: "Site Assessment", desc: "Evaluate the existing glass, doors, frames and hardware." },
  { n: "03", title: "Recommendation", desc: "Provide the appropriate commercial solution and estimate." },
  { n: "04", title: "Installation / Repair", desc: "Professional execution with attention to detail." },
  { n: "05", title: "Final Inspection", desc: "Review the completed work and ensure everything operates properly." },
];

export const projectCategories = [
  "Storefronts",
  "Office Buildings",
  "Retail",
  "Commercial Entrances",
  "Glass Doors",
  "Glass Windows",
];

/**
 * PLACEHOLDER REVIEWS — intentionally empty.
 * Add verified customer reviews here only. Do not invent reviews or ratings.
 * Shape: { name: string; company?: string; quote: string; rating?: number }
 */
export const reviews: { name: string; company?: string; quote: string; rating?: number }[] = [];

export const faqs = [
  {
    q: "Do you provide commercial glass services only?",
    a: "Yes. Sore Fronts Of Dallas works exclusively with commercial properties — storefronts, offices, retail spaces and other business environments.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Dallas, Texas and commercial properties within a 50-mile radius of the city.",
  },
  {
    q: "Do you offer 24/7 emergency commercial glass service?",
    a: "Yes. Emergency commercial glass service is available 24 hours a day, seven days a week.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. Free estimates are provided for commercial customers before any work begins.",
  },
  {
    q: "Are you licensed, insured and bonded?",
    a: "Yes. We are licensed, insured and bonded for commercial work.",
  },
  {
    q: "What types of commercial glass doors do you repair?",
    a: "We repair aluminum storefront doors, glass entrance doors and commercial door hardware including closers, pivots, locks and panic devices.",
  },
  {
    q: "Do you install commercial storefront glass?",
    a: "Yes. We install storefront glass and aluminum storefront systems for commercial buildings.",
  },
  {
    q: "Do you replace broken commercial glass?",
    a: "Yes. We replace broken or damaged commercial glass in doors, storefronts and windows.",
  },
  {
    q: "How quickly can emergency service be provided?",
    a: "Emergency response times depend on location and conditions. Call (469) 360-5805 and we will confirm availability for your property.",
  },
  {
    q: "Do you work with businesses, offices and retail locations?",
    a: "Yes. We work with businesses, office buildings, retail locations and other commercial properties.",
  },
];

export const serviceOptions = [
  "Commercial Glass Door",
  "Commercial Glass Window",
  "Storefront Glass",
  "Glass Repair",
  "Glass Replacement",
  "Emergency Service",
  "Other",
];
