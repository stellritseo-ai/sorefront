import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Compass, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { site, serviceOptions } from "@/data/site";
import { Reveal } from "./Reveal";

const field =
  "w-full rounded-sm glass-input px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/70";
const labelCls =
  "mb-2 block text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-foreground";

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Business: ${data.get("business")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service needed: ${data.get("service")}`,
      "",
      `${data.get("details")}`,
    ].join("\n");

    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      "Commercial estimate request",
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email to send the request", {
      description: `Prefer to talk now? Call ${site.phone}.`,
    });
    setSending(false);
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[86rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="display-lg mt-5">Let&apos;s talk about your commercial project.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-10 divide-y divide-border border-y border-border">
              <div className="flex items-start gap-4 py-5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.4} />
                <div>
                  <dt className={labelCls}>Phone</dt>
                  <dd>
                    <a href={site.phoneHref} className="text-sm font-medium hover:text-primary">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.4} />
                <div className="min-w-0">
                  <dt className={labelCls}>Email</dt>
                  <dd>
                    <a
                      href={site.emailHref}
                      className="break-all text-sm font-medium hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.4} />
                <div>
                  <dt className={labelCls}>Address</dt>
                  <dd className="text-sm leading-relaxed">
                    10830 N. Central Expressway Ste. 130
                    <br />
                    Dallas, TX 75231
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-5">
                <Compass className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.4} />
                <div>
                  <dt className={labelCls}>Service area</dt>
                  <dd className="text-sm">50 miles around Dallas</dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.4} />
                <div>
                  <dt className={labelCls}>Business hours</dt>
                  <dd className="text-sm leading-relaxed">
                    Mon–Sat: 8:00 AM – 5:00 PM
                    <br />
                    Sunday: Closed
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="glass-panel glass-sheen shadow-lift rounded-sm p-7 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" required className={field} placeholder="Full name" />
              </div>
              <div>
                <label className={labelCls} htmlFor="business">
                  Business name
                </label>
                <input id="business" name="business" className={field} placeholder="Company" />
              </div>
              <div>
                <label className={labelCls} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={field}
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="service">
                  Service needed
                </label>
                <select id="service" name="service" className={field} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="details">
                  Project details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  className={`${field} resize-none`}
                  placeholder="Tell us about the property and what needs attention."
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:shadow-lift disabled:opacity-60"
            >
              Request free estimate
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
