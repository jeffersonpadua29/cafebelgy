import React from 'react';

export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// Cute Paw Print matching the menu's hand-drawn paw prints
export function PawPrintIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 10.5c-1.8 0-3.5 1.5-3.5 3.5 0 2 1.7 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-2-1.7-3.5-3.5-3.5zm-5-3c-.9 0-1.7.9-1.7 2s.8 2 1.7 2 1.7-.9 1.7-2-.8-2-1.7-2zm10 0c-.9 0-1.7.9-1.7 2s.8 2 1.7 2 1.7-.9 1.7-2-.8-2-1.7-2zm-6.8-2.5c-.9 0-1.7.9-1.7 2s.8 2 1.7 2 1.7-.9 1.7-2-.8-2-1.7-2zm3.6 0c-.9 0-1.7.9-1.7 2s.8 2 1.7 2 1.7-.9 1.7-2-.8-2-1.7-2z" />
    </svg>
  );
}

// Playful bone icon
export function BoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M18.5 4a2.5 2.5 0 0 0-2.3 1.55l-8.4 2.8A2.5 2.5 0 1 0 4 10.7a2.5 2.5 0 0 0 1.55 2.3l2.8 8.4A2.5 2.5 0 1 0 10.7 20a2.5 2.5 0 0 0 2.3-1.55l8.4-2.8A2.5 2.5 0 1 0 20 13.3a2.5 2.5 0 0 0-1.5-2.3z" />
    </svg>
  );
}
