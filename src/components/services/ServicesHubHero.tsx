import { Sparkles, FileText, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServicesHubHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 bg-gradient-to-b from-background via-secondary/35 to-background border-b border-border/70">
      {/* Ambient Lighting & Dots */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-primary/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[460px] w-[460px] rounded-full bg-cyan-500/8 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb Navigation */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-3.5 py-1 text-[0.72rem] font-semibold text-muted-foreground backdrop-blur-md shadow-xs mb-5">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-primary font-bold">Commercial Services</span>
        </div>

        {/* Eyebrow */}
        <div className="block mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DFW Commercial Glazing Solutions</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.14] max-w-5xl mx-auto">
          Commercial Glass &amp; Storefront Services in Dallas.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal mb-10">
          From high-traffic entrance doors and custom storefront installations to round-the-clock emergency restorations, explore our specialized commercial glazing services across North Texas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <a
            href="/free-estimate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <FileText className="h-5 w-5" />
            <span>Request a Free Estimate</span>
          </a>

          <a
            href="tel:+14693605805"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-border/90 bg-card/90 px-8 py-4 text-base font-bold text-foreground backdrop-blur-md hover:bg-secondary hover:border-border shadow-xs active:scale-[0.98] transition-all"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span>Call (469) 360-5805</span>
          </a>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-border/80 text-left">
          <div className="rounded-2xl border border-border/80 bg-card/95 p-5 backdrop-blur-md shadow-xs">
            <p className="text-2xl sm:text-3xl font-black text-foreground">100%</p>
            <p className="text-sm font-bold text-foreground mt-0.5">Commercial Focus</p>
            <p className="text-xs text-primary font-semibold mt-0.5">B2B Exclusivity</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card/95 p-5 backdrop-blur-md shadow-xs">
            <p className="text-2xl sm:text-3xl font-black text-foreground">&lt; 60 min</p>
            <p className="text-sm font-bold text-foreground mt-0.5">Target Dispatch</p>
            <p className="text-xs text-primary font-semibold mt-0.5">24/7 Mobile Fleet</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card/95 p-5 backdrop-blur-md shadow-xs">
            <p className="text-2xl sm:text-3xl font-black text-foreground">50-Mile</p>
            <p className="text-sm font-bold text-foreground mt-0.5">DFW Radius</p>
            <p className="text-xs text-primary font-semibold mt-0.5">Dallas, Collin, Tarrant</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card/95 p-5 backdrop-blur-md shadow-xs">
            <p className="text-2xl sm:text-3xl font-black text-foreground">Grade 1</p>
            <p className="text-sm font-bold text-foreground mt-0.5">Heavy Hardware</p>
            <p className="text-xs text-primary font-semibold mt-0.5">Texas IBC &amp; ADA Verified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
