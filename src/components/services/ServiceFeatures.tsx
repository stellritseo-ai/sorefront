import { CheckCircle2, ShieldCheck, Wrench, Layers } from "lucide-react";
import { ServiceDetail } from "@/data/servicesData";

interface ServiceFeaturesProps {
  service: ServiceDetail;
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Overview Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-700 mb-3">
            <Layers className="h-3.5 w-3.5 text-red-600" />
            <span>Commercial Scope of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive {service.shortTitle} Capabilities
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {service.overview}
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {service.features.map((feat, idx) => (
            <div
              key={feat.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-700 font-black text-sm group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    {idx + 1}
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
