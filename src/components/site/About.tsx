import { ArrowRight } from "lucide-react";
import { LiquidGlass } from "@liquidglass/react";
import aboutImg from "@/assets/about-detail.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-[86rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={aboutImg}
              alt="Detail of an aluminum commercial storefront glass door frame and handle"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
            />
          </div>
          <div className="absolute bottom-0 right-0 sm:-bottom-6 sm:right-auto sm:-left-6">
            <LiquidGlass
              borderRadius={2}
              blur={14}
              contrast={1.18}
              brightness={1.05}
              saturation={1.25}
              displacementScale={1.1}
              elasticity={0.6}
              zIndex={5}
              className="!items-start !justify-start glass-sheen shadow-lift px-6 py-5 bg-background/80"
            >
              <p className="font-display text-3xl font-bold leading-none text-primary">5+</p>
              <p className="mt-2 text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                Years
                <br />
                Experience
              </p>
            </LiquidGlass>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">About Sore Fronts Of Dallas</p>
            <h2 className="display-lg mt-5 max-w-xl">
              Built around precision, security and commercial performance.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 max-w-xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              <p>
                Sore Fronts Of Dallas provides professional commercial glass door and window
                services for businesses throughout Dallas and surrounding areas.
              </p>
              <p>
                With more than 5 years of experience, our team specializes in commercial storefront
                glass, entrance doors, glass replacement, repairs, installations and emergency
                service.
              </p>
              <p>
                We are licensed, insured and bonded, and we provide free estimates for commercial
                customers. Our work is dedicated exclusively to commercial properties — never
                residential.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="#services"
              className="group mt-9 inline-flex items-center gap-3 border-b border-primary pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
