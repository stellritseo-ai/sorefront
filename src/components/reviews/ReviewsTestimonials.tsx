import { useState } from "react";
import { Star, Quote, CheckCircle2, Building, ShieldCheck, MapPin, Filter, Sparkles } from "lucide-react";
import { reviewsPageData } from "@/data/reviews";

const categoryColors: Record<string, { badgeBg: string; badgeText: string }> = {
  "The Property Manager": { badgeBg: "bg-amber-500/10 border-amber-500/30", badgeText: "text-amber-700" },
  "The General Contractor": { badgeBg: "bg-sky-500/10 border-sky-500/30", badgeText: "text-sky-700" },
  "The Business Owner": { badgeBg: "bg-primary/10 border-primary/30", badgeText: "text-primary" },
  "The Facility Director": { badgeBg: "bg-emerald-500/10 border-emerald-500/30", badgeText: "text-emerald-700" },
};

export function ReviewsTestimonials() {
  const { testimonials } = reviewsPageData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filterTabs = [
    { label: "All Reviews", key: "All", count: testimonials.length },
    {
      label: "Property Managers",
      key: "The Property Manager",
      count: testimonials.filter((t) => t.category === "The Property Manager").length,
    },
    {
      label: "General Contractors",
      key: "The General Contractor",
      count: testimonials.filter((t) => t.category === "The General Contractor").length,
    },
    {
      label: "Business Owners",
      key: "The Business Owner",
      count: testimonials.filter((t) => t.category === "The Business Owner").length,
    },
    {
      label: "Facility Directors",
      key: "The Facility Director",
      count: testimonials.filter((t) => t.category === "The Facility Director").length,
    },
  ];

  const displayedReviews =
    activeCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 lg:py-28 bg-secondary/35">
      {/* Subtle architectural background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3.5 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Featured Client Testimonials</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
            Real Results from Commercial Leaders Across DFW
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Read verified reviews from general contractors, property management firms, and business owners who rely on our commercial glazing team.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-14 max-w-4xl mx-auto">
          {filterTabs.map((tab) => {
            const isSelected = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "border border-border/80 bg-card text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:border-primary/30"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Distinct Testimonial Cards Grid (12 Reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {displayedReviews.map((item) => {
            const colors = categoryColors[item.category] || {
              badgeBg: "bg-secondary border-border",
              badgeText: "text-foreground",
            };

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between"
              >
                {/* Decorative Top Accent Glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-amber-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Top Header: Category Tag & 5 Stars */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${colors.badgeBg} ${colors.badgeText}`}
                    >
                      <Building className="h-3 w-3" />
                      <span>{item.category}</span>
                    </span>

                    {/* 5-Star Graphics */}
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-1 text-xs font-bold text-foreground">5.0</span>
                    </div>
                  </div>

                  {/* Quote Icon & Body */}
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/15 absolute -top-2 -left-1 pointer-events-none" />
                    <p className="relative z-10 text-sm sm:text-[0.98rem] text-foreground/90 leading-relaxed italic pl-3 sm:pl-4 border-l-2 border-primary/30">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Service Rendered Pill */}
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-secondary/80 border border-border/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="line-clamp-1">Project: {item.serviceTag}</span>
                  </div>
                </div>

                {/* Card Footer: Client Info */}
                <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-amber-700 text-white font-extrabold text-sm shadow-xs">
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-extrabold text-foreground flex items-center gap-1.5">
                        <span>{item.author}</span>
                        <span title="Verified Commercial Client">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-primary">
                        {item.role}
                      </div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1">
                        {item.company}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-muted-foreground shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground/70" />
                    <span>{item.location}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
