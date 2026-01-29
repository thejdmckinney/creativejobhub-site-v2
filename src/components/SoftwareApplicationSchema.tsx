import { Helmet } from 'react-helmet-async';

export default function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Creative Job Hub",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "89.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.creativejobhub.com/pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "The all-in-one field service management software built specifically for creative contractors. Schedule jobs, create estimates, manage clients, and get paid faster. $89/month, everything included.",
    "url": "https://www.creativejobhub.com",
    "screenshot": "https://www.creativejobhub.com/src/assets/home-page-image.png",
    "softwareVersion": "2.0",
    "releaseNotes": "Enhanced mobile app with offline mode, QuickBooks Online integration, GPS tracking, and automated invoicing.",
    "featureList": [
      "Job Scheduling & Dispatching",
      "Estimates & Invoicing",
      "QuickBooks Integration",
      "Mobile Apps (iOS & Android)",
      "GPS Tracking",
      "Customer Management",
      "Payment Processing (Stripe)",
      "SMS Notifications",
      "Route Optimization",
      "Offline Mode",
      "Unlimited Users",
      "24/7 Support"
    ],
    "author": {
      "@type": "Organization",
      "name": "Creative Job Hub",
      "url": "https://www.creativejobhub.com"
    },
    "provider": {
      "@type": "Organization",
      "name": "Creative Job Hub",
      "url": "https://www.creativejobhub.com",
      "telephone": "+1-469-218-6800",
      "email": "support@creativejobhub.com"
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
