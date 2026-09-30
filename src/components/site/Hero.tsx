import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-storefront.jpg";
import { site } from "@/data/site";

const facts = [
  { k: "5+", v: "Years Experience" },
  { k: "50", v: "Mile Service Area" },
  { k: "L·I·B", v: "Licensed Insured Bonded" },
  { k: "24/7", v: "Emergency Service" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Modern Dallas commercial building with aluminum-framed glass storefront and glass entrance doors"
        width={1920}
        height={1200}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/45 to-charcoal/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-charcoal/30" />
      <div className="rule-grid pointer-events-none absolute inset-0 opacity-10" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[86rem] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-pill inline-flex items-center gap-2 self-start rounded-full px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-background/90"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-champagne" />
          Commercial Glass • Dallas, Texas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl mt-5 max-w-4xl text-background"
        >
          Commercial glass.
          <br />
          Engineered for business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-background/80 sm:text-base"
        >
          Professional commercial glass door and window installation, repair, replacement and
          emergency services throughout Dallas and surrounding areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:shadow-lift"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={site.phoneHref}
            className="glass-dark-interactive inline-flex items-center gap-3 rounded-sm px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-background"
          >
            <Phone className="h-4 w-4" />
            Call {site.phone}
          </a>
          <span className="glass-pill hidden rounded-full px-3.5 py-1.5 text-[0.66rem] uppercase tracking-[0.2em] text-background/85 sm:inline-flex">
            24/7 Commercial Emergency Service
          </span>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="glass-dark glass-sheen mt-12 grid grid-cols-2 divide-x divide-y divide-background/15 rounded-sm shadow-lift sm:grid-cols-4 sm:divide-y-0"
        >
          {facts.map((f) => (
            <div key={f.v} className="px-5 py-5">
              <dt className="font-display text-xl font-bold tracking-tight text-background">
                {f.k}
              </dt>
              <dd className="mt-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-background/70">
                {f.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
