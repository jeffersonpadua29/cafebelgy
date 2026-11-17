import React from 'react';
import { MapPin, ArrowUp, Lock, Settings } from 'lucide-react';
import { FacebookIcon, InstagramIcon, PawPrintIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';

export default function Footer() {
  const { cafeInfo, setIsAdminOpen } = useCafe();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Belgy Merch', href: '#merch' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-espresso-900 text-cream-100 pt-16 pb-12 border-t border-espresso-800 relative overflow-hidden">
      
      {/* Decorative paw print watermarks in background */}
      <div className="absolute -bottom-8 -right-8 text-white/5 pointer-events-none">
        <PawPrintIcon className="w-56 h-56" />
      </div>
      <div className="absolute top-10 left-10 text-white/5 pointer-events-none rotate-45">
        <PawPrintIcon className="w-24 h-24" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-caramel/40 bg-cream-100 flex-shrink-0">
                <img
                  src="/assets/cafe-belgy-logo.jpg"
                  alt="Cafe Belgy Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-cream-50 flex items-center gap-2">
                  <span>Cafe Belgy</span>
                  <PawPrintIcon className="w-4 h-4 text-caramel-light" />
                </span>
                <p className="text-xs text-caramel-light tracking-widest uppercase">
                  A Little Pause, A Lot of Comfort
                </p>
              </div>
            </div>

            <p className="font-serif italic text-base text-cream-200">
              "{cafeInfo.tagline}"
            </p>

            <p className="text-xs text-cream-300/80 leading-relaxed max-w-sm">
              Inspired by our beloved dog, Belgy. Your cozy neighborhood coffee sanctuary in Antipolo for quiet pauses, specialty roasts, and comfortable moments.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={cafeInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-caramel text-cream-50 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Cafe Belgy Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={cafeInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-caramel text-cream-50 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Cafe Belgy Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-caramel-light flex items-center gap-1.5">
              <PawPrintIcon className="w-3 h-3 text-caramel-light" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-cream-300 hover:text-caramel-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Operating Hours */}
          <div className="lg:col-span-4 space-y-3 text-xs text-cream-300 leading-relaxed">
            <h4 className="text-xs font-bold uppercase tracking-widest text-caramel-light flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-caramel-light" />
              <span>Antipolo Cafe</span>
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
              <p>{cafeInfo.location.fullAddress}</p>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-1.5">
              <p className="font-semibold text-cream-100 flex items-center gap-1.5">
                <PawPrintIcon className="w-3 h-3 text-caramel-light" />
                <span>Operating Hours:</span>
              </p>
              {cafeInfo.hours.map((h, i) => (
                <p key={i} className="flex justify-between max-w-xs text-cream-300/90">
                  <span>{h.days}:</span>
                  <span className="font-medium text-cream-100">{h.time}</span>
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>© {new Date().getFullYear()} Cafe Belgy. Inspired by our dog Belgy. All rights reserved.</p>
          
          <div className="flex items-center gap-5">
            {/* Discreet Admin Link */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="flex items-center gap-1.5 text-cream-400 hover:text-caramel-light transition-colors cursor-pointer"
              title="Open Staff Admin CMS"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Staff Admin</span>
            </button>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-caramel text-cream-50 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
