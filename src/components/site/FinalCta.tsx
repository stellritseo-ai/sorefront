import { ArrowRight, Phone } from "lucide-react";
import cta from "@/assets/cta-storefront.jpg";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={cta}
        alt="Modern commercial storefront with full-height glass windows and glass entrance doors"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/35" />
      <div className="relative mx-auto max-w-[86rem] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="glass-panel glass-sheen shadow-lift max-w-2xl rounded-sm p-9 sm:p-12">
            <h2 className="display-md">
              Your commercial glass.
              <br />
              Done right.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              Professional commercial glass installation, repair and emergency service throughout
              Dallas and surrounding areas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:shadow-lift"
              >
                Get a free estimate
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="glass-subtle inline-flex items-center gap-3 rounded-sm px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:bg-background/80 hover:shadow-soft"
              >
                <Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
            </div>
            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
              Commercial customers only · 24/7 emergency service
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
