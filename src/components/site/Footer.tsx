import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Store,
  CheckCircle2,
  Building2,
  Navigation,
} from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/data/site";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
)}`;

/* ── Inline SVG Social / External Icons ── */
const GoogleMapsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const socials = [
  {
    icon: GoogleMapsIcon,
    href: directionsUrl,
    label: "Google Maps Facility Location",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com",
    label: "Facebook",
  },
];

const commercialServices = [
  { label: "Commercial Glass Doors", href: "#services" },
  { label: "Aluminum Storefronts", href: "#services" },
  { label: "Commercial Window Units", href: "#services" },
  { label: "24/7 Emergency Board-Up", href: "#emergency" },
  { label: "Door Closers & Panic Hardware", href: "#services" },
  { label: "Curtain Wall Glazing", href: "#services" },
  { label: "Thermal Low-E Safety Glass", href: "#services" },
];

const quickNav = [
  { label: "Home", href: "#home" },
  { label: "About Sore Fronts", href: "#about" },
  { label: "Commercial Services", href: "#services" },
  { label: "Featured Projects", href: "#projects" },
  { label: "Installation Process", href: "#process" },
  { label: "Emergency Glazing", href: "#emergency" },
  { label: "Verified Reviews", href: "#reviews" },
  { label: "Request Free Estimate", href: "#contact" },
];

const trustBadges = [
  "Licensed & Bonded",
  "Texas IBC & ADA",
  "24/7 Rapid Dispatch",
  "Commercial Only",
];

const coverageAreas = [
  "Downtown & Uptown Dallas",
  "North Dallas & Plano",
  "Frisco & McKinney",
  "Irving & Las Colinas",
  "Arlington & Fort Worth",
  "50-Mile DFW Service Radius",
];

/** Collapsible section exclusively for organized mobile viewing */
function MobileCollapsibleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-3.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-1 text-left cursor-pointer group select-none"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-widest text-amber-400 font-bold group-hover:text-white transition-colors">
          {title}
        </span>
        <div
          className={`h-7 w-7 rounded-full flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-300 ${
            open ? "rotate-180 bg-primary/30 text-amber-400" : "text-slate-400"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      {open && (
        <div className="pt-3 pb-1 animate-in fade-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden rounded-[14px] bg-[#10141C] text-white border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.45)] max-w-[94rem] mx-3 my-4 sm:mx-6 sm:my-8 lg:mx-auto lg:my-12 transition-all"
    >
      {/* ── Background Subtle Aesthetics & Glows ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #8B5A3C 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top dual-gradient accent rule matching brand bronze & champagne */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary via-amber-500/80 to-transparent opacity-85" />

      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-10 w-[400px] h-[400px] bg-amber-500/[0.05] rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      <div className="relative z-10">
        {/* ── TOP RAPID DISPATCH & EMERGENCY SUPPORT BANNER ── */}
        <div className="border-b border-white/10 bg-white/[0.025] px-5 sm:px-8 lg:px-12 py-6 sm:py-7">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
            {/* Left status badge & headline */}
            <div className="space-y-1.5 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[10.5px] font-black uppercase tracking-wider text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Dallas Mobile Units • 45–60 Min Response</span>
              </div>
              <h3 className="font-display text-[20px] sm:text-[23px] font-black tracking-tight text-white leading-tight">
                Commercial Glass Emergency or New Storefront Project?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Direct commercial glazier dispatch line for immediate board-up, entrance door repair, or turnkey architectural glass estimates.
              </p>
            </div>

            {/* Right Call & Quote Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={site.phoneHref}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-[#6B3F27] to-[#1E232A] border border-white/20 rounded-xl px-5 py-3 shadow-lg hover:shadow-[0_0_25px_rgba(139,90,60,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="h-8 w-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-110 transition-transform">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">
                    24/7 Dispatch Line
                  </span>
                  <span className="font-black text-white text-[15px] tracking-tight leading-none">
                    {site.phone}
                  </span>
                </div>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 px-5 py-3 text-xs font-black uppercase tracking-wider text-white hover:text-amber-300 transition-all cursor-pointer text-center"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── MOBILE COLLAPSIBLE VERSION ── */}
        <div className="block lg:hidden px-5 sm:px-8 py-8 sm:py-10 text-left">
          {/* Logo & Description */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Logo tone="light" size="md" />
            </div>

            <p className="text-[13px] text-slate-300 leading-relaxed font-medium mb-5">
              North Texas’s trusted commercial glazing contractor for retail storefronts, corporate office towers, heavy glass doors, and 24/7 emergency board-up.
            </p>

            {/* Mobile Direct Phone CTA Card */}
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 w-full bg-gradient-to-r from-primary via-[#6B3F27] to-[#1E232A] border border-amber-400/40 rounded-2xl px-4 py-3 mb-5 shadow-lg active:scale-98 transition-transform"
            >
              <div className="h-9 w-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-amber-400 animate-bounce" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-black">
                  Emergency Dispatch • 24/7 Hotline
                </span>
                <span className="font-black text-white text-[15px] tracking-tight leading-tight">
                  {site.phone}
                </span>
              </div>
            </a>

            {/* Trust Badges - 2x2 grid */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[10.5px] font-bold text-amber-400 uppercase tracking-wide"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  ✓ {badge}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-slate-400">
                Connect:
              </span>
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-slate-900 border border-amber-400/30 text-amber-400 hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Collapsible Sections */}
          <MobileCollapsibleSection title="Commercial Services">
            <ul className="space-y-2.5">
              {commercialServices.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-slate-300 hover:text-amber-400 font-semibold block transition-colors py-0.5"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title="Quick Navigation">
            <ul className="space-y-2.5">
              {quickNav.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-slate-300 hover:text-amber-400 font-semibold block transition-colors py-0.5"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title="Dallas Facility & Contacts">
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="font-semibold text-white">{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors break-all"
                >
                  <Mail className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </a>
              </li>
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title="Operational Hours & Dispatch">
            <div className="bg-[#161D2B] border border-amber-400/20 rounded-xl p-3.5 text-xs text-slate-300 leading-relaxed font-semibold space-y-1.5">
              <span className="text-amber-400 font-black uppercase tracking-wider block mb-1 text-[10px] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Active Glazing Dispatch
              </span>
              <p className="text-white">Mon–Sat: 8:00 AM – 5:00 PM</p>
              <p className="text-slate-400">
                24/7 Commercial Emergency Response
              </p>
              <p className="text-[11px] text-emerald-400 pt-1">
                ⚡ 45–60 Min Rapid DFW Arrival
              </p>
            </div>
          </MobileCollapsibleSection>
        </div>

        {/* ── DESKTOP VERSION (4-COLUMN ARCHITECTURE) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 px-8 lg:px-12 py-14 sm:py-16 items-start text-left">
          {/* Col 1: Brand & Credibility Badges (col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <Logo tone="light" size="lg" />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              Dallas–Fort Worth’s trusted commercial glazing contractor for storefront systems, high-traffic glass entrance doors, architectural curtain walls, and emergency board-up.
            </p>

            {/* Social / Maps links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs font-bold text-slate-400">
                Connect:
              </span>
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-slate-900 border border-amber-400/30 text-amber-400 hover:bg-primary hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Trust Badges 2x2 */}
            <div className="flex flex-wrap gap-2 pt-2">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 hover:border-amber-400/40 rounded-xl px-3 py-1.5 text-[10px] font-black text-amber-400 uppercase tracking-wider transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  ✓ {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Commercial Services (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-black mb-5">
              Commercial Services
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {commercialServices.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-amber-400 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 text-emerald-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Areas (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-amber-400 font-black mb-5">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {quickNav.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-amber-400 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 text-emerald-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Facility Location & Dispatch (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-amber-400 font-black mb-5">
                Dallas Glazing Hub
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-primary/30 border border-primary/50 flex items-center justify-center text-amber-400 group-hover:bg-primary transition-all shrink-0">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                        24/7 Hotline
                      </span>
                      <span className="font-bold text-white tracking-tight text-xs truncate">
                        {site.phone}
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailHref}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-primary/30 border border-primary/50 flex items-center justify-center text-amber-400 group-hover:bg-primary transition-all shrink-0">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                        Plans & Estimates
                      </span>
                      <span className="font-semibold text-white tracking-tight text-xs truncate">
                        {site.email}
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-primary/30 border border-primary/50 flex items-center justify-center text-amber-400 group-hover:bg-primary transition-all shrink-0">
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                        Facility & Office
                      </span>
                      <span className="font-semibold text-white tracking-tight text-xs leading-snug">
                        {site.address.street}
                        <br />
                        {site.address.city}, {site.address.state} {site.address.zip}
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#161D2B] border border-white/10 rounded-2xl p-4 shadow-inner">
              <span className="text-amber-400 font-black uppercase tracking-wider block mb-2 text-[10.5px] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Active Dispatch Schedule
              </span>
              <div className="text-xs text-slate-300 leading-relaxed font-medium space-y-1">
                <p className="text-white font-semibold">
                  Mon–Sat: 8:00 AM – 5:00 PM
                </p>
                <p className="text-slate-400">
                  24/7 Commercial Emergency Response
                </p>
                <p className="text-[11px] text-emerald-400 pt-1">
                  ⚡ 45–60 Min Rapid DFW Mobile Glazier Dispatch
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR (COPYRIGHT, TRUST SUMMARY & BACK TO TOP) ── */}
        <div className="border-t border-white/10 px-5 sm:px-8 lg:px-12 py-6 bg-black/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            {/* Copyright Info */}
            <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-xs text-slate-400 font-medium order-2 sm:order-1">
              <p>
                © 2026 Sore Fronts Of Dallas. All Rights Reserved. Commercial Glazing & Storefront Systems.
              </p>
              <span className="hidden sm:inline text-white/20">|</span>
              <p className="text-slate-400">
                100% Commercial Only •{" "}
                <span className="text-amber-400 font-bold">Dallas, TX</span>
              </p>
            </div>

            {/* Back to top button */}
            <div className="flex items-center gap-6 order-1 sm:order-2">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xs text-slate-300 hover:text-white transition-colors font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer group py-1 select-none"
              >
                <span>Back to Top</span>
                <div className="h-6 w-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowUp className="h-3.5 w-3.5 text-amber-400 group-hover:text-white transition-colors" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
