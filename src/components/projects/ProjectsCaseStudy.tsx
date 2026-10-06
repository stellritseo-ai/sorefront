import { CheckCircle2, Award, ArrowRight, ShieldCheck, Flame } from "lucide-react";
import { projectsPageData } from "@/data/projects";
import corporateLobbyImg from "@/assets/proj-corporate-lobby.jpg";

export function ProjectsCaseStudy() {
  const { signatureCaseStudy } = projectsPageData;

  return (
    <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Decorative Gradients */}
      <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Marquee Image Display */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl group">
              <img
                src={corporateLobbyImg}
                alt={signatureCaseStudy.title}
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

              {/* Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg mb-2">
                  <Award className="h-3.5 w-3.5" />
                  Commercial Flagship
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  High-Span Structural Fin Glass &amp; Frameless Entrance
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {signatureCaseStudy.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Case Details & Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-300 mb-3">
                <Flame className="h-3.5 w-3.5 text-red-400" />
                <span>{signatureCaseStudy.eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {signatureCaseStudy.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  The Commercial Challenge
                </p>
                <p>{signatureCaseStudy.challenge}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  The Glazing Solution
                </p>
                <p>{signatureCaseStudy.solution}</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {signatureCaseStudy.results.map((res) => (
                <div
                  key={res.metric}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-xs"
                >
                  <p className="text-2xl font-black text-white">{res.metric}</p>
                  <p className="text-xs text-slate-300 mt-1">{res.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="/free-estimate"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-red-500 transition-all shadow-lg shadow-red-600/30"
              >
                <span>Request Custom Project Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
