import { ArrowUpRight } from "lucide-react";
import { LiquidGlass } from "@liquidglass/react";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";
import doors from "@/assets/svc-doors.jpg";
import storefront from "@/assets/svc-storefront.jpg";
import hardware from "@/assets/svc-hardware.jpg";
import windows from "@/assets/svc-windows.jpg";
import night from "@/assets/emergency-night.jpg";

const imgMap: Record<string, string> = { doors, storefront, hardware, windows, night };

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="display-lg mt-5 max-w-2xl">Commercial glass services</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
            Professional installation, repair, replacement and emergency solutions for commercial
            properties.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.06}>
              <article
                className={`group relative flex h-full flex-col transition-all duration-500 hover:-translate-y-1 ${
                  i % 3 === 0 ? "lg:row-span-1" : ""
                }`}
              >
                <LiquidGlass
                  borderRadius={2}
                  blur={12}
                  contrast={1.15}
                  brightness={1.04}
                  saturation={1.2}
                  shadowIntensity={0.06}
                  displacementScale={0.8}
                  elasticity={0.5}
                  zIndex={1}
                  className="!flex-col !items-stretch !justify-between h-full bg-card/90 transition-colors duration-500 group-hover:bg-card"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={imgMap[s.img]}
                      alt={s.title}
                      width={1200}
                      height={912}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 backdrop-blur-none transition-all duration-500 group-hover:bg-charcoal/20 group-hover:backdrop-blur-[2px]" />
                    <span className="glass-dark absolute left-3.5 top-3.5 rounded-sm px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.2em] text-background">
                      {s.n}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                    <div>
                      <h3 className="font-display text-[0.92rem] font-bold uppercase leading-snug tracking-[-0.01em]">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[0.8rem] leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </LiquidGlass>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
