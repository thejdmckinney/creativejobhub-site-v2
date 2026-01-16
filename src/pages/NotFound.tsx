import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
        noIndex={true}
      />
      
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Homepage
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link>
              <span className="text-gray-400">•</span>
              <Link to="/chimney-sweep-software" className="text-blue-600 hover:underline">Chimney Sweep Software</Link>
              <span className="text-gray-400">•</span>
              <Link to="/handyman-software" className="text-blue-600 hover:underline">Handyman Software</Link>
              <span className="text-gray-400">•</span>
              <Link to="/pool-service-software" className="text-blue-600 hover:underline">Pool Service Software</Link>
              <span className="text-gray-400">•</span>
              <Link to="/competitors" className="text-blue-600 hover:underline">Compare Software</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
