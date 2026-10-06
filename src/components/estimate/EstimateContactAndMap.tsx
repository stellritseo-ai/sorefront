import { Phone, Mail, MapPin, Clock, Compass, Navigation, ArrowRight, ShieldCheck } from "lucide-react";
import { estimatePageData } from "@/data/estimate";
import { site } from "@/data/site";

export function EstimateContactAndMap() {
  const { contact } = estimatePageData;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    contact.address.full
  )}`;

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 lg:py-28 bg-background">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-36 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary/6 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-amber-500/6 blur-3xl" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <span>Facility &amp; Location</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.15]">
            {contact.headline}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {contact.body}
          </p>
        </div>

        {/* Two-Column Layout: Left (Contact Details) & Right (Embedded Google Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards & Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Primary Headquarters Card */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-soft space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Dallas Headquarters
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground font-display mt-1">
                      {contact.company}
                    </h3>
                  </div>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-xs"
                  aria-label="Open in Google Maps"
                >
                  <Navigation className="h-4 w-4" />
                </a>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-border/60 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{contact.address.full}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hours: {contact.hours}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Compass className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Emergency Dispatch: {contact.emergency} (50-Mile DFW Radius)</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <a
              href={contact.phoneHref}
              className="group block rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-soft transition-all duration-200 hover:border-primary/50 hover:shadow-lift hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Direct Phone Line
                  </div>
                  <div className="font-display text-lg sm:text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {contact.phone}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Call for rapid questions or urgent dispatch
                  </div>
                </div>
              </div>
            </a>

            {/* Direct Email Card */}
            <a
              href={contact.emailHref}
              className="group block rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-soft transition-all duration-200 hover:border-primary/50 hover:shadow-lift hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Email Inquiries &amp; Plans
                  </div>
                  <div className="font-display text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {contact.email}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Itemized bids &amp; architectural submittals
                  </div>
                </div>
              </div>
            </a>

          </div>

          {/* Right Column: Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full rounded-2xl border border-border/90 bg-card p-2 sm:p-3 shadow-soft group relative flex flex-col">
              <div className="relative flex-1 min-h-[340px] sm:min-h-[400px] w-full rounded-xl overflow-hidden bg-secondary">
                <iframe
                  title="Sure Fronts Of Dallas Facility Location Map"
                  src={contact.mapEmbedUrl}
                  loading="lazy"
                  className="h-full w-full min-h-[340px] sm:min-h-[400px] border-0"
                />

                {/* Floating Live Dispatch Badge */}
                <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 rounded-full bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg border border-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span>Dallas Mobile Fleet Active · 50-Mi Metroplex Radius</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
