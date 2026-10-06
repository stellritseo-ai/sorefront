import { MapPin, Compass, PhoneCall, CheckCircle2 } from "lucide-react";
import { contactPageData } from "@/data/contact";

export function ContactServiceArea() {
  const { serviceArea } = contactPageData;

  return (
    <section className="relative py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-700 mb-3 border border-slate-200">
            <Compass className="h-3.5 w-3.5 text-primary" />
            <span>{serviceArea.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {serviceArea.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {serviceArea.body}
          </p>
        </div>

        {/* Coverage Radius Graphic & City Grid */}
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Coverage</p>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">{serviceArea.radius}</h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 font-bold">
                ✓ Dallas County
              </span>
              <span className="rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 font-bold">
                ✓ Tarrant County
              </span>
              <span className="rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 font-bold">
                ✓ Collin County
              </span>
              <span className="rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 font-bold">
                ✓ Denton County
              </span>
            </div>
          </div>

          {/* Primary Service Areas Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 pt-8">
            {serviceArea.cities.map((city, idx) => {
              const isLast = idx === serviceArea.cities.length - 1;
              return (
                <div
                  key={city}
                  className={`flex items-center gap-2.5 rounded-xl border p-3.5 transition-all duration-200 ${
                    isLast
                      ? "col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2 border-primary/30 bg-primary/5 text-primary font-bold"
                      : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <CheckCircle2
                    className={`h-4 w-4 shrink-0 ${
                      isLast ? "text-primary" : "text-emerald-500"
                    }`}
                  />
                  <span className={`text-sm ${isLast ? "font-bold" : "font-medium"}`}>
                    {city}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Prompt Note */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-slate-600 font-medium">
              {serviceArea.note}
            </p>
            <a
              href={serviceArea.notePhoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-all shrink-0 shadow-xs"
            >
              <PhoneCall className="h-3.5 w-3.5 text-red-400" />
              <span>Call (469) 360-5805</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
