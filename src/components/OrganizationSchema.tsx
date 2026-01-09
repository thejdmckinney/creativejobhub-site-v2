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
    "telephone": "+1-682-466-2130", // Replace with real phone number
    
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
      "https://www.facebook.com/profile.php?id=61582571702601",
      "https://x.com/cjh_fsm",
      "https://www.linkedin.com/in/jeremy-mckinney-4872aba1/"
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
