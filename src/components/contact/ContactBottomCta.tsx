import { FileText, Phone, ShieldCheck } from "lucide-react";
import { contactPageData } from "@/data/contact";

export function ContactBottomCta() {
  const { bottomCta } = contactPageData;

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Quality Seal */}
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-300 backdrop-blur-md mb-6 shadow-inner">
          <ShieldCheck className="h-4 w-4 text-red-400" />
          <span>Commercial Storefront &amp; Glazing Specialists</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          {bottomCta.headline}
        </h2>

        {/* Body Copy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {bottomCta.body}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href={bottomCta.buttons.estimateHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.45)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <FileText className="h-5 w-5" />
            <span>{bottomCta.buttons.estimate}</span>
          </a>

          <a
            href={bottomCta.buttons.callHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 hover:border-white/40 active:scale-[0.98] transition-all shadow-lg"
          >
            <Phone className="h-5 w-5 text-red-400" />
            <span>{bottomCta.buttons.call}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
