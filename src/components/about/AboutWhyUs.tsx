import { ShieldCheck, CheckCircle2, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";
import { aboutPageData } from "@/data/about";

const advantageIcons = [ShieldCheck, CheckCircle2, MapPin, Users];

export function AboutWhyUs() {
  const { whyChooseUs } = aboutPageData;

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

      {/* Top dual-gradient accent rule matching brand bronze & champagne */}
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
            <span>{whyChooseUs.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.12]">
            {whyChooseUs.headline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {whyChooseUs.lead}
          </p>
        </div>

        {/* 4 Specialist Advantage Obsidian Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {whyChooseUs.items.map((item, idx) => {
            const Icon = advantageIcons[idx] || ShieldCheck;

            return (
              <div
                key={item.num}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.035] p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:bg-white/[0.06] hover:border-amber-400/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Specular edge top reflection */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Card Header: Icon & Step tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-amber-400 shadow-inner transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-mono text-2xl font-black text-white/20 group-hover:text-amber-400/40 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-amber-200">
                    {item.title}
                  </h3>

                  {/* Body description */}
                  <p className="mt-3 text-sm sm:text-[0.98rem] text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Highlight Pill */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    B2B Advantage
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Specialist Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-white/15 bg-gradient-to-r from-primary/30 via-white/[0.05] to-amber-500/20 p-6 sm:p-8 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Need architectural submittals, specifications, or a site walk?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our lead commercial estimator can meet on-site anywhere within 50 miles of Dallas.
            </p>
          </div>

          <a
            href="/free-estimate"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            <span>Schedule Project Walkthrough</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
