import { Building, Building2, CheckCircle2, MapPin } from "lucide-react";
import { ServiceDetail } from "@/data/servicesData";

interface ServiceApplicationsProps {
  service: ServiceDetail;
}

export function ServiceApplications({ service }: ServiceApplicationsProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-slate-700 mb-3">
            <Building2 className="h-3.5 w-3.5 text-primary" />
            <span>Facility Types</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ideal Applications for {service.shortTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Engineered exclusively for commercial facilities, multi-tenant properties, and retail storefronts across North Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.applications.map((app) => (
            <div
              key={app}
              className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Building className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-slate-800">
                {app}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
