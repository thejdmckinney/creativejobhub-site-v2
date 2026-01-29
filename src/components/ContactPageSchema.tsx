import { Helmet } from 'react-helmet-async';

export default function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Creative Job Hub",
    "description": "Get in touch with Creative Job Hub. We're here to help you streamline your field service business.",
    "url": "https://www.creativejobhub.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Creative Job Hub",
      "url": "https://www.creativejobhub.com",
      "logo": "https://www.creativejobhub.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0100",
        "contactType": "customer support",
        "areaServed": "US",
        "availableLanguage": ["en"],
        "contactOption": "TollFree"
      },
      "email": "support@creativejobhub.com",
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
