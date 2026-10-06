import {
  Phone,
  ArrowRight,
  Clock,
  ShieldAlert,
  Zap,
  FileCheck2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { LiquidGlass } from "@liquidglass/react";
import lightBg from "@/assets/emergency-light-bg.jpg";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const emergencyFeatures = [
  {
    icon: Clock,
    title: "45–60 Min Response",
    desc: "GPS-tracked mobile emergency glazier units ready for immediate rapid deployment across North Texas.",
    tag: "Priority Dispatch",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Board-Up",
    desc: "Heavy-duty exterior plywood and structural framing to secure retail inventory and protect premises.",
    tag: "Immediate Security",
  },
  {
    icon: Zap,
    title: "Turnkey Glass Stock",
    desc: "Direct inventory of commercial tempered, laminated, insulated and architectural safety glass panels.",
    tag: "Rapid Fabrication",
  },
  {
    icon: FileCheck2,
    title: "Insurance Claim Scope",
    desc: "Comprehensive itemized documentation, high-res damage photos, and direct commercial adjuster support.",
    tag: "Direct Billing",
  },
];

const dispatchHighlights = [
  {
    icon: Truck,
    label: "Mobile Glazier Fleet",
    value: "50-Mile DFW Radius",
    sub: "Dallas · Plano · Irving · Fort Worth",
  },
  {
    icon: Clock,
    label: "Average Arrival Time",
    value: "45 Minutes",
    sub: "Guaranteed priority commercial dispatch",
  },
  {
    icon: ShieldCheck,
    label: "Certified Compliance",
    value: "IBC & ADA Specs",
    sub: "Fully licensed, bonded & commercial insured",
  },
];

export function Emergency() {
  return (
    <section
      id="emergency"
      className="relative overflow-hidden py-12 sm:py-20 lg:py-24"
    >
      {/* ── High-Resolution Commercial Glass Storefront Background ── */}
      <img
        src={lightBg}
        alt="Modern commercial storefront glass facade and entrance during bright daylight"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center scale-[1.02] transition-transform duration-[3s] ease-out hover:scale-100"
      />

      {/* ── Top & Bottom Color Gradients Matching Adjacent Sections ── */}
      {/* Top transition: seamlessly blends into Process section's background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-44 lg:h-52 bg-gradient-to-b from-background via-background/85 to-transparent z-[1]" />

      {/* Bottom transition: seamlessly blends into Reviews section's background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-44 lg:h-52 bg-gradient-to-t from-background via-background/85 to-transparent z-[1]" />

      {/* Directional text readability luminance on the left side */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent z-[1]" />

      {/* Ambient Architectural Lighting & Technical CAD Mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[140px] z-[1]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-champagne/[0.04] blur-[140px] z-[1]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.18)_1px,transparent_1px)] [background-size:24px_24px] opacity-25 z-[1]"
      />

      {/* ── Main Foreground Content (Safely on Top at z-10) ── */}
      <div className="relative z-10 mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* ── LEFT COLUMN: Headline, Details & 4 Liquid Glass Cards (7 Cols) ── */}
          <div className="lg:col-span-7">
            <Reveal>
              {/* Luminous Glass Pill Badge with Specular Reflection */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-white/85 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-foreground shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>24/7 Priority Emergency Service · Dallas & DFW</span>
              </div>

              {/* Display Headline */}
              <h2 className="font-display font-extrabold tracking-tight text-foreground leading-[1.14] text-[24px] sm:text-[35px] mt-2.5 mb-2 sm:mb-0">
                Commercial Glass Emergency?{" "}
                <span className="block mt-1 bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
                  Immediate Dispatch & Secure Board-Up.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-800 sm:text-[0.95rem] font-normal">
                Broken entrance doors, compromised storefront glass, vandalism, or severe weather impacts halt business operations instantly. Sore Fronts Of Dallas mobilizes specialized commercial glazing teams 24 hours a day, 7 days a week across the DFW Metroplex to secure, board up, and permanently restore your facility.
              </p>
            </Reveal>

            {/* 4 Liquid Glass Feature Cards (2x2 Grid matching Navbar Liquid Glass) */}
            <Reveal delay={0.14}>
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {emergencyFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <LiquidGlass
                      key={feat.title}
                      borderRadius={14}
                      blur={5}
                      contrast={1.08}
                      brightness={1.2}
                      saturation={1.5}
                      displacementScale={0.8}
                      elasticity={0.6}
                      shadowIntensity={0.01}
                      className="group relative overflow-hidden !block w-full transition-all duration-300 backdrop-blur-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.38)_100%)] shadow-soft hover:shadow-lift hover:-translate-y-0.5 px-3.5 py-3 cursor-default"
                    >
                      {/* Chromatic aberration edge dispersion aura */}
                      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/20 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.25),inset_-1px_-1px_2px_rgba(244,114,182,0.25),-1px_-1px_3px_rgba(56,189,248,0.15),1px_1px_3px_rgba(244,114,182,0.15)]" />

                      {/* Optical thickness caustic rim */}
                      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/65 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.25),0_12px_36px_-10px_rgba(0,0,0,0.06)]" />

                      {/* Fluid glass transmission prismatic reflection sheen */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/70 to-pink-100/60" />

                      <div className="relative z-10 flex items-start gap-3">
                        {/* Micro Glass Icon Cube */}
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-white/90 text-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5">
                            <h3 className="text-[0.84rem] font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                              {feat.title}
                            </h3>
                            <span className="rounded-md border border-border/60 bg-muted/60 px-1.5 py-0.5 text-[0.6rem] font-semibold text-muted-foreground shadow-sm backdrop-blur-md">
                              {feat.tag}
                            </span>
                          </div>

                          <p className="mt-1 text-[0.74rem] leading-snug text-slate-600 font-normal">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    </LiquidGlass>
                  );
                })}
              </div>
            </Reveal>

            {/* Left CTAs with Optical Sheen */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5">
                <a
                  href={site.phoneHref}
                  className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 overflow-hidden rounded-full bg-charcoal hover:bg-black px-5 sm:px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-lift hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
                >
                  <Phone className="h-4 w-4 text-champagne shrink-0" />
                  <span>
                    <span className="hidden xs:inline">Call Emergency Line </span>
                    <span className="xs:hidden">Emergency: </span>
                    {site.phone}
                  </span>
                </a>

                <a
                  href="/services/emergency-commercial-glass-service"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-white/90 px-5 sm:px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
                >
                  <span>Emergency Service Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT COLUMN: 5th Card - Master Liquid Glass Dispatch Console (5 Cols) ─── */}
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <LiquidGlass
                borderRadius={24}
                blur={5}
                contrast={1.08}
                brightness={1.2}
                saturation={1.5}
                displacementScale={1}
                elasticity={0.6}
                shadowIntensity={0.01}
                className="relative overflow-hidden !block w-full transition-all duration-300 backdrop-blur-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.38)_100%)] shadow-lift p-6 sm:p-7"
              >
                {/* Chromatic aberration edge dispersion aura */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/20 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.25),inset_-1px_-1px_2px_rgba(244,114,182,0.25),-1px_-1px_3px_rgba(56,189,248,0.15),1px_1px_3px_rgba(244,114,182,0.15)]" />

                {/* Optical thickness caustic rim */}
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/65 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.25),0_24px_60px_-15px_rgba(0,0,0,0.08)]" />

                {/* Fluid glass transmission prismatic reflection sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/70 to-pink-100/60" />

                {/* Architectural CAD Corner Ticks */}
                <span className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-[11px] text-slate-400/80">+</span>
                <span className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-[11px] text-slate-400/80">+</span>
                <span className="pointer-events-none absolute left-3 bottom-3 z-20 font-mono text-[11px] text-slate-400/80">+</span>
                <span className="pointer-events-none absolute right-3 bottom-3 z-20 font-mono text-[11px] text-slate-400/80">+</span>

                {/* Console Content */}
                <div className="relative z-10">
                  {/* Card Header Status */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/80 px-3 py-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-emerald-800">
                        Live Dispatch Active
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[0.68rem] font-semibold text-muted-foreground">
                      <MapPin className="h-3 w-3 text-primary" />
                      DFW Metro Corridor
                    </span>
                  </div>

                  {/* Primary Emergency Hotline Action Box (Executive Obsidian Jewel) */}
                  <div className="mt-5">
                    <a
                      href={site.phoneHref}
                      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal via-[#1f2227] to-charcoal p-5 text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_44px_rgba(0,0,0,0.28)] active:scale-[0.99]"
                    >
                      {/* Glass Sheen Top Reflection */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent" />

                      <div className="relative z-10 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-champagne">
                            24/7 Rapid Emergency Hotline
                          </p>
                          <p className="mt-1 font-display text-2xl font-black tracking-tight text-white sm:text-[28px] drop-shadow-sm">
                            {site.phone}
                          </p>
                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-champagne shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                          <Phone className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="relative z-10 mt-3 flex items-center justify-between border-t border-white/15 pt-2.5 text-[0.68rem] font-medium text-white/75">
                        <span>Zero automated phone trees</span>
                        <span className="flex items-center gap-1 font-semibold text-white group-hover:text-champagne transition-colors">
                          <span>Tap to Call</span>
                          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Dispatch Highlights List with Glass Cards */}
                  <div className="mt-4 space-y-2.5">
                    {dispatchHighlights.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="group/item flex items-center gap-3 rounded-xl border border-white/80 bg-white/70 p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-200 hover:bg-white hover:border-primary/30"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-secondary/80 text-foreground shadow-sm backdrop-blur-sm transition-transform duration-200 group-hover/item:scale-105 group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                            <ItemIcon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-[0.74rem] font-bold text-foreground">
                                {item.label}
                              </p>
                              <span className="text-[0.72rem] font-extrabold text-foreground">
                                {item.value}
                              </span>
                            </div>
                            <p className="text-[0.66rem] text-muted-foreground truncate">
                              {item.sub}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Trust & Verification Badges with Glass Tiles */}
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border/60 pt-4 text-center">
                    <div className="rounded-xl border border-border/60 bg-white/70 p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)] backdrop-blur-md">
                      <p className="text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground">Scope</p>
                      <p className="mt-0.5 text-[0.72rem] font-extrabold text-foreground">100% Commercial</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-white/70 p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)] backdrop-blur-md">
                      <p className="text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground">Compliance</p>
                      <p className="mt-0.5 text-[0.72rem] font-extrabold text-foreground">IBC & ADA Specs</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-white/70 p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)] backdrop-blur-md">
                      <p className="text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground">Assurance</p>
                      <p className="mt-0.5 text-[0.72rem] font-extrabold text-foreground">Licensed & Bonded</p>
                    </div>
                  </div>
                </div>
              </LiquidGlass>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
