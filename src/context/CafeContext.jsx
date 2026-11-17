import React, { createContext, useContext, useState, useEffect } from 'react';
import { menuItems as defaultMenuItems, menuCategories as defaultCategories } from '../data/menuData';
import { cafeInfo as defaultCafeInfo } from '../data/cafeInfo';

const CafeContext = createContext();

const STORAGE_KEY_MENU = 'cafe_belgy_menu_v1';
const STORAGE_KEY_INFO = 'cafe_belgy_info_v1';
const STORAGE_KEY_ANNOUNCEMENT = 'cafe_belgy_announcement_v1';
const STORAGE_KEY_INSTAGRAM = 'cafe_belgy_instagram_v1';

const defaultInstagramPosts = [
  {
    id: "ig-1",
    title: "Official Counter Menu Board",
    caption: "Now serving your favorite dog-breed inspired brews! Americano Bully, Aspin Latte, and Caramel Retriever are ready for you. Hot or cold at Eli Tower, Antipolo. ☕🐾",
    image: "/assets/cafe-belgy-menu.jpg",
    url: "https://www.instagram.com/cafebelgy/",
    date: "Recent Post",
    likes: "248"
  },
  {
    id: "ig-2",
    title: "Meet Belgy — The Inspiration Behind Our Brand",
    caption: "A little pause, a lot of comfort. The gentle soul who inspired our logo and this cozy corner. Bring your paws and say hello! 🐶✨",
    image: "/assets/cafe-belgy-logo.jpg",
    url: "https://www.instagram.com/cafebelgy/",
    date: "Recent Post",
    likes: "312"
  },
  {
    id: "ig-3",
    title: "Now Open in Antipolo!",
    caption: "Your new cozy neighborhood coffee spot is officially open at Unit 110, Eli Tower, 102 Plaza Condominium, Pagrai. Drop by for a quiet pause. 🌿☕",
    image: "/assets/cafe-belgy-logo.jpg",
    url: "https://www.instagram.com/cafebelgy/",
    date: "Recent Post",
    likes: "189"
  }
];

export function CafeProvider({ children }) {
  // Menu items state
  const [menuItems, setMenuItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MENU);
      return saved ? JSON.parse(saved) : defaultMenuItems;
    } catch {
      return defaultMenuItems;
    }
  });

  // Cafe info state
  const [cafeInfo, setCafeInfo] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_INFO);
      return saved ? JSON.parse(saved) : defaultCafeInfo;
    } catch {
      return defaultCafeInfo;
    }
  });

  // Instagram posts state
  const [instagramPosts, setInstagramPosts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_INSTAGRAM);
      return saved ? JSON.parse(saved) : defaultInstagramPosts;
    } catch {
      return defaultInstagramPosts;
    }
  });

  // Announcement bar state
  const [announcement, setAnnouncement] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANNOUNCEMENT);
      return saved ? JSON.parse(saved) : {
        enabled: false,
        text: "🐾 Welcome to Cafe Belgy! Inspired by our dog Belgy • All coffees available Hot & Cold • Unit 110 Eli Tower, Antipolo"
      };
    } catch {
      return {
        enabled: false,
        text: "🐾 Welcome to Cafe Belgy! Inspired by our dog Belgy • All coffees available Hot & Cold • Unit 110 Eli Tower, Antipolo"
      };
    }
  });

  // Admin modal open/close
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_INFO, JSON.stringify(cafeInfo));
  }, [cafeInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_INSTAGRAM, JSON.stringify(instagramPosts));
  }, [instagramPosts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ANNOUNCEMENT, JSON.stringify(announcement));
  }, [announcement]);

  // Actions
  const updateMenuItem = (id, updatedFields) => {
    setMenuItems(prev => prev.map(item => item.id === id ? { ...item, ...updatedFields } : item));
  };

  const addMenuItem = (newItem) => {
    setMenuItems(prev => [...prev, { ...newItem, id: `item-${Date.now()}` }]);
  };

  const deleteMenuItem = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const updateCafeInfo = (newInfo) => {
    setCafeInfo(newInfo);
  };

  const updateInstagramPosts = (posts) => {
    setInstagramPosts(posts);
  };

  const addInstagramPost = (newPost) => {
    setInstagramPosts(prev => [{ ...newPost, id: `ig-${Date.now()}` }, ...prev]);
  };

  const deleteInstagramPost = (id) => {
    setInstagramPosts(prev => prev.filter(p => p.id !== id));
  };

  const updateAnnouncement = (newAnnouncement) => {
    setAnnouncement(newAnnouncement);
  };

  const resetAllToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY_MENU);
    localStorage.removeItem(STORAGE_KEY_INFO);
    localStorage.removeItem(STORAGE_KEY_ANNOUNCEMENT);
    localStorage.removeItem(STORAGE_KEY_INSTAGRAM);
    setMenuItems(defaultMenuItems);
    setCafeInfo(defaultCafeInfo);
    setInstagramPosts(defaultInstagramPosts);
    setAnnouncement({
      enabled: false,
      text: "🐾 Welcome to Cafe Belgy! Inspired by our dog Belgy • All coffees available Hot & Cold • Unit 110 Eli Tower, Antipolo"
    });
  };

  return (
    <CafeContext.Provider
      value={{
        menuItems,
        cafeInfo,
        announcement,
        instagramPosts,
        isAdminOpen,
        setIsAdminOpen,
        updateMenuItem,
        addMenuItem,
        deleteMenuItem,
        updateCafeInfo,
        updateInstagramPosts,
        addInstagramPost,
        deleteInstagramPost,
        updateAnnouncement,
        resetAllToDefaults
      }}
    >
      {children}
    </CafeContext.Provider>
  );
}

export function useCafe() {
  const context = useContext(CafeContext);
  if (!context) {
    throw new Error('useCafe must be used within a CafeProvider');
  }
  return context;
}
