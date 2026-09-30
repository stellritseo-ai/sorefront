import bannerImg from "@/assets/banner-facade.jpg";
import { Reveal } from "./Reveal";

export function CommercialBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={bannerImg}
        alt="Commercial glass curtain wall facade with aluminum mullions"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative mx-auto max-w-[86rem] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-background">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-champagne" />
            Commercial Only
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-lg mt-7 max-w-3xl text-background">
            Commercial spaces.
            <br />
            Commercial solutions.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-background/80 sm:text-base">
            From storefronts and office buildings to retail spaces and commercial properties, we
            provide specialized glass door and window solutions designed for demanding business
            environments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
