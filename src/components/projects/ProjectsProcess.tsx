import { ShieldCheck, Ruler, Scissors, Wrench, FileCheck2, ArrowRight } from "lucide-react";
import { projectsPageData } from "@/data/projects";

const stepIcons = [Ruler, Scissors, Wrench, FileCheck2];

export function ProjectsProcess() {
  const { process } = projectsPageData;

  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 text-white">
      {/* Ambient background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-300 mb-3 backdrop-blur-xs">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Turnkey Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Commercial Project Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From initial field laser surveys to final code sign-off, our rigorous glazing protocol guarantees zero defects and Texas IBC compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length] || Ruler;
            return (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:bg-white/[0.07]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/20 text-red-400 font-black text-sm border border-red-500/30">
                      {step.step}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
