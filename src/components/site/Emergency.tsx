import { Phone, ArrowRight } from "lucide-react";
import night from "@/assets/emergency-night.jpg";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Emergency() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={night}
        alt="Illuminated commercial building entrance with glass doors at night"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative mx-auto grid max-w-[86rem] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-end">
        <Reveal>
          <p className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-background/70">
            Emergency service
          </p>
          <h2 className="display-lg mt-5 text-background">
            Commercial glass emergency?
            <br />
            We&apos;re available 24/7.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-sm leading-relaxed text-background/80 sm:text-[0.95rem]">
            Broken glass, damaged commercial doors and unexpected storefront issues can interrupt
            business operations. Contact Sore Fronts Of Dallas for emergency commercial glass
            service.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:shadow-lift"
            >
              <Phone className="h-4 w-4" />
              Call now {site.phone}
            </a>
            <a
              href="#contact"
              className="glass-dark group inline-flex items-center gap-3 rounded-sm px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-background transition-colors duration-300 hover:bg-background/15"
            >
              Request emergency service
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
