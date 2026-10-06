import { Phone, FileText, Sparkles, Building2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projectsPageData } from "@/data/projects";

export function ProjectsHero() {
  const { hero } = projectsPageData;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 bg-gradient-to-b from-background via-secondary/35 to-background border-b border-border/70">
      {/* Ambient Architectural Lighting & Radial Grid */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-primary/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[460px] w-[460px] rounded-full bg-cyan-500/8 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb Navigation Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-3.5 py-1 text-[0.72rem] font-semibold text-muted-foreground backdrop-blur-md shadow-xs mb-5">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-primary font-bold">Projects Portfolio</span>
        </div>

        {/* Eyebrow Badge */}
        <div className="block mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{hero.eyebrow}</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.14] max-w-5xl mx-auto">
          {hero.headline}
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal mb-10">
          {hero.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          <a
            href={hero.ctaButtons.estimateHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
          >
            <FileText className="h-5 w-5" />
            <span>{hero.ctaButtons.estimate}</span>
          </a>

          <a
            href={hero.ctaButtons.callHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-border/90 bg-card/90 px-8 py-4 text-base font-bold text-foreground backdrop-blur-md hover:bg-secondary hover:border-border shadow-xs active:scale-[0.98] transition-all duration-200"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span>{hero.ctaButtons.call}</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-border/80 text-left">
          {hero.stats.map((st) => (
            <div
              key={st.label}
              className="rounded-2xl border border-border/80 bg-card/95 p-5 backdrop-blur-md shadow-md shadow-black/[0.02] transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <p className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                {st.value}
              </p>
              <p className="text-sm font-bold text-foreground mt-1">{st.label}</p>
              <p className="text-xs text-primary font-semibold mt-0.5">{st.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
