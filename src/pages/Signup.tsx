import { useState, useRef } from 'react';
import SEO from '../components/SEO';
import StarRating from '../components/StarRating';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const submittingRef = useRef(false);
  const lastSubmitTimeRef = useRef(0);
  const hasSubmittedSuccessfullyRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTimeRef.current;
    
    // Prevent ANY submission if we've already had a successful submission
    if (hasSubmittedSuccessfullyRef.current) {
      console.log('Blocked - already successfully submitted');
      return;
    }
    
    // Prevent double submission with multiple checks
    if (isSubmitting || submittingRef.current || timeSinceLastSubmit < 5000) {
      console.log('Blocked duplicate submission attempt', {
        isSubmitting,
        submittingRef: submittingRef.current,
        timeSinceLastSubmit
      });
      return;
    }
    
    console.log('Starting signup submission...');
    lastSubmitTimeRef.current = now;
    setIsSubmitting(true);
    submittingRef.current = true;
    setError('');

    try {
      console.log('Making API call to create-trial-checkout...');
      // Call Lovable backend to create Stripe Checkout session
      const response = await fetch('https://runxlgbvzgsyximttdjv.supabase.co/functions/v1/create-trial-checkout', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          businessName: formData.businessName,
          phone: formData.phone
        }),
      });

      const result = await response.json();
      console.log('Backend response:', result);

      if (result.url) {
        // Mark as successfully submitted to prevent any future submissions
        hasSubmittedSuccessfullyRef.current = true;
        
        // Log to Google Sheets (non-blocking)
        // Replace YOUR_GOOGLE_APPS_SCRIPT_URL with your actual webhook URL
        const googleSheetsUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
        if (googleSheetsUrl && googleSheetsUrl !== 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
          fetch(googleSheetsUrl, {
            method: 'POST',
            mode: 'no-cors', // Important: Google Apps Script requires no-cors
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
              email: formData.email,
              firstName: formData.firstName,
              lastName: formData.lastName,
              businessName: formData.businessName,
              phone: formData.phone,
              source: 'Marketing Site Signup'
            })
          }).catch(err => console.log('Sheet logging failed (non-critical):', err));
        }
        
        // Track signup form submission in Google Analytics
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'begin_checkout', {
            event_category: 'Signup',
            event_label: 'Trial Signup Started',
            value: formData.businessName,
            email: formData.email
          });
        }
        
        // Redirect to Stripe Checkout
        console.log('Redirecting to Stripe Checkout...');
        window.location.href = result.url;
      } else if (result.error) {
        // Show error from backend - allow retry
        setIsSubmitting(false);
        submittingRef.current = false;
        throw new Error(result.error);
      } else {
        // Unexpected response format
        setIsSubmitting(false);
        submittingRef.current = false;
        throw new Error('Unexpected response from server');
      }
      
    } catch (error) {
      console.error('Signup error:', error);
      setIsSubmitting(false);
      submittingRef.current = false;
      setError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16">
      <SEO 
        title="Start Your Free Trial - 14 Days, No Credit Card Required"
        description="Start your 14-day free trial of Creative Job Hub. No credit card required. Full access to all features. Cancel anytime. Join hundreds of contractors saving time and money."
        keywords="free trial, field service software trial, contractor software signup"
      />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-2xl text-gray-600 mb-2">
            14 days free. No charge for 14 days.
          </p>
          <p className="text-lg text-gray-500 mb-6">
            Get started in less than 2 minutes.
          </p>
          <StarRating />
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Jeremy"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="McKinney"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="jeremy@creativejobhub.com"
              />
            </div>

            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Creative Constructors"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || hasSubmittedSuccessfullyRef.current}
              onClick={(e) => {
                if (isSubmitting || submittingRef.current || hasSubmittedSuccessfullyRef.current) {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Button click blocked - already submitting or submitted');
                  return false;
                }
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
            >
              {isSubmitting ? 'Processing...' : hasSubmittedSuccessfullyRef.current ? 'Redirecting to Stripe...' : 'Start Free Trial'}
            </button>

            {/* Fine Print */}
            <p className="text-center text-sm text-gray-500 mt-6">
              By signing up, you agree to our Terms of Service and Privacy Policy.
              <br />
              No charge for 14 days. Cancel anytime.
            </p>
          </form>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 text-gray-600">
            <div>
              <div className="text-3xl mb-2">✓</div>
              <p className="font-semibold">14-Day Free Trial</p>
              <p className="text-sm">Full access to everything</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✓</div>
              <p className="font-semibold">No Charge for 14 Days</p>
              <p className="text-sm">Card required, but free trial</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✓</div>
              <p className="font-semibold">Cancel Anytime</p>
              <p className="text-sm">One click, no questions</p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Questions?{' '}
            <a href="mailto:jeremy@creativejobhub.com" className="text-blue-600 hover:underline font-semibold">
              Email jeremy@creativejobhub.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
