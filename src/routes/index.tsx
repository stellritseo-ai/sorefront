import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
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

const title = "Commercial Glass Door Services Dallas | Sore Fronts Of Dallas";
const description =
  "Commercial glass door, storefront and window installation, repair and replacement in Dallas, TX. Licensed, insured and bonded with 24/7 emergency commercial glass service.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sore Fronts Of Dallas",
  description,
  telephone: "+1-469-360-5805",
  email: "info@Sorefrontsofdallas.com",
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
};

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <CommercialBanner />
        <Services />
        <Featured />
        <WhyUs />
        <Projects />
        <Process />
        <Emergency />
        <Reviews />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
