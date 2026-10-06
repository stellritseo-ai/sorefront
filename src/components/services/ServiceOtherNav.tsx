import { ArrowRight, DoorClosed, Wrench, Store, ShieldCheck, AppWindow, ShieldAlert, KeyRound, Sparkles } from "lucide-react";
import { services } from "@/data/site";

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

interface ServiceOtherNavProps {
  currentSlug: string;
}

export function ServiceOtherNav({ currentSlug }: ServiceOtherNavProps) {
  const otherServices = services.filter((s) => s.slug !== currentSlug);

  return (
    <section className="relative py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">
              Explore More Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Other Commercial Glazing Services
            </h2>
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {otherServices.slice(0, 4).map((s) => {
            const Icon = iconMap[s.n] || DoorClosed;
            return (
              <a
                key={s.n}
                href={`/services/${s.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-700 text-xs font-black">
                      {s.n}
                    </span>
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center gap-1 text-[11px] font-bold text-primary">
                  <span>View Details</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
