import { Award, Building2, ShieldCheck, Clock3, MapPin } from "lucide-react";
import { aboutPageData } from "@/data/about";

const statIcons = [Award, Building2, ShieldCheck, Clock3];

export function AboutNumbers() {
  const { numbers } = aboutPageData;

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 lg:py-28 bg-gradient-to-b from-secondary/40 via-background to-secondary/30">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <span>{numbers.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
            {numbers.headline}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {numbers.subheadline}
          </p>
        </div>

        {/* 4 Large Expanded Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {numbers.stats.map((item, idx) => {
            const Icon = statIcons[idx] || Award;
            const isEmergency = idx === 3;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between"
              >
                {/* Top glow sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-amber-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Top Bar with Icon & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/8 text-primary shadow-xs transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>

                    {isEmergency ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-emerald-600">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Active
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70 font-mono">
                        Verified Metric
                      </span>
                    )}
                  </div>

                  {/* Gigantic Stat Numeral */}
                  <div className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-none group-hover:text-primary transition-colors">
                    {item.stat}
                  </div>

                  {/* Title / Primary Label */}
                  <h3 className="mt-3 text-base sm:text-lg font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>

                  {/* Descriptive Subtext */}
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.sub}
                  </p>
                </div>

                {/* Bottom Unit Tag */}
                <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-semibold text-muted-foreground font-mono">
                  <span>METRO RANGE</span>
                  <span className="text-primary font-bold">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Coverage Strip */}
        <div className="mt-10 sm:mt-14 rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-foreground">
                Serving the Entire 50-Mile Dallas–Fort Worth Metroplex
              </div>
              <div className="text-[11px] sm:text-xs text-muted-foreground">
                Dallas · Fort Worth · Plano · Irving · Arlington · Frisco · McKinney · Garland · Grand Prairie
              </div>
            </div>
          </div>

          <a
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Check Your Location
          </a>
        </div>

      </div>
    </section>
  );
}
