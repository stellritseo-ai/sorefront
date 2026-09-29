import { motion } from "motion/react";
import lobby from "@/assets/featured-lobby.jpg";
import { Reveal } from "./Reveal";

const labels = [
  { text: "Storefronts", pos: "left-[6%] top-[18%]" },
  { text: "Entrances", pos: "left-[28%] top-[62%]" },
  { text: "Glass Doors", pos: "right-[10%] top-[26%]" },
  { text: "Glass Windows", pos: "right-[26%] bottom-[16%]" },
  { text: "Replacement", pos: "left-[14%] bottom-[10%]" },
  { text: "Repair", pos: "right-[6%] bottom-[38%]" },
];

export function Featured() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <img
        src={lobby}
        alt="Commercial office lobby with floor-to-ceiling glass doors and curtain wall glazing"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/35 to-charcoal/65" />
      <div className="rule-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative mx-auto min-h-[36rem] max-w-[86rem] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="display-lg max-w-3xl text-background">
            Glass systems that define the first impression.
          </h2>
        </Reveal>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {labels.map((l, i) => (
            <motion.span
              key={l.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`glass-dark absolute rounded-sm px-4 py-2 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-background ${l.pos}`}
            >
              {l.text}
            </motion.span>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2 lg:hidden">
          {labels.map((l) => (
            <span
              key={l.text}
              className="glass-dark rounded-sm px-3 py-2 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-background"
            >
              {l.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
