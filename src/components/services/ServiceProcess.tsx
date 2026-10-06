import { Ruler, Scissors, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { ServiceDetail } from "@/data/servicesData";

interface ServiceProcessProps {
  service: ServiceDetail;
}

const stepIcons = [Ruler, Scissors, Wrench, ShieldCheck];

export function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-700 mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-red-600" />
            <span>Installation Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Execute {service.shortTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A battle-tested commercial glazing process engineered to minimize tenant downtime and eliminate callbacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length] || Ruler;
            return (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all duration-300 hover:border-red-500/40 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white font-black text-sm shadow-xs">
                      {step.step}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
