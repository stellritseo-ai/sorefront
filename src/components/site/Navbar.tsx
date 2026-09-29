import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-[86rem] items-center justify-between gap-6 rounded-sm px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <a href="#home" className="shrink-0" aria-label={`${site.name} — home`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-7 xl:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[0.78rem] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:flex">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            24/7 Emergency
          </span>
          <a
            href={site.phoneHref}
            className="group inline-flex items-center gap-2 rounded-sm bg-primary px-3 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-300 hover:shadow-lift sm:px-5"
          >
            <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12" />
            <span className="hidden sm:inline">Call {site.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary xl:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong mx-auto mt-2 max-w-[86rem] rounded-sm p-4 xl:hidden">
          <ul className="grid gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-medium uppercase tracking-[0.14em] text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
