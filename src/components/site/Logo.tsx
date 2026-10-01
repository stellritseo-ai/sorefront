import logoImg from "@/assets/logo.png";
import { site } from "@/data/site";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "navbar";
  imgClassName?: string;
}

export function Logo({ tone = "dark", className = "", size = "md", imgClassName = "" }: LogoProps) {
  const heightClass =
    size === "navbar"
      ? "h-[48px] xs:h-[54px] sm:h-[62px] md:h-[68px]"
      : size === "sm"
      ? "h-8 sm:h-9"
      : size === "lg"
      ? "h-11 sm:h-13"
      : "h-9 sm:h-11";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logoImg}
        alt={site.name}
        className={`${imgClassName || heightClass} w-auto object-contain select-none transition-all duration-300`}
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
