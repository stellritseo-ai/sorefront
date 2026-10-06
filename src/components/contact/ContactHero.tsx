import { Phone, FileText, ShieldAlert, Clock, MapPin } from "lucide-react";
import { contactPageData } from "@/data/contact";
import skylineImg from "@/assets/contact-skyline.jpg";

export function ContactHero() {
  const { hero } = contactPageData;

  return (
    <section className="relative min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20 sm:pt-36 sm:pb-24">
      {/* Background Hero Skyline Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={skylineImg}
          alt="Dallas Commercial Architecture and Skyline at Dusk"
          className="h-full w-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Multilayered Cinematic Overlay for Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.12),transparent_70%)]" />
      </div>

      {/* Decorative Grid Mesh & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-300 backdrop-blur-md shadow-inner mb-6 animate-pulse">
          <span className="flex h-2 w-2 rounded-full bg-red-500" />
          <span>24/7 Rapid Response &amp; Commercial Glazing Hub</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
          {hero.headline}
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10">
          {hero.subheadline}
        </p>

        {/* Quick Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href={hero.quickButtons.callHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.45)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:brightness-110 active:scale-[0.98] transition-all duration-200"
          >
            <Phone className="h-5 w-5 text-white animate-bounce" />
            <span>{hero.quickButtons.call}</span>
          </a>

          <a
            href={hero.quickButtons.estimateHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 hover:border-white/40 active:scale-[0.98] transition-all duration-200 shadow-lg"
          >
            <FileText className="h-5 w-5 text-cyan-400" />
            <span>{hero.quickButtons.estimate}</span>
          </a>
        </div>

        {/* Trust Points Mini Banner */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.08] p-3.5 backdrop-blur-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-400">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Emergency Line</p>
              <p className="text-sm font-bold text-white">24/7 Live Dispatch</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.08] p-3.5 backdrop-blur-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Estimate Response</p>
              <p className="text-sm font-bold text-white">Within 24 Hours</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.08] p-3.5 backdrop-blur-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Service Coverage</p>
              <p className="text-sm font-bold text-white">50-Mile DFW Radius</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
