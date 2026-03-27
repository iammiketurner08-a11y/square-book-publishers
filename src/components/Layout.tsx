import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Phone, Mail, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Book Publishing', href: '/services/publishing' },
      { name: 'Professional Editing', href: '/services/editing' },
      { name: 'Cover Design', href: '/services/cover-design' },
      { name: 'Interior Formatting', href: '/services/formatting' },
      { name: 'Book Marketing', href: '/services/marketing' },
      { name: 'Audiobook Creation', href: '/services/audiobook' },
      { name: 'View All Services', href: '/services' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Process', href: '/process' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container-custom">
        <div className="flex justify-between items-center h-28">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Image - Replace /logo.png with your actual file in the public folder */}
            <img 
              src="/logo.png" 
              alt="Square Book Publishers" 
              className="h-24 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                e.currentTarget.nextElementSibling?.classList.add('flex');
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="w-10 h-10 bg-brand-navy flex items-center justify-center rounded-lg group-hover:bg-brand-accent transition-colors">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-brand-navy leading-none">SQUARE BOOK</span>
                <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">Publishers</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-accent flex items-center gap-1",
                    location.pathname === link.href ? "text-brand-accent" : "text-slate-600"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-accent"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all shadow-lg shadow-brand-navy/10"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 animate-in slide-in-from-top duration-300">
          <div className="container-custom flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-navy text-white px-6 py-3 rounded-xl text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Square Book Publishers" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
              <div className="hidden items-center gap-2">
                <div className="w-8 h-8 bg-brand-navy flex items-center justify-center rounded">
                  <BookOpen className="text-white w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-brand-navy leading-none">SQUARE BOOK</span>
                  <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase">Publishers</span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Square Book Publishers is an independent author services company providing professional publishing support, design, and marketing for authors worldwide.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-accent">
                <Phone className="w-4 h-4" /> +1 (786) 904-8744
              </a>
              <a href="mailto:support@squarebookpublishers.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-accent">
                <Mail className="w-4 h-4" /> support@squarebookpublishers.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services/publishing" className="text-sm text-slate-500 hover:text-brand-accent">Book Publishing</Link></li>
              <li><Link to="/services/editing" className="text-sm text-slate-500 hover:text-brand-accent">Professional Editing</Link></li>
              <li><Link to="/services/cover-design" className="text-sm text-slate-500 hover:text-brand-accent">Cover Design</Link></li>
              <li><Link to="/services/formatting" className="text-sm text-slate-500 hover:text-brand-accent">Interior Formatting</Link></li>
              <li><Link to="/services/marketing" className="text-sm text-slate-500 hover:text-brand-accent">Book Marketing</Link></li>
              <li><Link to="/services/audiobook" className="text-sm text-slate-500 hover:text-brand-accent">Audiobook Creation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-brand-accent">About Us</Link></li>
              <li><Link to="/process" className="text-sm text-slate-500 hover:text-brand-accent">How It Works</Link></li>
              <li><Link to="/pricing" className="text-sm text-slate-500 hover:text-brand-accent">Pricing & Packages</Link></li>
              <li><Link to="/portfolio" className="text-sm text-slate-500 hover:text-brand-accent">Portfolio</Link></li>
              <li><Link to="/faq" className="text-sm text-slate-500 hover:text-brand-accent">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-6">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-brand-accent">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-slate-500 hover:text-brand-accent">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="text-sm text-slate-500 hover:text-brand-accent">Refund Policy</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-slate-500 hover:text-brand-accent">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Square Book Publishers. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-400 max-w-2xl text-center md:text-right">
            Square Book Publishers is an independent service provider and is not affiliated with, endorsed by, or an official partner of Amazon.com, Inc., Kindle Direct Publishing, or any other third-party platform unless explicitly stated.
          </p>
        </div>
      </div>
    </footer>
  );
}
