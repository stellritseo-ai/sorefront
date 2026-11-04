import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ServicesHubHero } from "@/components/services/ServicesHubHero";
import { ServicesHubGrid } from "@/components/services/ServicesHubGrid";
import { ServiceBottomCta } from "@/components/services/ServiceBottomCta";

const title = "Commercial Glazing & Storefront Services | Store Fronts Of Dallas";
const description =
  "Explore our commercial glass and storefront services across Dallas-Fort Worth. Commercial entrance door installation, storefront glass repair, architectural windows, Grade 1 hardware, and 24/7 emergency dispatch.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Commercial Glazing and Storefront Systems",
  provider: {
    "@type": "LocalBusiness",
    name: "Store Fronts Of Dallas",
    alternateName: "Store Fronts Dallas",
    telephone: "+1-469-360-5805",
    email: "support@storefrontsofdallas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10830 N. Central Expressway Ste. 130",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75231",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Dallas-Fort Worth Metroplex",
    },
  },
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.glassdoordallas.com/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.glassdoordallas.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: ServicesIndexRoute,
});

function ServicesIndexRoute() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <ServicesHubHero />
        <ServicesHubGrid />
        <ServiceBottomCta />
      </main>
      <Footer />
    </>
  );
}
