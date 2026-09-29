import { whyUs } from "@/data/site";
import whyImg from "@/assets/why-install.jpg";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[86rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Why us</p>
            <h2 className="display-lg mt-5">Why Dallas businesses choose Sore Fronts.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={whyImg}
              alt="Commercial glazing technician installing a glass panel into an aluminum storefront frame"
              width={1200}
              height={1504}
              loading="lazy"
              className="mt-10 hidden aspect-4/5 w-full rounded-sm object-cover lg:block"
            />
          </Reveal>
        </div>

        <ul className="grid gap-px self-start border border-border bg-border sm:grid-cols-2 lg:col-span-7">
          {whyUs.map((f, i) => (
            <Reveal key={f.n} delay={(i % 2) * 0.05}>
              <li className="group h-full bg-card p-7 transition-colors duration-300 hover:bg-secondary">
                <span className="font-display text-[0.7rem] font-bold tracking-[0.2em] text-primary">
                  {f.n}
                </span>
                <h3 className="mt-4 font-display text-[0.92rem] font-bold uppercase tracking-[-0.01em]">
                  {f.title}
                </h3>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-muted-foreground">{f.desc}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
