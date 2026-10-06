import { ShieldCheck, Ruler, Award, CheckCircle2 } from "lucide-react";
import { ServiceDetail } from "@/data/servicesData";

interface ServiceSpecsAndStandardsProps {
  service: ServiceDetail;
}

export function ServiceSpecsAndStandards({ service }: ServiceSpecsAndStandardsProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 text-white overflow-hidden border-b border-white/10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(185,28,28,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Technical Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-300 mb-3 backdrop-blur-xs">
                <Ruler className="h-3.5 w-3.5 text-red-400" />
                <span>Engineering Data</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Technical Glazing Specifications
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                Every commercial system is engineered to satisfy architectural wind loads, impact safety, and thermal criteria.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <div className="divide-y divide-white/10">
                {service.specs.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-4.5 gap-1 sm:gap-4 hover:bg-white/[0.04] transition-colors">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-white sm:text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code & Standards Compliance */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3 backdrop-blur-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                <span>Code Verified</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Texas Building Codes &amp; Life Safety
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                We guarantee 100% code compliance on all commercial installations. Our work is fully inspectable by local municipal building officials.
              </p>
            </div>

            <div className="space-y-3">
              {service.standards.map((std) => (
                <div
                  key={std}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xs hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {std}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Dispatch Callout Card */}
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/50 to-slate-950 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-wider text-red-300 mb-1">
                Need a Custom Architectural Submittal?
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                We provide engineered shop drawings, hardware schedules, and glass samples for general contractors and architects.
              </p>
              <a
                href="/free-estimate"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-500 transition-colors"
              >
                <span>Request Project Submittal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
