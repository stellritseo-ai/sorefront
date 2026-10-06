import { ClipboardCheck, FileSpreadsheet, HardHat, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { estimatePageData } from "@/data/estimate";

const stepIcons = [ClipboardCheck, FileSpreadsheet, HardHat];

export function EstimateWhatToExpect() {
  const { whatToExpect } = estimatePageData;

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 lg:py-28 bg-secondary/35">
      {/* Background grid accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3.5 sm:space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>{whatToExpect.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
            {whatToExpect.headline}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {whatToExpect.body}
          </p>
        </div>

        {/* 3-Column Layout with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {whatToExpect.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || ClipboardCheck;

            return (
              <div
                key={step.num}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between"
              >
                {/* Decorative Top Accent Glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-amber-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Step Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-mono text-2xl font-black text-muted-foreground/35 group-hover:text-primary/40 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-primary leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Footer Checkmark */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                    Phase {step.num}
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-[11px]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Guaranteed
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
