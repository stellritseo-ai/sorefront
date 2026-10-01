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
      <div className="relative mx-auto max-w-[86rem] px-4 xs:px-5 sm:px-8 py-16 xs:py-20 sm:py-28">
        <Reveal>
          <div className="glass-panel glass-sheen shadow-lift max-w-lg xs:max-w-xl sm:max-w-2xl rounded-xl xs:rounded-2xl p-6 xs:p-8 sm:p-12">
            <h2 className="text-2xl xs:text-3xl sm:text-[2.2rem] font-display font-extrabold tracking-tight text-foreground leading-tight">
              Your commercial glass.
              <br />
              Done right.
            </h2>
            <p className="mt-3 sm:mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              Professional commercial glass installation, repair and emergency service throughout
              Dallas and surrounding areas.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl xs:rounded-sm bg-primary px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:shadow-lift w-full xs:w-auto"
              >
                Get a free estimate
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="glass-subtle inline-flex items-center justify-center gap-3 rounded-xl xs:rounded-sm px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:bg-background/80 hover:shadow-soft w-full xs:w-auto"
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
