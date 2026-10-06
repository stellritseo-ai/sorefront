import { ShieldCheck, Clock3, Wrench, Handshake, CheckCircle2 } from "lucide-react";
import { aboutPageData } from "@/data/about";

const icons = [ShieldCheck, Clock3, Wrench, Handshake];

export function AboutValues() {
  const { values } = aboutPageData;

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 lg:py-28 bg-secondary/25">
      {/* Subtle grid background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      
      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <span>{values.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
            {values.headline}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {values.subheadline}
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {values.items.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;

            return (
              <div
                key={item.num}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between"
              >
                {/* Top Subtle Amber/Bronze Gradient Highlight on Hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Top Bar: Icon, Number & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-[10.5px] font-semibold text-muted-foreground border border-border/70">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        {item.badge}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-black text-muted-foreground/35 group-hover:text-primary/40 transition-colors">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-primary leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Body Description */}
                  <p className="mt-3 text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Card Footer Accent */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground/80 font-mono">
                    Standard {item.num} · Guaranteed
                  </span>
                  <span className="text-primary font-bold opacity-0 transition-opacity group-hover:opacity-100">
                    DFW Certified →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
