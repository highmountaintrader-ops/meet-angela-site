import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-grey300">
      <div className="max-w-[100rem] mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-heading font-bold text-foreground">
            Meet Angela
          </Link>
          <nav className="flex items-center gap-8">
            <Link 
              to="/#how-it-works" 
              className="text-base font-paragraph text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link 
              to="/#features" 
              className="text-base font-paragraph text-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/#contact" 
              className="text-base font-paragraph text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
