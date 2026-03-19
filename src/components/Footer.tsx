import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-grey100 border-t border-grey300">
      <div className="max-w-[100rem] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Meet Angela
            </h3>
            <p className="text-base font-paragraph text-secondary">
              AI Receptionist for Service Businesses
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <Link 
                to="/privacy-policy" 
                className="text-base font-paragraph text-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-base font-paragraph text-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Contact
            </h4>
            <a 
              href="mailto:hello@meetangela.ai" 
              className="text-base font-paragraph text-foreground hover:text-primary transition-colors"
            >
              hello@meetangela.ai
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-grey300">
          <p className="text-sm font-paragraph text-secondary text-center">
            © {new Date().getFullYear()} Meet Angela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
