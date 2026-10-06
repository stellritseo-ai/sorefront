import { ArrowRight, ShieldCheck, DoorClosed, Wrench, Store, AppWindow, ShieldAlert, KeyRound, Sparkles } from "lucide-react";
import { services } from "@/data/site";
import { servicesData } from "@/data/servicesData";

// Extracted service images
import doorsImg from "@/assets/svc-doors.jpg";
import hardwareImg from "@/assets/svc-hardware.jpg";
import storefrontImg from "@/assets/svc-storefront.jpg";
import windowsImg from "@/assets/svc-windows.jpg";
import nightImg from "@/assets/emergency-night.jpg";
import lobbyImg from "@/assets/featured-lobby.jpg";
import installImg from "@/assets/why-install.jpg";
import facadeImg from "@/assets/banner-facade.jpg";

const serviceImageMap: Record<string, string> = {
  doors: doorsImg,
  hardware: hardwareImg,
  storefront: storefrontImg,
  windows: windowsImg,
  night: nightImg,
  lobby: lobbyImg,
  install: installImg,
  facade: facadeImg,
};

const iconMap: Record<string, typeof DoorClosed> = {
  "01": DoorClosed,
  "02": Wrench,
  "03": Store,
  "04": ShieldCheck,
  "05": AppWindow,
  "06": ShieldAlert,
  "07": KeyRound,
  "08": Sparkles,
};

export function ServicesHubGrid() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 text-white border-b border-white/10">
      {/* Decorative ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(185,28,28,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-300 mb-3 backdrop-blur-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Dedicated Service Portals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our 8 Commercial Glazing Specialties
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Click on any service below to explore full technical specifications, code compliance details, installation processes, and dedicated FAQs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((s) => {
            const detail = servicesData[s.slug];
            const imgSrc = detail ? serviceImageMap[detail.imageKey] || storefrontImg : storefrontImg;
            const Icon = iconMap[s.n] || DoorClosed;

            return (
              <div
                key={s.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/20"
              >
                {/* Image Header */}
                <a href={`/services/${s.slug}`} className="relative aspect-[16/9] overflow-hidden bg-slate-900 block">
                  <img
                    src={imgSrc}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                  {/* Number & Icon Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white font-black text-sm shadow-md">
                      {s.n}
                    </span>
                    {s.n === "06" && (
                      <span className="inline-flex items-center rounded-full bg-red-600/90 text-white px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
                        24/7 Priority
                      </span>
                    )}
                  </div>
                </a>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-red-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {detail?.heroBadge || "Commercial Glazing"}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-3">
                      <a href={`/services/${s.slug}`}>
                        {s.title}
                      </a>
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {detail?.overview || s.desc}
                    </p>

                    {/* Quick highlights */}
                    {detail && (
                      <div className="space-y-2 pt-4 border-t border-white/10 mb-6">
                        {detail.features.slice(0, 3).map((f) => (
                          <div key={f.title} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-red-400 font-bold shrink-0">✓</span>
                            <span className="font-medium truncate">{f.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Link Button */}
                  <a
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center justify-between w-full rounded-2xl bg-white/[0.05] border border-white/15 px-5 py-3.5 text-sm font-bold text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-200"
                  >
                    <span>View Dedicated {s.title} Page</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
