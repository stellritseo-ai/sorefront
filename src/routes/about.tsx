import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutCapabilities } from "@/components/about/AboutCapabilities";
import { AboutNumbers } from "@/components/about/AboutNumbers";
import { AboutWhyUs } from "@/components/about/AboutWhyUs";
import { AboutCta } from "@/components/about/AboutCta";
import { site } from "@/data/site";

const title = "About Sure Fronts Of Dallas | Commercial Glazing & Storefront Specialists";
const description =
  "For over 15 years, Sure Fronts Of Dallas has been the premier choice for commercial glass, storefront, and architectural glazing systems in Dallas-Fort Worth. Licensed, insured and bonded.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Sure Fronts Of Dallas",
    alternateName: "Sore Fronts Of Dallas",
    description,
    telephone: "+1-469-360-5805",
    email: "support@sorefrontsofdallas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10830 N. Central Expressway Ste. 130",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75231",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 32.7767, longitude: -96.797 },
      geoRadius: 80467,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    makesOffer: [
      "Commercial Storefront & Entrances",
      "Curtain Walls & Window Walls",
      "Commercial Glass & Architectural Glazing",
      "24/7 Emergency Commercial Glass Service",
      "Storefront Maintenance & Hardware Repair",
    ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
  },
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main id="main-content" className="flex-1">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutCapabilities />
        <AboutNumbers />
        <AboutWhyUs />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
