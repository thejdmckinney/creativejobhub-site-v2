import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white">
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Compare */}
          <div>
            <h3 className="text-white font-semibold mb-4">Compare</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vs-jobber" className="hover:text-white">
                  vs. Jobber
                </Link>
              </li>
              <li>
                <Link to="/vs-housecall-pro" className="hover:text-white">
                  vs. Housecall Pro
                </Link>
              </li>
              <li>
                <Link to="/vs-servicetitan" className="hover:text-white">
                  vs. ServiceTitan
                </Link>
              </li>
              <li>
                <Link to="/vs-fieldedge" className="hover:text-white">
                  vs. FieldEdge
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/why-i-built-this" className="hover:text-white">
                  Why I Built This
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Field Notes Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@creativejobhub.com" className="hover:text-white">
                  support@creativejobhub.com
                </a>
              </li>
              <li>
                <a href="mailto:jeremy@creativejobhub.com" className="hover:text-white">
                  jeremy@creativejobhub.com
                </a>
              </li>
              <li className="text-gray-400">Dallas-Fort Worth, TX</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          © 2025 Creative Job Hub. Built by contractors, for contractors.
        </div>
      </div>
    </footer>
  );
}
