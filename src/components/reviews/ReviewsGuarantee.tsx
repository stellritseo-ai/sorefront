import { Shield, Clock3, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { reviewsPageData } from "@/data/reviews";

const operationalGuarantees = [
  {
    title: "Transparent Communication",
    desc: "Direct access to your dedicated glazier project manager with daily updates and clear schedules.",
    icon: Award,
  },
  {
    title: "Rapid Mobilization",
    desc: "24/7 emergency units dispatched immediately to secure shattered glass and protect your facility.",
    icon: Clock3,
  },
  {
    title: "Uncompromising Craft",
    desc: "Precision fabrication, Grade 1 hardware, and 100% adherence to Dallas & Texas building codes.",
    icon: Shield,
  },
];

export function ReviewsGuarantee() {
  const { guarantee } = reviewsPageData;

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 lg:py-28 bg-gradient-to-b from-background via-secondary/25 to-background">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute -left-36 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary/6 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-amber-500/6 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:26px_26px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header & Body Text */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>{guarantee.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
            {guarantee.headline}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
            <p className="font-medium text-foreground/90">
              {guarantee.paragraphs[0]}
            </p>
            <p>
              {guarantee.paragraphs[1]}
            </p>
            <p className="font-semibold text-primary">
              {guarantee.paragraphs[2]}
            </p>
          </div>
        </div>

        {/* 3 Operational Guarantees Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-5xl mx-auto">
          {operationalGuarantees.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:border-primary/40"
              >
                {/* Accent top gradient */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-amber-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary mb-4 transition-transform group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Guaranteed Commercial Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
