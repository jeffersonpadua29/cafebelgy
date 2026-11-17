import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, ArrowRight, Settings } from 'lucide-react';
import { PawPrintIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';

export default function Navbar() {
  const { cafeInfo, setIsAdminOpen } = useCafe();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Belgy Merch', href: '#merch' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50/95 backdrop-blur-md shadow-warm-sm border-b border-beige/40 py-2.5' 
          : 'bg-cream-50/85 backdrop-blur-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-caramel/50 shadow-sm bg-cream-100 flex-shrink-0 group-hover:border-caramel transition-all">
              <img 
                src="/assets/cafe-belgy-logo.jpg" 
                alt="Cafe Belgy Logo" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-caramel text-cream-50 flex items-center justify-center p-0.5 shadow">
                <PawPrintIcon className="w-2.5 h-2.5" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-espresso-800 leading-none group-hover:text-caramel-dark transition-colors">
                  Cafe Belgy
                </span>
                <PawPrintIcon className="w-3.5 h-3.5 text-caramel hidden sm:inline-block" />
              </div>
              <span className="text-[11px] tracking-wider text-mocha font-medium mt-1">
                Inspired by Belgy • Antipolo
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-espresso-800 hover:text-caramel-dark transition-colors relative py-1 flex items-center gap-1.5 group"
              >
                <span>{link.name}</span>
                {link.name === 'Belgy Merch' && (
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    Soon
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-2 rounded-full text-mocha hover:text-espresso-800 hover:bg-cream-200 transition-colors cursor-pointer"
              title="Staff Admin Portal"
            >
              <Settings className="w-4 h-4" />
            </button>

            <a
              href="#visit"
              onClick={(e) => handleLinkClick(e, '#visit')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-espresso-700 text-cream-50 text-xs sm:text-sm font-medium hover:bg-espresso-800 transition-all duration-200 shadow-warm-sm hover:shadow hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 text-caramel-light" />
              <span>Find Us</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-1.5 rounded-lg text-mocha hover:text-espresso-800"
              title="Admin"
            >
              <Settings className="w-4 h-4" />
            </button>

            <a
              href="#visit"
              onClick={(e) => handleLinkClick(e, '#visit')}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-espresso-700 text-cream-50 text-xs font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-caramel-light" />
              <span>Find</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-espresso-800 hover:bg-cream-200 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden border-b border-beige/40 bg-cream-50 ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-4 shadow-lg' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="flex items-center justify-between text-base font-medium text-espresso-800 py-2.5 px-3 rounded-xl hover:bg-cream-200 transition-colors"
            >
              <span className="flex items-center gap-2">
                <PawPrintIcon className="w-3.5 h-3.5 text-caramel" />
                {link.name}
                {link.name === 'Belgy Merch' && (
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    Coming Soon
                  </span>
                )}
              </span>
              <ArrowRight className="w-4 h-4 text-mocha" />
            </a>
          ))}
          <div className="pt-3 border-t border-beige/30 flex items-center justify-between text-xs text-mocha px-3">
            <span className="flex items-center gap-1">
              <PawPrintIcon className="w-3 h-3 text-caramel" />
              <span>Inspired by Belgy the Dog</span>
            </span>
            <span className="font-semibold text-espresso-800">Antipolo</span>
          </div>
        </div>
      </div>
    </header>
  );
}
