import { useState } from "react";
import { Star, Phone, Mail, MapPin, ArrowRight, ShieldAlert, CheckCircle2, ExternalLink, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { reviewsPageData } from "@/data/reviews";
import { site } from "@/data/site";

export function ReviewsCta() {
  const { reviewCta } = reviewsPageData;

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "Commercial Storefront",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      toast.error("Please enter your name and phone number so our team can reach you.");
      return;
    }

    setSubmitted(true);
    toast.success("Thank you! Your estimate request has been received. Our team will reach out shortly.");
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    reviewCta.location.full
  )}`;

  return (
    <section
      id="reviews-cta"
      className="relative overflow-hidden py-20 sm:py-26 lg:py-32 bg-gradient-to-b from-background via-secondary/25 to-background"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-primary/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-amber-500/8 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />

      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[0.72rem] font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>{reviewCta.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-foreground leading-[1.12]">
            {reviewCta.headline}
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {reviewCta.intro}
          </p>
        </div>

        {/* Clean Two-Part Section: Left (Existing Clients) & Right (New Clients) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Existing Clients Review Box */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-amber-500/35 bg-card p-7 sm:p-9 shadow-lift relative overflow-hidden">
            {/* Top Amber Accent Sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                <span>{reviewCta.existingClients.title}</span>
              </div>

              <h3 className="font-display mt-5 text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
                Share Your Experience on Google
              </h3>

              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {reviewCta.existingClients.desc} Every review supports our local Dallas glazier team and helps North Texas property owners make informed decisions.
              </p>

              {/* 5-Star Visual Pill */}
              <div className="mt-6 rounded-2xl border border-border/80 bg-secondary/50 p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 font-display text-lg font-black text-foreground">5.0 Star Rating</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Verified Google Commercial Profile · Dallas, TX
                </div>
              </div>
            </div>

            {/* Google Review Button */}
            <div className="mt-8 pt-6 border-t border-border/70 space-y-3">
              <a
                href={reviewCta.existingClients.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>{reviewCta.existingClients.buttonText}</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <div className="text-center text-[11px] text-muted-foreground">
                Opens directly in Google Reviews · Takes less than 60 seconds
              </div>
            </div>
          </div>

          {/* Right Column: New Clients Consultation & Request Box */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-border/90 bg-card p-7 sm:p-9 shadow-lift relative overflow-hidden">
            {/* Top Red/Primary Accent Sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-[#b91c1c] to-primary" />

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/25 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <ShieldAlert className="h-3.5 w-3.5 text-primary" />
                <span>{reviewCta.newClients.title}</span>
              </div>

              <h3 className="font-display mt-5 text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
                Ready to Experience Reliable Glazing?
              </h3>

              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {reviewCta.newClients.desc}
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#new-client-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md hover:bg-primary/90 transition-all active:scale-95"
                >
                  <span>{reviewCta.newClients.buttons.estimate}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={reviewCta.contact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600 transition-all active:scale-95"
                >
                  <Phone className="h-4 w-4 text-red-600" />
                  <span>{reviewCta.newClients.buttons.emergency}</span>
                </a>
              </div>

              {/* Contact Information Strip */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-border/60">
                <a
                  href={reviewCta.contact.phoneHref}
                  className="rounded-xl border border-border/70 bg-secondary/40 p-3 flex items-center gap-3 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase text-muted-foreground">Phone</div>
                    <div className="text-sm font-extrabold text-foreground truncate">{reviewCta.contact.phone}</div>
                  </div>
                </a>

                <a
                  href={reviewCta.contact.emailHref}
                  className="rounded-xl border border-border/70 bg-secondary/40 p-3 flex items-center gap-3 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase text-muted-foreground">Email</div>
                    <div className="text-xs font-extrabold text-foreground truncate">{reviewCta.contact.email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-3.5">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-border/70 bg-secondary/40 p-3 flex items-center justify-between gap-3 transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-muted-foreground">Location</div>
                      <div className="text-xs font-extrabold text-foreground">{reviewCta.location.full}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary shrink-0">Map →</span>
                </a>
              </div>
            </div>

            {/* Quick Interactive Estimate Form */}
            <div id="new-client-form" className="mt-6 pt-5 border-t border-border/70">
              {submitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center space-y-2">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
                  <div className="text-sm font-bold text-foreground">Request Sent Successfully</div>
                  <div className="text-xs text-muted-foreground">We will contact you within 1 business hour.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="rounded-xl border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="rounded-xl border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Facility / Company Name or Project Scope"
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      className="flex-1 rounded-xl border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    <button
                      type="submit"
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer"
                    >
                      <Send className="h-3 w-3" />
                      <span>Send</span>
                    </button>
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
