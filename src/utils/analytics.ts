// Google Analytics 4 Event Tracking Helper

/**
 * Track when user clicks "Start Free Trial" button
 */
export const trackTrialSignup = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'start_trial', {
      event_category: 'engagement',
      event_label: location,
      value: 89
    });
  }
};

/**
 * Track when user signs up for newsletter
 */
export const trackNewsletterSignup = (email: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'newsletter_signup', {
      event_category: 'engagement',
      event_label: email
    });
  }
};

/**
 * Track when user submits contact form
 */
export const trackContactFormSubmit = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'engagement',
      event_label: source
    });
  }
};

/**
 * Track when user views pricing page
 */
export const trackPricingView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_pricing', {
      event_category: 'engagement'
    });
  }
};

/**
 * Track when user clicks competitor comparison
 */
export const trackCompetitorView = (competitor: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_competitor', {
      event_category: 'engagement',
      event_label: competitor
    });
  }
};

/**
 * Track when user watches demo video
 */
export const trackDemoView = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'watch_demo', {
      event_category: 'engagement',
      event_label: location
    });
  }
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string, label: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: label,
      transport_type: 'beacon',
      event_callback: function() {
        document.location.href = url;
      }
    });
  }
};

export default {
  trackTrialSignup,
  trackNewsletterSignup,
  trackContactFormSubmit,
  trackPricingView,
  trackCompetitorView,
  trackDemoView,
  trackOutboundLink
};
