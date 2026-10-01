import { motion } from "motion/react";
import {
  ShieldCheck,
  Clock,
  Award,
  MapPin,
  Building2,
  CheckCircle2,
  Wrench,
  Shield,
  Star,
  Phone,
  ArrowRight,
} from "lucide-react";
import { whyUs, site } from "@/data/site";
import whyusVideo from "@/assets/whyus.mp4";

const iconMap: Record<string, React.ElementType> = {
  "01": Building2,
  "02": Clock,
  "03": ShieldCheck,
  "04": Award,
  "05": MapPin,
  "06": CheckCircle2,
  "07": Wrench,
  "08": Shield,
};

const trustStats = [
  { value: "5+ Yrs", label: "DFW Track Record" },
  { value: "100%", label: "Commercial Only" },
  { value: "24/7", label: "Mobile Glaziers" },
  { value: "50mi", label: "DFW Metro Fleet" },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-14 sm:py-18 lg:py-24 bg-background border-b border-border/70 overflow-hidden">

      {/* Ambient Background Glows & Architectural Grid */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary/[0.04] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-champagne/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 z-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-5 lg:gap-12 xl:gap-16 items-center">

          {/* ── LEFT: Content (60%) ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col order-2 lg:order-1 lg:col-span-3"
          >
            {/* Eyebrow Badge with Pulse Beacon */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md mb-4 select-none">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Why Choose Us</span>
            </div>

            {/* Display Headline */}
            <h2 className="font-display text-foreground font-black tracking-tight leading-[1.14] text-2xl sm:text-3xl lg:text-[36px] xl:text-[38px] mt-0 mb-3.5 max-w-xl">
              Why Dallas Commercial Properties Trust{" "}
              <span className="bg-gradient-to-r from-primary via-red-500 to-[#b91c1c] bg-clip-text text-transparent">
                Sore Fronts
              </span>
              .
            </h2>

            {/* Subtext */}
            <p className="text-muted-foreground text-sm sm:text-[0.92rem] leading-relaxed mb-6 font-normal max-w-xl">
              Over five years of dedicated commercial glazing service across Dallas, Fort Worth, and a 50-mile radius — trusted by hundreds of retail storefronts, property managers, and commercial facilities.
            </p>

            {/* Feature Grid: 8 Precision Feature Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              {whyUs.map((f, i) => {
                const Icon = iconMap[f.n] || Building2;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="group flex items-start gap-3 p-3 rounded-xl border border-white/10 dark:border-white/10 bg-card/60 hover:border-primary/40 hover:bg-card/95 hover:shadow-[0_4px_20px_rgba(185,28,28,0.1)] backdrop-blur-md transition-all duration-250 cursor-default"
                  >
                    {/* Icon Container */}
                    <span className="mt-0.5 shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary transition-all duration-250 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_12px_rgba(185,28,28,0.5)]">
                      <Icon className="w-4 h-4" strokeWidth={2} />
                    </span>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-extrabold text-foreground leading-tight mb-0.5 group-hover:text-primary transition-colors duration-250">
                        {f.title}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed font-normal">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-charcoal hover:bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3 transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97] cursor-pointer border border-white/10"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#b91c1c] text-white border border-primary/40 text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3 transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-champagne" />
                <span>Call {site.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Media Card (40%) ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative order-1 lg:order-2 lg:col-span-2 lg:sticky lg:top-[100px]"
          >
            {/* Decorative Glow Rings */}
            <div aria-hidden className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-primary/15 via-transparent to-champagne/15 blur-xl pointer-events-none" />
            <div aria-hidden className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-primary/20 to-champagne/20 blur-md pointer-events-none" />

            {/* Media Container with Precision Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-12px_rgba(0,0,0,0.35)] border-2 border-white/80 dark:border-white/15 group h-full min-h-[280px] xs:min-h-[320px] sm:min-h-[380px] lg:h-[620px]">

              {/* CAD Technical Crosshair Ticks */}
              <span className="pointer-events-none absolute left-3.5 top-3.5 z-30 font-mono text-xs text-white/50">+</span>
              <span className="pointer-events-none absolute right-3.5 top-3.5 z-30 font-mono text-xs text-white/50">+</span>
              <span className="pointer-events-none absolute left-3.5 bottom-3.5 z-30 font-mono text-xs text-white/50">+</span>
              <span className="pointer-events-none absolute right-3.5 bottom-3.5 z-30 font-mono text-xs text-white/50">+</span>

              <video
                src={whyusVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Top-Left Trust Badge */}
              <div className="absolute top-4 left-4 z-20 bg-primary/95 border border-white/20 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <Star className="w-3 h-3 fill-champagne text-champagne" />
                <span>Dallas's #1 Commercial Choice</span>
              </div>

              {/* Top-Right Live Status Indicator */}
              <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-black/65 px-2.5 py-1 text-[8.5px] font-mono font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-md shadow-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span>Active DFW Fleet</span>
              </div>

              {/* Trust Stats Bar at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-2.5 xs:p-3 sm:p-5 z-20">
                <div className="bg-black/65 backdrop-blur-md border border-white/20 rounded-2xl px-1.5 xs:px-2 py-2 sm:px-4 sm:py-3.5 grid grid-cols-4 divide-x divide-white/20 shadow-xl">
                  {trustStats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center px-0.5 sm:px-1 text-center">
                      <span className="text-champagne font-black text-[11px] xs:text-[13px] sm:text-[16px] leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                        {s.value}
                      </span>
                      <span className="text-white/75 text-[7px] xs:text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-center leading-tight mt-0.5">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
