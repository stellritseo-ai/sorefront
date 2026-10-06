import { Building2, ShoppingBag, Landmark, Stethoscope, UtensilsCrossed, Warehouse, CheckCircle } from "lucide-react";
import { projectsPageData } from "@/data/projects";

const iconMap = [
  Building2,
  ShoppingBag,
  Landmark,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
];

export function ProjectsIndustries() {
  const { industries } = projectsPageData;

  return (
    <section className="relative py-20 lg:py-28 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-700 mb-3 border border-slate-200">
            <CheckCircle className="h-3.5 w-3.5 text-primary" />
            <span>Commercial Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industries &amp; Properties We Serve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Sure Fronts Of Dallas is 100% focused on commercial glazing. We understand the distinct operational demands, building codes, and traffic thresholds of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = iconMap[idx % iconMap.length] || Building2;
            return (
              <div
                key={ind.title}
                className="group relative rounded-2xl border border-slate-200 bg-slate-50/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-200/80 px-3 py-1 text-xs font-bold text-slate-700">
                    {ind.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {ind.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
