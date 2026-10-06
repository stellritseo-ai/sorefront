import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, ShieldAlert, CheckCircle2, Clock, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { aboutPageData } from "@/data/about";
import { site } from "@/data/site";

const serviceList = [
  "Commercial Storefront & Entrance",
  "Curtain Wall & Window Wall",
  "Commercial Glass Doors & Hardware",
  "24/7 Emergency Board-Up & Repair",
  "Thermal / Low-E Glass Replacement",
  "Scheduled Maintenance Inspection",
  "Other Commercial Glazing Service",
];

export function AboutCta() {
  const { cta } = aboutPageData;

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: serviceList[0],
    isEmergency: false,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      toast.error("Please enter your name and phone number so our team can reach you.");
      return;
    }

    setSubmitted(true);
    toast.success("Estimate request received! Our Dallas commercial glazing team will reach out shortly.");
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    cta.location.full
  )}`;

  return (
    <section
      id="contact-section"
      className="relative overflow-hidden py-20 sm:py-26 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-primary/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-amber-500/8 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Centered Main Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>{cta.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-foreground leading-[1.12]">
            {cta.headline}
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {cta.body}
          </p>

          {/* Quick Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#estimate-form"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md hover:bg-primary/90 transition-all active:scale-95"
            >
              <span>{cta.buttons.estimate}</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={cta.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600 transition-all active:scale-95"
            >
              <ShieldAlert className="h-4 w-4 text-red-600" />
              <span>{cta.buttons.emergency}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Presentation: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Phone Card */}
            <a
              href={cta.contact.phoneHref}
              className="group block rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-soft transition-all duration-200 hover:border-primary/50 hover:shadow-lift hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Phone · Direct Call
                  </div>
                  <div className="font-display text-lg sm:text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {cta.contact.phone}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    24/7 Commercial Rapid Response
                  </div>
                </div>
              </div>
            </a>

            {/* Direct Email Card */}
            <a
              href={cta.contact.emailHref}
              className="group block rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-soft transition-all duration-200 hover:border-primary/50 hover:shadow-lift hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Email · Architectural Bids
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {cta.contact.email}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Itemized bids within 24 hours
                  </div>
                </div>
              </div>
            </a>

            {/* Dallas Headquarters Address Card */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-soft transition-all duration-200 hover:border-primary/50 hover:shadow-lift hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Facility & Office Location
                  </div>
                  <div className="text-sm sm:text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {cta.location.address}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {cta.location.cityStateZip}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold text-primary">
                    Get Driving Directions →
                  </div>
                </div>
              </div>
            </a>

            {/* Operational Hours Pill */}
            <div className="rounded-xl border border-border/60 bg-secondary/50 p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>{site.hours}</span>
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">
                24/7 Mobile Glazier Dispatch for Emergencies
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Estimate Form */}
          <div id="estimate-form" className="lg:col-span-7">
            <div className="rounded-2xl border border-border/90 bg-card p-6 sm:p-8 shadow-lift">
              <div className="mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Request a Free Commercial Estimate
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  Fill in your details below for a fast on-site consultation and itemized proposal.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 animate-bounce" />
                  <h4 className="font-display text-lg font-bold text-foreground">
                    Thank You! We Have Received Your Request
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                    A commercial glazing specialist from Sure Fronts Of Dallas will review your requirements and reach out within 1 business hour.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Business / Property Name
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Design District Retail"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="(469) 000-0000"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Service Category Needed
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      {serviceList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Emergency Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer select-none rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <input
                      type="checkbox"
                      checked={formState.isEmergency}
                      onChange={(e) => setFormState({ ...formState, isEmergency: e.target.checked })}
                      className="h-4 w-4 rounded text-primary focus:ring-primary"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-foreground">
                        This is an active commercial glass emergency
                      </span>
                      <span className="text-muted-foreground block text-[11px]">
                        (Requires immediate rapid dispatch for break-in, impact or security compromise)
                      </span>
                    </div>
                  </label>

                  {/* Message / Project Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Project Details or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about the project dimensions, glass type, timeline or location in DFW..."
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary via-[#b91c1c] to-primary py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Free Estimate Request</span>
                  </button>

                  <div className="text-center text-[11px] text-muted-foreground">
                    100% Free Consultation · Zero Obligation · DFW Commercial Glazing Specialists
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
