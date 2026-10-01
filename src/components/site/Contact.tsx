import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Compass,
  ArrowRight,
  Navigation,
  CheckCircle2,
  Send,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { site, serviceOptions } from "@/data/site";
import { Reveal } from "./Reveal";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
)}`;

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.7718055668614!2d-96.7725916!3d32.8990529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2069b2447aa7%3A0xb48b6adfe6778f65!2s10830%20N%20Central%20Expy%20%23130%2C%20Dallas%2C%20TX%2075231!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    timeline: "Standard (1-2 Days)",
    details: "",
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business || "Not specified"}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not specified"}`,
      `Service needed: ${form.service || "Commercial Glass Consultation"}`,
      `Timeline: ${form.timeline}`,
      "",
      `Project Details:\n${form.details || "No additional notes provided."}`,
    ].join("\n");

    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      `Commercial Estimate Request - ${form.business || form.name}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Estimate request compiled successfully", {
      description: `Opening your email. For immediate dispatch, call ${site.phone}.`,
    });

    setIsSubmitted(true);
    setIsSubmitting(false);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] rounded-[14px] transition-all duration-300 scroll-mt-24 mx-3 my-4 sm:mx-6 sm:my-8 lg:mx-auto lg:my-12 py-10 sm:py-14"
    >
      {/* ── Background Subtle Ambient Decorations ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #8B5A3C 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-36 -left-36 w-[500px] h-[500px] rounded-full bg-primary/[0.035] blur-[130px]" />
        <div className="absolute -bottom-36 -right-36 w-[450px] h-[450px] rounded-full bg-amber-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[94rem] px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <Reveal className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/[0.06] text-primary text-[10.5px] font-black uppercase tracking-widest mb-3.5 shadow-2xs select-none">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span>Commercial Estimates & Dispatch</span>
            <MapPin className="size-3 text-primary" />
          </div>

          <h2 className="text-slate-900 font-extrabold tracking-tight leading-[1.18] text-xl xs:text-2xl sm:text-[28px] md:text-[32px] lg:text-[35px] font-display mt-0 mb-2 sm:mb-2.5">
            Request a Free Estimate or{" "}
            <span className="bg-gradient-to-r from-primary via-[#6B3F27] to-foreground bg-clip-text text-transparent">
              Commercial Glass Dispatch.
            </span>
          </h2>

          <p className="text-slate-500 text-[13.5px] sm:text-[14.5px] leading-relaxed font-medium max-w-xl mx-auto mb-2 sm:mb-4">
            Direct access to licensed DFW commercial glaziers. Submit project specs below or call for 24/7 immediate emergency response.
          </p>
        </Reveal>

        {/* ── Main 2-Column Split: Estimate Form (Left) & Facility/Map (Right) ── */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* ── LEFT COLUMN: Commercial Estimate Form (col-span-7) ── */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-7 lg:p-8 shadow-xs relative">
              {/* Form Header */}
              <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-200/80">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display tracking-tight">
                    Commercial Estimate Request
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5">
                    Licensed, insured & bonded. Dallas dispatch responds within 15–30 minutes.
                  </p>
                </div>

                <div className="hidden sm:flex size-10 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center text-primary shrink-0">
                  <Building2 className="size-5" />
                </div>
              </div>

              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="py-8 text-center flex flex-col items-center justify-center">
                  <div className="size-14 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-3 shadow-sm animate-in zoom-in-95 duration-300">
                    <CheckCircle2 className="size-8" />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-1">
                    Estimate Request Prepared!
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-5 leading-relaxed font-medium">
                    Your commercial project specifications have been compiled. For immediate rapid emergency dispatch, call our 24/7 team directly at{" "}
                    <strong className="text-slate-900 font-bold">{site.phone}</strong>.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-[#6B3F27] to-[#1E232A] text-white text-xs font-black uppercase tracking-widest rounded-full px-6 py-3 shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      <Phone className="size-3.5" />
                      <span>Call {site.phone}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setForm({
                          name: "",
                          business: "",
                          phone: "",
                          email: "",
                          service: "",
                          timeline: "Standard (1-2 Days)",
                          details: "",
                        });
                      }}
                      className="px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-all cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={onSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Contact Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-white rounded-xl border border-slate-200/90 py-2.5 sm:py-3 px-3.5 sm:px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business / Property Name
                      </label>
                      <input
                        type="text"
                        value={form.business}
                        onChange={update("business")}
                        placeholder="e.g. Dallas Plaza Management"
                        className="w-full bg-white rounded-xl border border-slate-200/90 py-2.5 sm:py-3 px-3.5 sm:px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Direct Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={update("phone")}
                          placeholder="(469) 000-0000"
                          className="w-full bg-white rounded-xl border border-slate-200/90 py-2.5 sm:py-3 pl-3.5 sm:pl-4 pr-10 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium shadow-2xs"
                        />
                        <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update("email")}
                          placeholder="client@company.com"
                          className="w-full bg-white rounded-xl border border-slate-200/90 py-2.5 sm:py-3 pl-3.5 sm:pl-4 pr-10 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium shadow-2xs"
                        />
                        <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Service Needed & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Commercial Service Needed
                      </label>
                      <select
                        value={form.service}
                        onChange={update("service")}
                        className="w-full bg-white rounded-xl border border-slate-200/90 py-2.5 sm:py-3 px-3.5 sm:px-4 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium shadow-2xs cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Urgency / Timeline
                      </label>
                      <select
                        value={form.timeline}
                        onChange={update("timeline")}
                        className="w-full bg-white rounded-xl border border-slate-200/90 py-2.5 sm:py-3 px-3.5 sm:px-4 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium shadow-2xs cursor-pointer"
                      >
                        <option value="Immediate Emergency (Under 60 Min)">
                          Immediate Emergency (Under 60 Min)
                        </option>
                        <option value="Same-Day / Next-Day Estimate">
                          Same-Day / Next-Day Estimate
                        </option>
                        <option value="Standard (1-2 Days)">
                          Standard (1-2 Days)
                        </option>
                        <option value="Future Bid / Planning">
                          Future Bid / Planning
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Details / Location Notes */}
                  <div>
                    <label className="block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Property Address & Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={form.details}
                      onChange={update("details")}
                      placeholder="Describe the facility, door size, glass type, or damage location in Dallas–Fort Worth..."
                      className="w-full bg-white rounded-xl border border-slate-200/90 py-2.5 sm:py-3 px-3.5 sm:px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium resize-none shadow-2xs"
                    />
                  </div>

                  {/* Submit Action Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-[#6B3F27] to-[#1E232A] text-white text-[11px] font-black uppercase tracking-widest rounded-xl px-7 py-3.5 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    >
                      <Send className="size-3.5" />
                      <span>
                        {isSubmitting ? "Submitting Request..." : "Request Free Commercial Estimate"}
                      </span>
                    </button>

                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-500 text-center sm:text-right">
                      <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                      <span>100% Commercial Only • Zero Obligation</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* ── RIGHT COLUMN: Office Location, Map & Direct Contacts (col-span-5) ── */}
          <Reveal delay={0.08} className="lg:col-span-5 space-y-4">
            {/* Facility Location Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 sm:size-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-black uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Dallas Glazing Facility & Office
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-slate-900 font-display mt-0.5">
                      {site.address.street}
                    </h4>
                  </div>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open in Google Maps"
                  className="size-8.5 sm:size-9 rounded-xl bg-slate-100 hover:bg-primary text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs shrink-0 cursor-pointer"
                >
                  <Navigation className="size-4" />
                </a>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-primary shrink-0" />
                  <span>{site.address.city}, {site.address.state} {site.address.zip} • North Dallas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5 text-emerald-600 shrink-0" />
                  <span>Mon–Sat: 8:00 AM – 5:00 PM • 24/7 Emergency Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="size-3.5 text-amber-600 shrink-0" />
                  <span>Central Expressway (US-75) & Royal Ln • 50-Mile Radius</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-black uppercase tracking-wider transition-all shadow-xs"
                >
                  <Phone className="size-3.5 text-emerald-400" />
                  <span>{site.phone}</span>
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 text-[11px] font-black uppercase tracking-wider transition-all"
                >
                  <Navigation className="size-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Live Google Map Frame */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm bg-white p-2 group relative">
              <div className="relative rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  title="Sore Fronts Of Dallas Facility Location Map"
                  src={mapEmbedUrl}
                  loading="lazy"
                  className="h-[240px] sm:h-[270px] w-full border-0 transition-opacity duration-300"
                />

                {/* Floating Map Facility Status Tag */}
                <div className="absolute bottom-3 left-3 z-10 max-w-[calc(100%-24px)] inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 backdrop-blur-md px-3 py-1.5 text-[9px] xs:text-[9.5px] font-black uppercase tracking-wider text-white shadow-lg border border-white/20 truncate">
                  <span className="size-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="truncate">Dallas Dispatch Active · 50-Mi Radius</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
