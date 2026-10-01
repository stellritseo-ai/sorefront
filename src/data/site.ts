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
  { label: "Free Estimate", href: "#contact" },
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
    desc: "100% focused on commercial glass doors, storefronts, and business facilities — never residential.",
    tag: "B2B Exclusivity",
    stat: "100%",
    statLabel: "Commercial Focus",
    code: "B2B EXCLUSIVE",
  },
  {
    n: "02",
    title: "24/7 Emergency Response",
    desc: "Immediate mobile glazier mobilization for break-ins, vehicle impacts, and security board-ups.",
    tag: "Rapid Mobilization",
    stat: "< 60 min",
    statLabel: "Target Dispatch",
    code: "24/7 DISPATCH",
  },
  {
    n: "03",
    title: "Licensed · Insured · Bonded",
    desc: "Comprehensive Texas commercial liability coverage, workman's comp, and surety bonding.",
    tag: "Total Protection",
    stat: "$2,000,000",
    statLabel: "Liability Policy",
    code: "TEXAS VERIFIED",
  },
  {
    n: "04",
    title: "5+ Years DFW Glazing",
    desc: "Extensive track record engineering heavy tempered glass, pivot hinges, and curtain wall packages.",
    tag: "Proven Craft",
    stat: "5+ Yrs",
    statLabel: "DFW Track Record",
    code: "MASTER GLAZIERS",
  },
  {
    n: "05",
    title: "50-Mile DFW Service Radius",
    desc: "Fully equipped mobile glazier units serving Dallas, Plano, Fort Worth, Irving, Arlington, and surrounding cities.",
    tag: "Metro Coverage",
    stat: "50 Mi",
    statLabel: "Dispatched Fleet",
    code: "NORTH TEXAS FLEET",
  },
  {
    n: "06",
    title: "Transparent Free Estimates",
    desc: "Thorough on-site assessment, code evaluation, and itemized bids before any work commences.",
    tag: "Zero Obligation",
    stat: "$0",
    statLabel: "Upfront Assessment",
    code: "ITEMIZED BIDS",
  },
  {
    n: "07",
    title: "Turnkey Commercial Hardware",
    desc: "Heavy-duty pivots, hydraulic door closers, continuous gear hinges & panic exit devices.",
    tag: "Grade 1 Hardware",
    stat: "1M+ Ops",
    statLabel: "Tested Closers",
    code: "ANSI GRADE 1",
  },
  {
    n: "08",
    title: "IBC & ADA Code Compliant",
    desc: "Strict adherence to Texas International Building Code, egress requirements & safety standards.",
    tag: "Texas Code",
    stat: "100%",
    statLabel: "Code Compliant",
    code: "TEXAS IBC & ADA",
  },
];

export interface ProcessStep {
  n: string;
  sectionLabel: string;
  title: string;
  desc: string;
  accentHex: string;
  glowColor: string;
  color: string;
}

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    sectionLabel: "1 Section",
    title: "Consultation",
    desc: "Understand commercial property layout, foot traffic demands, and architectural scope.",
    accentHex: "#E11D48",
    glowColor: "rgba(225, 29, 72, 0.35)",
    color: "from-rose-500 to-red-600",
  },
  {
    n: "02",
    sectionLabel: "2 Section",
    title: "Site Assessment",
    desc: "Millimeter laser measurement, framing deflection audit, and hydraulic closer testing.",
    accentHex: "#0D9488",
    glowColor: "rgba(13, 148, 136, 0.35)",
    color: "from-teal-500 to-emerald-600",
  },
  {
    n: "03",
    sectionLabel: "3 Section",
    title: "Plan & Submittal",
    desc: "Architectural drawings, glass performance specs, and itemized binding cost proposals.",
    accentHex: "#0284C7",
    glowColor: "rgba(2, 132, 199, 0.35)",
    color: "from-blue-500 to-sky-600",
  },
  {
    n: "04",
    sectionLabel: "4 Section",
    title: "Custom Fabrication",
    desc: "Heavy tempered glass cutting, anodized extrusions, and certified hardware assembly.",
    accentHex: "#EA580C",
    glowColor: "rgba(234, 88, 12, 0.35)",
    color: "from-amber-500 to-orange-600",
  },
  {
    n: "05",
    sectionLabel: "5 Section",
    title: "Certified Glazing",
    desc: "OSHA-certified installation, clean jobsite barriers, and structural silicone seals.",
    accentHex: "#0284C7",
    glowColor: "rgba(2, 132, 199, 0.35)",
    color: "from-sky-500 to-blue-600",
  },
  {
    n: "06",
    sectionLabel: "6 Section",
    title: "Final Inspection",
    desc: "40-point walk-through, ADA compliance check, latch tests, and warranty handover.",
    accentHex: "#EAB308",
    glowColor: "rgba(234, 179, 8, 0.35)",
    color: "from-amber-400 to-yellow-500",
  },
];




export const projectCategories = [
  "Storefronts",
  "Office Buildings",
  "Retail",
  "Commercial Entrances",
  "Glass Doors",
  "Glass Windows",
];

export interface CommercialProject {
  id: string;
  cat: string;
  title: string;
  location: string;
  spec: string;
  year: string;
  imgKey: "storefront" | "facade" | "lobby" | "doors" | "windows" | "hardware" | "install" | "emergency";
}

export const projectsData: CommercialProject[] = [
  {
    id: "p1",
    cat: "Storefronts",
    title: "Flagship Retail Storefront Facade",
    location: "Dallas Design District, TX",
    spec: "Flush Glazing · 1/2\" Heavy Tempered Glass · Anodized Framing",
    year: "2024",
    imgKey: "storefront",
  },
  {
    id: "p2",
    cat: "Office Buildings",
    title: "Corporate Curtain Wall & Facade",
    location: "Uptown Dallas, TX",
    spec: "Insulated Solar Control Low-E · Structural Silicone Glazing",
    year: "2024",
    imgKey: "facade",
  },
  {
    id: "p3",
    cat: "Commercial Entrances",
    title: "Executive Lobby Glass Enclosure",
    location: "Plano Commercial Center, TX",
    spec: "Heavy Tempered All-Glass System · Hydraulic In-Floor Closers",
    year: "2024",
    imgKey: "lobby",
  },
  {
    id: "p4",
    cat: "Retail",
    title: "High-Traffic Entrance Doors",
    location: "Preston Hollow, Dallas, TX",
    spec: "Continuous Gear Hinges · Heavy-Duty Panic Exit Hardware",
    year: "2024",
    imgKey: "doors",
  },
  {
    id: "p5",
    cat: "Glass Doors",
    title: "Commercial Pivot Door Hardware Tuning",
    location: "Fort Worth Business District, TX",
    spec: "ANSI Grade 1 Closers · Threshold Leveling & Pivot Alignment",
    year: "2024",
    imgKey: "hardware",
  },
  {
    id: "p6",
    cat: "Glass Windows",
    title: "Thermal Storefront Window Units",
    location: "Irving Technology Park, TX",
    spec: "Texas SHGC Compliant · Dual-Pane Acoustic Insulation",
    year: "2024",
    imgKey: "windows",
  },
  {
    id: "p7",
    cat: "Storefronts",
    title: "Architectural Mullion & Frame Assembly",
    location: "Addison Tech Corridor, TX",
    spec: "Heavy Anodized Extrusions · High-Load Structural Fasteners",
    year: "2024",
    imgKey: "install",
  },
  {
    id: "p8",
    cat: "Commercial Entrances",
    title: "24/7 Mobile Glass Replacement",
    location: "North Dallas Commercial Plaza, TX",
    spec: "Rapid Mobilization Unit · Same-Day Secure Board-Up & Fab",
    year: "2024",
    imgKey: "emergency",
  },
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
