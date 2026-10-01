import { Building2, ShoppingBag, Store, Briefcase, ArrowRight, ShieldCheck, Sparkles, Phone, ArrowUpRight } from "lucide-react";
import welcomeVideo from "@/assets/welcome.mp4";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const commercialSectors = [
  {
    icon: Store,
    title: "Retail & Storefronts",
    tag: "High-Traffic",
    desc: "Heavy-duty aluminum entrance doors, tempered glass panels & expansive display facades.",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    tag: "Architectural",
    desc: "Executive glass entrances, structural curtain walls & interior acoustic glass partitions.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Centers",
    tag: "Turnkey Glazing",
    desc: "Multi-tenant storefront packages, panic hardware, closers & complete ADA compliance.",
  },
  {
    icon: Briefcase,
    title: "Commercial Facilities",
    tag: "Industrial Grade",
    desc: "Warehouses, hospitality centers & healthcare facility impact-resistant security glazing.",
  },
];

export function CommercialBanner() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      {/* Background Architectural Storefront Video */}
      <video
        src={welcomeVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
      />

      {/* Multi-Layered Optical Glass Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/82 to-black/88 backdrop-blur-[1.5px] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_45%_0%,rgba(185,28,28,0.24),transparent_70%)]" />

      <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">

          {/* Left Column: Vision Statement & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              {/* Premium Pill Badge with Caustic Sheen */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  Commercial Only · Dallas & DFW Metroplex
                </span>
              </div>

              {/* Display Headline */}
              <h2 className="font-display mt-2.5 sm:mt-3.5 mb-2 sm:mb-0 text-[29px] sm:text-[40px] font-black tracking-tight text-white leading-[1.18] sm:leading-[1.15]">
                Commercial Spaces.{" "}
                <span className="bg-gradient-to-r from-white via-white/95 to-champagne bg-clip-text text-transparent">
                  Engineered Performance.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/80 font-normal">
                From high-traffic retail storefronts and corporate headquarters to shopping centers across North Texas, we deliver turnkey commercial glass doors, entrances, and architectural glazing systems engineered for demanding business environments.
              </p>
            </Reveal>

            {/* Differentiating Fact Pills with Glass Backdrops */}
            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-[0.72rem] font-semibold text-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  <span>100% Commercial Only</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-[0.72rem] font-semibold text-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-champagne" />
                  <span>Heavy-Duty Aluminum Systems</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-[0.72rem] font-semibold text-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-md">
                  <Building2 className="h-3.5 w-3.5 text-cyan-300" />
                  <span>50-Mile DFW Coverage</span>
                </div>
              </div>
            </Reveal>

            {/* Call to Actions & Direct Phone Line */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-5.5 py-3 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_8px_28px_rgba(185,28,28,0.4)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_36px_rgba(185,28,28,0.5)] active:scale-[0.98]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-white shadow-soft backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/18 active:scale-[0.98]"
                >
                  <Phone className="h-3.5 w-3.5 text-champagne" />
                  <span>Call {site.phone}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Commercial Sectors Grid with Optical Caustic Glass */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
              {commercialSectors.map((sector, idx) => {
                const Icon = sector.icon;
                return (
                  <Reveal key={sector.title} delay={0.1 + idx * 0.05}>
                    <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)] p-4 sm:p-4.5 backdrop-blur-2xl shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)] hover:shadow-lift">

                      {/* Chromatic Dispersion Aura */}
                      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/20 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.2),inset_-1px_-1px_2px_rgba(244,114,182,0.2)]" />

                      {/* Specular Top Rim */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

                      <div className="relative z-10 flex items-start gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-[0.92rem] font-bold text-white tracking-wide">
                              {sector.title}
                            </h3>
                            <span className="rounded-md border border-white/15 bg-white/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white/70">
                              {sector.tag}
                            </span>
                          </div>

                          <p className="mt-1 text-[0.78rem] leading-relaxed text-white/75">
                            {sector.desc}
                          </p>
                        </div>

                        <div className="hidden sm:flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/40 transition-all duration-300 group-hover:text-white group-hover:border-white/40">
                          <ArrowUpRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
