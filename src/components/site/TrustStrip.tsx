import { BadgeCheck, ShieldCheck, Clock3, MapPin, Siren, FileText } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: BadgeCheck, label: "Licensed & Bonded" },
  { icon: ShieldCheck, label: "Insured" },
  { icon: Clock3, label: "5+ Years Experience" },
  { icon: MapPin, label: "50-Mile Service Area" },
  { icon: Siren, label: "24/7 Emergency Service" },
  { icon: FileText, label: "Free Estimates" },
];

export function TrustStrip() {
  return (
    <section className="glass-subtle border-y border-border">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <ul className="grid grid-cols-2 gap-x-6 divide-border sm:grid-cols-3 lg:grid-cols-6 lg:divide-x">
          {items.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <li className="flex items-center gap-3 py-5 lg:justify-center lg:px-4">
                <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.4} />
                <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
