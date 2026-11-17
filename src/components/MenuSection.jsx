import React, { useState, useMemo } from 'react';
import { Coffee, Search, Image as ImageIcon, X, Flame, Snowflake, Edit3 } from 'lucide-react';
import { PawPrintIcon } from './SocialIcons';
import { useCafe } from '../context/CafeContext';

export default function MenuSection() {
  const { menuItems, setIsAdminOpen } = useCafe();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOriginalMenuModal, setShowOriginalMenuModal] = useState(false);

  const categories = [
    { id: 'all', label: 'All Drinks' },
    { id: 'classics', label: 'Classics' },
    { id: 'flavored', label: 'Flavored Lattes' },
    { id: 'signatures', label: 'Signatures' }
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.breed && item.breed.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [menuItems, activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-cream-50 relative scroll-mt-16 overflow-hidden">
      
      {/* Scattered minimalist paw prints matching the printed menu sheet */}
      <div className="absolute top-10 left-6 text-caramel/25 pointer-events-none rotate-12">
        <PawPrintIcon className="w-14 h-14" />
      </div>
      <div className="absolute top-28 right-12 text-caramel/20 pointer-events-none -rotate-15">
        <PawPrintIcon className="w-16 h-16" />
      </div>
      <div className="absolute bottom-16 left-12 text-caramel/20 pointer-events-none rotate-45">
        <PawPrintIcon className="w-12 h-12" />
      </div>
      <div className="absolute bottom-28 right-1/4 text-caramel/15 pointer-events-none -rotate-12">
        <PawPrintIcon className="w-10 h-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-beige/60 text-xs font-semibold text-mocha uppercase tracking-widest mb-3">
            <PawPrintIcon className="w-3.5 h-3.5 text-caramel" />
            <span>Our Coffee Menu</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso-800 tracking-tight">
            Dog Breed Coffee Selection
          </h2>

          <p className="mt-4 text-base sm:text-lg text-mocha leading-relaxed">
            Handcrafted with specialty espresso and playful canine names. All drinks are freshly brewed and available <span className="font-semibold text-espresso-800">Hot or Cold</span>.
          </p>

          {/* Action Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowOriginalMenuModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-200 text-espresso-800 border border-beige/60 text-xs font-semibold shadow-warm-sm hover:shadow transition-all cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-caramel" />
              <span>View Official Menu Board Photo</span>
            </button>

            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-cream-200/80 hover:bg-cream-300 text-espresso-700 text-xs font-medium transition-colors cursor-pointer"
              title="Edit menu prices and items"
            >
              <Edit3 className="w-3 h-3 text-caramel-dark" />
              <span>Edit Menu & Prices</span>
            </button>
          </div>

        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-beige/40">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-espresso-700 text-cream-50 shadow-warm-sm scale-102'
                    : 'bg-cream-100 hover:bg-cream-200 text-mocha hover:text-espresso-800 border border-beige/40'
                }`}
              >
                <PawPrintIcon className="w-2.5 h-2.5 text-caramel" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mocha/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search drinks or dog breeds..."
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs sm:text-sm bg-cream-100 border border-beige/60 focus:outline-none focus:ring-2 focus:ring-caramel/30 focus:border-caramel text-espresso-800 placeholder:text-mocha/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-mocha hover:text-espresso-800"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-cream-100/60 rounded-3xl border border-beige/50">
            <Coffee className="w-12 h-12 text-mocha/40 mx-auto mb-3" />
            <p className="font-serif text-lg font-medium text-espresso-800">No drinks found</p>
            <p className="text-sm text-mocha mt-1">Try another search keyword.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-espresso-700 underline hover:text-caramel"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group bg-cream-100/90 rounded-2xl overflow-hidden border border-beige/50 hover:border-caramel/40 shadow-warm-sm hover:shadow-warm transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Minimalist Image & Price */}
                <div className="relative h-48 w-full overflow-hidden bg-cream-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60" />
                  
                  {item.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cream-50/95 backdrop-blur-md text-[10px] uppercase tracking-wider font-bold text-espresso-800 shadow-sm border border-beige/40">
                      {item.tag}
                    </span>
                  )}

                  {/* Price Tag */}
                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-espresso-900/85 backdrop-blur-md text-cream-50 font-serif font-bold text-sm shadow-md">
                    ₱{item.price}
                  </span>

                  {/* Hot/Cold Indicator Pill */}
                  <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-cream-50/95 text-espresso-800 text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                    <Flame className="w-3 h-3 text-amber-600" />
                    <Snowflake className="w-3 h-3 text-cyan-600" />
                    <span>Hot / Cold</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Dog Breed Inspiration Tag */}
                    <div className="flex items-center gap-1 text-[11px] text-mocha font-semibold mb-1">
                      <PawPrintIcon className="w-3 h-3 text-caramel flex-shrink-0" />
                      <span>{item.breed}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-espresso-800 group-hover:text-caramel-dark transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    
                    <p className="text-xs text-mocha mt-2 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-beige/30 flex items-center justify-between text-[11px] text-mocha">
                    <span className="font-medium bg-cream-200/90 px-2 py-0.5 rounded-md text-espresso-700">
                      ₱{item.price}.00
                    </span>
                    <span className="text-caramel font-semibold flex items-center gap-1">
                      <PawPrintIcon className="w-2.5 h-2.5 text-caramel" />
                      <span>Freshly Brewed</span>
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Official Menu Board Lightbox Modal */}
      {showOriginalMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full bg-cream-50 rounded-3xl p-4 shadow-2xl border border-beige/60 overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-beige/40">
              <div className="flex items-center gap-2">
                <PawPrintIcon className="w-4 h-4 text-caramel" />
                <div>
                  <h3 className="font-serif font-bold text-espresso-800 text-sm">Official Cafe Belgy Menu Board</h3>
                  <p className="text-[11px] text-mocha">Captured directly from our Antipolo counter</p>
                </div>
              </div>
              <button
                onClick={() => setShowOriginalMenuModal(false)}
                className="p-1.5 rounded-full hover:bg-cream-200 text-mocha hover:text-espresso-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="max-h-[75vh] overflow-y-auto rounded-2xl bg-cream-200">
              <img
                src="/assets/cafe-belgy-menu.jpg"
                alt="Cafe Belgy Official Printed Menu"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>

            <div className="pt-3 text-center">
              <button
                onClick={() => setShowOriginalMenuModal(false)}
                className="px-6 py-2 rounded-full bg-espresso-700 text-cream-50 text-xs font-semibold hover:bg-espresso-800 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
