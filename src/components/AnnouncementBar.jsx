import React from 'react';
import { useCafe } from '../context/CafeContext';
import { PawPrintIcon } from './SocialIcons';
import { Settings, ShieldCheck } from 'lucide-react';

export default function AnnouncementBar() {
  const { announcement, setIsAdminOpen } = useCafe();

  if (!announcement || !announcement.enabled) return null;

  return (
    <div className="bg-espresso-850 bg-espresso-900 text-cream-100 py-1.5 px-4 text-xs font-medium border-b border-espresso-800 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left / Center Message */}
        <div className="flex-1 flex items-center justify-center text-center gap-2">
          <PawPrintIcon className="w-3.5 h-3.5 text-caramel-light flex-shrink-0 animate-pulse" />
          <span className="truncate sm:overflow-visible sm:whitespace-normal">
            {announcement.text}
          </span>
          <PawPrintIcon className="w-3.5 h-3.5 text-caramel-light flex-shrink-0 hidden sm:inline-block animate-pulse" />
        </div>

        {/* Discreet Staff Portal Trigger */}
        <button
          onClick={() => setIsAdminOpen(true)}
          className="inline-flex items-center gap-1 text-[11px] text-cream-300 hover:text-caramel-light hover:underline transition-colors flex-shrink-0 cursor-pointer"
          title="Open Staff Admin CMS"
        >
          <Settings className="w-3 h-3 text-caramel-light" />
          <span className="hidden sm:inline">Admin Mode</span>
        </button>

      </div>
    </div>
  );
}

