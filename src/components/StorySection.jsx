import React from 'react';
import { Coffee, Heart, Sparkles, Smile, ShieldCheck } from 'lucide-react';
import { PawPrintIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';

export default function StorySection() {
  const { cafeInfo } = useCafe();

  return (
    <section id="story" className="py-24 bg-cream-100 relative overflow-hidden scroll-mt-16 border-y border-beige/40">
      
      {/* Decorative paw print watermarks scattered like on the menu */}
      <div className="absolute top-12 left-10 text-caramel/20 pointer-events-none rotate-12">
        <PawPrintIcon className="w-20 h-20" />
      </div>
      <div className="absolute bottom-12 right-12 text-caramel/20 pointer-events-none -rotate-12">
        <PawPrintIcon className="w-28 h-28" />
      </div>
      <div className="absolute top-1/2 right-1/4 text-caramel/15 pointer-events-none rotate-45">
        <PawPrintIcon className="w-12 h-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (Minimalist Cafe Photography Collage + Official Logo) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Primary Minimalist Cafe Interior Photo */}
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border-4 border-cream-50 bg-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
                  alt="Cozy minimalist interior at Cafe Belgy"
                  className="w-full h-[430px] object-cover"
                />
              </div>

              {/* Secondary Overlapping Minimalist Pour-Over Photo */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-56 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-warm-lg border-4 border-cream-50 bg-cream-200 hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                  alt="Minimalist pour over coffee craft"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mascot & Logo Callout */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-cream-50 p-4 rounded-2xl shadow-warm border-2 border-caramel/40 max-w-[270px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-caramel/30 bg-cream-200 flex-shrink-0">
                    <img
                      src="/assets/cafe-belgy-logo.jpg"
                      alt="Cafe Belgy Mascot Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-bold text-espresso-800 leading-tight">Inspired by Belgy</p>
                      <PawPrintIcon className="w-3 h-3 text-caramel" />
                    </div>
                    <p className="text-[11px] text-mocha mt-0.5 leading-tight">
                      A gentle companion whose spirit shaped our coffee corner
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-beige/60 text-xs font-semibold text-mocha uppercase tracking-widest">
              <PawPrintIcon className="w-3.5 h-3.5 text-caramel" />
              <span>Our Story & Inspiration</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-800 tracking-tight leading-tight">
              A Little Pause, <br />
              <span className="font-serif italic font-normal text-caramel-dark">Inspired by Our Dog, Belgy.</span>
            </h2>

            <div className="space-y-4 text-mocha text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-espresso-800 font-semibold">Cafe Belgy</strong> was born out of love for our dog, Belgy. Anyone who has ever shared their days with a loyal four-legged companion knows the gentle calm and pure comfort they bring just by being there.
              </p>
              <p>
                We wanted to bottle that exact feeling into a neighborhood sanctuary at Eli Tower in Antipolo. That's why our official logo features Belgy's gentle face alongside a warm steaming cup, and why each drink on our menu pays tribute to beloved dog breeds: from our bold <span className="text-espresso-800 font-medium">Americano Bully</span> and beloved local <span className="text-espresso-800 font-medium">Aspin Latte</span> to our sweet <span className="text-espresso-800 font-medium">Caramel Retriever</span>.
              </p>
              <p>
                We keep things warm, minimalist, and welcoming — a peaceful spot where you can pause from a busy day and enjoy a really good cup of coffee.
              </p>
            </div>

            {/* Core Values Grid with Paws */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-cream-50 border border-beige/50">
                <div className="flex items-center gap-1.5 text-caramel mb-2">
                  <PawPrintIcon className="w-5 h-5 text-caramel" />
                  <Coffee className="w-4 h-4 text-caramel" />
                </div>
                <h4 className="font-serif font-bold text-espresso-800 text-sm">Pup-Themed Brews</h4>
                <p className="text-xs text-mocha mt-1">8 signature coffee drinks named after loyal breeds, served hot or cold.</p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-beige/50">
                <div className="flex items-center gap-1.5 text-caramel mb-2">
                  <PawPrintIcon className="w-5 h-5 text-caramel" />
                  <Smile className="w-4 h-4 text-caramel" />
                </div>
                <h4 className="font-serif font-bold text-espresso-800 text-sm">Warm Hospitality</h4>
                <p className="text-xs text-mocha mt-1">Comfortable seating, relaxing music, and unhurried mornings.</p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-beige/50">
                <div className="flex items-center gap-1.5 text-caramel mb-2">
                  <PawPrintIcon className="w-5 h-5 text-caramel" />
                  <Heart className="w-4 h-4 text-caramel" />
                </div>
                <h4 className="font-serif font-bold text-espresso-800 text-sm">Pet Friendly</h4>
                <p className="text-xs text-mocha mt-1">Paws are always welcome at our Antipolo coffee haven.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
