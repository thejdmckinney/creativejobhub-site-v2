import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/new-crewopspro-logo-only.webp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Crew Ops Pro" className="h-20 w-20" loading="eager" />
            <span className="text-xl font-bold text-blue-600">Crew Ops Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            
            {/* Features Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 flex items-center gap-1 py-2">
                Features
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {featuresOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link 
                      to="/features" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold"
                    >
                      All Features
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <Link 
                      to="/outreach-hub" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        Outreach Hub
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">Client campaigns & follow-ups</span>
                    </Link>
                    <Link 
                      to="/scheduling" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Scheduling
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">Drag-and-drop calendar</span>
                    </Link>
                    <Link 
                      to="/features/jobs-map" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Jobs Map
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">Live tech tracking & dispatch</span>
                    </Link>
                    <Link 
                      to="/invoicing-payments" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Invoicing & Payments
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">Get paid on-site</span>
                    </Link>
                    <Link 
                      to="/smart-materials-list" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        Smart Materials List
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">AI-powered for electricians</span>
                    </Link>
                    <Link 
                      to="/chimney-inspection-suite" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Chimney Inspection Suite
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">CSIA-compliant checklists</span>
                    </Link>
                    <Link 
                      to="/features/route-optimization" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Route Optimization
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">AI-powered routing & GPS tracking</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
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
                    <Link 
                      to="/plumbing-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Plumbing Software
                    </Link>
                    <Link 
                      to="/hvac-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      HVAC Software
                    </Link>
                    <Link 
                      to="/electrical-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Electrical Software
                    </Link>
                    <Link 
                      to="/landscaping-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Landscaping Software
                    </Link>
                    <Link 
                      to="/painting-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Painting Software
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <Link 
                      to="/general-contractors-software" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold"
                    >
                      General Contractors
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/bring-your-own-tools" className="text-gray-700 hover:text-blue-600 font-semibold">
              BYOT
            </Link>
            
            <Link to="/competitors" className="text-gray-700 hover:text-blue-600">
              Competitors
            </Link>
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 flex items-center gap-1 py-2">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {resourcesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link 
                      to="/how-it-works" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      How It Works
                    </Link>
                    <Link 
                      to="/why-i-built-this" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Why I Built This
                    </Link>
                    <Link 
                      to="/blog" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Blog
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Contact
                    </Link>
                    <a 
                      href="https://crewopspro.tawk.help/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Help Center
                    </a>
                  </div>
                </div>
              )}
            </div>
            
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
          <div className="md:hidden py-4 border-t border-gray-200 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {/* CTA at the top for visibility */}
              <Link
                to="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors mx-4 mb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free Trial
              </Link>
              
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {/* Collapsible Features submenu in mobile */}
              <div>
                <button
                  onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                  className="w-full text-left text-gray-900 font-semibold px-4 py-2 hover:bg-gray-50 rounded-md flex items-center justify-between"
                >
                  <span>Features</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${mobileFeaturesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileFeaturesOpen && (
                  <div className="pl-4 pr-4 py-2 space-y-1 bg-gray-50">
                    <Link
                      to="/features"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Features
                    </Link>
                    <Link
                      to="/outreach-hub"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        Outreach Hub
                      </span>
                    </Link>
                    <Link
                      to="/scheduling"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Scheduling
                      </span>
                    </Link>
                    <Link
                      to="/features/jobs-map"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Jobs Map
                      </span>
                    </Link>
                    <Link
                      to="/invoicing-payments"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Invoicing & Payments
                      </span>
                    </Link>
                    <Link
                      to="/smart-materials-list"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        Smart Materials List
                      </span>
                    </Link>
                    <Link
                      to="/chimney-inspection-suite"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Chimney Inspection Suite
                      </span>
                    </Link>
                    <Link
                      to="/features/route-optimization"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Route Optimization
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Collapsible Industries submenu in mobile */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full text-left text-gray-900 font-semibold px-4 py-2 hover:bg-gray-50 rounded-md flex items-center justify-between"
                >
                  <span>Industries</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-4 pr-4 py-2 space-y-1 bg-gray-50">
                    <Link
                      to="/chimney-sweep-software"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Chimney Sweep
                    </Link>
                    <Link
                      to="/handyman-software"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Handyman
                    </Link>
                    <Link
                      to="/pool-service-software"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pool Service
                    </Link>
                    <Link
                      to="/plumbing-software"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Plumbing
                    </Link>
                    <Link
                      to="/hvac-software"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      HVAC
                    </Link>
                    <Link
                      to="/electrical-software"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Electrical
                    </Link>
                    <Link
                      to="/landscaping-software"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Landscaping
                    </Link>
                    <Link
                      to="/painting-software"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Painting
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <Link
                      to="/general-contractors-software"
                      className="block text-gray-700 hover:text-blue-600 py-2 px-4 rounded hover:bg-white font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      General Contractors
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                to="/bring-your-own-tools"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded-md font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bring Your Own Tools
              </Link>
              
              <Link
                to="/competitors"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Competitors
              </Link>
              
              {/* Collapsible Resources submenu in mobile */}
              <div>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full text-left text-gray-900 font-semibold px-4 py-2 hover:bg-gray-50 rounded-md flex items-center justify-between"
                >
                  <span>Resources</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-4 pr-4 py-2 space-y-1 bg-gray-50">
                    <Link
                      to="/how-it-works"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      How It Works
                    </Link>
                    <Link
                      to="/why-i-built-this"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Why I Built This
                    </Link>
                    <Link
                      to="/blog"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/contact"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <a
                      href="https://crewopspro.tawk.help/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-blue-600 py-2 px-4 rounded hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Help Center
                    </a>
                  </div>
                )}
              </div>
              
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
