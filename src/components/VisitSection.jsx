import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Copy, Check, ExternalLink } from 'lucide-react';
import { FacebookIcon, InstagramIcon, PawPrintIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';

export default function VisitSection() {
  const { cafeInfo } = useCafe();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(cafeInfo.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="visit" className="py-24 bg-cream-100 relative scroll-mt-16 border-y border-beige/40 overflow-hidden">
      
      {/* Decorative paw print watermarks */}
      <div className="absolute top-10 left-8 text-caramel/20 pointer-events-none rotate-12">
        <PawPrintIcon className="w-16 h-16" />
      </div>
      <div className="absolute bottom-12 right-12 text-caramel/20 pointer-events-none -rotate-12">
        <PawPrintIcon className="w-24 h-24" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-beige/60 text-xs font-semibold text-mocha uppercase tracking-widest mb-3">
            <PawPrintIcon className="w-3.5 h-3.5 text-caramel" />
            <span>Find Your Cozy Spot</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-800 tracking-tight">
            Visit Cafe Belgy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mocha leading-relaxed">
            Take a moment to pause. Join us in Antipolo for comforting cups, minimalist ambiance, and quiet afternoons.
          </p>
        </div>

        {/* Location & Maps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-cream-50 border border-beige/60 shadow-warm-sm space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-caramel/15 flex items-center justify-center text-caramel-dark flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-espresso-800">Our Location</h3>
                    <p className="text-xs text-mocha">Antipolo, Rizal, Philippines</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-full bg-cream-200 hover:bg-cream-300 text-espresso-800 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy full address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-mocha" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-cream-100/80 p-4 rounded-2xl border border-beige/40 text-sm text-espresso-800 leading-relaxed font-medium">
                <p className="font-bold text-espresso-900">{cafeInfo.location.unit}</p>
                <p>{cafeInfo.location.building}</p>
                <p className="text-mocha">{cafeInfo.location.area}, {cafeInfo.location.city}</p>
              </div>

              {/* Get Directions Button */}
              <a
                href={cafeInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-espresso-700 hover:bg-espresso-800 text-cream-50 font-medium text-sm transition-all duration-200 shadow-warm hover:shadow-warm-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-caramel-light group-hover:translate-x-0.5 transition-transform" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-1" />
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-cream-50 border border-beige/60 shadow-warm-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-caramel/15 flex items-center justify-center text-caramel-dark flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-espresso-800">Opening Hours</h3>
                  <p className="text-xs text-mocha">Serving you daily</p>
                </div>
              </div>

              <div className="divide-y divide-beige/40 text-xs sm:text-sm">
                {cafeInfo.hours.map((schedule, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center text-espresso-800">
                    <span className="font-medium text-mocha">{schedule.days}</span>
                    <span className="font-semibold text-espresso-900">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Social Links */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-beige/60 shadow-warm-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-mocha uppercase tracking-wider font-semibold flex items-center gap-1">
                  <PawPrintIcon className="w-3 h-3 text-caramel" />
                  <span>Connect with us</span>
                </p>
                <p className="text-sm font-serif font-bold text-espresso-800 mt-0.5">@cafebelgy</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={cafeInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream-200 hover:bg-espresso-700 text-espresso-800 hover:text-cream-50 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Cafe Belgy Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a
                  href={cafeInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream-200 hover:bg-espresso-700 text-espresso-800 hover:text-cream-50 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Cafe Belgy Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden shadow-warm-lg border-4 border-cream-50 bg-cream-200">
              
              <iframe
                title="Cafe Belgy Location Map"
                src={cafeInfo.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-90 contrast-95"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-cream-50/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-warm border border-beige/60 flex items-center gap-3 max-w-[280px]">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-caramel/40 bg-cream-100 flex-shrink-0">
                  <img
                    src="/assets/cafe-belgy-logo.jpg"
                    alt="Cafe Belgy Pin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-espresso-800 flex items-center gap-1">
                    <span>Cafe Belgy</span>
                    <PawPrintIcon className="w-2.5 h-2.5 text-caramel" />
                  </p>
                  <p className="text-[10px] text-mocha">Unit 110, Eli Tower, Antipolo</p>
                </div>
              </div>

              {/* Direct Open Map Pill */}
              <a
                href={cafeInfo.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-espresso-800/90 hover:bg-espresso-900 text-cream-50 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-medium shadow-md flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
