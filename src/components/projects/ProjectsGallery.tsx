import { useState } from "react";
import {
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  Maximize2,
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Sparkles,
} from "lucide-react";
import { projectsPageData, ProjectItem } from "@/data/projects";

// Extracted service images and generated commercial images
import storefrontImg from "@/assets/svc-storefront.jpg";
import corporateLobbyImg from "@/assets/proj-corporate-lobby.jpg";
import facadeImg from "@/assets/banner-facade.jpg";
import doorsImg from "@/assets/svc-doors.jpg";
import lobbyImg from "@/assets/featured-lobby.jpg";
import windowsImg from "@/assets/svc-windows.jpg";
import hardwareImg from "@/assets/svc-hardware.jpg";
import installImg from "@/assets/why-install.jpg";
import emergencyImg from "@/assets/emergency-night.jpg";
import ctaStorefrontImg from "@/assets/cta-storefront.jpg";
import aboutDetailImg from "@/assets/about-detail.jpg";
import heroStorefrontImg from "@/assets/hero-storefront.jpg";

const imageMap: Record<string, string> = {
  storefront: storefrontImg,
  corporateLobby: corporateLobbyImg,
  facade: facadeImg,
  doors: doorsImg,
  lobby: lobbyImg,
  windows: windowsImg,
  hardware: hardwareImg,
  install: installImg,
  emergency: emergencyImg,
  ctaStorefront: ctaStorefrontImg,
  aboutDetail: aboutDetailImg,
  heroStorefront: heroStorefrontImg,
};

export function ProjectsGallery() {
  const { categories, projects } = projectsPageData;
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 text-white border-y border-white/10">
      {/* Decorative ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(185,28,28,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-300 mb-3 backdrop-blur-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Curated Installations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Commercial Glazing Portfolio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Select a category below to explore storefront systems, heavy glass doors, curtain walls, and emergency repairs completed across North Texas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 ring-2 ring-red-400/50"
                    : "border border-white/15 bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const imgSrc = imageMap[project.imageKey] || storefrontImg;

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/20"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={imgSrc}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-xs">
                      {project.category}
                    </span>
                    <button
                      type="button"
                      aria-label="Expand project specs"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/80 border border-white/20 text-white hover:bg-red-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProject(project);
                      }}
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Location badge on bottom of image */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-semibold text-slate-300 drop-shadow-md">
                    <MapPin className="h-3.5 w-3.5 text-red-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-400 mb-2">
                      <span className="inline-flex items-center gap-1 text-slate-300">
                        <Building className="h-3 w-3 text-red-400" />
                        {project.clientType}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {/* Spec checklist */}
                    <div className="space-y-1.5 pt-4 border-t border-white/10 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Glazing Specifications:
                      </p>
                      {project.specifications.slice(0, 3).map((sp) => (
                        <div key={sp} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-red-400 mt-0.5" />
                          <span className="leading-tight">{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action trigger */}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-white hover:bg-white/[0.1] hover:border-white/30 transition-all cursor-pointer"
                  >
                    <span>Inspect Engineering Specs</span>
                    <ArrowRight className="h-3.5 w-3.5 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal / Lightbox */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in-50 duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-950/60">
              <div className="flex items-center gap-2.5">
                <span className="rounded-full bg-red-600/30 border border-red-500/40 px-3 py-1 text-xs font-bold text-red-300">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-red-400" />
                  {activeModalProject.location}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Large Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/15 bg-black">
                <img
                  src={imageMap[activeModalProject.imageKey] || storefrontImg}
                  alt={activeModalProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.summary}
                </p>
              </div>

              {/* Specs & Hardware Detail Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    Glazing Specifications
                  </p>
                  <ul className="space-y-2">
                    {activeModalProject.specifications.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-red-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4.5 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1.5 flex items-center gap-1.5">
                      <Wrench className="h-4 w-4" />
                      Hardware Configuration
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeModalProject.hardwareDetails}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4" />
                      Code Compliance
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeModalProject.compliance}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 px-6 py-4 bg-slate-950/80">
              <a
                href="tel:+14693605805"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-300 hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-red-400" />
                <span>Call (469) 360-5805</span>
              </a>

              <a
                href="/free-estimate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-red-500 shadow-md transition-all"
              >
                <span>Request Estimate for Similar Project</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
