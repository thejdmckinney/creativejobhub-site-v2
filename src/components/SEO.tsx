import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export default function SEO({
  title = 'How Crew Ops Pro Works | Job Management Made Simple',
  description = 'See how Crew Ops Pro helps service businesses manage jobs, schedules, customers, and payments in one simple platform.',
  keywords = 'field service management, contractor software, job management, hvac software, plumbing software, electrical software, landscaping software, scheduling software, estimate software, invoice software',
  ogImage = 'https://www.crewopspro.com/cjh-og-image.png',
  ogType = 'website',
  canonicalUrl,
  noIndex = false,
}: SEOProps) {
  const location = useLocation();
  const fullTitle = title.includes('Crew Ops Pro') ? title : `${title} | Crew Ops Pro`;
  const currentUrl = canonicalUrl || `https://www.crewopspro.com${location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Crew Ops Pro" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Crew Ops Pro - Field Service Management Software" />
      <meta name="twitter:site" content="@crewopspro" />
      <meta name="twitter:creator" content="@crewopspro" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Crew Ops Pro" />
      
      {/* Mobile App Capable */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Crew Ops Pro" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2563eb" />
    </Helmet>
  );
}
