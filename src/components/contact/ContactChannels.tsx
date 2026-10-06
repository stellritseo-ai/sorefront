import { PhoneCall, ClipboardList, Mail, ArrowRight, ShieldAlert, Clock, Sparkles } from "lucide-react";
import { contactPageData } from "@/data/contact";

export function ContactChannels() {
  const { channels } = contactPageData;

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{channels.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {channels.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Route your request to the right department immediately to avoid delays.
          </p>
        </div>

        {/* 3-Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Emergency Dispatch */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-white to-red-50/40 p-8 border-2 border-red-500/30 shadow-xl shadow-red-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-2xl">
            {/* Urgent Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                Urgent Priority
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <ShieldAlert className="h-6 w-6" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                24/7 Emergency Dispatch 🚨
              </h3>
              <p className="text-sm font-semibold text-red-700 mb-4">
                For broken glass, failed entrances, or security risks.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Do not use the email form for emergencies. Call our dedicated emergency line immediately for rapid dispatch and board-up services.
              </p>
            </div>

            <div className="pt-6 border-t border-red-100 mt-auto">
              <a
                href="tel:+14693605805"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-red-600/30 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Now: (469) 360-5805</span>
              </a>
              <p className="text-center text-xs font-semibold text-slate-500 mt-2.5">
                (Available 24 Hours a Day, 7 Days a Week)
              </p>
            </div>
          </div>

          {/* Card 2: Request a Free Estimate */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-white to-blue-50/40 p-8 border-2 border-blue-500/20 shadow-xl shadow-blue-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                Project Quotes
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <ClipboardList className="h-6 w-6" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Request a Free Estimate 📋
              </h3>
              <p className="text-sm font-semibold text-blue-700 mb-4">
                For new installations, storefront upgrades, or planned renovations.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Ready to start a project? Fill out our detailed estimate form to provide your project specs, and a project manager will contact you within 24 business hours.
              </p>
            </div>

            <div className="pt-6 border-t border-blue-100 mt-auto">
              <a
                href="/free-estimate"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/30 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>Link to Free Estimate Page</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-center text-xs font-semibold text-slate-500 mt-2.5 flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" />
                Response within 24 business hours
              </p>
            </div>
          </div>

          {/* Card 3: General & Administrative Inquiries */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-white to-slate-100/50 p-8 border-2 border-slate-200 shadow-xl shadow-slate-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                General &amp; Admin
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Mail className="h-6 w-6" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                General &amp; Administrative Inquiries ✉️
              </h3>
              <p className="text-sm font-semibold text-slate-700 mb-4">
                For billing, vendor relations, or general questions.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                For non-urgent matters, please send us an email or use the general contact form below.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-auto space-y-2.5">
              <a
                href="#contact-form"
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 active:scale-[0.98] transition-all"
              >
                <span>Use General Form Below</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:support@sorefrontsofdallas.com"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all truncate"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">Email: support@sorefrontsofdallas.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
