export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const mark = tone === "light" ? "text-background" : "text-foreground";
  const sub = tone === "light" ? "text-background/60" : "text-muted-foreground";

  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="38" height="38" className="stroke-primary" strokeWidth="1.5" />
        <path d="M8 8h11v24H8z" className="fill-primary/12 stroke-primary" strokeWidth="1.2" />
        <path d="M21 8h11v24H21z" className="fill-primary/5 stroke-primary" strokeWidth="1.2" />
        <path d="M8 20h24" className="stroke-primary" strokeWidth="1.2" />
        <path d="M17 19v3M23 19v3" className="stroke-primary" strokeWidth="1.6" />
      </svg>
    </span>
  );
}
