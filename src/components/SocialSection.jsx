import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, PawPrintIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';

export default function SocialSection() {
  const { cafeInfo, instagramPosts } = useCafe();

  // Only display posts if the user has explicitly added real posts with valid instagram URLs
  const hasCustomPosts = instagramPosts && instagramPosts.length > 0 && instagramPosts.some(p => p.url && p.url.includes('/p/'));

  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      
      {/* Delicate paw watermark accents */}
      <div className="absolute top-8 left-10 text-caramel/15 pointer-events-none rotate-12">
        <PawPrintIcon className="w-16 h-16" />
      </div>
      <div className="absolute bottom-8 right-10 text-caramel/15 pointer-events-none -rotate-15">
        <PawPrintIcon className="w-20 h-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-beige/60 text-xs font-semibold text-mocha uppercase tracking-widest mb-3">
            <InstagramIcon className="w-3.5 h-3.5 text-caramel" />
            <span>Connect on Social</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-800 tracking-tight">
            Follow Our Instagram
          </h2>

          <p className="mt-4 text-base sm:text-lg text-mocha leading-relaxed">
            Follow <strong className="text-espresso-800 font-semibold">@cafebelgy</strong> for our live daily stories, opening hours, announcements, and cozy coffee moments in Antipolo.
          </p>
        </div>

        {/* Clean Official Instagram Portal Card */}
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-beige/60 shadow-warm text-center relative overflow-hidden">
          
          <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
            
            {/* Profile Avatar with Instagram Gradient Ring */}
            <a 
              href={cafeInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md group block mb-4 transition-transform hover:scale-105"
              title="Visit @cafebelgy on Instagram"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-3 border-cream-50 bg-cream-50">
                <img
                  src="/assets/cafe-belgy-logo.jpg"
                  alt="Cafe Belgy Official Instagram"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>

            {/* Handle & Title */}
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-xl sm:text-2xl text-espresso-900">
                @cafebelgy
              </h3>
              <span className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold" title="Official Account">
                ✓
              </span>
            </div>

            <p className="text-xs font-semibold text-mocha uppercase tracking-wider mb-3">
              Cafe Belgy • Antipolo, Philippines
            </p>

            <p className="text-sm text-mocha leading-relaxed mb-8">
              "A Little Pause, A Lot of Comfort."<br />
              Specialty coffee, dog-breed brews & cozy pauses at Unit 110, Eli Tower.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <a
                href={cafeInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 hover:opacity-95 text-white text-sm font-bold transition-all shadow-warm hover:shadow-warm-lg flex items-center gap-2.5 hover:-translate-y-0.5"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                <span>Open Instagram Profile</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href={cafeInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-cream-50 hover:bg-cream-200 text-espresso-800 border border-beige/60 text-sm font-semibold transition-all shadow-warm-sm hover:shadow flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FacebookIcon className="w-4 h-4 text-blue-700" />
                <span>Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-mocha/60" />
              </a>
            </div>

            <p className="text-[11px] text-mocha/70 mt-6 flex items-center gap-1.5">
              <PawPrintIcon className="w-3 h-3 text-caramel" />
              <span>Tap to view live posts, reels & daily stories on your Instagram app</span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
