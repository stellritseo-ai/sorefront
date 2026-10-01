import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Layers,
  CheckCircle2,
  Crosshair,
  Activity,
} from "lucide-react";
import lobby from "@/assets/featured-lobby.jpg";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

interface HotspotLabel {
  id: string;
  n: string;
  cad: string;
  text: string;
  spec: string;
  code: string;
  metric: string;
  pos: string;
  tooltipPos?: "top" | "bottom";
  floatDuration: number;
  floatDelay: number;
}

const labels: HotspotLabel[] = [
  {
    id: "storefronts",
    n: "01",
    cad: "GLZ-01",
    text: "Storefronts",
    spec: "Curtain Wall & Flush Glazing",
    code: "ASTM E283 / E330",
    metric: "Design Pressure 45 PSF",
    pos: "right-[8%] top-[12%]",
    tooltipPos: "bottom",
    floatDuration: 4.8,
    floatDelay: 0,
  },
  {
    id: "entrances",
    n: "02",
    cad: "ENT-02",
    text: "Entrances",
    spec: "Continuous Hinges & Heavy Pivots",
    code: "ADA TITLE III",
    metric: "Cycle Tested: 1,000,000+",
    pos: "left-[48%] top-[33%]",
    tooltipPos: "top",
    floatDuration: 5.4,
    floatDelay: 0.8,
  },
  {
    id: "doors",
    n: "03",
    cad: "DOR-03",
    text: "Glass Doors",
    spec: "1/2\" Heavy Tempered Safety Glass",
    code: "ANSI Z97.1 IMPACT",
    metric: "CPSC 16 CFR 1201 Cat II",
    pos: "right-[5%] top-[37%]",
    tooltipPos: "bottom",
    floatDuration: 5.0,
    floatDelay: 0.4,
  },
  {
    id: "windows",
    n: "04",
    cad: "WIN-04",
    text: "Glass Windows",
    spec: "Low-E Insulated Thermal Units",
    code: "TEXAS SHGC & U-SPEC",
    metric: "U-Factor ≤ 0.28 · SHGC ≤ 0.23",
    pos: "right-[23%] bottom-[19%]",
    tooltipPos: "top",
    floatDuration: 5.8,
    floatDelay: 1.2,
  },
  {
    id: "replacement",
    n: "05",
    cad: "REP-05",
    text: "Replacement",
    spec: "Emergency Board-Up & Custom Fab",
    code: "24/7 DFW MOBILE DISPATCH",
    metric: "60-Min Target Mobilization",
    pos: "left-[41%] bottom-[16%]",
    tooltipPos: "top",
    floatDuration: 5.2,
    floatDelay: 0.6,
  },
  {
    id: "repair",
    n: "06",
    cad: "SVC-06",
    text: "Repair",
    spec: "Hydraulic Closer & Lock Tuning",
    code: "ANSI GRADE 1 HARDWARE",
    metric: "Zero-Sag Hinges & Panic Align",
    pos: "right-[7%] bottom-[30%]",
    tooltipPos: "bottom",
    floatDuration: 4.6,
    floatDelay: 1.0,
  },
];

export function Featured() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const activeItem = labels.find((l) => l.id === activeHotspot);

  return (
    <section id="featured" className="group/section relative overflow-hidden border-y border-border/80 bg-charcoal">
      {/* Cinematic Ken Burns Breathing Background */}
      <motion.img
        src={lobby}
        alt="Commercial office lobby with floor-to-ceiling glass doors and curtain wall glazing"
        width={1920}
        height={1088}
        loading="lazy"
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dynamic Architectural Laser Scanline */}
      <motion.div
        initial={{ top: "0%", opacity: 0 }}
        animate={{
          top: ["0%", "100%", "0%"],
          opacity: [0, 0.45, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_14px_rgba(185,28,28,0.8)] z-10"
      />

      {/* Multi-Layered Optical Glass Shadows & Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      <div className="rule-grid pointer-events-none absolute inset-0 opacity-20" />

      {/* Floating Animated Caustic Light Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-10 top-1/4 h-[400px] w-[500px] rounded-full bg-primary blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-16 bottom-1/4 h-[350px] w-[450px] rounded-full bg-cyan-500 blur-3xl"
      />

      {/* Container calibrated with responsive padding and sleek compact height */}
      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8 py-14 sm:py-18 lg:py-22 min-h-[30rem] sm:min-h-[33rem] lg:min-h-[35.5rem] flex flex-col justify-between">
        
        {/* Top Content Row: Editorial Headline & Actions */}
        <div className="max-w-xl xl:max-w-2xl">
          <Reveal>
            {/* Pill Badge with Pulse Beacon */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[0.70rem] font-semibold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Architectural Glazing Studio</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display mt-2.5 text-2xl sm:text-[50px] font-black text-white tracking-tight leading-[1.14] drop-shadow-sm">
              Glass systems that define the first impression.
            </h2>

            {/* Lead Description */}
            <p className="mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-white/85 font-normal">
              From multi-story curtain walls to heavy-traffic commercial entrance doors, every installation is engineered for structural resilience, Texas thermal standards, and modern aesthetic distinction.
            </p>

            {/* Action Buttons Suite */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-5 py-2.5 text-[0.74rem] font-extrabold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_4px_20px_rgba(185,28,28,0.4),inset_0_1px_1.5px_rgba(255,255,255,0.45)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span>Request Consultation</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 px-4 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-black/65 active:scale-[0.98]"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>Call {site.phone}</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Desktop & Tablet: Interactive Floating Animated Hotspot Buttons */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {labels.map((l, i) => {
            const isHovered = activeHotspot === l.id;
            const hasActiveOther = activeHotspot !== null && !isHovered;

            return (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 + i * 0.07 }}
                className={`absolute pointer-events-auto transition-all duration-300 ${l.pos} ${
                  hasActiveOther ? "opacity-40 scale-95" : "opacity-100 z-20"
                } ${isHovered ? "z-30" : ""}`}
              >
                {/* Zero-Gravity Subtle Ambient Floating Animation */}
                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: l.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: l.floatDelay,
                  }}
                  className="relative group"
                >
                  {/* Rotating Target Reticle around the Hotspot */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    className={`pointer-events-none absolute -inset-2 rounded-full border border-dashed transition-opacity duration-300 ${
                      isHovered
                        ? "opacity-100 border-primary"
                        : "opacity-0 group-hover:opacity-100 border-white/25"
                    }`}
                  />

                  {/* Interactive Button */}
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setActiveHotspot(l.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                    className={`relative flex items-center gap-2.5 overflow-hidden rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.35)] backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? "border-primary bg-black/95 text-white shadow-[0_0_30px_rgba(185,28,28,0.7),inset_0_1px_2px_rgba(255,255,255,0.7)]"
                        : "border-white/25 bg-black/70 text-white/90 hover:border-primary hover:bg-black/90 hover:text-white"
                    }`}
                  >
                    {/* Glowing Top Specular Line */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />

                    {/* Specular Shimmer Pass on Hover */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                    {/* Radar Pulse Beacon with Radiating Sonar Ring */}
                    <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 group-hover:bg-red-400" />
                      <motion.span
                        animate={{ scale: [1, 2.3], opacity: [0.6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        className="pointer-events-none absolute -inset-1 rounded-full border border-primary/60 group-hover:border-red-400"
                      />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125 group-hover:bg-red-400 shadow-[0_0_8px_rgba(185,28,28,0.9)]" />
                    </span>

                    {/* Numeric Monospace Tag */}
                    <span className="font-mono text-[0.62rem] font-extrabold text-white/50 transition-colors group-hover:text-primary">
                      {l.n}
                    </span>

                    {/* Text Label */}
                    <span className="font-display font-extrabold tracking-wider text-white transition-colors">
                      {l.text}
                    </span>

                    {/* Interactive Arrow Indicator */}
                    <ArrowUpRight className="h-3 w-3 text-white/50 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-primary" />
                  </motion.a>

                  {/* Spring-Animated Floating Spec Tooltip Card */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: l.tooltipPos === "top" ? 8 : -8, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: l.tooltipPos === "top" ? 6 : -6, scale: 0.94 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 z-40 ${
                          l.tooltipPos === "top" ? "bottom-full mb-2.5" : "top-full mt-2.5"
                        }`}
                      >
                        <div className="min-w-[210px] rounded-2xl border border-white/25 bg-black/95 p-3 text-center shadow-[0_16px_36px_rgba(0,0,0,0.7),0_0_24px_rgba(185,28,28,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-2xl">
                          <div className="flex items-center justify-center gap-1.5 text-[0.60rem] font-mono font-bold uppercase tracking-wider text-primary">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>{l.code}</span>
                          </div>
                          <p className="mt-1 text-[0.74rem] font-bold text-white leading-snug">
                            {l.spec}
                          </p>
                          <div className="mt-1.5 inline-block rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[0.58rem] font-mono text-cyan-300 uppercase tracking-wider">
                            {l.metric}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Small Screens: Interactive Floating Capability Grid */}
        <div className="mt-8 lg:hidden">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/60 mb-2.5 flex items-center gap-1.5">
            <Layers className="h-3 w-3 text-primary" />
            <span>Interactive Architectural Systems</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {labels.map((l) => (
              <a
                key={l.id}
                href="#services"
                className="group flex flex-col justify-between rounded-xl border border-white/20 bg-black/60 p-2.5 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-primary/80 hover:bg-black/80 hover:shadow-[0_0_20px_rgba(185,28,28,0.5)] active:scale-95"
              >
                <div className="flex items-center justify-between text-[0.62rem] font-mono text-white/60">
                  <span className="font-bold text-primary">{l.n}</span>
                  <ArrowUpRight className="h-3 w-3 text-white/50 group-hover:rotate-45 group-hover:text-primary transition-transform" />
                </div>
                <span className="mt-1.5 text-[0.74rem] sm:text-[0.76rem] font-extrabold text-white uppercase tracking-wider truncate">
                  {l.text}
                </span>
                <span className="mt-0.5 text-[0.62rem] sm:text-[0.64rem] text-white/70 truncate">
                  {l.spec}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Telemetry HUD Console */}
        <div className="mt-6 pt-3.5 border-t border-white/15 hidden lg:flex items-center justify-between gap-4">
          {/* Live Telemetry Display */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-primary">
              <Crosshair className="h-3.5 w-3.5 animate-spin [animation-duration:12s]" />
            </div>

            <div className="min-h-[26px] flex items-center min-w-0">
              <AnimatePresence mode="wait">
                {activeItem ? (
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.16 }}
                    className="flex items-center gap-2 text-xs text-white truncate"
                  >
                    <span className="font-mono text-[0.66rem] font-black text-primary uppercase tracking-wider shrink-0">
                      {activeItem.cad} //
                    </span>
                    <span className="font-extrabold text-white uppercase tracking-wider shrink-0">
                      {activeItem.text}:
                    </span>
                    <span className="text-white/80 font-medium truncate">
                      {activeItem.spec}
                    </span>
                    <span className="font-mono text-[0.60rem] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                      {activeItem.code}
                    </span>
                    <span className="hidden xl:inline-block font-mono text-[0.60rem] text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full shrink-0">
                      {activeItem.metric}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.16 }}
                    className="flex items-center gap-2 text-xs text-white/60"
                  >
                    <Activity className="h-3 w-3 text-primary animate-pulse shrink-0" />
                    <span className="font-mono text-[0.64rem] uppercase tracking-wider">
                      INTERACTIVE ARCHITECTURAL HUD · HOVER ANY GLAZING NODE TO VIEW SPECS
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Quick Glazier System Tabs */}
          <div className="flex items-center gap-1.5 shrink-0">
            {labels.map((l) => {
              const isSelected = activeHotspot === l.id;
              return (
                <button
                  key={l.id}
                  type="button"
                  onMouseEnter={() => setActiveHotspot(l.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setActiveHotspot(activeHotspot === l.id ? null : l.id)}
                  className={`px-2.5 py-1 rounded-md text-[0.62rem] font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-white shadow-[0_0_12px_rgba(185,28,28,0.7)]"
                      : "bg-white/5 hover:bg-white/15 text-white/60 hover:text-white border border-white/10"
                  }`}
                >
                  {l.n} {l.text}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
