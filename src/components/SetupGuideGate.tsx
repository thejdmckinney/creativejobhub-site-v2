import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface SetupGuideGateProps {
  children: ReactNode;
  guideName: string;
}

export default function SetupGuideGate({ children, guideName }: SetupGuideGateProps) {
  const [hasAccess, setHasAccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already unlocked guides
    const unlocked = localStorage.getItem('cjh_setup_guides_unlocked');
    if (unlocked === 'true') {
      setHasAccess(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (you can integrate with your backend or email service)
    try {
      // TODO: Send to your backend/CRM/email service
      console.log('Lead captured:', { name, email, guide: guideName });
      
      // For now, we'll just store in localStorage
      // In production, you'd want to:
      // 1. Send to your database
      // 2. Add to email list (Resend, Mailchimp, etc.)
      // 3. Trigger welcome email
      // 4. Track in analytics
      
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
      
      // Grant access
      localStorage.setItem('cjh_setup_guides_unlocked', 'true');
      localStorage.setItem('cjh_user_name', name);
      localStorage.setItem('cjh_user_email', email);
      
      setHasAccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Lock Icon */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Unlock Free Setup Guide
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8">
            Get instant access to our step-by-step <strong>{guideName}</strong> setup guide
          </p>

          {/* Value Props */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <p className="font-semibold text-gray-900 mb-3">What you'll get:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Step-by-step setup instructions with screenshots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Access to ALL integration guides (Twilio, Resend, Mapbox, Stripe, Slack)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Pro tips to avoid common mistakes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Free updates and new integration guides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Priority support from our team</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                placeholder="john@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Unlocking...' : 'Get Instant Access →'}
            </button>
          </form>

          {/* Trust Signals */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Spam</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Trust */}
        <p className="text-center text-gray-600 mt-6">
          Join 1,200+ contractors who've already unlocked their guides
        </p>
      </div>
    </div>
  );
}
