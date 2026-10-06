import { createFileRoute, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceSpecsAndStandards } from "@/components/services/ServiceSpecsAndStandards";
import { ServiceApplications } from "@/components/services/ServiceApplications";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceOtherNav } from "@/components/services/ServiceOtherNav";
import { ServiceBottomCta } from "@/components/services/ServiceBottomCta";
import { servicesData } from "@/data/servicesData";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = servicesData[params.slug];
    const title = s
      ? `${s.title} | Sure Fronts Of Dallas`
      : "Commercial Glazing Services | Sure Fronts Of Dallas";
    const description = s
      ? s.tagline
      : "Commercial glass and storefront services across Dallas-Fort Worth.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: s.title,
                serviceType: s.shortTitle,
                description: s.overview,
                provider: {
                  "@type": "LocalBusiness",
                  name: "Sure Fronts Of Dallas",
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
                },
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: "Dallas-Fort Worth Metroplex",
                },
              }),
            },
          ]
        : [],
    };
  },
  component: ServiceDetailRoute,
});

function ServiceDetailRoute() {
  const { slug } = Route.useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-slate-950 flex items-center justify-center text-white px-4 pt-32 pb-20 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-extrabold mb-4">Service Not Found</h1>
            <p className="text-slate-400 mb-8">
              The commercial glazing service you requested could not be found.
            </p>
            <a
              href="/services"
              className="inline-flex rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-500 transition-colors"
            >
              Browse All Commercial Services
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <ServiceDetailHero service={service} />
        <ServiceFeatures service={service} />
        <ServiceSpecsAndStandards service={service} />
        <ServiceApplications service={service} />
        <ServiceProcess service={service} />
        <ServiceFaq service={service} />
        <ServiceOtherNav currentSlug={service.slug} />
        <ServiceBottomCta service={service} />
      </main>
      <Footer />
    </>
  );
}
