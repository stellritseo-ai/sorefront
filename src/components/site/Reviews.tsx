import { Star, ArrowUpRight } from "lucide-react";
import { reviews } from "@/data/site";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Reviews</p>
          <h2 className="display-lg mt-5 max-w-2xl">Trusted by commercial customers</h2>
        </Reveal>

        {reviews.length > 0 ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name + i} delay={i * 0.06}>
                <figure className="glass-card glass-sheen h-full rounded-sm p-8">
                  {typeof r.rating === "number" && (
                    <div className="flex gap-1" aria-label={`${r.rating} out of 5`}>
                      {Array.from({ length: r.rating }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                  )}
                  <blockquote className="mt-5 text-[0.88rem] leading-relaxed text-foreground">
                    {r.quote}
                  </blockquote>
                  <figcaption className="mt-6 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {r.name}
                    {r.company ? ` · ${r.company}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="glass-panel glass-sheen mt-14 rounded-sm p-10 sm:p-14">
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                Verified customer reviews will appear here. We publish only real feedback from
                commercial clients — no invented testimonials or ratings.
              </p>
              <a
                href="https://www.google.com/search?q=Sore+Fronts+Of+Dallas"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 border-b border-primary pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary"
              >
                View Google reviews
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
