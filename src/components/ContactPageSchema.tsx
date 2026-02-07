import { Helmet } from 'react-helmet-async';

export default function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Crew Ops Pro",
    "description": "Get in touch with Crew Ops Pro. We're here to help you streamline your field service business.",
    "url": "https://www.crewopspro.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Crew Ops Pro",
      "url": "https://www.crewopspro.com",
      "logo": "https://www.crewopspro.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0100",
        "contactType": "customer support",
        "areaServed": "US",
        "availableLanguage": ["en"],
        "contactOption": "TollFree"
      },
      "email": "support@crewopspro.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
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
