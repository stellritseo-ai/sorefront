import { motion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, Clock, Award, MapPin, BadgeCheck } from "lucide-react";
import welcomeVideo from "@/assets/welcome.mp4";
import { site } from "@/data/site";

const facts = [
  { k: "5+", v: "Years Experience", detail: "DFW Commercial Mastery", icon: Award },
  { k: "50", v: "Mile Service Area", detail: "Dallas & Surrounding Areas", icon: MapPin },
  { k: "L·I·B", v: "Licensed & Insured", detail: "Fully Bonded Protection", icon: ShieldCheck },
  { k: "24/7", v: "Emergency Dispatch", detail: "Fast On-Site Response", icon: Clock },
  { k: "$0", v: "Free Estimates", detail: "Transparent Commercial Quotes", icon: BadgeCheck },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden flex flex-col justify-between">
      {/* Background Architectural Storefront Video */}
      <video
        src={welcomeVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-black/25 to-black/40 pointer-events-none" />

      {/* Optical Caustic Ambient Lighting */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-champagne/10 blur-[130px]" />

      {/* Main Content Area */}
      <div className="relative mx-auto flex w-full max-w-[86rem] flex-1 flex-col justify-end px-4 xs:px-5 sm:px-8 pt-24 sm:pt-36 pb-6 sm:pb-10">
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-20 xs:mt-24 sm:mt-28 md:mt-36 lg:mt-[180px] xl:mt-[215px] inline-flex items-center gap-2.5 self-start rounded-full border border-white/30 bg-white/12 px-3.5 xs:px-4 py-1.5 text-[0.68rem] xs:text-[0.72rem] font-semibold uppercase tracking-[0.16em] xs:tracking-[0.2em] text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
          </span>
          Commercial Glass • Dallas & DFW Metroplex
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-3 sm:mt-[10px] mb-[-7px] sm:mb-[-18px] max-w-4xl text-[30px] sm:text-[50px] font-extrabold tracking-[-0.03em] leading-[1.12] sm:leading-[1.15] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]"
        >
          Commercial Glass.
          <br />
          <span className="bg-gradient-to-r from-white via-white/95 to-white/70 bg-clip-text text-transparent">
            Engineered For Business.
          </span>
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 sm:mt-6 mb-0 max-w-2xl text-sm xs:text-base sm:text-lg lg:text-[1.125rem] font-light leading-relaxed text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
        >
          Professional commercial glass door, storefront, and curtain-wall installation, repair,
          replacement, and 24/7 rapid emergency dispatch throughout Dallas and surrounding areas.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          {/* Primary Free Estimate Button */}
          <a
            href="/free-estimate"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-5 py-3 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_6px_20px_rgba(185,28,28,0.38)] transition-all duration-300 hover:brightness-110 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_8px_26px_rgba(185,28,28,0.48)] active:scale-[0.98]"
          >
            Get a Free Estimate
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary Direct Phone Call Button */}
          <a
            href={site.phoneHref}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/12 px-5 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.5),0_6px_18px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-white/55 hover:bg-white/22 active:scale-[0.98]"
          >
            <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12" />
            Call {site.phone}
          </a>

          {/* Emergency Pill Badge */}
          <div className="hidden items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-md md:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            24/7 Rapid Emergency Response
          </div>
        </motion.div>
      </div>

      {/* 100% Full-Width Facts & Trust Pedestal (Infinite Scrolling Marquee with Hover Pause) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65 }}
        className="group/marquee relative z-10 w-full overflow-hidden pb-6 sm:pb-10 lg:pb-12"
      >
        {/* Infinite Horizontal Marquee Track with Alpha Edge Fade spanning 100% width */}
        <div className="mask-fade-edges relative z-10 flex w-full overflow-hidden py-1">
          <div className="flex w-max gap-4 sm:gap-5 animate-marquee group-hover/marquee:[animation-play-state:paused]">
            {[...facts, ...facts, ...facts, ...facts].map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={`${f.v}-${idx}`}
                  className="group/card relative flex w-[195px] xs:w-[220px] sm:w-[250px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.70)_0%,rgba(255,255,255,0.38)_100%)] p-3 xs:p-3.5 sm:p-4 backdrop-blur-2xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.50)_100%)] hover:shadow-lift"
                >
                  {/* Chromatic aberration edge dispersion aura (ior: 1.15, chromaticAberration: 0.05) */}
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/25 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.25),inset_-1px_-1px_2px_rgba(244,114,182,0.25),-1px_-1px_3px_rgba(56,189,248,0.15),1px_1px_3px_rgba(244,114,182,0.15)]" />

                  {/* Optical thickness caustic rim (thickness: 2, roughness: 0) */}
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/70 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.25),0_12px_36px_-10px_rgba(0,0,0,0.1)]" />

                  {/* Fluid glass transmission prismatic reflection sheen */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/45 via-white/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/75 to-pink-100/65" />

                  {/* Top row: Expanding Accent Hairline + Frosted Glass Icon Badge */}
                  <div className="relative z-10 flex items-center justify-between gap-2.5 mb-2">
                    <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-[#724c37] via-[#724c37]/60 to-transparent opacity-90 transition-all duration-300 group-hover/card:w-9 group-hover/card:opacity-100" />
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#724c37]/25 bg-white/85 text-[#724c37] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-300 group-hover/card:scale-105 group-hover/card:bg-white">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Main Metric Callout */}
                  <dt className="relative z-10 font-display text-xl sm:text-2xl font-black tracking-tight text-[#724c37] leading-none">
                    {f.k}
                  </dt>

                  {/* Primary Label */}
                  <dd className="relative z-10 mt-1 text-[0.78rem] sm:text-[0.82rem] font-bold text-[#724c37] tracking-[0.02em] leading-tight">
                    {f.v}
                  </dd>

                  {/* Supporting Subtitle */}
                  <dd className="relative z-10 mt-0.5 text-[0.66rem] sm:text-[0.68rem] font-semibold text-[#724c37]/85 leading-tight line-clamp-1">
                    {f.detail}
                  </dd>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
