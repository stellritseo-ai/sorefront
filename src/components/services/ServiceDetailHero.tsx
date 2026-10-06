import { Phone, FileText, ShieldAlert, Clock3, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ServiceDetail } from "@/data/servicesData";

// Extracted service images
import doorsImg from "@/assets/svc-doors.jpg";
import hardwareImg from "@/assets/svc-hardware.jpg";
import storefrontImg from "@/assets/svc-storefront.jpg";
import windowsImg from "@/assets/svc-windows.jpg";
import nightImg from "@/assets/emergency-night.jpg";
import lobbyImg from "@/assets/featured-lobby.jpg";
import installImg from "@/assets/why-install.jpg";
import facadeImg from "@/assets/banner-facade.jpg";

const serviceImageMap: Record<string, string> = {
  doors: doorsImg,
  hardware: hardwareImg,
  storefront: storefrontImg,
  windows: windowsImg,
  night: nightImg,
  lobby: lobbyImg,
  install: installImg,
  facade: facadeImg,
};

interface ServiceDetailHeroProps {
  service: ServiceDetail;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const heroImage = serviceImageMap[service.imageKey] || storefrontImg;

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20 sm:pt-36 sm:pb-24 text-white">
      {/* Background Service Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={service.title}
          className="h-full w-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Multilayered Cinematic Gradients for Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(185,28,28,0.15),transparent_70%)]" />
      </div>

      {/* Decorative Grid Mesh */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb Navigation */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md mb-6">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/40">/</span>
          <Link to="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-red-400 font-bold">{service.shortTitle}</span>
        </div>

        {/* Eyebrow Badge with Service Number */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            Service {service.n} · {service.heroBadge}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.14]">
          {service.title}
        </h1>

        {/* Subtitle / Tagline */}
        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10">
          {service.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <a
            href="/free-estimate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.45)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <FileText className="h-5 w-5" />
            <span>Request Free Estimate</span>
          </a>

          <a
            href="tel:+14693605805"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 hover:border-white/40 active:scale-[0.98] transition-all shadow-lg"
          >
            <Phone className="h-5 w-5 text-red-400" />
            <span>Call (469) 360-5805</span>
          </a>
        </div>

        {/* Key Trust Guarantee Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xs">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Standard</p>
            <p className="text-xs sm:text-sm font-bold text-white">100% Commercial Only</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xs">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Coverage</p>
            <p className="text-xs sm:text-sm font-bold text-white">50-Mile DFW Radius</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xs">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Compliance</p>
            <p className="text-xs sm:text-sm font-bold text-white">Texas IBC &amp; ADA Verified</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xs">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Emergency</p>
            <p className="text-xs sm:text-sm font-bold text-white">24/7 Rapid Dispatch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
