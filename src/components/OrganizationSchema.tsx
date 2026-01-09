import { Helmet } from 'react-helmet-async';

/**
 * Organization Schema Markup
 * Tells Google about Creative Job Hub as a software company
 * This enables rich results, knowledge panels, and brand recognition
 */
export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "SoftwareApplication"],
    "@id": "https://creativejobhub.com/#organization",
    "name": "Creative Job Hub",
    "legalName": "Creative Job Hub LLC",
    "url": "https://creativejobhub.com",
    "logo": "https://creativejobhub.com/cjh-og-image.png",
    "description": "Field service management software for contractors. Scheduling, estimates, invoicing, QuickBooks integration. Built by a contractor for contractors.",
    "foundingDate": "2025",
    "slogan": "Field Service Software That Doesn't Cost More Than Your Truck Payment",
    "email": "support@creativejobhub.com",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with real phone number
    
    // Software Application Details
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "89",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://creativejobhub.com/pricing"
    },
    
    // Aggregate Rating from your 433 reviews
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "433",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    // Social Media Links
    "sameAs": [
      // Add your social media profiles here when created:
      // "https://www.facebook.com/creativejobhub",
      // "https://twitter.com/creativejobhub",
      // "https://www.linkedin.com/company/creativejobhub",
      // "https://www.instagram.com/creativejobhub"
    ],
    
    // Contact Information
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@creativejobhub.com",
      "availableLanguage": "English"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}
