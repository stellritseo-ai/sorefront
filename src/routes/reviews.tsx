import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ReviewsHero } from "@/components/reviews/ReviewsHero";
import { ReviewsGuarantee } from "@/components/reviews/ReviewsGuarantee";
import { ReviewsTestimonials } from "@/components/reviews/ReviewsTestimonials";
import { ReviewsWhyTrustUs } from "@/components/reviews/ReviewsWhyTrustUs";
import { ReviewsCta } from "@/components/reviews/ReviewsCta";
import { reviewsPageData } from "@/data/reviews";

const title = "Client Reviews & Commercial Glazing Ratings | Sure Fronts Of Dallas";
const description =
  "Read verified commercial reviews from Dallas-Fort Worth property managers, general contractors, and business owners. Rated 4.9/5 stars based on 127+ commercial glazing projects.";

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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "127",
    reviewCount: "127",
  },
  review: reviewsPageData.testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    reviewBody: t.quote,
  })),
};

export const Route = createFileRoute("/reviews")({
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
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main id="main-content" className="flex-1">
        <ReviewsHero />
        <ReviewsGuarantee />
        <ReviewsTestimonials />
        <ReviewsWhyTrustUs />
        <ReviewsCta />
      </main>
      <Footer />
    </div>
  );
}
