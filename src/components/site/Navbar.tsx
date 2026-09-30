import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LiquidGlass } from "@liquidglass/react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-5 sm:pt-4">
      <nav aria-label="Primary" className="mx-auto max-w-[86rem]">
        <LiquidGlass
          borderRadius={10}
          blur={5}
          contrast={1.08}
          brightness={1.2}
          saturation={1.50}
          displacementScale={1}
          elasticity={0.6}
          shadowIntensity={0.01}
          zIndex={50}
          className={`relative overflow-hidden !flex-row !items-center !justify-between gap-6 px-4 py-3 sm:px-6 transition-all duration-300 backdrop-blur-2xl ${scrolled
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
            href="#home"
            className="relative z-10 shrink-0 transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            aria-label={`${site.name} — home`}
          >
            <Logo />
          </a>

          {/* Navigation Links (shifted toward right, larger font size, premium pill micro-interactions) */}
          <ul className="relative z-10 hidden items-center gap-1.5 ml-auto mr-2.5 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative inline-flex items-center rounded-full px-4 py-2 text-[0.98rem] font-semibold uppercase tracking-[0.10em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] transition-all duration-200 hover:bg-white/20 hover:text-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_2px_8px_rgba(0,0,0,0.06)] active:scale-[0.97]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Area */}
          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
            {/* 24/7 Emergency Indicator Pill */}
            <div className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/45 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md xl:flex">
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
              <span className="sm:hidden"></span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.85)] backdrop-blur-md transition-all hover:bg-white/60 active:scale-95 lg:hidden"
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </LiquidGlass>
      </nav>

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
            className="relative overflow-hidden !block border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.45)_100%)] p-4 shadow-lift backdrop-blur-2xl"
          >
            {/* Prismatic edge dispersion */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-400/20 shadow-[inset_1px_1px_2px_rgba(56,189,248,0.2),inset_-1px_-1px_2px_rgba(244,114,182,0.2)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent" />
            <ul className="relative z-10 grid gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md border-b border-white/20 px-4 py-3.5 text-base font-semibold uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] transition-all hover:bg-white/20 hover:pl-5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </LiquidGlass>
        </div>
      )}
    </header>
  );
}
