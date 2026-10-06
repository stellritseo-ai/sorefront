import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EstimateHeroAndForm } from "@/components/estimate/EstimateHeroAndForm";
import { EstimateWhatToExpect } from "@/components/estimate/EstimateWhatToExpect";
import { EstimateWhySureFronts } from "@/components/estimate/EstimateWhySureFronts";
import { EstimateContactAndMap } from "@/components/estimate/EstimateContactAndMap";
import { EstimateBottomCta } from "@/components/estimate/EstimateBottomCta";
import { estimatePageData } from "@/data/estimate";

const title = "Request a Free Commercial Glass & Storefront Estimate | Sure Fronts Of Dallas";
const description =
  "Partner with Dallas’s trusted commercial glazing experts. From new storefront installations to 24/7 emergency repairs, get a precise, no-obligation quote tailored to your property.";

const structuredData = {
  "@context": "https://schema.org",
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
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  potentialAction: {
    "@type": "QuoteAction",
    target: "https://sorefrontsofdallas.com/free-estimate",
  },
};

export const Route = createFileRoute("/free-estimate")({
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
  component: FreeEstimatePage,
});

function FreeEstimatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main id="main-content" className="flex-1">
        <EstimateHeroAndForm />
        <EstimateWhatToExpect />
        <EstimateWhySureFronts />
        <EstimateContactAndMap />
        <EstimateBottomCta />
      </main>
      <Footer />
    </div>
  );
}
