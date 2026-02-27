import { Helmet } from 'react-helmet-async';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Crew Ops Pro",
    "image": "https://www.crewopspro.com/cjh-og-image.webp",
    "description": "Field service management software built by contractors for contractors. All-in-one solution for scheduling, estimates, invoicing, mobile apps, and more.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7767",
      "longitude": "-96.7970"
    },
    "url": "https://www.crewopspro.com",
    "telephone": "+1-469-218-6800",
    "email": "support@crewopspro.com",
    "priceRange": "$89",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/creativejobhub",
      "https://twitter.com/creativejobhub",
      "https://www.linkedin.com/company/creativejobhub"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Jeremy McKinney",
      "jobTitle": "Founder & CEO"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
