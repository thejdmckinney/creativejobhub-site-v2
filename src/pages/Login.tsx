import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function Login() {
  useEffect(() => {
    // Redirect to the app login page
    window.location.href = 'https://app.creativejobhub.com/auth';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Login - Creative Job Hub"
        description="Login to your Creative Job Hub account to manage jobs, create estimates, schedule work, and grow your contracting business."
        keywords="login, field service login, contractor portal"
      />
      
      <div className="max-w-md w-full">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to website
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Login to Creative Job Hub
            </h1>
            <p className="text-gray-600">
              Redirecting you to the app login...
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                If you're not redirected automatically,
              </p>
              <a
                href="https://app.creativejobhub.com/auth"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Click here to login
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                Start your free trial
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
