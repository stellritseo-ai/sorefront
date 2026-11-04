import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { CommercialBanner } from "@/components/site/CommercialBanner";
import { Services } from "@/components/site/Services";
import { Featured } from "@/components/site/Featured";
import { WhyUs } from "@/components/site/WhyUs";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Emergency } from "@/components/site/Emergency";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Commercial Glass Door Services Dallas | Store Fronts Of Dallas";
const description =
  "Commercial glass door, storefront and window installation, repair and replacement in Dallas, TX. Licensed, insured and bonded with 24/7 emergency commercial glass service.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.glassdoordallas.com/#localbusiness",
      name: "Store Fronts Of Dallas",
      alternateName: "Store Fronts Dallas",
      url: "https://www.glassdoordallas.com",
      logo: "https://www.glassdoordallas.com/favicon.png",
      image: "https://www.glassdoordallas.com/og-image.jpg",
      description,
      telephone: "+1-469-360-5805",
      email: "support@storefrontsofdallas.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "10830 N. Central Expressway Ste. 130",
        addressLocality: "Dallas",
        addressRegion: "TX",
        postalCode: "75231",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.8943,
        longitude: -96.7689,
      },
      areaServed: [
        { "@type": "City", name: "Dallas" },
        { "@type": "City", name: "Fort Worth" },
        { "@type": "City", name: "Plano" },
        { "@type": "City", name: "Arlington" },
        { "@type": "City", name: "Irving" },
        { "@type": "City", name: "Garland" },
        { "@type": "City", name: "Frisco" },
        { "@type": "City", name: "McKinney" },
        { "@type": "City", name: "Carrollton" },
        { "@type": "City", name: "Richardson" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      makesOffer: [
        "Commercial Glass Door Installation",
        "Commercial Glass Door Repair",
        "Commercial Glass Window Installation",
        "Commercial Glass Window Repair",
        "Storefront Glass Installation",
        "Storefront Glass Repair",
        "Commercial Aluminum Storefront Systems",
        "Emergency Commercial Glass Repair",
        "Commercial Door Hardware Service",
      ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
    },
    {
      "@type": "WebSite",
      "@id": "https://www.glassdoordallas.com/#website",
      url: "https://www.glassdoordallas.com",
      name: "Store Fronts Of Dallas",
      description: "Dallas commercial glass doors, storefront systems and architectural glazing.",
      publisher: {
        "@id": "https://www.glassdoordallas.com/#localbusiness",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.glassdoordallas.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.glassdoordallas.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CommercialBanner />
        <Services />
        <Featured />
        <WhyUs />
        <Projects />
        <Process />
        <Emergency />
        <Reviews />
        {/* <Faq /> */}
        {/* <FinalCta /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
