import { Logo } from "./Logo";
import { site } from "@/data/site";

const nav = ["Home", "About", "Services", "Projects", "Reviews", "FAQ", "Contact"];
const svc = [
  "Commercial Glass Doors",
  "Storefront Glass",
  "Commercial Windows",
  "Glass Repair",
  "Glass Replacement",
  "Emergency Service",
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-background">
      <div className="mx-auto grid max-w-[86rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-[0.82rem] leading-relaxed text-background/60">
            Professional commercial glass door and window services serving Dallas and surrounding
            areas.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-background/50">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n}>
                <a
                  href={`#${n.toLowerCase() === "home" ? "home" : n.toLowerCase()}`}
                  className="text-[0.82rem] text-background/75 transition-colors hover:text-background"
                >
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-background/50">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {svc.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-[0.82rem] text-background/75 transition-colors hover:text-background"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-background/50">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-[0.82rem] text-background/75">
            <li>
              <a href={site.phoneHref} className="hover:text-background">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="break-all hover:text-background">
                {site.email}
              </a>
            </li>
            <li className="leading-relaxed">
              10830 N. Central Expressway Ste. 130
              <br />
              Dallas, TX 75231
            </li>
            <li className="leading-relaxed pt-2">
              Mon–Sat: 8:00 AM – 5:00 PM
              <br />
              Sunday: Closed
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-[86rem] flex-wrap items-center justify-between gap-3 px-5 py-6 sm:px-8">
          <p className="text-[0.66rem] uppercase tracking-[0.18em] text-background/50">
            © 2026 Sore Fronts Of Dallas. All Rights Reserved.
          </p>
          <p className="text-[0.66rem] uppercase tracking-[0.18em] text-background/50">
            Commercial customers only
          </p>
        </div>
      </div>
    </footer>
  );
}
