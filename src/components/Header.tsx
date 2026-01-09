import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/CJH_Circle_Logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Creative Job Hub" className="h-10 w-10" />
            <span className="text-xl font-bold text-blue-600">Creative Job Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            
            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 flex items-center gap-1 py-2">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {industriesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link 
                      to="/chimney-sweep-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Chimney Sweep Software
                    </Link>
                    <Link 
                      to="/handyman-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Handyman Software
                    </Link>
                    <Link 
                      to="/pool-service-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Pool Service Software
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600">
              How It Works
            </Link>
            <Link to="/competitors" className="text-gray-700 hover:text-blue-600">
              Competitors
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link
            to="/signup"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Start Free Trial
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {/* Industries submenu in mobile */}
              <div className="px-4 py-2">
                <div className="text-gray-900 font-semibold mb-2">Industries</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/chimney-sweep-software"
                    className="block text-gray-600 hover:text-blue-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Chimney Sweep Software
                  </Link>
                  <Link
                    to="/handyman-software"
                    className="block text-gray-600 hover:text-blue-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Handyman Software
                  </Link>
                  <Link
                    to="/pool-service-software"
                    className="block text-gray-600 hover:text-blue-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pool Service Software
                  </Link>
                </div>
              </div>
              
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/competitors"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Competitors
              </Link>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
