export interface ProjectItem {
  id: string;
  title: string;
  category:
    | "Storefront Systems"
    | "Commercial Entrances & Doors"
    | "Corporate Curtain Walls"
    | "Architectural Windows"
    | "Hardware & Pivots"
    | "Emergency Restorations";
  location: string;
  clientType: string;
  year: string;
  imageKey:
    | "storefront"
    | "corporateLobby"
    | "facade"
    | "doors"
    | "lobby"
    | "windows"
    | "hardware"
    | "install"
    | "emergency"
    | "ctaStorefront"
    | "aboutDetail"
    | "heroStorefront";
  summary: string;
  specifications: string[];
  hardwareDetails: string;
  compliance: string;
}

export const projectsPageData = {
  hero: {
    eyebrow: "DFW Commercial Glazing Portfolio",
    headline: "Commercial Glass & Storefront Projects Across Dallas–Fort Worth.",
    subheadline:
      "Explore our portfolio of precision architectural glass installations, high-traffic commercial entrance systems, corporate curtain walls, and rapid emergency restorations throughout North Texas.",
    stats: [
      { value: "500+", label: "Commercial Projects Completed", sub: "100% Code Approved" },
      { value: "15+", label: "Years DFW Experience", sub: "Commercial Only" },
      { value: "50-Mile", label: "Regional Service Radius", sub: "Dallas, Collin & Tarrant" },
      { value: "24/7", label: "Emergency Glazing Dispatch", sub: "Rapid Board-Up & Repair" },
    ],
    ctaButtons: {
      estimate: "Request a Free Estimate",
      estimateHref: "/free-estimate",
      call: "Call (469) 360-5805",
      callHref: "tel:+14693605805",
    },
  },
  categories: [
    "All Projects",
    "Storefront Systems",
    "Commercial Entrances & Doors",
    "Corporate Curtain Walls",
    "Architectural Windows",
    "Hardware & Pivots",
    "Emergency Restorations",
  ] as const,
  projects: [
    {
      id: "proj-1",
      title: "Flagship Retail Storefront Facade",
      category: "Storefront Systems",
      location: "Dallas Design District, TX",
      clientType: "Luxury Retail Showroom",
      year: "2024",
      imageKey: "storefront",
      summary:
        "Engineered and installed a complete floor-to-ceiling aluminum storefront package with maximum daylight transmission and structural wind-load resistance.",
      specifications: [
        "1/2\" Heavy Tempered Monolithic Safety Glass",
        "Clear Anodized Architectural Aluminum Framing",
        "High-Performance Weatherseals & Thermal Isolators",
        "Low-Profile ADA Flush Threshold System",
      ],
      hardwareDetails: "Custom concealed push/pull bars with perimeter silicone weather baffles",
      compliance: "Texas IBC Chapter 24 & ADA Accessibility Standard Compliant",
    },
    {
      id: "proj-2",
      title: "Executive Atrium & Lobby Entrance",
      category: "Commercial Entrances & Doors",
      location: "Plano Commercial Center, TX",
      clientType: "Class-A Corporate Headquarters",
      year: "2024",
      imageKey: "corporateLobby",
      summary:
        "Turnkey fabrication and installation of an expansive multi-story structural glass atrium entrance featuring frameless commercial glass doors and architectural fin supports.",
      specifications: [
        "Extra-Clear Low-Iron Structural Glazing System",
        "High-Span Vertical Glass Fin Stiffeners",
        "Heavy-Duty Concealed Floor Closers (ANSI Grade 1)",
        "Precision Brushed Stainless Steel Cladding",
      ],
      hardwareDetails: "Dorma heavy-duty hydraulic floor pivots with 105° hold-open and soft-close control",
      compliance: "Engineered wind-load certification and Texas High-Velocity zone rating",
    },
    {
      id: "proj-3",
      title: "Corporate High-Span Curtain Wall & Facade",
      category: "Corporate Curtain Walls",
      location: "Uptown Dallas, TX",
      clientType: "Multi-Tenant Financial Center",
      year: "2024",
      imageKey: "facade",
      summary:
        "Retrofitted existing multi-level commercial facade with energy-efficient insulated glass units and four-sided structural silicone glazing.",
      specifications: [
        "1\" Insulated Solarban® 60 Solar Control Low-E Glass",
        "Structural Silicone Glazing (SSG) System",
        "Thermally Broken Extruded Aluminum Mullions",
        "Pressure Equalized Internal Rain Screen Weeps",
      ],
      hardwareDetails: "Non-corrosive stainless structural clip anchors and structural silicone seals",
      compliance: "Meets ASHRAE 90.1 energy standards and Texas commercial energy code (IECC)",
    },
    {
      id: "proj-4",
      title: "Commercial Pivot Entrance Door Installation",
      category: "Commercial Entrances & Doors",
      location: "Preston Hollow, Dallas, TX",
      clientType: "Upscale Commercial Boutique",
      year: "2024",
      imageKey: "doors",
      summary:
        "Installed high-traffic aluminum entrance pairs with custom heavy-duty continuous gear hinges and panic hardware for daily tenant and customer safety.",
      specifications: [
        "Medium Stile Heavy Commercial Aluminum Doors",
        "1\" Low-E Safety Insulated Glass Infill",
        "Continuous Geared Aluminum Hinges",
        "Narrow Stile Rim Panic Exit Devices",
      ],
      hardwareDetails: "Grade 1 Panic Hardware with exterior key cylinders and electric strike prep",
      compliance: "Full ADA opening force compliance (calibrated under 5 lbs operating resistance)",
    },
    {
      id: "proj-5",
      title: "Executive Lobby Glass Enclosure",
      category: "Commercial Entrances & Doors",
      location: "Las Colinas Urban Center, Irving, TX",
      clientType: "Corporate Regional Campus",
      year: "2024",
      imageKey: "lobby",
      summary:
        "Full interior and exterior architectural glass partitions creating open-concept conference suites and a secure primary reception vestibule.",
      specifications: [
        "Acoustic Laminated Architectural Glass (STC 39)",
        "Polished Flat Glass Edges with Dry Glazed Channel System",
        "Concealed Locking Ladder Pulls (60\" Overall Height)",
        "Overhead Transom and Glass Sidelite Assemblies",
      ],
      hardwareDetails: "Keyed cylinder floor-bolt locksets with anti-tamper security escutcheons",
      compliance: "Meets Class 1 Fire safety glass codes and emergency egress guidelines",
    },
    {
      id: "proj-6",
      title: "High-Efficiency Acoustic Commercial Windows",
      category: "Architectural Windows",
      location: "Irving Technology Park, TX",
      clientType: "Technology & Research Facility",
      year: "2024",
      imageKey: "windows",
      summary:
        "Fabrication and replacement of fixed commercial ribbon windows to reduce solar heat gain and external highway sound intrusion.",
      specifications: [
        "Dual-Pane Argon Gas Filled Insulated Units",
        "Solar Heat Gain Coefficient (SHGC) 0.22",
        "Heavy Commercial Grade Powder Coated Frames",
        "Dual Silicone Perimeter Barrier Weatherproofing",
      ],
      hardwareDetails: "Concealed structural attachment clips and seismic expansion joint spacers",
      compliance: "Complies with DFW regional energy conservation and acoustic sound attenuation guidelines",
    },
    {
      id: "proj-7",
      title: "ANSI Grade 1 Closer & Pivot Hardware Overhaul",
      category: "Hardware & Pivots",
      location: "Fort Worth Business District, TX",
      clientType: "High-Volume Financial Institution",
      year: "2024",
      imageKey: "hardware",
      summary:
        "Comprehensive diagnosis, realignment, and hardware replacement on heavy commercial glass doors experiencing hydraulic leakage and binding.",
      specifications: [
        "Heavy-Duty Concealed Overhead Closer Replacement",
        "Top & Bottom Heavy Pivot Hinge Re-Machining",
        "Floor Threshold Leveling & Gasket Seal Renewal",
        "Latch Speed & Backcheck Hydro-Dynamic Re-Valving",
      ],
      hardwareDetails: "LCN 4040XP Grade 1 surface closers and heavy pivot sets rated for 2,000,000 cycles",
      compliance: "Certified ADA opening compliance and life-safety egress verification",
    },
    {
      id: "proj-8",
      title: "Multi-Bay Commercial Storefront Installation",
      category: "Storefront Systems",
      location: "Addison Tech Corridor, TX",
      clientType: "Modern Strip Center & Mixed-Use Plaza",
      year: "2024",
      imageKey: "install",
      summary:
        "Engineered, fabricated, and installed continuous storefront glazing spanning 180 linear feet of active mixed-use commercial space.",
      specifications: [
        "Tubular Aluminum Extrusions (2\" x 4-1/2\" Profile)",
        "Fully Captured Glazing System with EPDM Gaskets",
        "Integrated Storefront Door Framing Vestibules",
        "High-Durability Bronze Fluoropolymer Coating",
      ],
      hardwareDetails: "Heavy-gauge steel reinforcing sleeves inside aluminum corner mullions",
      compliance: "Engineered to withstand 115 mph regional basic wind speeds per IBC",
    },
    {
      id: "proj-9",
      title: "Emergency After-Hours Security Board-Up & Glazing",
      category: "Emergency Restorations",
      location: "North Dallas Commercial Plaza, TX",
      clientType: "24/7 Commercial Plaza",
      year: "2024",
      imageKey: "emergency",
      summary:
        "Dispatched our emergency commercial glazing mobile unit within 40 minutes following vehicular impact damage. Secured the storefront immediately and replaced the unit.",
      specifications: [
        "Immediate Site Containment & Shattered Glass Extraction",
        "Temporary Anti-Intrusion Structural Security Board-Up",
        "Rapid Custom Fabrication of Heavy Laminated Safety Glass",
        "Final Turnkey Glazing Installation Within 24 Hours",
      ],
      hardwareDetails: "Heavy-duty exterior plywood framing anchored without damaging existing facade extrusions",
      compliance: "Temporary weather and security code signoff followed by permanent building inspection",
    },
    {
      id: "proj-10",
      title: "Retail Center Facade Modernization",
      category: "Storefront Systems",
      location: "Frisco North Platinum Corridor, TX",
      clientType: "Shopping Village Center",
      year: "2024",
      imageKey: "ctaStorefront",
      summary:
        "Modernized obsolete 1990s retail facade with high-visibility, unobstructed glass panels and clean architectural sightlines.",
      specifications: [
        "Wide-Span Tempered Glass Panels with Minimalist Mullions",
        "Reflective Solar Glaze for Reduced HVAC Cooling Demand",
        "Architectural Flashing & Integrated Weep Channels",
        "Custom Match Aluminum Exterior Cap Profiles",
      ],
      hardwareDetails: "Stainless steel mechanical fasteners with corrosion-resistant coatings",
      compliance: "Full municipal facade enhancement and commercial sign-off",
    },
    {
      id: "proj-11",
      title: "Precision Structural Glazing & Framing",
      category: "Corporate Curtain Walls",
      location: "McKinney Commercial Park, TX",
      clientType: "Corporate Logistics & Distribution Center",
      year: "2024",
      imageKey: "aboutDetail",
      summary:
        "Installed industrial-grade storefront and high-span curtain wall glazing designed for vibration resistance and high thermal retention.",
      specifications: [
        "1-1/8\" High-Performance Acoustical Laminated Units",
        "Heavy-Wall Aluminum Framing Channels",
        "Precision Corner Miter Connections",
        "Engineered Thermal Breaks to Prevent Condensation",
      ],
      hardwareDetails: "Heavy-duty expansion joints to accommodate building settlement and vibration",
      compliance: "Texas IBC structural design criteria and thermal efficiency certificates",
    },
    {
      id: "proj-12",
      title: "Historic Commercial Storefront Entrance Retrofit",
      category: "Storefront Systems",
      location: "Downtown Dallas Historic District, TX",
      clientType: "Urban Commercial Renovation",
      year: "2024",
      imageKey: "heroStorefront",
      summary:
        "Replaced aging storefront system while preserving architectural aesthetic guidelines with modern energy-efficient glass and durable aluminum extrusions.",
      specifications: [
        "Historic Aesthetic Anodized Finish to Match District Code",
        "Safety Tempered Solarban® 70 Low-E Glazing",
        "High-Traffic Commercial Glass Door Package",
        "Concealed Surface-Mounted Magnetic Lock Accommodation",
      ],
      hardwareDetails: "Architectural offset pivots and heavy-duty push bars finished in oil-rubbed dark bronze",
      compliance: "Historic Landmark Commission and Texas IBC compliant",
    },
  ] as ProjectItem[],
  signatureCaseStudy: {
    eyebrow: "Featured Signature Project",
    title: "Plano Commercial Center: Executive Glass Atrium & Entrances",
    location: "Plano, TX · Class-A Commercial Office",
    year: "2024",
    challenge:
      "The client required an imposing, ultra-clear entrance atrium to showcase modern corporate aesthetics while withstanding North Texas thermal extremes and daily foot traffic of over 1,500 employees, all with zero interruption to active office operations.",
    solution:
      "Sure Fronts Of Dallas engineered a custom structural glass fin facade utilizing extra-clear low-iron glass, heavy-duty frameless commercial entrance doors, and concealed in-floor hydraulic closers. All fabrication was pre-measured with laser precision and installed in phased after-hours shifts.",
    results: [
      { metric: "100%", desc: "On-Schedule Completion with Zero Tenant Downtime" },
      { metric: "35%", desc: "Reduction in Solar Heat Infiltration via Low-Iron Low-E" },
      { metric: "Grade 1", desc: "Heavy Commercial Closers Rated for 2,000,000+ Cycles" },
      { metric: "0 Defect", desc: "Final Texas IBC & ADA Code Inspection Sign-Off" },
    ],
  },
  industries: [
    {
      title: "Corporate Offices & Headquarters",
      desc: "Class-A entrance atriums, conference glass walls, curtain walls, and interior acoustic partitions.",
      badge: "Commercial Real Estate",
    },
    {
      title: "Retail Strip Centers & Malls",
      desc: "High-visibility storefront systems, tempered display glass, and heavy-duty commercial entrance pairs.",
      badge: "Retail & Dining",
    },
    {
      title: "Banks & Financial Institutions",
      desc: "Impact-resistant glazing, ADA compliant pivot entrances, drive-thru transaction glass, and security hardware.",
      badge: "Financial",
    },
    {
      title: "Healthcare & Medical Centers",
      desc: "Acoustic insulated windows, touchless commercial entry doors, and hygienic glass partitions.",
      badge: "Medical",
    },
    {
      title: "Hospitality & Restaurants",
      desc: "Storefront facade systems, patio glass enclosures, folding glass doors, and vestibules.",
      badge: "Hospitality",
    },
    {
      title: "Industrial & Distribution Hubs",
      desc: "Durable storefront entrances, security glazing, and heavy-gauge aluminum window replacements.",
      badge: "Logistics",
    },
  ],
  process: [
    {
      step: "01",
      title: "Pre-Construction & Field Laser Measurements",
      desc: "We perform laser surveys of existing conditions, review architectural blueprints, and calculate precise wind-load and deflection requirements.",
    },
    {
      step: "02",
      title: "Custom Fabrication & Material Procurement",
      desc: "We source commercial-grade aluminum extrusions and certified safety glass, precision-cutting and assembling frame packages to exact project specs.",
    },
    {
      step: "03",
      title: "Turnkey Installation & Glazing",
      desc: "Our OSHA-certified commercial glaziers handle site delivery, frame erection, glass setting, structural silicone sealing, and hardware tuning.",
    },
    {
      step: "04",
      title: "Quality Verification & Code Sign-Off",
      desc: "Every opening is calibrated for smooth operation, ADA opening resistance (under 5 lbs), weather tightness, and building inspection sign-off.",
    },
  ],
  bottomCta: {
    headline: "Have an Upcoming Commercial Project in DFW?",
    body: "From new storefront construction to complete entrance retrofits, partner with Dallas's trusted commercial glazing specialists. Get a comprehensive, line-item proposal tailored to your property.",
    buttons: {
      estimate: "Request a Free Estimate",
      estimateHref: "/free-estimate",
      call: "Call (469) 360-5805",
      callHref: "tel:+14693605805",
    },
  },
};
