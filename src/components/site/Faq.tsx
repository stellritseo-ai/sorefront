import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { site, faqs } from "@/data/site";
import { Logo } from "./Logo";
import ctaStorefront from "@/assets/cta-storefront.jpg";

const keyAssurances = [
  "100% Commercial Only",
  "Texas IBC & ADA Compliant",
  "24/7 Rapid Emergency",
  "Free On-Site Estimate",
  "50-Mile DFW Radius",
];

export function Faq() {
  const [openId, setOpenId] = useState<string>("faq-0");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] rounded-[14px] transition-all duration-300 scroll-mt-24 mx-3 my-4 sm:mx-6 sm:my-8 lg:mx-auto lg:my-12 py-10 sm:py-14"
    >
      {/* ── Background Subtle Ambient Decorations ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #8B5A3C 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute -top-40 right-0 w-[540px] h-[540px] rounded-full bg-primary/[0.035] blur-[130px]" />
        <div className="absolute bottom-0 -left-24 w-[480px] h-[480px] rounded-full bg-amber-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[94rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16 items-start">
          {/* ── LEFT COLUMN: FAQ Accordion (col-span-7) ── */}
          <Reveal className="lg:col-span-7 space-y-5 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/[0.07] border border-primary/25 rounded-full px-4 py-1.5 text-[10.5px] font-black uppercase tracking-widest text-primary shadow-2xs select-none">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span>Frequently Asked Questions</span>
            </div>

            {/* Headline & Subtitle */}
            <div>
              <h2
                className="text-xl xs:text-[24px] sm:text-[30px] lg:text-[35px] font-display font-black text-slate-900 tracking-tight leading-[1.15] mt-0 mb-1"
              >
                Got Questions?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#6B3F27] to-foreground">
                  We Have Clear Answers.
                </span>
              </h2>
              <p
                className="text-slate-500 font-medium text-[13px] sm:text-[14.5px] leading-relaxed max-w-xl mt-1 mb-1"
              >
                Everything commercial property managers, business owners, and general contractors need to know about our Dallas commercial glass services.
              </p>
            </div>

            {/* Accordion list */}
            <div className="space-y-2.5 pt-1">
              {faqs.map((faq, index) => {
                const id = `faq-${index}`;
                const isOpen = openId === id;

                return (
                  <div
                    key={faq.q}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-primary/[0.03] border-primary/35 shadow-xs"
                        : "bg-white border-slate-200/85 hover:border-primary/30 hover:shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(id)}
                      className="w-full flex items-center justify-between py-3.5 px-4 sm:px-5 text-left gap-3.5 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-[13.5px] sm:text-[14.5px] text-slate-900 leading-snug flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                            isOpen ? "bg-primary" : "bg-slate-300"
                          }`}
                        />
                        {faq.q}
                      </span>

                      <div
                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-white rotate-180 shadow-xs"
                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-3.5 pt-2 text-slate-600 font-normal text-[13px] sm:text-[13.5px] leading-relaxed border-t border-primary/10 mt-0.5 animate-in fade-in duration-200">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct call bottom line */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-[#6B3F27] to-[#1E232A] text-white border border-white/20 text-[11px] font-black uppercase tracking-widest rounded-full px-7 py-3 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto cursor-pointer"
              >
                <span>Request Free Commercial Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-slate-800 text-[13px] font-extrabold hover:text-primary transition-colors cursor-pointer py-1.5"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span>Call {site.phone}</span>
              </a>
            </div>
          </Reveal>

          {/* ── RIGHT COLUMN: Architectural Showcase Card (col-span-5) ── */}
          <div className="hidden lg:block lg:col-span-5 relative w-full lg:sticky lg:top-[110px] self-start">
            {/* Outer ambient glow bloom */}
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-primary/12 via-transparent to-amber-500/10 blur-xl pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_70px_-12px_rgba(15,23,42,0.18)] border-2 border-white group">
              {/* Main Architectural Image */}
              <img
                src={ctaStorefront}
                alt="Commercial Glass Storefronts and Entrances in Dallas"
                className="w-full h-[460px] sm:h-[500px] lg:h-[530px] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/20 pointer-events-none" />

              {/* Floating Top Header Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-2 bg-slate-950/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-2xl shadow-lg">
                  <Logo tone="light" size="sm" />
                </div>

                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-1.5 bg-primary border border-white/30 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                >
                  <Phone className="w-3 h-3 fill-current" />
                  <span>{site.phone}</span>
                </a>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-2xl text-left z-20">
                {/* Assurance pills */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {keyAssurances.map((srv) => (
                    <span
                      key={srv}
                      className="inline-flex items-center gap-1 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-primary" />
                      <span>{srv}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-emerald-800 font-extrabold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      10830 N Central Expy · Ste 130
                    </span>
                    <p className="text-xs sm:text-[13px] font-extrabold text-slate-900 mt-0.5">
                      Call {site.phone} for Rapid Dispatch
                    </p>
                  </div>
                  <a
                    href="#contact"
                    aria-label="Request Commercial Estimate"
                    className="shrink-0 w-8.5 h-8.5 rounded-full bg-[#181B20] text-white flex items-center justify-center border border-white/20 shadow-md hover:bg-primary transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
