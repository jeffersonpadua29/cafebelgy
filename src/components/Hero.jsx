import React from 'react';
import { Coffee, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { PawPrintIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';

export default function Hero() {
  const { cafeInfo } = useCafe();

  const scrollTo = (id) => {
    const element = document.querySelector(id);
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
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cream-100">
      
      {/* Delicate hand-drawn paw prints scattered all over like the menu */}
      <div className="absolute top-20 left-8 text-caramel/25 pointer-events-none rotate-12">
        <PawPrintIcon className="w-12 h-12" />
      </div>
      <div className="absolute top-1/4 right-16 text-caramel/20 pointer-events-none -rotate-15">
        <PawPrintIcon className="w-16 h-16" />
      </div>
      <div className="absolute bottom-16 left-1/3 text-caramel/20 pointer-events-none rotate-45">
        <PawPrintIcon className="w-10 h-10" />
      </div>
      <div className="absolute top-1/2 left-4 text-caramel/15 pointer-events-none -rotate-45">
        <PawPrintIcon className="w-8 h-8" />
      </div>
      <div className="absolute bottom-1/4 right-8 text-caramel/20 pointer-events-none rotate-12">
        <PawPrintIcon className="w-14 h-14" />
      </div>

      {/* Subtle warm ambient background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-cream-100 to-cream-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Minimalist Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Tagline Badge with Paws */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-cream-200/90 border border-beige/60 text-xs font-semibold text-espresso-800 tracking-wide shadow-warm-sm">
              <PawPrintIcon className="w-3.5 h-3.5 text-caramel" />
              <span>Inspired by Our Dog, Belgy</span>
              <span className="text-mocha/40">•</span>
              <span className="text-mocha flex items-center gap-1">
                <PawPrintIcon className="w-3 h-3 text-caramel/80" /> Antipolo, Philippines
              </span>
            </div>

            {/* Official Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-espresso-800 leading-[1.12]">
              A Little Pause, <br />
              <span className="italic font-serif font-normal text-caramel-dark">A Lot of Comfort.</span>
            </h1>

            {/* Official Supporting Text */}
            <p className="text-base sm:text-lg text-mocha leading-relaxed max-w-xl">
              {cafeInfo.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('#menu')}
                className="px-7 py-3.5 rounded-full bg-espresso-700 hover:bg-espresso-800 text-cream-50 font-medium text-sm transition-all duration-200 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
              >
                <PawPrintIcon className="w-4 h-4 text-caramel-light" />
                <span>Explore Coffee Menu</span>
              </button>

              <button
                onClick={() => scrollTo('#visit')}
                className="px-7 py-3.5 rounded-full bg-cream-50 hover:bg-cream-200 text-espresso-800 border border-beige font-medium text-sm transition-all duration-200 shadow-warm-sm hover:shadow hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-caramel" />
                <span>Visit Cafe Belgy</span>
              </button>
            </div>

            {/* Value Highlights Pill Bar */}
            <div className="pt-6 border-t border-beige/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-mocha">
              <div className="flex items-center gap-2">
                <PawPrintIcon className="w-4 h-4 text-caramel flex-shrink-0" />
                <div>
                  <p className="font-bold text-espresso-800 text-xs">Dog Breed Brews</p>
                  <p className="text-[11px] text-mocha">Hot & Cold Pours</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <PawPrintIcon className="w-4 h-4 text-caramel flex-shrink-0" />
                <div>
                  <p className="font-bold text-espresso-800 text-xs">Pet Friendly</p>
                  <p className="text-[11px] text-mocha">Paws Welcome</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <PawPrintIcon className="w-4 h-4 text-caramel flex-shrink-0" />
                <div>
                  <p className="font-bold text-espresso-800 text-xs">Belgy Merch</p>
                  <p className="text-[11px] text-mocha">Coming Soon</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <PawPrintIcon className="w-4 h-4 text-caramel flex-shrink-0" />
                <div>
                  <p className="font-bold text-espresso-800 text-xs">Unit 110, Eli Tower</p>
                  <p className="text-[11px] text-mocha">102 Plaza, Antipolo</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Minimalist Coffee Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Minimalist Coffee Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-warm-lg border-4 border-cream-50 bg-cream-200 group">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Minimalist specialty coffee pause at Cafe Belgy"
                  className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-cream-50 pointer-events-none">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-caramel-light font-bold mb-1">
                    <PawPrintIcon className="w-3.5 h-3.5 text-caramel-light" />
                    <span>Specialty Brews</span>
                  </div>
                  <p className="font-serif text-lg font-medium">Warm cups for quiet pauses & comfortable days</p>
                </div>
              </div>

              {/* Floating Logo Badge with Official Belgy Logo */}
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 bg-cream-50 p-3 sm:p-3.5 rounded-2xl shadow-warm border-2 border-caramel/40 flex items-center gap-3 backdrop-blur-md">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-caramel/30 bg-cream-100 flex-shrink-0">
                  <img
                    src="/assets/cafe-belgy-logo.jpg"
                    alt="Official Cafe Belgy Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pr-2">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold text-espresso-800">Cafe Belgy</p>
                    <PawPrintIcon className="w-3 h-3 text-caramel" />
                  </div>
                  <p className="text-[11px] text-mocha">Specialty Coffee • Antipolo</p>
                  <span className="inline-block mt-0.5 text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    🐾 Paws Welcome
                  </span>
                </div>
              </div>

              {/* Minimalist Floating Pill */}
              <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-cream-50/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-warm border border-beige/60 flex items-center gap-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-full bg-caramel/15 flex items-center justify-center text-caramel-dark flex-shrink-0">
                  <PawPrintIcon className="w-5 h-5 text-caramel" />
                </div>
                <div>
                  <p className="text-xs font-bold text-espresso-800">Hot & Cold Brews</p>
                  <p className="text-[11px] text-mocha">Freshly poured daily</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Down arrow indicator */}
      <button 
        onClick={() => scrollTo('#menu')}
        aria-label="Scroll to menu"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 rounded-full text-mocha/60 hover:text-caramel hover:bg-cream-200/50 transition-colors cursor-pointer"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
