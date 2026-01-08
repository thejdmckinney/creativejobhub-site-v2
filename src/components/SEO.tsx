import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title = 'Creative Job Hub - Field Service Management Software for Creative Professionals',
  description = 'The all-in-one field service management software built specifically for creative contractors. Schedule jobs, create estimates, manage clients, and get paid faster. Try free for 14 days.',
  keywords = 'field service management, contractor software, job management, hvac software, plumbing software, electrical software, landscaping software, scheduling software, estimate software, invoice software',
  ogImage = 'https://creativejobhub.com/cjh-og-image.png',
  ogType = 'website',
  canonicalUrl,
}: SEOProps) {
  const fullTitle = title.includes('Creative Job Hub') ? title : `${title} | Creative Job Hub`;
  const currentUrl = canonicalUrl || `https://creativejobhub.com${window.location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Creative Job Hub" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Creative Job Hub" />
      
      {/* Mobile App Capable */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Creative Job Hub" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2563eb" />
    </Helmet>
  );
}
