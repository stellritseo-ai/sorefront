import { motion } from "motion/react";
import {
  Target,
  TrendingUp,
  Network,
  Coins,
  Monitor,
  Settings,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { processSteps } from "@/data/site";
import { Reveal } from "./Reveal";

const stepIcons: LucideIcon[] = [
  Target,
  TrendingUp,
  Network,
  Coins,
  Monitor,
  Settings,
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-charcoal/[0.03] to-background border-t border-border/80"
    >
      {/* Background Ambient Glow & Architectural Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/[0.04] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[450px] w-[450px] rounded-full bg-amber-500/[0.03] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35"
      />

      {/* Embedded CSS for Central Laser Beam Pulse & Arc Glow */}
      <style>{`
        @keyframes railLaserFlow {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .rail-laser-flow {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(225, 29, 72, 0.45) 20%,
            rgba(13, 148, 136, 0.5) 40%,
            rgba(2, 132, 199, 0.5) 60%,
            rgba(234, 88, 12, 0.5) 80%,
            rgba(234, 179, 8, 0.5) 95%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: railLaserFlow 4.5s infinite linear;
        }
      `}</style>

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8 z-10">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <Reveal>
            {/* Pill Eyebrow with Beacon */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md mb-3 select-none">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Commercial Glazing Lifecycle</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-black tracking-tight text-foreground leading-[1.14]">
              How a Commercial{" "}
              <span className="bg-gradient-to-r from-primary via-red-500 to-rose-400 bg-clip-text text-transparent">
                Project Runs
              </span>
              .
            </h2>

            <p className="mt-2.5 sm:mt-3 mb-0 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-2xl mx-auto">
              Our structured 6-stage engineering roadmap ensures complete schedule certainty, building code compliance, and flawless turnkey delivery across Dallas-Fort Worth.
            </p>
          </Reveal>
        </div>

        {/* ── Desktop: Alternating 6-Section Timeline Roadmap ── */}
        <div className="relative w-full overflow-x-auto pb-0 pt-4 scrollbar-none snap-x hidden lg:block">
          <div className="min-w-[1020px] lg:min-w-0 relative select-none" style={{ height: "570px" }}>

            {/* Central Horizontal Axis Line (Track & Moving Laser Beam) */}
            <div className="absolute left-6 right-6 top-[285px] h-[7px] rounded-full bg-slate-200 dark:bg-slate-700/70 -translate-y-1/2 z-0 shadow-inner overflow-hidden">
              <div className="w-full h-full rail-laser-flow opacity-75" />
            </div>

            {/* 6 Columns Grid */}
            <div className="grid grid-cols-6 h-full relative z-10">
              {processSteps.map((step, idx) => {
                const isTop = idx % 2 === 0;
                const Icon = stepIcons[idx] ?? Target;

                return (
                  <div
                    key={step.n}
                    className="relative flex flex-col items-center justify-between h-full px-2 group cursor-default"
                  >
                    {isTop ? (
                      /* ── TOP SECTION (1, 3, 5) ─────────────────── */
                      <>
                        {/* Upper Half: Content & Circle Node */}
                        <div className="flex flex-col items-center justify-end w-full h-[285px] pb-0 transition-transform duration-300 group-hover:-translate-y-1.5">
                          {/* Heading & Description */}
                          <motion.div
                            initial={{ opacity: 0, y: -14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="text-center mb-3 max-w-[180px]"
                          >
                            <h3 className="font-display font-black text-base sm:text-[17px] text-foreground tracking-tight group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <p className="mt-1 text-[11px] sm:text-[11.5px] text-muted-foreground leading-snug font-normal italic">
                              {step.desc}
                            </p>
                          </motion.div>

                          {/* Circle Node with "X Section" Label to its Left */}
                          <div className="relative flex items-center justify-center my-1">
                            {/* "X Section" Label with Glowing Beacon Dot */}
                            <div className="absolute -left-18 sm:-left-22 flex items-center gap-1.5 font-mono text-xs sm:text-[13px] font-black text-foreground tracking-tight whitespace-nowrap">
                              <span className="relative flex h-2 w-2">
                                <span
                                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                                  style={{ backgroundColor: step.accentHex }}
                                />
                                <span
                                  className="relative inline-flex h-2 w-2 rounded-full"
                                  style={{ backgroundColor: step.accentHex }}
                                />
                              </span>
                              <span>{step.sectionLabel}</span>
                            </div>

                            {/* Circle Graphic with Outer Decorative Arc & 3D Glass Flare */}
                            <div className="relative flex items-center justify-center w-[112px] h-[112px]">
                              {/* Ambient Colored Halo on Hover */}
                              <div
                                aria-hidden
                                className="absolute inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-10"
                                style={{ backgroundColor: step.accentHex }}
                              />

                              {/* Outer Decorative Arc (Sweeps around Top) */}
                              <svg
                                viewBox="0 0 112 112"
                                className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-500 group-hover:scale-105"
                                fill="none"
                              >
                                <path
                                  d="M 16 80 A 45 45 0 1 1 96 80"
                                  stroke={step.accentHex}
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeOpacity="0.85"
                                  className="transition-all duration-300 group-hover:stroke-opacity-100"
                                />
                              </svg>

                              {/* Main Colored Circular Badge */}
                              <div
                                className="relative flex items-center justify-center w-[80px] h-[80px] rounded-full bg-card dark:bg-zinc-900 shadow-md transition-all duration-300 group-hover:scale-105 overflow-hidden"
                                style={{
                                  border: `5.5px solid ${step.accentHex}`,
                                  boxShadow: `0 8px 24px -4px ${step.glowColor}, inset 0 2px 4px rgba(255,255,255,0.35)`,
                                }}
                              >
                                {/* 3D Glass Glare Top Highlight */}
                                <div className="absolute top-0.5 inset-x-2 h-6 rounded-t-full bg-gradient-to-b from-white/35 dark:from-white/10 to-transparent pointer-events-none" />

                                {/* Inner Subtle Hairline Ring */}
                                <div className="absolute inset-1 rounded-full border border-border/60 pointer-events-none" />

                                {/* Icon with Hover Scale & Micro Tilt */}
                                <Icon
                                  className="w-6 h-6 transition-all duration-300 group-hover:scale-115 group-hover:-rotate-3"
                                  style={{ color: step.accentHex }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Small Junction Dot & Vertical Stem to Central Rail */}
                          <div className="flex flex-col items-center">
                            <span
                              className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                              style={{
                                backgroundColor: step.accentHex,
                                boxShadow: `0 0 8px ${step.glowColor}`,
                              }}
                            />
                            <span
                              className="w-[2px] h-8 sm:h-9 transition-all duration-300"
                              style={{ backgroundColor: step.accentHex }}
                            />
                          </div>
                        </div>

                        {/* Central Rail Pip with Radar Ping on Hover */}
                        <div className="absolute top-[285px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                          <div
                            className="relative w-4 h-4 rounded-full border-[2.5px] bg-card flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-125"
                            style={{
                              borderColor: step.accentHex,
                              boxShadow: `0 0 10px ${step.glowColor}`,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: step.accentHex }}
                            />
                          </div>
                        </div>

                        {/* Lower Half: Empty for Top Nodes */}
                        <div className="h-[285px] w-full" />
                      </>
                    ) : (
                      /* ── BOTTOM SECTION (2, 4, 6) ──────────────── */
                      <>
                        {/* Upper Half: Empty for Bottom Nodes */}
                        <div className="h-[285px] w-full" />

                        {/* Central Rail Pip with Radar Ping on Hover */}
                        <div className="absolute top-[285px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                          <div
                            className="relative w-4 h-4 rounded-full border-[2.5px] bg-card flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-125"
                            style={{
                              borderColor: step.accentHex,
                              boxShadow: `0 0 10px ${step.glowColor}`,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: step.accentHex }}
                            />
                          </div>
                        </div>

                        {/* Lower Half: Stem, Circle Node & Content */}
                        <div className="flex flex-col items-center justify-start w-full h-[285px] pt-0 transition-transform duration-300 group-hover:translate-y-1.5">
                          {/* Vertical Stem from Rail & Small Junction Dot */}
                          <div className="flex flex-col items-center">
                            <span
                              className="w-[2px] h-8 sm:h-9 transition-all duration-300"
                              style={{ backgroundColor: step.accentHex }}
                            />
                            <span
                              className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                              style={{
                                backgroundColor: step.accentHex,
                                boxShadow: `0 0 8px ${step.glowColor}`,
                              }}
                            />
                          </div>

                          {/* Circle Node with "X Section" Label to its Left */}
                          <div className="relative flex items-center justify-center my-1">
                            {/* "X Section" Label with Glowing Beacon Dot */}
                            <div className="absolute -left-18 sm:-left-22 flex items-center gap-1.5 font-mono text-xs sm:text-[13px] font-black text-foreground tracking-tight whitespace-nowrap">
                              <span className="relative flex h-2 w-2">
                                <span
                                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                                  style={{ backgroundColor: step.accentHex }}
                                />
                                <span
                                  className="relative inline-flex h-2 w-2 rounded-full"
                                  style={{ backgroundColor: step.accentHex }}
                                />
                              </span>
                              <span>{step.sectionLabel}</span>
                            </div>

                            {/* Circle Graphic with Outer Decorative Arc & 3D Glass Flare */}
                            <div className="relative flex items-center justify-center w-[112px] h-[112px]">
                              {/* Ambient Colored Halo on Hover */}
                              <div
                                aria-hidden
                                className="absolute inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-10"
                                style={{ backgroundColor: step.accentHex }}
                              />

                              {/* Outer Decorative Arc (Sweeps around Bottom) */}
                              <svg
                                viewBox="0 0 112 112"
                                className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-500 group-hover:scale-105"
                                fill="none"
                              >
                                <path
                                  d="M 16 32 A 45 45 0 1 0 96 32"
                                  stroke={step.accentHex}
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeOpacity="0.85"
                                  className="transition-all duration-300 group-hover:stroke-opacity-100"
                                />
                              </svg>

                              {/* Main Colored Circular Badge */}
                              <div
                                className="relative flex items-center justify-center w-[80px] h-[80px] rounded-full bg-card dark:bg-zinc-900 shadow-md transition-all duration-300 group-hover:scale-105 overflow-hidden"
                                style={{
                                  border: `5.5px solid ${step.accentHex}`,
                                  boxShadow: `0 8px 24px -4px ${step.glowColor}, inset 0 2px 4px rgba(255,255,255,0.35)`,
                                }}
                              >
                                {/* 3D Glass Glare Top Highlight */}
                                <div className="absolute top-0.5 inset-x-2 h-6 rounded-t-full bg-gradient-to-b from-white/35 dark:from-white/10 to-transparent pointer-events-none" />

                                {/* Inner Subtle Hairline Ring */}
                                <div className="absolute inset-1 rounded-full border border-border/60 pointer-events-none" />

                                {/* Icon with Hover Scale & Micro Tilt */}
                                <Icon
                                  className="w-6 h-6 transition-all duration-300 group-hover:scale-115 group-hover:-rotate-3"
                                  style={{ color: step.accentHex }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Heading & Description */}
                          <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="text-center mt-3 max-w-[180px]"
                          >
                            <h3 className="font-display font-black text-base sm:text-[17px] text-foreground tracking-tight group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <p className="mt-1 text-[11px] sm:text-[11.5px] text-muted-foreground leading-snug font-normal italic">
                              {step.desc}
                            </p>
                          </motion.div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ── Mobile Vertical Architectural Timeline (Crisp, Native Mobile UX) ── */}
        <div className="relative lg:hidden mt-6 space-y-4">
          {/* Vertical connecting laser line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[2.5px] rounded-full bg-slate-200 dark:bg-slate-700/70 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-rose-500 via-teal-500 via-sky-500 via-orange-500 to-amber-500 opacity-80" />
          </div>

          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] ?? Target;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative flex items-start gap-3.5"
              >
                {/* Step Circular Node */}
                <div
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card dark:bg-zinc-900 shadow-md transition-transform duration-300"
                  style={{
                    border: `3px solid ${step.accentHex}`,
                    boxShadow: `0 4px 16px -2px ${step.glowColor}`,
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: step.accentHex }} />
                </div>

                {/* Step Content Card */}
                <div className="flex-1 rounded-2xl border border-white/80 bg-white/70 dark:border-border/60 dark:bg-card/60 p-3.5 sm:p-4 shadow-soft backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className="font-mono text-[10px] font-black uppercase tracking-wider"
                      style={{ color: step.accentHex }}
                    >
                      STAGE {step.n} • {step.sectionLabel}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-sm sm:text-base text-foreground tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
