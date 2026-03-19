import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-white text-sm">A</span>
              </div>
              <span className="font-heading font-bold text-white">Meet Angela</span>
            </div>
            <p className="font-paragraph text-slate-400 text-sm">
              AI Receptionist for Service Businesses
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="font-paragraph text-slate-400 hover:text-white transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#industries" className="font-paragraph text-slate-400 hover:text-white transition-colors text-sm">
                  Industries
                </a>
              </li>
              <li>
                <a href="#solution" className="font-paragraph text-slate-400 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="font-paragraph text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="font-paragraph text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="font-paragraph text-slate-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@meetangela.ai" className="font-paragraph text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@meetangela.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 sm:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-slate-400 text-sm">
              © {currentYear} Meet Angela. All rights reserved.
            </p>
            <p className="font-paragraph text-slate-500 text-xs text-center sm:text-right max-w-md">
              All messages are sent only in response to customer-initiated service requests. No marketing or promotional messages are sent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
