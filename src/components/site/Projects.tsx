import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import storefront from "@/assets/svc-storefront.jpg";
import doors from "@/assets/svc-doors.jpg";
import windows from "@/assets/svc-windows.jpg";
import lobby from "@/assets/featured-lobby.jpg";
import hardware from "@/assets/svc-hardware.jpg";
import facade from "@/assets/banner-facade.jpg";

const projects = [
  { cat: "Storefronts", img: storefront, span: "sm:col-span-2 sm:row-span-2", ratio: "aspect-4/3" },
  { cat: "Office Buildings", img: facade, span: "", ratio: "aspect-square" },
  { cat: "Retail", img: doors, span: "", ratio: "aspect-square" },
  { cat: "Commercial Entrances", img: lobby, span: "sm:col-span-2", ratio: "aspect-16/9" },
  { cat: "Glass Doors", img: hardware, span: "", ratio: "aspect-square" },
  { cat: "Glass Windows", img: windows, span: "", ratio: "aspect-square" },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Our work</p>
          <h2 className="display-lg mt-5">Commercial projects</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
            A closer look at the environments we help protect, improve and modernize.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.cat} delay={(i % 3) * 0.06} className={p.span}>
              <figure className="group relative h-full overflow-hidden rounded-sm">
                <img
                  src={p.img}
                  alt={`Commercial glass work — ${p.cat.toLowerCase()}`}
                  loading="lazy"
                  className={`h-full w-full object-cover ${p.ratio} transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]`}
                />
                <figcaption className="absolute inset-0 flex items-end bg-charcoal/0 p-6 transition-colors duration-500 group-hover:bg-charcoal/45">
                  <span className="flex w-full items-center justify-between opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-background">
                      {p.cat}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-background" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
