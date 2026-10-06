import { motion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, Award, Clock3, Building2, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import ctaStorefrontImg from "@/assets/cta-storefront.jpg";
import { aboutPageData } from "@/data/about";
import { site } from "@/data/site";

const credentials = [
  { label: "15+ Years", desc: "Commercial Glazing", icon: Award },
  { label: "500+ Projects", desc: "Completed & Inspected", icon: Building2 },
  { label: "Licensed & Bonded", desc: "Texas State Verified", icon: ShieldCheck },
  { label: "24/7 Dispatch", desc: "Emergency Response", icon: Clock3 },
];

export function AboutHero() {
  const { hero } = aboutPageData;

  return (
    <section className="relative min-h-[92svh] sm:min-h-[96svh] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16">
      {/* Background High-Definition Commercial Storefront Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaStorefrontImg}
          alt="Completed commercial architectural storefront in Dallas TX"
          className="h-full w-full object-cover object-center scale-[1.03] transition-transform duration-1000 ease-out"
        />
        {/* Dark Architectural Multi-Stop Gradients for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(185,28,28,0.18),transparent_60%)]" />
      </div>

      {/* Optical Caustic Ambient Lighting */}
      <div className="pointer-events-none absolute -left-28 top-1/4 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[86rem] flex-1 flex-col justify-center px-4 xs:px-5 sm:px-8">
        
        {/* Breadcrumb Navigation Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[0.72rem] font-semibold text-white/90 backdrop-blur-xl shadow-xs"
        >
          <Link to="/" className="text-white/70 hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-amber-300 font-bold">About Us</span>
        </motion.div>

        {/* Section Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 self-start rounded-full border border-amber-400/35 bg-amber-400/15 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-amber-200 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
          </span>
          {hero.badge}
        </motion.div>

        {/* Primary Page Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-4 sm:mt-5 max-w-4xl text-[32px] xs:text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold tracking-[-0.03em] leading-[1.1] sm:leading-[1.12] text-white drop-shadow-[0_2px_22px_rgba(0,0,0,0.7)]"
        >
          Building Dallas’s Commercial Landscapes with{" "}
          <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">
            Precision and Trust.
          </span>
        </motion.h1>

        {/* Sub-headline Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg lg:text-[1.2rem] font-normal leading-relaxed text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
        >
          {hero.subheadline}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4"
        >
          {/* Primary Estimate Button */}
          <a
            href="/free-estimate"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-6 sm:px-7 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_8px_24px_rgba(185,28,28,0.45)] transition-all duration-300 hover:brightness-110 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_32px_rgba(185,28,28,0.55)] active:scale-[0.98]"
          >
            <span>{hero.ctaPrimary}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary Call Direct Button */}
          <a
            href={hero.phoneHref}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/12 px-6 sm:px-7 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-white shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_6px_20px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/22 active:scale-[0.98]"
          >
            <Phone className="h-4 w-4 text-amber-300 transition-transform duration-300 group-hover:-rotate-12" />
            <span>{hero.ctaSecondary}</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Trust Indicator Bar */}
      <div className="relative z-10 mx-auto mt-10 sm:mt-14 w-full max-w-[86rem] px-4 xs:px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border border-white/20 bg-black/60 p-3 sm:p-5 backdrop-blur-2xl shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)]"
        >
          {credentials.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/10 text-amber-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-extrabold text-white leading-tight">
                    {c.label}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-300 truncate">
                    {c.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
