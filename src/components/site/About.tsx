import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Building2, ShieldCheck, Clock3, MapPin, Phone, Layers, DoorOpen } from "lucide-react";
import aboutVideo from "@/assets/about.mp4";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Commercial-Only Focus",
    desc: "Exclusively dedicated to commercial storefronts, retail entrances, and corporate offices — never residential.",
    icon: Building2,
  },
  {
    title: "24/7 Emergency Dispatch",
    desc: "Round-the-clock emergency board-up, secure closure, and rapid glass replacement for unexpected break-ins or impacts.",
    icon: Clock3,
  },
  {
    title: "Turnkey Glazing Systems",
    desc: "Complete aluminum storefront packages, heavy tempered glass, door closers, pivots, and panic hardware.",
    icon: Layers,
  },
  {
    title: "Licensed, Bonded & Insured",
    desc: "Full Texas commercial compliance and coverage with transparent, zero-obligation upfront free estimates.",
    icon: ShieldCheck,
  },
];

export function About() {
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-background/95 to-secondary/30">
      {/* Ambient architectural lighting & grid accents */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Architectural Commercial Entrance Door Presentation */}
          <Reveal className="relative lg:col-span-5" delay={0.1}>
            <div className="relative mx-auto max-w-[465px] sm:max-w-[490px] lg:max-w-[490px]">
              
              {/* Commercial Architectural Door Casing & Structural Jamb */}
              <div
                className="group relative overflow-hidden rounded-b-2xl border-2 border-[#4b5262]/80 bg-gradient-to-b from-[#2c2f37] via-[#1a1c22] to-[#111216] p-2.5 sm:p-3 shadow-[0_28px_65px_-12px_rgba(0,0,0,0.65),inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.9)]"
                style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
              >
                {/* Weatherstrip Gasket Recess & Door Reveal Channel */}
                <div
                  className="relative overflow-hidden rounded-b-xl bg-black/75 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_1px_1px_rgba(255,255,255,0.12)] ring-1 ring-white/10"
                  style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
                >
                  
                  {/* Inner Door Leaf & Glass Vision Area */}
                  <div
                    className="relative aspect-[10/13.8] w-full overflow-hidden rounded-b-lg bg-charcoal"
                    style={{ borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}
                  >
                    {/* Storefront Video Playing Through Glass */}
                    <video
                      src={aboutVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Light Vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    
                    {/* Realistic Diagonal Architectural Glass Reflection */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.2)]" />

                    {/* Top Floating Live Status Pill (Centered under Architectural Arch) */}
                    <div className="absolute left-1/2 top-4 sm:top-5 z-25 -translate-x-1/2 flex items-center gap-2 rounded-full border border-white/85 bg-white/85 px-3.5 py-1.5 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95),0_4px_18px_rgba(0,0,0,0.18)] backdrop-blur-xl whitespace-nowrap">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-charcoal">
                        DFW Commercial Glazing
                      </span>
                    </div>

                    {/* Architectural Horizontal Transom Mullion Bar */}
                    <div className="pointer-events-none absolute inset-x-0 top-[28%] z-20 flex h-3.5 sm:h-4 items-center justify-between border-y border-[#525a6b]/70 bg-gradient-to-b from-[#3a3f4c] via-[#242831] to-[#16181f] px-3 shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.35)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400/80 shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.8)]" />
                      
                      {/* Concealed Overhead Door Closer Plate */}
                      <div className="flex items-center gap-1.5 rounded-[2px] border border-white/20 bg-[#15171c] px-2 py-0.5 shadow-inner">
                        <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)]" />
                        <span className="text-[0.52rem] font-mono font-bold uppercase tracking-widest text-neutral-300">
                          OVERHEAD CLOSER · HEAVY DUTY
                        </span>
                      </div>

                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-400/80 shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.8)]" />
                    </div>

                    {/* Interior Revealed Storefront Entrance Panel (Visible when Door Slides Open) */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isDoorOpen ? 1 : 0,
                        x: isDoorOpen ? 0 : 25,
                        scale: isDoorOpen ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`absolute right-2.5 xs:right-3 sm:right-4 top-[33%] bottom-5 sm:bottom-6 z-15 w-[145px] xs:w-[165px] sm:w-[190px] rounded-xl border border-white/70 bg-black/85 p-2.5 xs:p-3 sm:p-3.5 shadow-2xl backdrop-blur-xl flex flex-col justify-between ${
                        isDoorOpen ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                          </span>
                          <span className="text-[0.62rem] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                            <DoorOpen className="h-3 w-3" />
                            <span>Entrance Open</span>
                          </span>
                        </div>
                        <h4 className="mt-1.5 text-[0.8rem] font-extrabold text-white leading-snug">
                          Welcome to Sore Fronts
                        </h4>
                        <p className="mt-1 text-[0.62rem] text-white/75 leading-relaxed">
                          DFW 24/7 Commercial Glazing, Entrance Doors & Emergency Dispatch.
                        </p>
                      </div>

                      <div className="mt-3 flex flex-col gap-2 pt-2 border-t border-white/15">
                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-[#b91c1c] px-2.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 active:scale-95 transition-all"
                        >
                          <span>Get Free Quote</span>
                          <ArrowRight className="h-3 w-3" />
                        </a>
                        <button
                          type="button"
                          onClick={() => setIsDoorOpen(false)}
                          className="inline-flex items-center justify-center gap-1 text-[0.6rem] font-semibold text-white/70 hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          <span>Close Door ✕</span>
                        </button>
                      </div>
                    </motion.div>

                    {/* Operable Sliding Commercial Door Leaf */}
                    <motion.div
                      animate={{
                        x: isDoorOpen ? "-46%" : "0%",
                        rotateY: isDoorOpen ? -16 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 18,
                      }}
                      className="absolute inset-x-0 bottom-0 top-[28%] z-20 select-none"
                      style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
                    >
                      {/* Tempered Glass Pane Sheen & Bevel Rim */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-white/[0.12] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.3)] backdrop-blur-[0.5px]" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />

                      {/* Top Pivot Hardware */}
                      <div className="pointer-events-none absolute left-3 top-3.5 z-20 flex h-3.5 w-7 items-center justify-center rounded-[2px] border border-neutral-400/70 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 shadow-[0_2px_4px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.9)]">
                        <span className="h-1 w-1 rounded-full bg-neutral-700 shadow-inner" />
                      </div>

                      {/* Bottom Floor Pivot Hardware */}
                      <div className="pointer-events-none absolute left-3 bottom-[calc(2.5rem+6px)] sm:bottom-[calc(2.75rem+6px)] z-20 flex h-3.5 w-7 items-center justify-center rounded-[2px] border border-neutral-400/70 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 shadow-[0_2px_4px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.9)]">
                        <span className="h-1 w-1 rounded-full bg-neutral-700 shadow-inner" />
                      </div>

                      {/* Interactive Commercial Stainless Steel Ladder Pull Bar */}
                      <motion.div
                        drag="x"
                        dragConstraints={{ left: -140, right: 0 }}
                        dragElastic={0.06}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -30 || info.velocity.x < -60) {
                            setIsDoorOpen(true);
                          } else if (info.offset.x > 30 || info.velocity.x > 60) {
                            setIsDoorOpen(false);
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDoorOpen(!isDoorOpen);
                        }}
                        whileHover={{ scale: 1.02 }}
                        className="group/handle absolute right-5 sm:right-7 top-[12%] bottom-18 sm:bottom-20 z-30 flex w-8 flex-col items-center justify-between cursor-grab active:cursor-grabbing touch-pan-x"
                      >
                        {/* Interactive Drag & Slide Tooltip / Prompt */}
                        <AnimatePresence mode="wait">
                          {!isDoorOpen ? (
                            <motion.div
                              key="slide-to-open"
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: [0, -6, 0] }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{
                                opacity: { duration: 0.2 },
                                x: { repeat: Infinity, duration: 1.6, ease: "easeInOut" },
                              }}
                              className="pointer-events-none absolute -left-24 xs:-left-28 sm:-left-32 top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-white/80 bg-black/85 px-2.5 py-1 text-[0.60rem] xs:text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-xl backdrop-blur-md whitespace-nowrap"
                            >
                              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                              <span>← Slide to open</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="slide-to-close"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              className="pointer-events-none absolute -left-26 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-full border border-white/80 bg-black/85 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wider text-white shadow-xl backdrop-blur-md whitespace-nowrap"
                            >
                              <span>Slide to close →</span>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Top Standoff Mounting Boss */}
                        <div className="relative flex h-3 w-5 items-center justify-center rounded-[2px] border border-neutral-400 bg-gradient-to-b from-neutral-200 via-white to-neutral-300 shadow-[0_2px_6px_rgba(0,0,0,0.7)] group-hover/handle:brightness-110">
                          <span className="h-1.5 w-1.5 rounded-full bg-neutral-700/80 shadow-inner" />
                        </div>

                        {/* Main Round Tubular Pull Bar */}
                        <div className="relative flex-1 w-3 sm:w-3.5 my-[-2px] rounded-full bg-gradient-to-r from-[#9ca3af] via-[#ffffff] to-[#6b7280] shadow-[5px_6px_16px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.5)] border-x border-white/60 transition-all duration-300 group-hover/handle:shadow-[0_0_12px_rgba(255,255,255,0.5),5px_6px_16px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden">
                          {/* Specular Highlight Sheen */}
                          <div className="pointer-events-none absolute inset-y-0 left-0.5 w-0.5 bg-white/90 blur-[0.5px]" />
                          
                          {/* Laser-Etched "PULL" Commercial Indicator */}
                          <div className="select-none text-[0.52rem] font-black uppercase tracking-[0.3em] text-neutral-600/90 [writing-mode:vertical-lr] rotate-180 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                            {isDoorOpen ? "OPEN" : "PULL"}
                          </div>
                        </div>

                        {/* Bottom Standoff Mounting Boss */}
                        <div className="relative flex h-3 w-5 items-center justify-center rounded-[2px] border border-neutral-400 bg-gradient-to-b from-neutral-200 via-white to-neutral-300 shadow-[0_2px_6px_rgba(0,0,0,0.7)] group-hover/handle:brightness-110">
                          <span className="h-1.5 w-1.5 rounded-full bg-neutral-700/80 shadow-inner" />
                        </div>
                      </motion.div>

                      {/* Commercial Bottom Rail / ADA Aluminum Kickplate */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-10 sm:h-12 items-center justify-between border-t-2 border-[#5a6273]/80 bg-gradient-to-b from-[#3a3e47] via-[#24272e] to-[#15171b] px-4 shadow-[0_-4px_12px_rgba(0,0,0,0.5),inset_0_1.5px_1px_rgba(255,255,255,0.35)]">
                        {/* Safety Glazing Specification Stamp */}
                        <div className="flex items-center gap-1.5 text-[0.58rem] font-mono tracking-widest uppercase text-neutral-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/90 shadow-[0_0_6px_rgba(185,28,28,0.7)]" />
                          <span className="font-semibold">TEMPERED SAFETY GLASS</span>
                        </div>

                        {/* Mortise Deadbolt Cylinder Keyway */}
                        <div className="flex items-center gap-1.5">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-400 bg-gradient-to-tr from-neutral-400 via-neutral-100 to-white shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            <div className="h-2.5 w-1 rounded-[1px] bg-neutral-900 shadow-inner flex items-center justify-center">
                              <span className="h-1 w-0.5 bg-neutral-600 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Architectural GPS Coordinates Stamp */}
                      <div className="absolute bottom-13 sm:bottom-15 left-3 sm:left-4 z-20 hidden sm:flex items-center gap-2 rounded-lg border border-white/20 bg-black/65 px-2.5 py-1 text-[0.62rem] font-mono uppercase tracking-widest text-white/90 backdrop-blur-md shadow-md">
                        <MapPin className="h-3 w-3 text-primary" />
                        <span>Dallas, TX · 10830 N. Central</span>
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>

              {/* Extruded Aluminum ADA Door Threshold Saddle */}
              <div className="relative mx-auto -mt-1 h-3.5 w-[94%] rounded-b-md border-x border-b border-black/80 border-t border-white/25 bg-gradient-to-b from-[#6b7280] via-[#374151] to-[#1f2937] shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center px-4">
                {/* Fluted Non-Slip Grooves */}
                <div className="h-1 w-3/4 border-y border-black/50 opacity-60" />
              </div>

            </div>
          </Reveal>

          {/* Right Column: Editorial & Commercial Capabilities Grid */}
          <div className="lg:col-span-7">
            <Reveal>
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
                <Building2 className="h-3.5 w-3.5" />
                <span>About Sore Fronts Of Dallas</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display mt-2 sm:mt-[9px] text-[23px] sm:text-[35px] font-extrabold tracking-tight text-foreground leading-[1.2]">
                Built Around Precision, Security & Commercial Performance.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Lead Paragraph */}
              <p className="mt-2.5 sm:mt-3 mb-0 text-sm sm:text-[1.02rem] leading-relaxed text-muted-foreground font-normal max-w-2xl">
                Sore Fronts Of Dallas provides professional commercial glass door and storefront systems engineered to withstand demanding daily commercial traffic. With over 5 years of dedicated field experience, our certified glaziers service office complexes, retail centers, and commercial properties throughout the entire 50-mile Dallas-Fort Worth metroplex.
              </p>
            </Reveal>

            {/* 4 Commercial Feature Pillars Grid */}
            <Reveal delay={0.15}>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="group relative overflow-hidden rounded-xl border border-white/80 bg-white/60 dark:border-border/80 dark:bg-card/50 p-4 backdrop-blur-md shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/90 hover:shadow-lift"
                    >
                      {/* Top Specular Rim */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                      
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-4 w-4" strokeWidth={1.8} />
                        </div>
                        <h3 className="text-[0.88rem] font-bold text-foreground">
                          {p.title}
                        </h3>
                      </div>
                      
                      <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Call to Actions & Direct Contact Row */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-5 py-2.5 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_4px_16px_rgba(185,28,28,0.35)] transition-all duration-300 hover:brightness-110 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_6px_22px_rgba(185,28,28,0.45)] active:scale-[0.98]"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4.5 py-2.5 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-foreground shadow-soft backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-white active:scale-[0.98] dark:border-border dark:bg-card/70"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  <span>Call {site.phone}</span>
                </a>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
