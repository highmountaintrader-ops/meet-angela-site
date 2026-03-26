import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '/#how-it-works', isRoute: true },
    { label: 'Industries', href: '/#industries', isRoute: true },
    { label: 'Pricing', href: '/pricing', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="font-heading font-bold text-white text-sm sm:text-base">F</span>
            </div>
            <span className="font-heading font-bold text-white text-lg sm:text-xl hidden sm:inline">Field Pilot</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-paragraph text-slate-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg text-sm lg:text-base"
            >
              <Link to="/pricing">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t border-slate-800 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block font-paragraph text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-4"
            >
              <Link to="/pricing" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
