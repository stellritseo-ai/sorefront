import {
  Star,
  BadgeCheck,
  CheckCircle2,
  Sparkles,
  Quote,
  ArrowUpRight,
  ArrowRight,
  Store,
  DoorClosed,
  ShieldCheck,
  Building2,
  Wrench,
  Sparkle,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface Review {
  name: string;
  role: string;
  location: string;
  service: string;
  icon: LucideIcon;
  rating: number;
  initials: string;
  avatarGradient: string;
  tagClass: string;
  text: string;
  badge: string;
}

const reviewsRow1: Review[] = [
  {
    name: "Marcus R.",
    role: "General Contractor",
    location: "Downtown Dallas",
    service: "Storefront Systems",
    icon: Store,
    rating: 5,
    initials: "MR",
    avatarGradient: "from-[#8B5A3C] to-[#5A3822]",
    tagClass: "bg-primary/[0.07] text-primary border-primary/20",
    text: "Completed a 14-bay commercial aluminum storefront replacement on Elm St. On site at 7 AM sharp, handled heavy glass hoisting safely, and passed city inspection on first walk.",
    badge: "General Contractor",
  },
  {
    name: "Elena G.",
    role: "Senior Asset Manager",
    location: "North Dallas / Plano",
    service: "Commercial Entrances",
    icon: DoorClosed,
    rating: 5,
    initials: "EG",
    avatarGradient: "from-[#334155] to-[#1E293B]",
    tagClass: "bg-slate-100 text-slate-800 border-slate-200/90",
    text: "Swapped out 6 high-traffic commercial glass pivot doors with concealed hydraulic closers. Seamless Texas ADA egress compliance, silent operation, and rock-solid warranty.",
    badge: "Corporate Asset",
  },
  {
    name: "David T.",
    role: "Retail Operations Lead",
    location: "Uptown Dallas",
    service: "24/7 Emergency",
    icon: ShieldCheck,
    rating: 5,
    initials: "DT",
    avatarGradient: "from-[#92400E] to-[#78350F]",
    tagClass: "bg-amber-500/[0.08] text-amber-900 border-amber-500/25",
    text: "Their emergency response unit arrived in 40 minutes on a Friday night after vehicle impact. Secured the premises immediately and installed custom tempered glass Monday.",
    badge: "Rapid Dispatch",
  },
  {
    name: "Carlos M.",
    role: "Facilities Director",
    location: "Las Colinas / Irving",
    service: "Curtain Wall Glazing",
    icon: Building2,
    rating: 5,
    initials: "CM",
    avatarGradient: "from-[#475569] to-[#0F172A]",
    tagClass: "bg-slate-100 text-slate-800 border-slate-200/90",
    text: "Diagnosed failed pressure plates and structural silicone seals on our two-story glass curtain wall. 100% leak-free through recent severe North Texas storms.",
    badge: "Facility Director",
  },
  {
    name: "Amanda K.",
    role: "Hospitality GM",
    location: "Dallas Arts District",
    service: "Architectural Glass",
    icon: Sparkle,
    rating: 5,
    initials: "AK",
    avatarGradient: "from-[#8B5A3C] to-[#6B3F27]",
    tagClass: "bg-primary/[0.07] text-primary border-primary/20",
    text: "Installed custom dark-bronze double entrance doors with low-E safety glass and heavy-duty panic bars. Flawless alignment and whisper-quiet latching.",
    badge: "Verified Client",
  },
];

const reviewsRow2: Review[] = [
  {
    name: "Sofia L.",
    role: "Commercial Property Lead",
    location: "Frisco / Legacy",
    service: "Tempered Safety Glass",
    icon: ShieldCheck,
    rating: 5,
    initials: "SL",
    avatarGradient: "from-[#065F46] to-[#064E3B]",
    tagClass: "bg-emerald-600/[0.08] text-emerald-800 border-emerald-600/20",
    text: "Transparent, itemized proposals with zero surprise change orders. From laser measurement to final sign-off, Sore Fronts is our most reliable glazing contractor in DFW.",
    badge: "Commercial Client",
  },
  {
    name: "Travis W.",
    role: "Superintendent",
    location: "Arlington / DFW",
    service: "Panic Hardware & Closers",
    icon: Wrench,
    rating: 5,
    initials: "TW",
    avatarGradient: "from-[#9A3412] to-[#7C2D12]",
    tagClass: "bg-amber-500/[0.08] text-amber-900 border-amber-500/25",
    text: "Re-hung and adjusted 10 commercial glass exit doors that failed fire inspection under our previous sub. Passed city re-inspection on the first try.",
    badge: "Code Compliance",
  },
  {
    name: "Jason B.",
    role: "Restaurant Group VP",
    location: "Fort Worth / West 7th",
    service: "Entrance Systems",
    icon: DoorClosed,
    rating: 5,
    initials: "JB",
    avatarGradient: "from-[#653B24] to-[#452414]",
    tagClass: "bg-primary/[0.07] text-primary border-primary/20",
    text: "Custom anodized entrance doors with low-E insulated glass for our new restaurant venue. Flawless fitment, zero drafts, and architect approved.",
    badge: "Commercial Client",
  },
  {
    name: "Ramon V.",
    role: "Building Operations Lead",
    location: "Richardson Tech Corridor",
    service: "Thermal Low-E Retrofit",
    icon: Store,
    rating: 5,
    initials: "RV",
    avatarGradient: "from-[#334155] to-[#1E293B]",
    tagClass: "bg-slate-100 text-slate-800 border-slate-200/90",
    text: "Upgraded our street-level storefronts to 1-inch solar-control insulated glass. Substantial reduction in cooling load and the modern framing looks brand new.",
    badge: "Operations Lead",
  },
  {
    name: "Kevin P.",
    role: "Logistics Facilities Lead",
    location: "DFW Airport Corridor",
    service: "Heavy-Duty Hardware",
    icon: Wrench,
    rating: 5,
    initials: "KP",
    avatarGradient: "from-[#7C2D12] to-[#431407]",
    tagClass: "bg-amber-500/[0.08] text-amber-900 border-amber-500/25",
    text: "Repaired heavy aluminum threshold pivots and reinforced glass mullions damaged by freight carts. Durable commercial-grade fix delivered in under 24 hours.",
    badge: "Industrial Facility",
  },
];

function ReviewCard({ rev }: { rev: Review }) {
  const Icon = rev.icon;

  return (
    <div className="group relative w-[260px] xs:w-[285px] sm:w-[315px] md:w-[335px] shrink-0 p-4.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 hover:bg-white border border-slate-200/80 hover:border-primary/45 transition-all duration-300 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_-4px_rgba(15,23,42,0.08),0_2px_6px_-1px_rgba(139,90,60,0.08)] hover:-translate-y-0.5 flex flex-col justify-between min-h-[205px] sm:min-h-[220px] select-none text-left">
      {/* Top subtle sheen highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-slate-50/70 via-transparent to-transparent rounded-t-xl" />

      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Header: Stars & Service Pill Tag */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(rev.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="size-3 sm:size-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${rev.tagClass}`}
            >
              <Icon className="size-2.5 shrink-0" />
              <span className="truncate max-w-[140px]">{rev.service}</span>
            </span>
          </div>

          {/* Quote text */}
          <p className="text-slate-700 text-[12.5px] sm:text-[13px] leading-relaxed font-normal line-clamp-4 mb-3">
            <Quote className="size-3.5 text-primary/25 fill-primary/20 shrink-0 inline mr-1 -mt-0.5" />
            {rev.text}
          </p>
        </div>
      </div>

      {/* Author Bar */}
      <div className="relative z-10 flex items-center justify-between gap-2 pt-3 sm:pt-3.5 mt-auto border-t border-slate-100">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`size-8 sm:size-8.5 rounded-full bg-gradient-to-br ${rev.avatarGradient} flex items-center justify-center text-white text-[11px] font-black shrink-0 shadow-2xs`}
          >
            {rev.initials}
          </div>
          <div className="min-w-0">
            <p className="font-extrabold text-[12.5px] sm:text-[13px] text-slate-900 leading-tight truncate">
              {rev.name}
            </p>
            <p className="text-[10.5px] text-slate-500 font-medium leading-tight truncate mt-0.5">
              {rev.role} • {rev.location}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50/80 border border-emerald-200/60 px-1.5 py-0.5 rounded shrink-0">
          <BadgeCheck className="size-2.5 text-emerald-600" />
          <span>{rev.badge}</span>
        </span>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.05)] rounded-[14px] transition-all duration-300 scroll-mt-24 mx-3 my-4 sm:mx-6 sm:my-8 lg:mx-auto lg:my-12 py-10 sm:py-14"
    >
      {/* Ambient background glows matching architectural palette */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/[0.035] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-amber-500/[0.03] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #8B5A3C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-[94rem] z-10 px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <Reveal className="text-center max-w-5xl mx-auto mb-6 sm:mb-8">
          {/* Eyebrow Pill Badge */}
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/25 bg-primary/[0.06] text-primary text-[10px] font-bold uppercase tracking-widest mb-3.5 shadow-2xs select-none hover:bg-primary/15 transition-colors group cursor-pointer"
          >
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span>Verified Client Reviews</span>
            <ArrowRight className="size-3 text-primary transition-transform group-hover:translate-x-0.5" />
          </a>

          <h2 className="text-slate-900 font-extrabold tracking-tight leading-[1.2] text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-display mt-0 mb-2.5">
            Trusted by Dallas{" "}
            <span className="bg-gradient-to-r from-primary via-[#6B3F27] to-foreground bg-clip-text text-transparent">
              Property Owners & Contractors.
            </span>
          </h2>

          <p className="text-slate-500 text-[13px] sm:text-[14px] leading-relaxed font-medium max-w-xl mx-auto mb-4 sm:mb-6">
            Real feedback from commercial builders, retail property managers, corporate facilities directors, and local Dallas businesses who count on Sore Fronts Of Dallas every day.
          </p>
        </Reveal>

        {/* ── Overall Rating Banner Strip (Brown Project Style) ── */}
        <Reveal delay={0.06} className="mb-5 sm:mb-6">
          <div className="rounded-xl bg-slate-50/90 border border-slate-200/80 px-4 py-3 sm:px-6 sm:py-3.5 flex flex-col md:flex-row items-center justify-between gap-3.5 sm:gap-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 sm:gap-3.5 text-left">
              {/* Overlapping Initial Avatars from Brown project */}
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {["MR", "EG", "DT", "CM", "JB"].map((init, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border-2 border-white flex items-center justify-center text-[9px] sm:text-[9.5px] font-black text-white shadow-2xs"
                    style={{
                      backgroundColor: ["#8B5A3C", "#334155", "#92400E", "#475569", "#653B24"][i],
                      zIndex: 5 - i,
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div className="text-2xl sm:text-[28px] font-extrabold text-slate-900 font-display leading-none">
                4.9<span className="text-xs sm:text-sm text-slate-400 font-bold">/5</span>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 sm:size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] sm:text-xs text-slate-600 font-semibold">
                  Over 500+ DFW Commercial Glass Installations
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap items-start sm:items-center justify-center gap-2 sm:gap-3.5 md:gap-5 text-[11px] sm:text-[12px] font-bold text-slate-700 md:whitespace-nowrap">
              <div className="flex items-center gap-1.5 shrink-0 sm:whitespace-nowrap">
                <CheckCircle2 className="size-3.5 sm:size-4 text-primary shrink-0" />
                <span>100% Commercial Only</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 sm:whitespace-nowrap">
                <CheckCircle2 className="size-3.5 sm:size-4 text-primary shrink-0" />
                <span>Texas IBC & ADA Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 sm:whitespace-nowrap">
                <CheckCircle2 className="size-3.5 sm:size-4 text-primary shrink-0" />
                <span>24/7 Rapid Emergency Response</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Sliding Testimonials Marquee (Two Rows with Gradient Fade Masks) ── */}
        <Reveal delay={0.1} className="relative overflow-hidden py-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="pause-on-hover relative">
            {/* Edge gradient fade masks */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"
            />

            {/* Row 1: Slide Right to Left */}
            <div className="flex gap-3 sm:gap-3.5 mb-3 sm:mb-3.5 animate-marquee-left">
              {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((rev, index) => (
                <ReviewCard key={`row1-${rev.name}-${index}`} rev={rev} />
              ))}
            </div>

            {/* Row 2: Slide Left to Right */}
            <div className="flex gap-3 sm:gap-3.5 animate-marquee-right">
              {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((rev, index) => (
                <ReviewCard key={`row2-${rev.name}-${index}`} rev={rev} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Bottom Google & Dedicated Reviews Link ── */}
        <Reveal delay={0.14} className="mt-8 flex flex-wrap items-center justify-center gap-3.5 text-center">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-[#b91c1c] to-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            <span>Explore All 127+ Client Reviews</span>
            <ArrowRight className="size-3.5" />
          </a>

          <a
            href="https://www.google.com/search?q=Sore+Fronts+Of+Dallas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:text-primary hover:border-primary/40 shadow-xs transition-colors group"
          >
            <span>Verified Google Reviews</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
