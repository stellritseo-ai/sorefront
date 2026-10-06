import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactGeneralForm } from "@/components/contact/ContactGeneralForm";
import { ContactOfficeAndMap } from "@/components/contact/ContactOfficeAndMap";
import { ContactServiceArea } from "@/components/contact/ContactServiceArea";
import { ContactBottomCta } from "@/components/contact/ContactBottomCta";

const title = "Contact Sure Fronts Of Dallas | Commercial Glass & 24/7 Emergency Glazing";
const description =
  "Whether you need a routine estimate, project consultation, or immediate emergency board-up, our commercial glazing experts are ready to assist across the DFW Metroplex.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
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
      "@type": "AdministrativeArea",
      name: "Dallas-Fort Worth Metroplex",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
  },
};

export const Route = createFileRoute("/contact")({
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
  component: ContactRoute,
});

function ContactRoute() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950">
        <ContactHero />
        <ContactChannels />
        <ContactGeneralForm />
        <ContactOfficeAndMap />
        <ContactServiceArea />
        <ContactBottomCta />
      </main>
      <Footer />
    </>
  );
}
