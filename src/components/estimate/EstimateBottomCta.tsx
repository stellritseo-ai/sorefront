import { ArrowUp, Phone, ArrowRight, Sparkles } from "lucide-react";
import { estimatePageData } from "@/data/estimate";
import { site } from "@/data/site";

export function EstimateBottomCta() {
  const { bottomCta } = estimatePageData;

  const scrollToForm = () => {
    const el = document.getElementById("estimate-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Centered Banner Container */}
        <div className="relative mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-amber-500/10 to-primary/10 p-8 sm:p-12 text-center shadow-lift backdrop-blur-xl space-y-4">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Zero-Obligation Proposal</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            {bottomCta.headline}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {bottomCta.body}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <span>{bottomCta.buttons.estimate}</span>
              <ArrowUp className="h-4 w-4" />
            </button>

            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground shadow-xs hover:border-primary/50 hover:bg-secondary active:scale-95 transition-all"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>{bottomCta.buttons.call}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
