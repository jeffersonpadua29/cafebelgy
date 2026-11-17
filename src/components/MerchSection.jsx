import React from 'react';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';
import { PawPrintIcon, InstagramIcon, FacebookIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';

export default function MerchSection() {
  const { cafeInfo } = useCafe();

  return (
    <section id="merch" className="py-20 bg-cream-50 relative scroll-mt-16 overflow-hidden">
      
      {/* Decorative paw print watermarks */}
      <div className="absolute top-10 left-12 text-caramel/20 pointer-events-none -rotate-12">
        <PawPrintIcon className="w-16 h-16" />
      </div>
      <div className="absolute bottom-10 right-12 text-caramel/20 pointer-events-none rotate-45">
        <PawPrintIcon className="w-20 h-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Minimalist Editorial Coming Soon Card (Cards hidden as requested) */}
        <div className="p-10 sm:p-14 rounded-3xl bg-cream-100 border border-beige/60 text-center shadow-warm relative overflow-hidden">
          
          {/* Subtle background paw watermark */}
          <div className="absolute -top-6 -right-6 text-caramel/10 pointer-events-none rotate-12">
            <PawPrintIcon className="w-40 h-40" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-beige/60 text-xs font-semibold text-mocha uppercase tracking-widest mb-4">
              <PawPrintIcon className="w-3.5 h-3.5 text-caramel" />
              <span>Lifestyle & Merch</span>
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-800 tracking-tight">
              Belgy Merch
            </h2>

            {/* Coming Soon Pill */}
            <div className="inline-flex items-center gap-1.5 mt-4 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 font-bold text-xs uppercase tracking-widest shadow-sm">
              <Clock className="w-3.5 h-3.5 text-amber-800" />
              <span>Coming Soon to Cafe Belgy</span>
            </div>

            {/* Minimalist Message */}
            <p className="mt-5 text-base sm:text-lg text-mocha leading-relaxed">
              We are currently designing and producing our official collection of Cafe Belgy apparel, mugs, totes, and lifestyle essentials.
            </p>

            <p className="mt-2 text-xs sm:text-sm text-mocha/80 italic">
              Available exclusively in-store at our Antipolo cafe upon release.
            </p>

            {/* Social Follow Buttons */}
            <div className="mt-8 pt-8 border-t border-beige/40 flex flex-wrap items-center justify-center gap-3">
              <a
                href={cafeInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-espresso-700 hover:bg-espresso-800 text-cream-50 text-xs sm:text-sm font-semibold shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-0.5"
              >
                <InstagramIcon className="w-4 h-4 text-caramel-light" />
                <span>Follow @cafebelgy for Release Dates</span>
              </a>

              <a
                href={cafeInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream-50 hover:bg-cream-200 text-espresso-800 border border-beige/60 text-xs sm:text-sm font-semibold shadow-warm-sm transition-all hover:-translate-y-0.5"
              >
                <FacebookIcon className="w-4 h-4 text-blue-700" />
                <span>Facebook Updates</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
