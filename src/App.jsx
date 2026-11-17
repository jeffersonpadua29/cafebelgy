import React from 'react';
import { CafeProvider } from './context/CafeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import StorySection from './components/StorySection';
import MerchSection from './components/MerchSection';
import VisitSection from './components/VisitSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import AdminModal from './components/AdminModal';

export default function App() {
  return (
    <CafeProvider>
      <div className="min-h-screen bg-cream-50 text-espresso-700 flex flex-col font-sans selection:bg-caramel/25 selection:text-espresso-900">
        
        {/* Sticky Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-1">
          <Hero />
          <MenuSection />
          <StorySection />
          <MerchSection />
          <VisitSection />
          <SocialSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Admin CMS Modal */}
        <AdminModal />

      </div>
    </CafeProvider>
  );
}
