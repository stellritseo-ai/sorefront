import { DoorClosed, Building2, AppWindow, ShieldAlert, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import svcDoorsImg from "@/assets/svc-doors.jpg";
import bannerFacadeImg from "@/assets/banner-facade.jpg";
import svcWindowsImg from "@/assets/svc-windows.jpg";
import emergencyNightImg from "@/assets/emergency-night.jpg";
import svcHardwareImg from "@/assets/svc-hardware.jpg";
import { aboutPageData } from "@/data/about";

const capabilityImages = [
  svcDoorsImg,
  bannerFacadeImg,
  svcWindowsImg,
  emergencyNightImg,
  svcHardwareImg,
];

const capabilityIcons = [
  DoorClosed,
  Building2,
  AppWindow,
  ShieldAlert,
  Wrench,
];

export function AboutCapabilities() {
  const { capabilities } = aboutPageData;

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 lg:py-28 bg-background">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <span>{capabilities.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
            {capabilities.headline}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {capabilities.intro}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {capabilities.services.map((item, idx) => {
            const Icon = capabilityIcons[idx] || DoorClosed;
            const img = capabilityImages[idx];
            const isWide = idx === 0 || idx === 1;

            return (
              <div
                key={item.num}
                className={`group relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between ${
                  idx === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Photo preview banner */}
                  <div className={`relative w-full overflow-hidden bg-charcoal ${idx === 0 ? "h-52 sm:h-64" : "h-48 sm:h-52"}`}>
                    <img
                      src={img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-black/30 to-transparent" />
                    
                    {/* Top Pill: Category tag & Icon */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-full border border-white/40 bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      <Icon className="h-3.5 w-3.5 text-amber-300" />
                      <span>{item.category}</span>
                    </div>

                    {/* Numeric Watermark */}
                    <span className="absolute bottom-2 right-4 font-mono text-3xl sm:text-4xl font-black text-white/70 drop-shadow-md">
                      {item.num}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Bulleted capabilities pills */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-foreground/80 border border-border/50"
                        >
                          <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 sm:p-6 pt-0 mt-3">
                  <a
                    href="/free-estimate"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-amber-600 transition-colors"
                  >
                    <span>Request Service Estimate</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
