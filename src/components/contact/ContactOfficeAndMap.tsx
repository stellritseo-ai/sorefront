import { MapPin, Phone, Mail, Clock, ShieldAlert, Navigation, ExternalLink } from "lucide-react";
import { contactPageData } from "@/data/contact";

export function ContactOfficeAndMap() {
  const { office } = contactPageData;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.address.full
  )}`;

  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 text-white overflow-hidden">
      {/* Subtle Background Glow & Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(185,28,28,0.15),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-300 mb-3 backdrop-blur-xs">
            <MapPin className="h-3.5 w-3.5" />
            <span>{office.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {office.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {office.body}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards, Address & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Address Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600/20 text-red-400 border border-red-500/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Headquarters</h3>
                    <p className="text-lg font-bold text-white mt-0.5">{office.company}</p>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">{office.address.street}</p>
                    <p className="text-sm text-slate-300">{office.address.city}, {office.address.state} {office.address.zip}</p>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 mt-3 group"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>Get Driving Directions</span>
                      <ExternalLink className="h-3 w-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={office.phoneHref}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md hover:border-red-500/40 hover:bg-white/[0.07] transition-all block group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600/20 text-red-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone</span>
                  </div>
                  <p className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    {office.phone}
                  </p>
                </a>

                <a
                  href={office.emailHref}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md hover:border-blue-500/40 hover:bg-white/[0.07] transition-all block group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</span>
                  </div>
                  <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                    {office.email}
                  </p>
                </a>
              </div>

              {/* Hours Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Operating Schedule</h3>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-slate-300 font-medium">Monday - Friday</span>
                    <span className="text-white font-bold">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-slate-400 font-medium">Saturday - Sunday</span>
                    <span className="text-slate-400 font-semibold">Closed</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-red-950/60 border border-red-500/30 p-3 text-xs font-semibold text-red-300">
                  <ShieldAlert className="h-4 w-4 shrink-0 text-red-400" />
                  <span>{office.emergencyDispatch}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex">
            <div className="w-full relative rounded-3xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl min-h-[420px] lg:min-h-full">
              <iframe
                title="Sure Fronts Of Dallas Office Location"
                src={office.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "440px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.08] hover:grayscale-0 transition-all duration-300"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:right-auto sm:left-4 rounded-xl border border-white/20 bg-slate-950/90 px-4 py-2.5 backdrop-blur-md shadow-xl">
                <p className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Centrally Located on N. Central Expressway (US-75)
                </p>
                <p className="text-[11px] text-slate-300 mt-0.5">Quick access to all DFW commercial corridors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
