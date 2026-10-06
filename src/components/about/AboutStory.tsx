import { motion } from "motion/react";
import { Building2, ShieldCheck, MapPin, Award, CheckCircle2, Sparkles } from "lucide-react";
import whyInstallImg from "@/assets/why-install.jpg";
import aboutDetailImg from "@/assets/about-detail.jpg";
import { aboutPageData } from "@/data/about";

export function AboutStory() {
  const { story } = aboutPageData;

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 lg:py-28 bg-gradient-to-b from-background via-background/95 to-secondary/30">
      {/* Ambient background architectural blurs */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-amber-500/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          
          {/* Left Column: Story Text Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>{story.eyebrow}</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
              {story.headline}
            </h2>

            {/* Accent Rule */}
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary via-amber-500 to-transparent" />

            {/* Body Copy Paragraphs */}
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-[1.05rem] text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground/90">
                {story.paragraphs[0]}
              </p>
              <p>
                {story.paragraphs[1]}
              </p>
              <p>
                {story.paragraphs[2]}
              </p>
            </div>

            {/* Highlight Callout Box */}
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] p-4 sm:p-5 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground">
                    Engineered Precision for North Texas Businesses
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug">
                    Every project is led by commercial glazing veterans adhering strictly to Texas IBC codes and structural standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Story Highlights Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {story.highlights.map((h, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border/70 bg-card p-3 text-center shadow-xs"
                >
                  <div className="font-display text-base sm:text-xl font-black text-primary">
                    {h.label}
                  </div>
                  <div className="mt-0.5 text-[10.5px] sm:text-xs font-medium text-muted-foreground">
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Photo Collage */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[540px]">
              
              {/* Main Job Site / Installation Image */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card p-2 sm:p-3 shadow-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-charcoal">
                  <img
                    src={whyInstallImg}
                    alt="Sure Fronts of Dallas commercial glazing team installing heavy glass on job site"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10" />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]" />
                </div>
              </div>

              {/* Overlapping Project Detail Inset Card */}
              <div className="relative sm:absolute -bottom-6 sm:-bottom-8 sm:-left-6 w-full sm:w-[260px] mt-4 sm:mt-0 overflow-hidden rounded-2xl border border-white/80 bg-white/95 p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <img
                    src={aboutDetailImg}
                    alt="Precision architectural storefront detail"
                    className="h-16 w-16 rounded-xl object-cover shadow-xs border border-border/60"
                  />
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                      <CheckCircle2 className="h-3 w-3 text-primary" /> Verified Craft
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 leading-tight mt-0.5">
                      Storefronts & Curtain Walls
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      DFW Metroplex Specialists
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Right Floating Badge */}
              <div className="absolute -top-4 sm:-top-6 right-3 sm:-right-4 flex items-center gap-2.5 rounded-full border border-white/80 bg-white/95 px-4 py-2 shadow-xl backdrop-blur-md">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/20 text-amber-600">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 leading-none">
                    15+ Years DFW
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 leading-none mt-0.5">
                    Commercial Excellence
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
