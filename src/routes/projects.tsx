import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { ProjectsCaseStudy } from "@/components/projects/ProjectsCaseStudy";
import { ProjectsIndustries } from "@/components/projects/ProjectsIndustries";
import { ProjectsProcess } from "@/components/projects/ProjectsProcess";
import { ProjectsBottomCta } from "@/components/projects/ProjectsBottomCta";

const title = "Commercial Glass & Storefront Projects | Store Fronts Of Dallas";
const description =
  "Explore our commercial glass and storefront installations across Dallas-Fort Worth. High-traffic commercial entrances, architectural curtain walls, retail facades, and emergency restorations.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: "https://www.glassdoordallas.com/projects",
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

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.glassdoordallas.com/projects" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.glassdoordallas.com/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: ProjectsRoute,
});

function ProjectsRoute() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <ProjectsHero />
        <ProjectsGallery />
        <ProjectsCaseStudy />
        <ProjectsIndustries />
        <ProjectsProcess />
        <ProjectsBottomCta />
      </main>
      <Footer />
    </>
  );
}
