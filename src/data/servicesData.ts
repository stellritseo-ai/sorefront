export interface ServiceDetail {
  slug: string;
  n: string;
  title: string;
  shortTitle: string;
  heroBadge: string;
  tagline: string;
  overview: string;
  imageKey: "doors" | "hardware" | "storefront" | "windows" | "night" | "lobby" | "install" | "facade";
  features: { title: string; desc: string }[];
  applications: string[];
  specs: { label: string; value: string }[];
  standards: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "commercial-glass-door-installation": {
    slug: "commercial-glass-door-installation",
    n: "01",
    title: "Commercial Glass Door Installation",
    shortTitle: "Door Installation",
    heroBadge: "High-Traffic Entrance Systems",
    tagline: "Engineered Commercial Glass Entrance Systems Built for Daily Traffic Across Dallas–Fort Worth.",
    overview:
      "From sleek all-glass frameless corporate entrances to heavy-duty narrow, medium, and wide-stile aluminum doors, Sure Fronts Of Dallas engineers and installs complete commercial entrance packages. Designed to withstand millions of opening cycles, Texas weather extremes, and stringent ADA egress codes.",
    imageKey: "doors",
    features: [
      {
        title: "Narrow, Medium & Wide Stile Aluminum Doors",
        desc: "Tailored door stile profiles engineered for high durability in retail, corporate, and healthcare environments.",
      },
      {
        title: "1/2\" Heavy Tempered & Laminated Safety Glass",
        desc: "Impact-resistant safety glazing complying with Texas IBC Chapter 24 requirements for hazardous entrance locations.",
      },
      {
        title: "Continuous Geared Hinges & Offset Pivots",
        desc: "High-capacity pivot assemblies and continuous gear hinges that eliminate door sag and uneven floor rub.",
      },
      {
        title: "Concealed Hydraulic Closers & In-Floor Controls",
        desc: "Precision hydro-dynamic closers with adjustable sweep, latch speed, and backcheck to guarantee reliable door latching.",
      },
      {
        title: "Panic Exit Devices & Access Control Integration",
        desc: "Code-approved commercial exit devices, rim panics, and electric strike preps for keycard and badge access systems.",
      },
      {
        title: "ADA Compliant Low-Profile Thresholds",
        desc: "Barrier-free architectural thresholds engineered for smooth wheelchair transit and maximum weather protection.",
      },
    ],
    applications: [
      "Corporate Office Lobbies & Vestibules",
      "High-Traffic Retail Center Entrances",
      "Financial Institutions & Banking Centers",
      "Medical Clinics & Hospital Pavilions",
      "Restaurants, Cafes & Hospitality Venues",
      "Educational Facilities & Municipal Buildings",
    ],
    specs: [
      { label: "Glass Options", value: "1/2\" Tempered, 1\" Insulated Low-E, Laminated Safety Glass" },
      { label: "Frame Material", value: "Heavy-Wall 6063-T6 Extruded Aluminum" },
      { label: "Hardware Grade", value: "ANSI/BHMA Grade 1 Commercial Specification" },
      { label: "Door Finishes", value: "Clear Anodized, Dark Bronze Anodized, Custom Powder Coat" },
      { label: "Operating Force", value: "Calibrated < 5 lbs opening resistance per ADA Title III" },
      { label: "Warranty", value: "Comprehensive Workmanship & Manufacturer Material Warranty" },
    ],
    standards: [
      "Texas IBC Chapter 24 (Safety Glazing in Hazardous Locations)",
      "ANSI/BHMA A156.4 Door Controls (Closers)",
      "ADA Title III Accessibility Guidelines",
      "NFPA 101 Life Safety Code (Emergency Egress)",
    ],
    process: [
      {
        step: "01",
        title: "Field Laser Survey & Egress Assessment",
        desc: "We verify rough opening plumb, floor level, ADA slope thresholds, and egress capacity requirements.",
      },
      {
        step: "02",
        title: "Engineered Shop Drawings & Door Fabrication",
        desc: "We fabricate frame extrusions, prep internal steel reinforcements, and cut tempered safety glass panels.",
      },
      {
        step: "03",
        title: "Rigid Structural Anchoring & Glass Setting",
        desc: "Frames are mechanically secured into building headers and jambs, followed by precision glass glazing.",
      },
      {
        step: "04",
        title: "Hydraulic Closer Calibration & Final Sign-Off",
        desc: "We test latching speed, ADA resistance under 5 lbs, and test locking cylinders for seamless turnover.",
      },
    ],
    faqs: [
      {
        q: "What stile width should I choose for my commercial glass entrance?",
        a: "Narrow stiles (2\") offer maximum glass visibility for boutiques and offices. Medium stiles (3-1/2\") provide the optimal balance of aesthetics and durability for general commercial use. Wide stiles (5\") are ideal for high-traffic schools, hospitals, and heavy industrial facilities.",
      },
      {
        q: "How long does a commercial glass door installation take?",
        a: "Standard aluminum entrance packages typically take 1 to 2 business days for installation once materials are fabricated, with phased scheduling available to eliminate business downtime.",
      },
      {
        q: "Are your doors compatible with key fob or access control systems?",
        a: "Yes. We regularly prep doors with continuous power transfers, electric strikes, and magnetic lock accommodations compatible with all commercial security systems.",
      },
    ],
  },

  "commercial-glass-door-repair": {
    slug: "commercial-glass-door-repair",
    n: "02",
    title: "Commercial Glass Door Repair",
    shortTitle: "Door Repair",
    heroBadge: "Rapid Diagnosis & Alignment",
    tagline: "Restoring Safety, Egress, and Smooth Operation to Damaged Commercial Doors Across DFW.",
    overview:
      "A malfunctioning commercial glass door is a severe security vulnerability, energy drain, and ADA liability. Sure Fronts Of Dallas provides rapid dispatch across the Metroplex to repair sagging doors, replace leaking hydraulic closers, rebuild broken pivots, and restore smooth, quiet entrance operation.",
    imageKey: "hardware",
    features: [
      {
        title: "Overhead Concealed & Surface Closer Replacement",
        desc: "Replacing blown hydraulic closers that cause doors to slam violently or fail to pull shut.",
      },
      {
        title: "Top, Bottom & Intermediate Pivot Re-Machining",
        desc: "Rebuilding worn pivot pins and bearings to lift dragging doors and stop frame friction.",
      },
      {
        title: "Continuous Geared Hinge Retrofits",
        desc: "Permanently solving chronic door sagging issues on high-traffic commercial portals.",
      },
      {
        title: "Shattered or Cracked Door Glass Panel Replacement",
        desc: "Fast on-site cleanup and same-day or next-day tempered safety glass panel replacement.",
      },
      {
        title: "Lock Cylinder, Panic Bar & Latch Adjustment",
        desc: "Realigning deadbolts, rim exit devices, and strikes to ensure secure after-hours locking.",
      },
      {
        title: "Threshold Leveling & Weather Seal Restoration",
        desc: "Eliminating trip hazards and draft leaks with durable commercial thresholds and door sweeps.",
      },
    ],
    applications: [
      "Doors Slamming or Failing to Latch Completely",
      "Doors Dragging Against Concrete Floors or Thresholds",
      "Hydraulic Oil Leaking from Overhead Closer",
      "Broken Panic Bars or Loose Pull Handles",
      "Shattered or Spiderwebbed Tempered Glass Panels",
      "Key Cylinder Jamming or Misaligned Deadbolts",
    ],
    specs: [
      { label: "Dispatch Window", value: "Same-Day Dispatch & 24/7 Emergency Service Available" },
      { label: "Hardware Inventory", value: "Stocked with Grade 1 LCN, Norton, Jackson, Dorma, & International" },
      { label: "Service Radius", value: "50-Mile Radius Across Dallas, Tarrant, Collin & Denton Counties" },
      { label: "Safety Verification", value: "100% ADA Force & Life Safety Egress Tested on Completion" },
    ],
    standards: [
      "NFPA 101 Life Safety Code (Immediate Egress Requirements)",
      "ADA Title III Section 404 (Door Opening Resistance)",
      "ANSI/BHMA A156.4 Door Closer Performance Standards",
    ],
    process: [
      {
        step: "01",
        title: "Multi-Point Mechanical Diagnostic",
        desc: "We inspect hinge alignment, hydraulic fluid integrity, threshold clearance, and latch engagement.",
      },
      {
        step: "02",
        title: "Heavy Pivot & Closer Component Replacement",
        desc: "Worn or damaged hardware is removed and replaced with heavy-duty Grade 1 commercial components.",
      },
      {
        step: "03",
        title: "Hydro-Dynamic Valve Calibration",
        desc: "We precisely adjust closing speed, latching kick, and hydraulic backcheck cushioning.",
      },
      {
        step: "04",
        title: "ADA Force Gauge Verification",
        desc: "We verify the door requires under 5 lbs of opening resistance and latches securely on every cycle.",
      },
    ],
    faqs: [
      {
        q: "Why is my commercial door slamming shut violently?",
        a: "When a hydraulic closer blows its internal fluid seals, it loses damping resistance and relies solely on spring tension, causing violent slamming. This requires immediate closer replacement to prevent shattered glass.",
      },
      {
        q: "Why is my commercial door dragging on the bottom threshold?",
        a: "Worn pivot bearings or stripped hinge screws cause the door to drop out of square. We realign or replace the pivot sets to restore proper clearances.",
      },
      {
        q: "Can you fix the door today?",
        a: "Our service vehicles carry an extensive stock of commercial Grade 1 closers, pivots, and locksets, allowing us to complete most repairs in a single visit.",
      },
    ],
  },

  "storefront-glass-installation": {
    slug: "storefront-glass-installation",
    n: "03",
    title: "Storefront Glass Installation",
    shortTitle: "Storefront Installation",
    heroBadge: "Turnkey Commercial Systems",
    tagline: "Turnkey Aluminum Storefront Systems & Glazing Packages Engineered for Dallas Businesses.",
    overview:
      "A modern, well-engineered commercial storefront transforms your building's curb appeal, maximizes daylight, and protects your property against Texas storms and energy losses. Sure Fronts Of Dallas provides complete storefront engineering, custom fabrication, and turnkey installation for new construction and tenant build-outs.",
    imageKey: "storefront",
    features: [
      {
        title: "Architectural Aluminum Framing (2\" x 4-1/2\" & 2\" x 6\")",
        desc: "Thermally broken and non-thermal commercial extrusions designed for structural rigidity and clean sightlines.",
      },
      {
        title: "High-Performance Solar Control Low-E Glass",
        desc: "Solarban® 60 & 70 insulated units that slash HVAC cooling loads during scorching Dallas summers.",
      },
      {
        title: "Custom Anodized & Powder-Coated Finishes",
        desc: "Class I Clear Anodized, Dark Bronze, Black, and custom architectural powder coats matching brand specs.",
      },
      {
        title: "Full Perimeter Flashing & Internal Weep Drainage",
        desc: "Engineered sill flashings and weep systems that divert wind-driven rain safely away from wall interiors.",
      },
      {
        title: "Heavy-Duty Security & Laminated Glass Options",
        desc: "Burglar-resistant interlayer glass engineered to withstand forced entry and flying storm debris.",
      },
      {
        title: "Seamless Entrance Door Integration",
        desc: "Integrated commercial door frames, transoms, and sidelites engineered as a unified building envelope.",
      },
    ],
    applications: [
      "Retail Centers & Shopping Strip Malls",
      "Automobile Dealership Showrooms",
      "Corporate Headquarters & Tech Centers",
      "Restaurants, Breweries & Food Halls",
      "Medical Plazas & Professional Buildings",
    ],
    specs: [
      { label: "Mullion Depth", value: "4-1/2\" (Standard) or 6\" (High-Span / High Wind-Load)" },
      { label: "Insulated Glass", value: "1\" Overall Thickness with Solarban® Low-E Coating" },
      { label: "Wind Load Rating", value: "Engineered to withstand DFW 115+ MPH Basic Wind Speed" },
      { label: "Energy Code", value: "Compliant with 2021 Texas Commercial IECC Standards" },
    ],
    standards: [
      "Texas Commercial Building Energy Code (IECC 2021 / ASHRAE 90.1)",
      "AAMA 501.1 Water Penetration Resistance Standards",
      "ASTM E283 Air Leakage Performance Guidelines",
    ],
    process: [
      {
        step: "01",
        title: "Architectural Blueprints & Structural Engineering",
        desc: "We analyze building plans, calculate wind load pressures, and confirm header deflection limits.",
      },
      {
        step: "02",
        title: "Precision Shop Cutting & Mullion Assembly",
        desc: "Heavy aluminum extrusions are precision mitered, prepped with thermal isolators, and factory assembled.",
      },
      {
        step: "03",
        title: "Field Erection & Sill Flashing Anchoring",
        desc: "Frames are leveled, anchored to masonry or structural steel, and sealed with high-performance flashings.",
      },
      {
        step: "04",
        title: "Glass Glazing & Perimeter Weatherproofing",
        desc: "Insulated units are set on structural neoprene blocks, captured with EPDM gaskets, and sealed with wet silicone.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between thermally broken and non-thermal storefront framing?",
        a: "Thermally broken framing includes an insulating polyamide bar between the interior and exterior aluminum sections. This drastically reduces heat transfer, prevents condensation in winter, and meets current Texas commercial energy codes.",
      },
      {
        q: "How long does a full storefront installation take?",
        a: "Fabrication typically requires 2 to 4 weeks depending on extrusion lead times and glass coatings. Once on site, our crews install 50 to 100 linear feet of storefront per day.",
      },
      {
        q: "Can you match our existing property's bronze or black frame color?",
        a: "Yes. We source exact architectural anodized finishes (Clear, Dark Bronze, Black) as well as custom RAL powder coating.",
      },
    ],
  },

  "storefront-glass-repair": {
    slug: "storefront-glass-repair",
    n: "04",
    title: "Storefront Glass Repair",
    shortTitle: "Storefront Repair",
    heroBadge: "Fast Glass Replacement",
    tagline: "Rapid Assessment, Structural Securing, and Glass Restoration for Damaged Storefronts.",
    overview:
      "Broken, cracked, or leaking storefront glass compromises your business's security, professional image, and indoor comfort. Sure Fronts Of Dallas delivers rapid response commercial glass replacement, securing damaged bays immediately and installing exact-match architectural glass units.",
    imageKey: "install",
    features: [
      {
        title: "Rapid Site Containment & Shattered Glass Removal",
        desc: "Safely clearing hazardous shards and securing the opening to protect staff, tenants, and merchandise.",
      },
      {
        title: "Custom Fabrication for Large Commercial Lites",
        desc: "Direct access to regional glass tempering and insulating facilities for accelerated turnaround.",
      },
      {
        title: "Exact Optical Tint & Low-E Coating Matching",
        desc: "Matching green, bronze, gray, reflective, or Solarban® Low-E tints to maintain uniform facade aesthetics.",
      },
      {
        title: "Structural Silicone Glazing & Cap Bead Renewal",
        desc: "Restoring weather seals, EPDM gaskets, and silicone cap beads to stop water leaks and drafts.",
      },
      {
        title: "Extrusion Straightening & Mullion Repair",
        desc: "Realigning bent aluminum extrusions and replacing damaged exterior stop caps.",
      },
      {
        title: "Insurance Documentation & Detailed Itemization",
        desc: "Providing line-item estimates and photo documentation directly to commercial insurance adjusters.",
      },
    ],
    applications: [
      "Impact or Vandalism Shattered Display Glass",
      "Thermal Stress Cracks Across Insulated Windows",
      "Cloudy, Foggy or Condensation-Filled Double Pane Glass",
      "Severe Storm Debris or Hail Impact Breakage",
      "Leaking Perimeter Caulk Causing Interior Water Damage",
    ],
    specs: [
      { label: "Response Time", value: "Same-Day Emergency Assessment across DFW" },
      { label: "Glass Types", value: "1/4\" Tempered, 1/2\" Heavy Tempered, 1\" Insulated, Laminated" },
      { label: "Debris Removal", value: "Complete OSHA-Compliant Jobsite Vacuuming & Disposal" },
      { label: "Warranty", value: "Seal-Failure Warranty on All Insulated Glass Units" },
    ],
    standards: [
      "Safety Glazing Certification Council (SGCC) Standards",
      "CPSC 16 CFR 1201 Impact Safety Glazing Criteria",
      "ASTM C1036 Standard Specification for Flat Glass",
    ],
    process: [
      {
        step: "01",
        title: "Emergency Hazard Mitigation",
        desc: "We safely remove shattered glass and apply secure temporary protection if glass requires factory tempering.",
      },
      {
        step: "02",
        title: "Optical Tint & Caliper Measurement",
        desc: "We use digital calipers and tint meters to verify glass thickness, spacer width, and Low-E coating specifications.",
      },
      {
        step: "03",
        title: "Priority Factory Tempering & Fabrication",
        desc: "The replacement unit is cut, tempered, insulated, and inspected for optical clarity.",
      },
      {
        step: "04",
        title: "Turnkey Setting & Weather Sealing",
        desc: "The new lite is set on neoprene setting blocks, locked with aluminum stops, and sealed with structural silicone.",
      },
    ],
    faqs: [
      {
        q: "Why can't broken tempered glass just be cut and installed on site immediately?",
        a: "Tempered glass cannot be cut after it has been heat-treated—attempting to cut it causes it to shatter into pebbles. It must be custom-cut to size first, then baked in a high-temperature tempering furnace. We expedite this process through our DFW fabrication partners.",
      },
      {
        q: "Can you match the exact tint of my existing storefront windows?",
        a: "Yes. We carry color meters and glass samples to match original manufacturer tints (clear, solar green, bronze, gray, and Low-E coatings) so your facade looks uniform.",
      },
      {
        q: "Do you bill commercial insurance directly?",
        a: "We provide comprehensive line-item estimates with detailed photo documentation ready for your commercial insurance adjuster.",
      },
    ],
  },

  "commercial-glass-windows": {
    slug: "commercial-glass-windows",
    n: "05",
    title: "Commercial Glass Windows",
    shortTitle: "Commercial Windows",
    heroBadge: "Thermal & Acoustic Efficiency",
    tagline: "Fixed & Operable Commercial Window Systems Engineered for DFW Energy Efficiency and Durability.",
    overview:
      "Upgrade your commercial building's thermal performance, acoustic insulation, and natural daylighting with custom engineered commercial windows. Sure Fronts Of Dallas designs, replaces, and installs fixed ribbon windows, architectural punched openings, and high-performance insulated glass for corporate facilities.",
    imageKey: "windows",
    features: [
      {
        title: "Solarban® Solar Control Low-E Glass Packages",
        desc: "Double-pane insulated glass units engineered to reflect solar heat while allowing optimal natural light transmission.",
      },
      {
        title: "Acoustic Laminated Glass for Highway Noise Attenuation",
        desc: "Specialized sound transmission class (STC) interlayers dampening exterior traffic noise for focused office environments.",
      },
      {
        title: "Thermally Broken Heavy Commercial Extrusions",
        desc: "Extruded aluminum framing systems with continuous thermal breaks to prevent condensation and energy loss.",
      },
      {
        title: "Argon Gas Filled Spacers with Warm-Edge Technology",
        desc: "Maximizing U-factor insulation value and preventing internal edge seal degradation.",
      },
      {
        title: "Structural Anchoring for Concrete, Steel & Masonry",
        desc: "Engineered fastening schedules designed for wind pressure and building movement.",
      },
      {
        title: "Dual Perimeter Silicone Barrier Weatherproofing",
        desc: "Commercial silicone wet seals that provide decades of leak-free protection in heavy driving rain.",
      },
    ],
    applications: [
      "Multi-Story Commercial Office Buildings",
      "Medical Offices, Urgent Care & Dental Clinics",
      "Tech Corridors & Research Facilities",
      "Hotels, Suites & Commercial Hospitality",
      "Industrial Headquarters & Distribution Offices",
    ],
    specs: [
      { label: "Insulated Thickness", value: "1\" Overall IGU (1/4\" Low-E / 1/2\" Argon Airspace / 1/4\" Clear)" },
      { label: "SHGC Performance", value: "≤ 0.23 (Significantly Exceeds Texas Energy Code Standards)" },
      { label: "Sound Insulation", value: "STC Ratings up to 39 dB with Acoustic Interlayers" },
      { label: "Frame Ratings", value: "AAMA CW (Commercial Window) & AW (Architectural Window) Rated" },
    ],
    standards: [
      "Texas Commercial Building Energy Code (IECC 2021)",
      "National Fenestration Rating Council (NFRC) Certified",
      "AAMA/WDMA/CSA 101/I.S.2/A440 Standards",
    ],
    process: [
      {
        step: "01",
        title: "Thermal & Acoustic Building Survey",
        desc: "We analyze solar orientation, sound attenuation goals, and existing wall opening dimensions.",
      },
      {
        step: "02",
        title: "Custom Engineering & Glazing Specification",
        desc: "We determine the exact Low-E coating, glass thickness, and framing depth for optimal return on investment.",
      },
      {
        step: "03",
        title: "Precision Removal & Frame Erection",
        desc: "Aged windows are extracted cleanly without damaging interior drywall, and new frames are anchored plumb.",
      },
      {
        step: "04",
        title: "Glass Setting & Dual Barrier Sealing",
        desc: "IGUs are glazed with EPDM gaskets and double-sealed with Dow Corning structural silicone.",
      },
    ],
    faqs: [
      {
        q: "How much can energy-efficient commercial windows lower our electricity bills?",
        a: "Upgrading from single-pane or aged double-pane glass to modern Solarban® Low-E insulated glass can reduce cooling energy consumption by 25% to 40% during peak Texas summer months.",
      },
      {
        q: "Can you replace windows without disrupting our office tenants?",
        a: "Yes. We frequently execute phased, after-hours, or weekend installations to ensure zero disruption to normal business workflows.",
      },
      {
        q: "What causes commercial windows to look foggy or milky between the panes?",
        a: "When perimeter seal failure occurs, moisture-laden air enters the airspace between the panes. As temperature fluctuates, moisture condenses and leaves permanent mineral etching. We replace the failed IGU without replacing the structural frame.",
      },
    ],
  },

  "emergency-commercial-glass-service": {
    slug: "emergency-commercial-glass-service",
    n: "06",
    title: "Emergency Commercial Glass Service",
    shortTitle: "Emergency Service",
    heroBadge: "24/7 Rapid Mobilization",
    tagline: "24/7 Rapid Emergency Dispatch for Broken Commercial Glass, Vehicle Impacts, and Security Breaches.",
    overview:
      "When a break-in, severe storm, vehicular impact, or unexpected structural failure shatters your commercial glass, security cannot wait until morning. Sure Fronts Of Dallas provides 24/7/365 emergency mobile dispatch across Dallas–Fort Worth to secure your premises, clear hazardous debris, and initiate priority replacement.",
    imageKey: "night",
    features: [
      {
        title: "Target 45–60 Minute On-Site Dispatch",
        desc: "Dedicated mobile emergency glazier units stationed across North Texas for immediate dispatch.",
      },
      {
        title: "Structural Anti-Intrusion Security Board-Up",
        desc: "Heavy-gauge plywood barricades anchored securely without defacing salvageable aluminum frame finishes.",
      },
      {
        title: "Complete Hazard Containment & Glass Clearing",
        desc: "OSHA-compliant removal and commercial vacuuming of dangerous broken glass shards inside and outside.",
      },
      {
        title: "Temporary Security Doors with Locking Hardware",
        desc: "Installing operable temporary security doors so your business can continue operating while glass is fabricated.",
      },
      {
        title: "Priority Next-Day Glass Tempering & Cutting",
        desc: "Emergency rush processing at our fabrication facilities to return your building to normal in record time.",
      },
      {
        title: "Itemized Insurance Documentation & Direct Billing",
        desc: "Detailed photographic logs and line-item estimates formatted for quick commercial claim approval.",
      },
    ],
    applications: [
      "Smash-and-Grab Burglaries & Vandalism Breaches",
      "Vehicle-into-Storefront Impact Damage",
      "Severe Windstorm & Flying Debris Shattering",
      "Spontaneous Tempered Door Glass Failures",
      "Failed Entrance Doors Compromising Facility Lockdown",
    ],
    specs: [
      { label: "Availability", value: "24 Hours a Day · 7 Days a Week · 365 Days a Year" },
      { label: "Direct Emergency Line", value: "(469) 360-5805 (Monitored Live 24/7)" },
      { label: "Dispatch Coverage", value: "50-Mile Radius from Central Dallas Headquarters" },
      { label: "Security Materials", value: "Heavy-Duty Exterior CDX Plywood, Tamper-Resistant Fasteners" },
    ],
    standards: [
      "OSHA Hazardous Debris & Broken Glass Disposal Regulations",
      "Texas IBC Emergency Perimeter Protection Standards",
      "Commercial Building Security & Egress Code Compliance",
    ],
    process: [
      {
        step: "01",
        title: "Immediate 24/7 Dispatch Mobilization",
        desc: "Call our emergency line at (469) 360-5805. A fully equipped mobile glazier unit is dispatched immediately.",
      },
      {
        step: "02",
        title: "On-Site Arrival & Site Containment",
        desc: "We clear broken glass, cordon off dangerous zones, and inspect frame integrity for structural safety.",
      },
      {
        step: "03",
        title: "Heavy-Duty Security Board-Up Erection",
        desc: "We secure the perimeter with structural anti-tamper barricades to protect building contents.",
      },
      {
        step: "04",
        title: "Rush Glass Fabrication & Turnkey Replacement",
        desc: "Exact measurements are sent to our fabrication plant for priority rush cutting, tempering, and final installation.",
      },
    ],
    faqs: [
      {
        q: "What should I do immediately after my commercial glass is broken?",
        a: "First ensure tenant/customer safety and call law enforcement if criminal activity is suspected. Do not touch or attempt to clean broken glass. Call our emergency dispatch line at (469) 360-5805 immediately.",
      },
      {
        q: "Will your emergency board-up damage our storefront frames?",
        a: "No. We utilize structural compression clamping and non-marring fastener techniques that anchor the plywood securely without drilling into visible aluminum faces.",
      },
      {
        q: "How fast can you replace the glass permanently?",
        a: "Laminated safety glass and annealed glass can often be replaced the same or next day. Custom tempered insulated units are rushed through our fabrication pipeline in 24 to 48 hours.",
      },
    ],
  },

  "commercial-door-hardware": {
    slug: "commercial-door-hardware",
    n: "07",
    title: "Commercial Door Hardware",
    shortTitle: "Door Hardware",
    heroBadge: "ANSI/BHMA Grade 1 Hardware",
    tagline: "Heavy-Duty Panic Devices, Closers, Hinges, Pivots, and Access Control Hardware for DFW Businesses.",
    overview:
      "A commercial glass door is only as reliable as the hardware that controls it. High daily pedestrian traffic, wind pressures, and strict fire/ADA codes demand commercial-grade mechanical components. Sure Fronts Of Dallas installs, adjusts, and retrofits Grade 1 architectural hardware engineered for millions of smooth opening cycles.",
    imageKey: "hardware",
    features: [
      {
        title: "ANSI/BHMA Grade 1 Heavy-Duty Hydraulic Closers",
        desc: "Heavy-duty cast iron and aluminum closers from top brands (LCN, Norton, Dorma, International) rated for 2,000,000+ cycles.",
      },
      {
        title: "Continuous Geared Aluminum Roton Hinges",
        desc: "Distributing door weight evenly along the entire frame height to permanently eliminate door sagging and floor binding.",
      },
      {
        title: "Heavy Pivot Hinge Sets & Intermediate Pivots",
        desc: "High-capacity floor and top pivots engineered for oversized heavy glass entrance doors up to 500 lbs.",
      },
      {
        title: "Rim, Mortise & Concealed Vertical Rod Panic Devices",
        desc: "Life-safety egress panic exit hardware compliant with NFPA 101 emergency evacuation guidelines.",
      },
      {
        title: "Electric Strikes & Keycard Access Control Prep",
        desc: "Seamless integration with building security, magnetic locks, and touchless motion-sensor exit switches.",
      },
      {
        title: "Commercial Thresholds, Sweeps & Astronomical Weatherseals",
        desc: "Sealing bottom and perimeter air gaps to block dust, moisture, and conditioned air leaks.",
      },
    ],
    applications: [
      "High-Traffic Primary Entrance Doors",
      "Emergency Stairwell & Egress Portals",
      "Employee Secured Access Vestibules",
      "Heavy Glass Frameless Conference Doors",
      "Retail Showroom Panic Exit Corridors",
    ],
    specs: [
      { label: "Hardware Grade", value: "ANSI/BHMA Grade 1 (Highest Commercial Performance Standard)" },
      { label: "Cycle Rating", value: "Tested for 2,000,000 to 10,000,000 Operational Cycles" },
      { label: "Finishes", value: "Satin Chrome (US26D), Dark Bronze (US10B), Black (US19), Stainless" },
      { label: "ADA Compliance", value: "Calibrated under 5 lbs manual operating resistance" },
    ],
    standards: [
      "ANSI/BHMA A156 Series Standards for Hardware",
      "ADA Title III Section 404 Accessibility Guidelines",
      "NFPA 80 Standard for Fire Doors and Other Opening Protectives",
    ],
    process: [
      {
        step: "01",
        title: "Traffic Load & Egress Schedule Audit",
        desc: "We analyze daily door cycle frequency, wind exposures, life-safety requirements, and building security needs.",
      },
      {
        step: "02",
        title: "Hardware Specification & Template Mortising",
        desc: "We prep aluminum door stiles and headers with reinforced steel backing plates and precision template cutouts.",
      },
      {
        step: "03",
        title: "Mechanical Mounting & Alignment",
        desc: "Hardware is secured with heavy-gauge mechanical fasteners and aligned to prevent binding or off-axis stress.",
      },
      {
        step: "04",
        title: "Hydro-Dynamic Valve Tuning & ADA Verification",
        desc: "We tune latch and sweep valves, confirm smooth latching, and test operating force with a calibrated pressure gauge.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between Grade 1 and Grade 2 commercial hardware?",
        a: "Grade 1 hardware is engineered for the heaviest commercial demands, tested for 2,000,000+ cycles with heavy cast iron bodies and forged steel arms. Grade 2 is designed for light commercial or residential use (400,000 cycles) and fails rapidly in high-traffic commercial settings.",
      },
      {
        q: "Can you adjust our door so it is easier to push open for disabled visitors?",
        a: "Yes. We calibrate internal closer spring tensions to meet ADA requirements of under 5 lbs operating resistance while ensuring the hydraulic latching stroke still pulls the door securely closed.",
      },
      {
        q: "Can you install electrified panic hardware that ties into our security system?",
        a: "Yes. We install motorized latch retraction panic bars, electric strikes, and concealed power transfers that integrate cleanly with card readers, keypads, and fire alarm releases.",
      },
    ],
  },

  "glass-replacement-and-maintenance": {
    slug: "glass-replacement-and-maintenance",
    n: "08",
    title: "Glass Replacement & Maintenance",
    shortTitle: "Glass Maintenance",
    heroBadge: "Preventative Facility Care",
    tagline: "Proactive Glazing Maintenance, Fogged Glass Replacement, and Long-Term Commercial Facility Care.",
    overview:
      "Commercial glass systems represent a major capital investment. Preventative maintenance and timely glass replacement protect your property from water intrusion, structural frame corrosion, and expensive emergency replacements. Sure Fronts Of Dallas partners with DFW property managers, facility directors, and building owners to maintain peak building envelope performance.",
    imageKey: "lobby",
    features: [
      {
        title: "Failed Insulated Glass (IGU) De-Fogging Replacement",
        desc: "Extracting cloud-obscured, failed-seal glass units and installing crystal clear, high-efficiency Low-E replacements.",
      },
      {
        title: "Comprehensive Annual Hardware Lubrication & Tuning",
        desc: "Lubricating pivot bearings, adjusting closer valves, checking fastener torque, and preventing door drops.",
      },
      {
        title: "Perimeter Structural Silicone Caulk Joint Re-Sealing",
        desc: "Removing weathered, cracked caulk and injecting fresh Dow Corning structural silicone to stop moisture infiltration.",
      },
      {
        title: "EPDM Rubber Gasket & Weatherstrip Renewal",
        desc: "Replacing dried-out, shrunk glazing gaskets to stop wind rattles and drafts.",
      },
      {
        title: "Commercial Property Portfolio Glazing Audits",
        desc: "Comprehensive inspections for multi-tenant office parks and shopping centers with detailed condition reports.",
      },
      {
        title: "Priority Service Level Agreements (SLAs)",
        desc: "Guaranteed priority response times, discounted scheduled service, and preferred scheduling for contract clients.",
      },
    ],
    applications: [
      "Commercial Office Parks & Corporate Campuses",
      "Multi-Tenant Retail Shopping Strips",
      "Medical Plazas & Outpatient Care Facilities",
      "Hotels, Event Venues & Banquet Centers",
      "Industrial Parks & Warehouse Facilities",
    ],
    specs: [
      { label: "Inspection Scope", value: "Full Envelope, Door Egress, Sealant Integrity, ADA Verification" },
      { label: "Sealant Grade", value: "Dow Corning 795 & 995 Structural Silicone (20-Year Weatherseal Life)" },
      { label: "Maintenance Interval", value: "Quarterly, Semi-Annual, or Annual Preventative Contracts" },
      { label: "Documentation", value: "Digital Inspection Logs with Photographic Evidence & Action Items" },
    ],
    standards: [
      "ASTM C1193 Standard Guide for Use of Joint Sealants",
      "GANA (Glass Association of North America) Glazing Manual",
      "AAMA Commercial Building Maintenance Standards",
    ],
    process: [
      {
        step: "01",
        title: "Facility Walk-Through & Vulnerability Mapping",
        desc: "We inspect every door opening, storefront mullion, caulk joint, and glass panel across your facility.",
      },
      {
        step: "02",
        title: "Prioritized Maintenance & Replacement Proposal",
        desc: "You receive a transparent, itemized report categorized by immediate safety items, energy improvements, and preventative care.",
      },
      {
        step: "03",
        title: "Coordinated Off-Peak Service Execution",
        desc: "Our master glaziers perform hardware adjustments, caulk renewal, and glass swaps during low-traffic hours.",
      },
      {
        step: "04",
        title: "Warranty Documentation & Routine Monitoring",
        desc: "You receive complete warranty certificates and a scheduled follow-up check to ensure lasting performance.",
      },
    ],
    faqs: [
      {
        q: "Why does double pane commercial glass fog up between the panes?",
        a: "Over years of Texas heat cycles and UV exposure, perimeter seals dry out and allow air into the sealed airspace. The desiccant material becomes saturated, and moisture permanently condenses between the panes. The only permanent fix is replacing the glass unit.",
      },
      {
        q: "How often should commercial glass doors be serviced?",
        a: "High-traffic commercial entrances (such as grocery stores, retail plazas, or corporate lobbies) should undergo preventative hardware inspection and hydraulic closer tuning at least once every 6 to 12 months.",
      },
      {
        q: "Do you offer service agreements for commercial property managers?",
        a: "Yes. We offer customized preventative maintenance agreements that include scheduled bi-annual tune-ups, priority emergency response dispatch, and preferred pricing on all glass and hardware replacements.",
      },
    ],
  },
};
