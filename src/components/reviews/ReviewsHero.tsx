import { motion } from "motion/react";
import { Star, ArrowRight, Phone, ShieldCheck, CheckCircle2, Building2, Award } from "lucide-react";
import { Link } from "@tanstack/react-router";
import svcStorefrontImg from "@/assets/svc-storefront.jpg";
import { reviewsPageData } from "@/data/reviews";
import { site } from "@/data/site";

export function ReviewsHero() {
  const { hero } = reviewsPageData;

  return (
    <section className="relative min-h-[88svh] sm:min-h-[92svh] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background Subtle Storefront Architectural Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={svcStorefrontImg}
          alt="Completed commercial storefront in Dallas TX"
          className="h-full w-full object-cover object-center scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Optical Caustic Ambient Lighting */}
      <div className="pointer-events-none absolute -left-28 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-[450px] w-[450px] rounded-full bg-primary/8 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:30px_30px] opacity-30" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[86rem] flex-1 flex-col justify-center px-4 xs:px-5 sm:px-8">
        
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 self-start rounded-full border border-border/80 bg-card/80 px-3.5 py-1 text-[0.72rem] font-semibold text-muted-foreground backdrop-blur-md shadow-xs"
        >
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-primary font-bold">Client Reviews</span>
        </motion.div>

        {/* Section Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 self-start rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-amber-700 shadow-xs backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          Verified Commercial Feedback · DFW Metroplex
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-4 sm:mt-5 max-w-4xl text-[32px] xs:text-[38px] sm:text-[50px] lg:text-[60px] font-extrabold tracking-[-0.03em] leading-[1.12] sm:leading-[1.12] text-foreground"
        >
          Trusted by Dallas Property Owners{" "}
          <span className="bg-gradient-to-r from-primary via-amber-600 to-primary bg-clip-text text-transparent">
            &amp; Contractors.
          </span>
        </motion.h1>

        {/* Sub-headline Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg lg:text-[1.18rem] font-normal leading-relaxed text-muted-foreground"
        >
          {hero.subheadline}
        </motion.p>

        {/* Prominent Aggregate Rating Badge Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 sm:mt-8 inline-flex flex-wrap items-center gap-4 sm:gap-6 self-start rounded-2xl border border-amber-500/35 bg-card p-4 sm:p-5 shadow-lift"
        >
          {/* Big Rating Number & Stars */}
          <div className="flex items-center gap-3.5 pr-0 sm:pr-6 sm:border-r border-border/80">
            <div className="font-display text-4xl sm:text-5xl font-black text-foreground leading-none">
              {hero.rating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(hero.ratingStars)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="mt-1 text-xs font-bold text-foreground">
                {hero.ratingText}
              </div>
            </div>
          </div>

          {/* Aggregate Verified Context */}
          <div className="space-y-0.5">
            <div className="text-xs sm:text-sm font-extrabold text-foreground flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>{hero.reviewCountText}</span>
            </div>
            <div className="text-[11px] sm:text-xs text-muted-foreground">
              Retail Centers · Corporate Campuses · General Contractors · Dallas &amp; Fort Worth
            </div>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4"
        >
          {/* Primary Estimate Button */}
          <a
            href="/free-estimate"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-6 sm:px-7 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_8px_24px_rgba(185,28,28,0.35)] transition-all duration-300 hover:brightness-110 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_30px_rgba(185,28,28,0.45)] active:scale-[0.98]"
          >
            <span>{hero.ctaPrimary}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary Direct Call Button */}
          <a
            href={hero.phoneHref}
            className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-6 sm:px-7 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-foreground shadow-xs transition-all duration-300 hover:border-primary/50 hover:bg-secondary active:scale-[0.98]"
          >
            <Phone className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-rotate-12" />
            <span>{hero.ctaSecondary}</span>
          </a>
        </motion.div>

      </div>

      {/* Floating Trust Strip underneath */}
      <div className="relative z-10 mx-auto mt-10 sm:mt-14 w-full max-w-[86rem] px-4 xs:px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border border-border/80 bg-card/90 p-3 sm:p-4 shadow-soft">
          <div className="flex items-center gap-3 p-2">
            <Award className="h-5 w-5 text-amber-500 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-foreground">15+ Years Track Record</div>
              <div className="text-muted-foreground text-[11px]">North Texas Commercial</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-foreground">100% Code Inspection Pass</div>
              <div className="text-muted-foreground text-[11px]">Texas IBC &amp; ADA Compliant</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <Building2 className="h-5 w-5 text-sky-600 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-foreground">500+ Completed Projects</div>
              <div className="text-muted-foreground text-[11px]">Retail &amp; Corporate Facades</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-foreground">Zero Punch-List Goal</div>
              <div className="text-muted-foreground text-[11px]">Strict Glazing Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
