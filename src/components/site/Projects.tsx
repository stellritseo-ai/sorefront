import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  CheckCircle2,
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  Maximize2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { projectsData, CommercialProject, site } from "@/data/site";
import storefront from "@/assets/svc-storefront.jpg";
import facade from "@/assets/banner-facade.jpg";
import lobby from "@/assets/featured-lobby.jpg";
import doors from "@/assets/svc-doors.jpg";
import windows from "@/assets/svc-windows.jpg";
import hardware from "@/assets/svc-hardware.jpg";
import install from "@/assets/why-install.jpg";
import emergency from "@/assets/emergency-night.jpg";

const imgMap: Record<string, string> = {
  storefront,
  facade,
  lobby,
  doors,
  windows,
  hardware,
  install,
  emergency,
};

const filterTabs = [
  "All",
  "Storefronts",
  "Commercial Entrances",
  "Office Buildings",
  "Retail",
  "Glass Doors",
  "Glass Windows",
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<CommercialProject | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.cat === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-t border-border/80 bg-gradient-to-b from-background via-charcoal/10 to-background">
      {/* Ambient Lighting & Architectural Dot Grid */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8 z-10">
        
        {/* Section Header: Minimalist & Architectural */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal className="max-w-3xl xl:max-w-4xl">
            {/* Pill Eyebrow with Beacon */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md mb-3 select-none">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Commercial Glazing Portfolio</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black tracking-tight text-foreground leading-[1.14] whitespace-normal sm:whitespace-nowrap">
              Engineered Commercial{" "}
              <span className="bg-gradient-to-r from-primary via-red-500 to-rose-400 bg-clip-text text-transparent">
                Installations
              </span>
              .
            </h2>

            <p className="mt-2.5 sm:mt-3 mb-0 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal max-w-2xl">
              A closer look at real storefronts, corporate curtain walls, and heavy-traffic entrance doors engineered and installed across the Dallas-Fort Worth metroplex.
            </p>
          </Reveal>
        </div>

        {/* Category Filter Pills Bar with Smooth Gliding Layout Pill */}
        <Reveal delay={0.15}>
          <div className="mt-6 sm:mt-8 flex overflow-x-auto flex-nowrap sm:flex-wrap items-center gap-2 border-b border-border/60 pb-3 sm:pb-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  className="relative shrink-0 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer select-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary shadow-[0_0_18px_rgba(185,28,28,0.5),inset_0_1px_1.5px_rgba(255,255,255,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-white drop-shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Portfolio Grid: Exactly 4 Images Per Row on Desktop */}
        <div className="mt-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <AnimatePresence>
              {filteredProjects.map((p, index) => {
                const imgSource = imgMap[p.imgKey] || storefront;

                return (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/15 bg-card/80 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_36px_rgba(185,28,28,0.18),0_0_20px_rgba(185,28,28,0.12)] hover:border-primary/60 transition-all duration-300 cursor-pointer h-[340px] sm:h-[360px] lg:h-[380px]"
                    onClick={() => setSelectedProject(p)}
                  >
                    {/* Top Specular Edge Line */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />

                    {/* Specular Shimmer Sweep on Hover */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full z-20" />

                    {/* Architectural High-Resolution Imagery */}
                    <img
                      src={imgSource}
                      alt={`Commercial glazing installation - ${p.title}`}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-108"
                    />

                    {/* Optical Gradient Vignettes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-transparent pointer-events-none z-10" />

                    {/* CAD Technical Corner Ticks */}
                    <span className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-[0.65rem] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">+</span>
                    <span className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-[0.65rem] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">+</span>

                    {/* Top Badges Row */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between gap-2">
                      <span className="font-mono text-[0.60rem] font-bold uppercase tracking-wider text-white bg-black/65 border border-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                        {p.cat}
                      </span>

                      <span className="inline-flex items-center gap-1 font-mono text-[0.60rem] text-white/90 bg-black/65 border border-white/15 px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                        <MapPin className="h-2.5 w-2.5 text-primary" />
                        <span>{p.location.split(",")[0]}</span>
                      </span>
                    </div>

                    {/* Bottom Metadata & Inspection Action Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-4.5 z-20 flex items-end justify-between gap-2.5">
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[0.58rem] font-bold text-primary uppercase tracking-widest">
                          TEXAS SPEC {p.year}
                        </p>
                        <h3 className="font-display mt-0.5 text-[0.92rem] sm:text-[0.98rem] font-black text-white tracking-tight leading-snug group-hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] line-clamp-1">
                          {p.title}
                        </h3>
                        <p className="mt-0.5 text-[0.68rem] text-white/75 line-clamp-1 font-normal">
                          {p.spec}
                        </p>
                      </div>

                      {/* Interactive Inspection Action Disc */}
                      <div className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 shadow-lg">
                        <Maximize2 className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Consultation Ribbon */}
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-2xl border border-white/15 bg-card/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Texas Commercial Glazing Guarantee
                </p>
                <p className="text-xs text-muted-foreground">
                  All storefronts, curtain walls, and entrance systems engineered to Texas IBC and ADA Title III codes.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-secondary active:scale-[0.98]"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>Call {site.phone}</span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[0_4px_16px_rgba(185,28,28,0.35)] transition-all hover:brightness-110 active:scale-[0.98]"
              >
                <span>Request Project Bid</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>

      </div>

      {/* Lightbox Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-card/95 shadow-2xl backdrop-blur-2xl p-5 sm:p-7 z-10 text-foreground"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-primary transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 items-center">
                {/* Modal High-Res Image */}
                <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-white/10 bg-charcoal aspect-[4/3]">
                  <img
                    src={imgMap[selectedProject.imgKey] || storefront}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Modal Engineering Specs & Details */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[0.64rem] font-mono font-bold uppercase tracking-wider text-primary">
                      {selectedProject.cat} · {selectedProject.year}
                    </div>

                    <h3 className="font-display mt-2.5 text-xl sm:text-2xl font-black text-foreground tracking-tight leading-snug">
                      {selectedProject.title}
                    </h3>

                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span>{selectedProject.location}</span>
                    </p>

                    {/* Engineering Specs Block */}
                    <div className="mt-5 rounded-xl border border-border/80 bg-secondary/30 p-3.5 space-y-2">
                      <p className="text-[0.66rem] font-mono font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>Architectural Glazing Specifications</span>
                      </p>
                      <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                        {selectedProject.spec}
                      </p>
                      <div className="pt-2 border-t border-border/50 flex flex-wrap gap-1.5 text-[0.60rem] font-mono text-muted-foreground">
                        <span className="bg-background/80 px-2 py-0.5 rounded border border-border/60">ANSI Z97.1 IMPACT</span>
                        <span className="bg-background/80 px-2 py-0.5 rounded border border-border/60">TEXAS IBC COMPLIANT</span>
                        <span className="bg-background/80 px-2 py-0.5 rounded border border-border/60">ADA TITLE III</span>
                      </div>
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md hover:brightness-110 transition-all text-center"
                    >
                      <span>Request Similar Project Bid</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary transition-colors text-center"
                    >
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      <span>Call Now</span>
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
