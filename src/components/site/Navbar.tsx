import { useEffect, useState, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  DoorClosed,
  Wrench,
  Store,
  ShieldCheck,
  AppWindow,
  ShieldAlert,
  KeyRound,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { LiquidGlass } from "@liquidglass/react";
import { Logo } from "./Logo";
import { navLinks, site, services } from "@/data/site";

const serviceIcons: Record<string, typeof DoorClosed> = {
  "01": DoorClosed,
  "02": Wrench,
  "03": Store,
  "04": ShieldCheck,
  "05": AppWindow,
  "06": ShieldAlert,
  "07": KeyRound,
  "08": Sparkles,
};

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isReviews = location.pathname === "/reviews";
  const isEstimate = location.pathname === "/free-estimate";
  const isContact = location.pathname === "/contact";
  const isProjects = location.pathname === "/projects";
  const isServices = location.pathname.startsWith("/services");

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesRef = useRef<HTMLLIElement | null>(null);
  const [dropdownCoords, setDropdownCoords] = useState<{ top: number; left: number } | null>(null);

  const getHref = (l: { label: string; href: string }) => {
    if (l.label === "About") return "/about";
    if (l.label === "Reviews") return "/reviews";
    if (l.label === "Projects") return "/projects";
    if (l.label === "Services") return "/services";
    if (l.label === "Free Estimate") return "/free-estimate";
    if (l.label === "Contact") return "/contact";
    if (l.label === "Home") return isHome ? "#home" : "/";
    if (isHome) {
      return l.href.startsWith("/#") ? l.href.replace("/", "") : l.href;
    }
    return l.href;
  };

  const updateCoords = () => {
    if (servicesRef.current) {
      const rect = servicesRef.current.getBoundingClientRect();
      setDropdownCoords({
        top: rect.bottom + 6,
        left: rect.left + rect.width / 2,
      });
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    updateCoords();
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const handleScrollOrResize = () => updateCoords();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [servicesOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-5 sm:pt-4">
      <nav aria-label="Primary" className="mx-auto max-w-[86rem]">
        <LiquidGlass
          borderRadius={12}
          blur={5}
          contrast={1.08}
          brightness={1.2}
          saturation={1.50}
          displacementScale={1}
          elasticity={0.6}
          shadowIntensity={0.01}
          zIndex={50}
          className={`relative overflow-hidden !flex-row !items-center !justify-between gap-3.5 sm:gap-4 px-4 py-2 sm:px-6 lg:px-7 sm:py-2.5 h-[83px] sm:h-[89px] transition-all duration-300 backdrop-blur-2xl ${scrolled
            ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.38)_100%)] shadow-lift"
            : "bg-[linear-gradient(135deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.2)_100%)] shadow-soft"
            }`}
        >
          {/* Chromatic aberration edge dispersion aura (ior: 1.15, chromaticAberration: 0.05) */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/20 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.25),inset_-1px_-1px_2px_rgba(244,114,182,0.25),-1px_-1px_3px_rgba(56,189,248,0.15),1px_1px_3px_rgba(244,114,182,0.15)]" />

          {/* Optical thickness caustic rim (thickness: 2, roughness: 0) */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/65 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.25),0_12px_36px_-10px_rgba(0,0,0,0.1)]" />

          {/* Fluid glass transmission prismatic reflection sheen */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/70 to-pink-100/60" />

          {/* Brand Logo */}
          <a
            href={isHome ? "#home" : "/"}
            className="relative z-10 shrink-0 flex items-center transition-all duration-300 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]"
            aria-label={`${site.name} — home`}
          >
            <Logo size="navbar" />
          </a>

          {/* Navigation Links */}
          <ul className="relative z-10 hidden items-center gap-1 ml-auto mr-0 lg:flex">
            {navLinks.map((l) => {
              const linkHref = getHref(l);
              const isActive =
                (l.label === "About" && isAbout) ||
                (l.label === "Reviews" && isReviews) ||
                (l.label === "Projects" && isProjects) ||
                (l.label === "Free Estimate" && isEstimate) ||
                (l.label === "Contact" && isContact) ||
                (l.label === "Home" && isHome && !scrolled);

              if (l.label === "Services") {
                return (
                  <li
                    key={l.label}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={linkHref}
                      onClick={() => setServicesOpen(false)}
                      className={`relative inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[15px] font-semibold capitalize tracking-normal transition-all duration-200 active:scale-[0.97] ${
                        isServices
                          ? scrolled
                            ? "bg-primary/10 text-primary font-bold shadow-xs ring-1 ring-primary/20"
                            : "bg-white/25 text-white font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_2px_8px_rgba(0,0,0,0.12)]"
                          : scrolled
                            ? "text-slate-900 hover:text-primary hover:bg-black/[0.05]"
                            : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] hover:bg-white/20 hover:text-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_2px_8px_rgba(0,0,0,0.06)]"
                      } ${servicesOpen ? (scrolled ? "text-primary bg-black/[0.05]" : "bg-white/25") : ""}`}
                    >
                      {l.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </a>
                  </li>
                );
              }

              return (
                <li key={l.label}>
                  <a
                    href={linkHref}
                    className={`relative inline-flex items-center rounded-full px-3.5 py-1.5 text-[15px] font-semibold capitalize tracking-normal transition-all duration-200 active:scale-[0.97] ${
                      isActive
                        ? scrolled
                          ? "bg-primary/10 text-primary font-bold shadow-xs ring-1 ring-primary/20"
                          : "bg-white/25 text-white font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_2px_8px_rgba(0,0,0,0.12)]"
                        : scrolled
                          ? "text-slate-900 hover:text-primary hover:bg-black/[0.05]"
                          : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] hover:bg-white/20 hover:text-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_2px_8px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Area */}
          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
            {/* 24/7 Emergency Indicator Pill */}
            <div
              className={`hidden items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.15em] backdrop-blur-md transition-all duration-300 xl:flex ${
                scrolled
                  ? "border border-slate-300/80 bg-white/85 text-slate-900 shadow-xs"
                  : "border border-white/70 bg-white/45 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)]"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              24/7 Emergency
            </div>

            {/* Direct Phone Call Button */}
            <a
              href={site.phoneHref}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_4px_16px_rgba(185,28,28,0.35)] transition-all duration-300 hover:brightness-110 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_6px_22px_rgba(185,28,28,0.45)] active:scale-[0.97] sm:px-5 sm:py-2.5"
            >
              <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12" />
              <span className="hidden sm:inline"> {site.phone}</span>
              <span className="sm:hidden font-bold tracking-wider">Call</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all active:scale-95 lg:hidden ${
                scrolled
                  ? "border-slate-300/80 bg-white/85 text-slate-900 shadow-xs hover:bg-white"
                  : "border-white/70 bg-white/45 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.85)] hover:bg-white/60"
              }`}
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </LiquidGlass>
      </nav>

      {/* Desktop Services Mega Dropdown (Rendered outside LiquidGlass to prevent overflow-hidden clipping) */}
      {servicesOpen && dropdownCoords && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "fixed",
            top: `${dropdownCoords.top}px`,
            left: `${dropdownCoords.left}px`,
          }}
          className="z-[9999] hidden lg:block -translate-x-[42%] xl:-translate-x-1/2 w-[590px] xl:w-[640px] pt-1.5 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Invisible hover bridge to prevent cursor gap drop */}
          <div className="absolute -top-3 inset-x-0 h-3 pointer-events-auto" />

          <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_100%)] p-4 backdrop-blur-3xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.25),0_6px_20px_rgba(0,0,0,0.08)] border border-white/80">
            {/* Chromatic aberration edge dispersion aura */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/20 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.25),inset_-1px_-1px_2px_rgba(244,114,182,0.25)]" />

            {/* Optical thickness caustic rim */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/80 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1px_1px_rgba(255,255,255,0.25)]" />

            {/* Fluid glass transmission prismatic reflection sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/50 via-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/70 to-pink-100/60" />

            {/* Header tag */}
            <div className="relative z-10 flex items-center justify-between px-2 pb-2.5 mb-2 border-b border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#724c37]">
                Commercial Glazing Services
              </span>
              <span className="text-[10.5px] font-semibold text-slate-500">
                Dallas–Fort Worth Service Area
              </span>
            </div>

            {/* 2-Column Grid of 8 Services */}
            <div className="relative z-10 grid grid-cols-2 gap-2">
              {services.map((s) => {
                const Icon = serviceIcons[s.n] || DoorClosed;
                return (
                  <a
                    key={s.n}
                    href={`/services/${s.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="group/item flex items-start gap-2.5 rounded-xl p-2 transition-all duration-200 hover:bg-slate-100/80 hover:shadow-xs border border-transparent hover:border-slate-200/70"
                  >
                    <div className="mt-0.5 flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-lg border border-[#724c37]/25 bg-white/90 text-[#724c37] shadow-xs transition-all duration-200 group-hover/item:scale-105 group-hover/item:bg-[#724c37] group-hover/item:text-white group-hover/item:border-[#724c37]">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-[#724c37]/75">
                          {s.n}
                        </span>
                        <h4 className="text-[12.5px] font-bold text-slate-900 group-hover/item:text-[#724c37] transition-colors truncate">
                          {s.title}
                        </h4>
                        {s.n === "06" && (
                          <span className="ml-auto inline-flex items-center rounded-full bg-red-100 text-red-700 px-1.5 py-0.2 text-[8.5px] font-black uppercase tracking-wide">
                            24/7
                          </span>
                        )}
                      </div>
                      <p className="text-[10.5px] text-slate-500 leading-snug line-clamp-1 mt-0.5 font-normal">
                        {s.desc}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom Strip */}
            <div className="relative z-10 mt-2.5 pt-2.5 border-t border-slate-200/80 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[11px] font-medium text-slate-600">
                  Fast 45–60 min response for glass emergencies
                </span>
              </div>
              <a
                href="/services"
                onClick={() => setServicesOpen(false)}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#724c37] hover:underline"
              >
                Explore All <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Dropdown Panel */}
      {open && (
        <div className="mx-auto mt-2 max-w-[86rem] lg:hidden">
          <LiquidGlass
            borderRadius={14}
            blur={18}
            contrast={1.08}
            brightness={1.03}
            displacementScale={0.55}
            zIndex={50}
            className={`relative overflow-hidden !block border p-4 shadow-lift backdrop-blur-2xl max-h-[82vh] overflow-y-auto overscroll-contain ${
              scrolled
                ? "border-slate-300/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_100%)] shadow-md"
                : "border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_100%)] shadow-xl"
            }`}
          >
            {/* Prismatic edge dispersion */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/20 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.2),inset_-1px_-1px_2px_rgba(244,114,182,0.2)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent" />
            <ul className="relative z-10 grid gap-1">
              {navLinks.map((l) => {
                const linkHref = getHref(l);
                const isActive =
                  (l.label === "About" && isAbout) ||
                  (l.label === "Reviews" && isReviews) ||
                  (l.label === "Projects" && isProjects) ||
                  (l.label === "Free Estimate" && isEstimate) ||
                  (l.label === "Contact" && isContact) ||
                  (l.label === "Home" && isHome);

                if (l.label === "Services") {
                  return (
                    <li key={l.label} className="rounded-md border-b border-black/10">
                      <div className="flex items-center justify-between px-4 py-3">
                        <a
                          href="/services"
                          onClick={() => setOpen(false)}
                          className={`text-[15px] font-semibold capitalize tracking-normal transition-all text-black hover:text-primary ${
                            isServices ? "font-bold text-primary" : ""
                          }`}
                        >
                          {l.label}
                        </a>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          aria-label="Toggle sub-services"
                          className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-black/10 transition-colors"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 text-black ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Collapsible Sub-Services List */}
                      {mobileServicesOpen && (
                        <ul className="pl-4 pr-2 pb-2 space-y-1">
                          {services.map((s) => {
                            const Icon = serviceIcons[s.n] || DoorClosed;
                            return (
                              <li key={s.n}>
                                <a
                                  href={`/services/${s.slug}`}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors text-black hover:text-primary hover:bg-black/5"
                                >
                                  <Icon className="h-3.5 w-3.5 shrink-0 opacity-70 text-black" />
                                  <span className="truncate">{s.title}</span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={l.label}>
                    <a
                      href={linkHref}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md border-b border-black/10 px-4 py-3 text-[15px] font-semibold capitalize tracking-normal transition-all hover:pl-5 text-black hover:text-primary hover:bg-black/5 ${
                        isActive ? "bg-black/5 font-bold text-primary pl-5" : ""
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </LiquidGlass>
        </div>
      )}
    </header>
  );
}
