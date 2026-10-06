import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Wrench,
  ShieldCheck,
  Phone,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { services, site } from "@/data/site";
import { Reveal } from "./Reveal";
import doors from "@/assets/svc-doors.jpg";
import storefront from "@/assets/svc-storefront.jpg";
import hardware from "@/assets/svc-hardware.jpg";
import windows from "@/assets/svc-windows.jpg";
import night from "@/assets/emergency-night.jpg";

const imgMap: Record<string, string> = { doors, storefront, hardware, windows, night };

interface ServiceSpec {
  category: string;
  specs: string[];
  turnaround: string;
  isEmergency?: boolean;
}

const serviceDetails: Record<string, ServiceSpec> = {
  "01": {
    category: "Entrances & Doors",
    specs: ["1/2\" Heavy Tempered Safety Glass", "Continuous Gear Hinges & Pivots", "Custom Anodized Aluminum Extrusions"],
    turnaround: "Turnkey Commercial Fabrication",
  },
  "02": {
    category: "Entrances & Doors",
    specs: ["Pivot Re-alignment & Leveling", "Hydraulic Closer Speed Adjustment", "Heavy-Duty Glass Panel Replacement"],
    turnaround: "Same-Day Diagnostic & Repair",
  },
  "03": {
    category: "Storefront Systems",
    specs: ["Thermal Break Aluminum Framing", "Laminated Security & Insulated Units", "Structural Perimeter Silicone Sealing"],
    turnaround: "Custom Storefront Fabrication",
  },
  "04": {
    category: "Storefront Systems",
    specs: ["Emergency Board-Up & Secured Sealing", "Exact Match Glass Dimensioning", "Gasket & Pressure Plate Restoration"],
    turnaround: "Rapid Glass Restoration",
  },
  "05": {
    category: "Storefront Systems",
    specs: ["High-Efficiency Low-E Insulated Units", "Solar Heat Gain Reduction Coatings", "Heavy Commercial Gauge Framing"],
    turnaround: "Architectural Glazing Packages",
  },
  "06": {
    category: "Hardware & Emergency",
    specs: ["24/7 Immediate On-Site Dispatch", "Rapid Structural Plywood Enclosure", "Priority Next-Day Glass Replacement"],
    turnaround: "Immediate 24/7 DFW Dispatch",
    isEmergency: true,
  },
  "07": {
    category: "Hardware & Emergency",
    specs: ["UL-Listed Panic Exit Crash Bars", "Concealed Overhead Door Closers", "ADA Threshold & Magnetic Lock Integration"],
    turnaround: "Commercial Grade Stock On-Truck",
  },
  "08": {
    category: "Hardware & Emergency",
    specs: ["Scheduled Multi-Tenant Preventative Check", "Hardware Lubrication & Torque Tuning", "Waterproofing & Weather-Strip Reseal"],
    turnaround: "Dedicated Account Support",
  },
};

const defaultDetail: ServiceSpec = {
  category: "Commercial Glazing",
  specs: ["Turnkey Commercial Glazing", "ADA Compliant Hardware", "Engineered Structural Installation"],
  turnaround: "Fast Turnaround",
};

export function Services() {
  const [activeId, setActiveId] = useState<string>("01");

  const activeService = services.find((s) => s.n === activeId) || services[0];
  const activeDetail: ServiceSpec = serviceDetails[activeService.n] ?? defaultDetail;

  return (
    <section id="services" className="relative overflow-hidden py-12 sm:py-20 lg:py-24 bg-background">
      {/* Ambient background architectural lighting */}
      <div className="pointer-events-none absolute left-1/4 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/6 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-80 w-80 rounded-full bg-champagne/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <Reveal className="min-w-0">
            {/* Pill Badge */}
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-[0.68rem] xs:text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur-sm hover:bg-primary/15 transition-colors group cursor-pointer"
            >
              <Wrench className="h-3.5 w-3.5 shrink-0" />
              <span>Full-Scope Commercial Capabilities</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Heading */}
            <h2 className="font-display mt-2 sm:mt-[9px] text-2xl xs:text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold tracking-tight text-foreground leading-[1.16]">
              Commercial Glass &amp; Door Services
            </h2>

            {/* Lead Description */}
            <p className="mt-2 sm:mt-3 mb-0 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
              Architectural glazing, commercial entrance door installations, precision hardware servicing, and 24/7 rapid emergency repair across Dallas &amp; North Texas.
            </p>
          </Reveal>

          {/* Desktop Action Buttons — hidden on mobile */}
          <Reveal delay={0.12}>
            <div className="hidden items-center gap-3 md:flex shrink-0">
              <a
                href="/services"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-white/70 px-4 py-2.5 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-foreground shadow-soft backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white active:scale-[0.98]"
              >
                <span>All Services</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-primary shrink-0" />
              </a>

              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-4 py-2.5 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-foreground shadow-soft backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white active:scale-[0.98]"
              >
                <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="whitespace-nowrap">Call {site.phone}</span>
              </a>

              <a
                href="/free-estimate"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-5 py-2.5 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_4px_16px_rgba(185,28,28,0.35)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">Request Free Estimate</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── Mobile CTA Buttons (hidden md+) ── */}
        <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 gap-3 md:hidden">
          <a
            href="/free-estimate"
            className="group inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-5 py-3 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_4px_16px_rgba(185,28,28,0.35)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
          >
            <span>Free Estimate</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-white/70 px-4 py-3 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-foreground shadow-soft backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white active:scale-[0.98]"
          >
            <span>All Services</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-primary shrink-0" />
          </a>
        </div>

        {/* ── Master 2-Column Layout ── */}
        <div className="mt-8 sm:mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8 items-start">

          {/* ── LEFT: Service Navigator List ── */}
          <div className="lg:col-span-5 flex flex-col gap-3 min-w-0">
            {/* List Header */}
            <div className="flex items-center justify-between px-1 pb-0.5 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[0.7rem] xs:text-xs font-bold uppercase tracking-[0.16em] text-foreground/80 whitespace-nowrap">
                  Select Service
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[0.68rem] font-bold text-primary shrink-0">
                  0{services.length}
                </span>
              </div>
              <div className="hidden xs:flex items-center gap-1.5 text-[0.68rem] font-semibold text-primary shrink-0">
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span className="whitespace-nowrap">Tap to Inspect</span>
              </div>
            </div>

            {/* Service Buttons */}
            <div className="space-y-2 lg:max-h-[588px] overflow-y-auto overflow-x-hidden pr-1 [scrollbar-width:thin] [scrollbar-color:rgba(185,28,28,0.25)_transparent]">
              {services.map((s) => {
                const isSelected = s.n === activeId;
                const detail = serviceDetails[s.n];

                return (
                  <button
                    key={s.n}
                    type="button"
                    onClick={() => setActiveId(s.n)}
                    className={`group relative flex w-full items-center justify-between rounded-2xl px-3 xs:px-3.5 py-2.5 sm:py-3 text-left transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? "border border-primary/50 bg-white shadow-[0_10px_28px_-6px_rgba(185,28,28,0.18),0_2px_6px_rgba(0,0,0,0.04),inset_0_1px_1.5px_rgba(255,255,255,0.9)]"
                        : "border border-border/70 bg-white/70 backdrop-blur-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.7)] hover:border-primary/40 hover:bg-white/95 hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Active Left Marker */}
                    {isSelected && (
                      <>
                        <div className="pointer-events-none absolute left-0 top-2.5 bottom-2.5 w-1.5 rounded-r-full bg-gradient-to-b from-primary via-red-500 to-primary shadow-[0_0_12px_rgba(185,28,28,0.7)]" />
                        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/20 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.18),inset_-1px_-1px_2px_rgba(244,114,182,0.18)]" />
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                      </>
                    )}

                    {/* Left: Number + Text */}
                    <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                      {/* Number Badge */}
                      <div
                        className={`flex h-8 w-8 xs:h-9 xs:w-9 shrink-0 items-center justify-center rounded-xl font-mono text-[0.75rem] font-black transition-all duration-300 ${
                          isSelected
                            ? "bg-gradient-to-br from-primary via-[#b91c1c] to-[#991b1b] text-primary-foreground shadow-[0_3px_10px_rgba(185,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                            : "border border-border/80 bg-white font-bold text-muted-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] group-hover:border-primary/40 group-hover:bg-primary/8 group-hover:text-primary"
                        }`}
                      >
                        {s.n}
                      </div>

                      {/* Title + Metadata */}
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <p
                          className={`font-display text-[0.84rem] xs:text-[0.88rem] sm:text-[0.92rem] font-bold leading-snug truncate transition-colors duration-200 ${
                            isSelected ? "text-primary font-extrabold" : "text-foreground group-hover:text-primary"
                          }`}
                        >
                          {s.title}
                        </p>
                        <div className="mt-0.5 flex items-center gap-1 min-w-0 overflow-hidden">
                          <span
                            className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                              isSelected
                                ? "bg-primary shadow-[0_0_6px_rgba(185,28,28,0.8)] scale-110"
                                : "bg-muted-foreground/35 group-hover:bg-primary/70"
                            }`}
                          />
                          <span className="text-[0.69rem] font-semibold text-foreground/80 shrink-0 whitespace-nowrap">
                            {detail?.category}
                          </span>
                          <span className="text-muted-foreground/40 font-mono shrink-0">/</span>
                          <span className="text-[0.69rem] text-muted-foreground truncate min-w-0">
                            {detail?.turnaround}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Arrow Disc */}
                    <div
                      className={`flex h-7 w-7 xs:h-8 xs:w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground scale-105 shadow-[0_3px_12px_rgba(185,28,28,0.4)]"
                          : "border-border/80 bg-white/85 text-muted-foreground shadow-sm group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-105"
                      }`}
                    >
                      <ArrowUpRight
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isSelected ? "rotate-45" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: Service Spotlight ── */}
          <div className="lg:col-span-7 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.n}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl xs:rounded-3xl border border-white/90 bg-gradient-to-b from-white/95 via-white/85 to-white/75 p-3 xs:p-3.5 sm:p-4 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.09),0_2px_8px_rgba(0,0,0,0.02),inset_0_1.5px_1px_rgba(255,255,255,1)] backdrop-blur-2xl lg:h-[632px] flex flex-col justify-between"
              >
                {/* Glass border effects */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/25 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.22),inset_-1px_-1px_2px_rgba(244,114,182,0.22)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.2)]" />

                {/* ── Image Frame ── */}
                <div className="relative h-[200px] xs:h-[225px] sm:h-[265px] w-full shrink-0 overflow-hidden rounded-xl xs:rounded-2xl bg-charcoal shadow-inner">
                  {/* Blueprint Corner Crosshairs */}
                  <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-3 w-3 border-t border-l border-white/50" />
                  <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-3 w-3 border-t border-r border-white/50" />
                  <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-3 w-3 border-b border-l border-white/50" />
                  <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-3 w-3 border-b border-r border-white/50" />

                  <img
                    src={imgMap[activeService.img]}
                    alt={activeService.title}
                    width={1400}
                    height={788}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />

                  {/* Vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  {/* ── Top Image Badges ── */}
                  <div className="absolute left-2.5 top-2.5 right-2.5 z-10 flex items-center gap-2 justify-between">
                    {/* Index Tag */}
                    <div className="flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/90 px-2.5 py-1 shadow-md backdrop-blur-xl shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-[0.66rem] xs:text-[0.70rem] font-black tracking-wider text-charcoal whitespace-nowrap">
                        SERVICE // 0{activeService.n}
                      </span>
                    </div>

                    {/* Category Pill — truncates gracefully */}
                    <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/65 px-2.5 py-1 text-[0.64rem] xs:text-[0.68rem] font-bold uppercase tracking-wide text-white backdrop-blur-md shadow-sm min-w-0 overflow-hidden">
                      <ShieldCheck className="h-3 w-3 xs:h-3.5 xs:w-3.5 text-primary shrink-0" />
                      <span className="truncate">{activeDetail.category}</span>
                    </div>
                  </div>

                  {/* ── Bottom Image Tag ── */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/65 px-3 py-1.5 backdrop-blur-md shadow-sm min-w-0 overflow-hidden">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-80 ${activeDetail.isEmergency ? 'bg-primary' : 'bg-emerald-400'}`} />
                        <span className={`relative inline-flex h-2 w-2 rounded-full ${activeDetail.isEmergency ? 'bg-primary' : 'bg-emerald-400'}`} />
                      </span>
                      <span className="text-[0.68rem] xs:text-[0.70rem] font-bold text-white tracking-wide truncate">
                        {activeDetail.turnaround}
                      </span>
                    </div>
                    <span className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-[0.62rem] font-mono uppercase tracking-wider text-white/90 backdrop-blur-md">
                      ASTM &amp; IBC READY
                    </span>
                  </div>
                </div>

                {/* ── Content Below Image ── */}
                <div className="flex flex-1 flex-col justify-between pt-2.5 pb-0.5 px-0.5 min-w-0">
                  <div className="min-w-0">
                    {/* Kicker — simplified for mobile */}
                    <div className="flex items-center gap-2 text-[0.64rem] xs:text-[0.66rem] font-black uppercase tracking-[0.14em] text-primary min-w-0 overflow-hidden">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="whitespace-nowrap">Commercial Glazing Solution</span>
                      <span className="hidden xs:inline text-muted-foreground/30 font-mono shrink-0">/</span>
                      <span className="hidden xs:inline text-muted-foreground font-mono truncate">TEXAS SPEC</span>
                    </div>

                    <h3 className="mt-1 font-display text-lg xs:text-xl sm:text-[1.45rem] font-black text-foreground tracking-tight leading-snug">
                      {activeService.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-[0.85rem] leading-relaxed text-muted-foreground font-normal line-clamp-2">
                      {activeService.desc} Precision-engineered for heavy commercial cycle durability and Texas building safety code adherence.
                    </p>

                    {/* ── Specs Panel ── */}
                    <div className="mt-2.5 rounded-xl xs:rounded-2xl border border-white/80 bg-white/60 p-2.5 sm:p-3 shadow-xs backdrop-blur-md">
                      {/* Specs Header */}
                      <div className="flex items-center justify-between gap-2 mb-2 min-w-0">
                        <div className="flex items-center gap-1.5 text-[0.65rem] xs:text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-foreground/85 min-w-0">
                          <Layers className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="whitespace-nowrap">Engineered Specs</span>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[0.60rem] xs:text-[0.62rem] font-bold text-emerald-600">
                          <ShieldCheck className="h-2.5 w-2.5 shrink-0" />
                          <span className="whitespace-nowrap">Verified DFW</span>
                        </span>
                      </div>

                      {/* Specs Grid: 1-col mobile, 3-col sm+ */}
                      <div className="grid gap-2 grid-cols-1 sm:grid-cols-3">
                        {activeDetail.specs.map((spec, i) => (
                          <div
                            key={i}
                            className="group/spec flex flex-col justify-between rounded-xl border border-white/90 bg-white/85 p-2.5 text-left shadow-[0_2px_6px_-1px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:border-primary/40 hover:bg-white"
                          >
                            <div className="flex items-center justify-between text-[0.60rem] xs:text-[0.62rem] font-mono text-muted-foreground mb-1">
                              <span className="font-bold text-primary/80">SPEC // 0{i + 1}</span>
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-[0.72rem] font-bold text-foreground leading-tight">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── Bottom CTA Row ── */}
                  <div className="mt-3 pt-2.5 border-t border-border/60 min-w-0">
                    {/* Buttons row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={`/services/${activeService.slug}`}
                        className="group inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 hover:bg-primary px-3.5 xs:px-4 py-2 xs:py-2.5 text-[0.70rem] xs:text-[0.74rem] font-extrabold uppercase tracking-[0.08em] text-primary hover:text-white transition-all duration-300 active:scale-[0.98] shrink-0"
                      >
                        <span>Full Specs &amp; Details</span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                      </a>

                      <a
                        href="/free-estimate"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-4 xs:px-5 py-2 xs:py-2.5 text-[0.72rem] xs:text-[0.76rem] font-extrabold uppercase tracking-[0.10em] xs:tracking-[0.12em] text-primary-foreground shadow-[0_4px_16px_rgba(185,28,28,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.45)] transition-all duration-300 hover:brightness-110 active:scale-[0.98] shrink-0"
                      >
                        <span className="whitespace-nowrap">Free Estimate</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>

                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-white/90 px-3.5 py-2 xs:py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-foreground shadow-xs backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white hover:text-primary active:scale-[0.98] shrink-0"
                      >
                        <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="whitespace-nowrap">{site.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
