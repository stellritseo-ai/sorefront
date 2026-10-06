import { Award, Clock3, ShieldCheck, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { reviewsPageData } from "@/data/reviews";

const pillarIcons = [Award, Clock3, ShieldCheck, CheckCircle2, Layers];

export function ReviewsWhyTrustUs() {
  const { whyTrustUs } = reviewsPageData;

  return (
    <section className="relative overflow-hidden py-20 sm:py-26 lg:py-32 bg-[#10141C] text-white">
      {/* Background Subtle Aesthetics & Glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #8B5A3C 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top dual-gradient accent rule */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary via-amber-500/80 to-transparent opacity-85" />

      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3.5 sm:space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span>{whyTrustUs.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.12]">
            {whyTrustUs.headline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {whyTrustUs.intro}
          </p>
        </div>

        {/* 5 Operational Principles Obsidian Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {whyTrustUs.pillars.map((item, idx) => {
            const Icon = pillarIcons[idx] || Award;
            const isWide = idx === 0 || idx === 1;

            return (
              <div
                key={item.num}
                className={`group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.035] p-6 sm:p-7 backdrop-blur-xl shadow-[0_16px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:bg-white/[0.06] hover:border-amber-400/40 hover:-translate-y-1 flex flex-col justify-between ${
                  idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Specular edge top reflection */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Card Header: Icon & Step tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-amber-400 shadow-inner transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10.5px] font-semibold text-amber-300 border border-white/10">
                        {item.badge}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-black text-white/20 group-hover:text-amber-400/40 transition-colors">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-amber-200">
                    {item.title}
                  </h3>

                  {/* Body description */}
                  <p className="mt-3 text-sm sm:text-[0.96rem] text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Checkmark */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono uppercase tracking-wider text-[11px]">
                    Standard {item.num}
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified Standard
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
