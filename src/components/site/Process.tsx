import { processSteps } from "@/data/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Our process</p>
          <h2 className="display-lg mt-5 max-w-2xl">How a commercial project runs.</h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-px border-t border-border lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="group relative h-full border-b border-border pt-8 pb-10 lg:border-b-0 lg:border-r lg:pr-6 lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
                <span className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full lg:left-0" />
                <span className="font-display text-[0.7rem] font-bold tracking-[0.24em] text-primary">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-[0.95rem] font-bold uppercase tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
