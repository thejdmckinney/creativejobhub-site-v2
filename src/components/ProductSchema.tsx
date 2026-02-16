import { Helmet } from 'react-helmet-async';

export default function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Crew Ops Pro - Field Service Management Software",
    "description": "All-in-one field service management software for contractors. Includes job scheduling, estimates, invoicing, mobile apps, QuickBooks integration, GPS tracking, and more. Unlimited users included.",
    "image": [
      "https://www.crewopspro.com/src/assets/crewopspro-home-page.png",
      "https://www.crewopspro.com/src/assets/dashboard-view.png",
      "https://www.crewopspro.com/src/assets/scheduling-page.png"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Crew Ops Pro"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.crewopspro.com/pricing",
      "priceCurrency": "USD",
      "price": "89.00",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Crew Ops Pro"
      },
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "89.00",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jeremy McKinney"
        },
        "datePublished": "2025-12-15",
        "reviewBody": "Built by a contractor for contractors. After wasting $10,000+ on Jobber and Housecall Pro, I built exactly what we actually need.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "category": "Field Service Management Software"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
