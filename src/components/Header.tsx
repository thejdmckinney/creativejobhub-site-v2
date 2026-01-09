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

          {/* Social Media Icons & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61582571702601" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/cjh_fsm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/jeremy-mckinney-4872aba1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

          {/* Desktop CTA Button */}
          <Link
            to="/signup"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Start Free Trial
          </Link>
          </div>

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
