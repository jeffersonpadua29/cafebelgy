import React, { useState } from 'react';
import { X, Plus, Trash2, Edit2, Check, RefreshCw, Lock, Save, Coffee, Info, Bell, Store, Shield, ExternalLink } from 'lucide-react';
import { useCafe } from '../context/CafeContext';
import { PawPrintIcon, InstagramIcon } from './SocialIcons';

// ==========================================
// 🔑 STAFF ADMIN PIN CONFIGURATION
// Loaded securely from .env (VITE_ADMIN_PIN)
// ==========================================
export const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || "belgy";

export default function AdminModal() {
  const {
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
  } = useCafe();

  const [activeTab, setActiveTab] = useState('menu');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // Editing state for a single menu item
  const [editingItem, setEditingItem] = useState(null);

  // New menu item form state
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newItemData, setNewItemData] = useState({
    name: '',
    breed: '',
    category: 'classics',
    price: 120,
    tag: 'New',
    serving: 'Hot / Cold',
    description: '',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  });

  // Cafe info local edit state
  const [localInfo, setLocalInfo] = useState(cafeInfo);
  const [localAnnouncement, setLocalAnnouncement] = useState(announcement);

  if (!isAdminOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN) {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Incorrect PIN code. Please try again.');
    }
  };

  const triggerNotification = (msg) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  const handleSaveItemEdit = (e) => {
    e.preventDefault();
    if (!editingItem) return;
    updateMenuItem(editingItem.id, editingItem);
    setEditingItem(null);
    triggerNotification(`Updated "${editingItem.name}" successfully!`);
  };

  const handleCreateNewItem = (e) => {
    e.preventDefault();
    if (!newItemData.name || !newItemData.price) return;
    addMenuItem(newItemData);
    setIsAddingNew(false);
    setNewItemData({
      name: '',
      breed: '',
      category: 'classics',
      price: 120,
      tag: 'New',
      serving: 'Hot / Cold',
      description: '',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    });
    triggerNotification('New drink added to menu!');
  };

  const handleSaveInfo = (e) => {
    e.preventDefault();
    updateCafeInfo(localInfo);
    updateAnnouncement(localAnnouncement);
    triggerNotification('Cafe information and announcement saved!');
  };

  const handleResetDefaults = () => {
    if (window.confirm("Are you sure you want to reset all menu items and cafe settings back to original defaults?")) {
      resetAllToDefaults();
      setEditingItem(null);
      setIsAddingNew(false);
      triggerNotification("Reset all content back to official defaults.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-cream-50 rounded-3xl shadow-2xl border border-beige/60 overflow-hidden flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-espresso-800 text-cream-50 flex items-center justify-between border-b border-espresso-700 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-caramel/20 flex items-center justify-center text-caramel-light">
              <PawPrintIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg flex items-center gap-2">
                <span>Cafe Belgy Admin CMS</span>
                <span className="text-[10px] font-sans font-semibold bg-caramel/30 text-caramel-light px-2 py-0.5 rounded-full">
                  Live Editor
                </span>
              </h3>
              <p className="text-xs text-cream-200/80">Manage menu items, prices, announcement bar & hours</p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-1.5 rounded-full hover:bg-espresso-700 text-cream-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Close admin modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success feedback toast */}
        {saveSuccessMsg && (
          <div className="bg-emerald-600 text-white text-xs font-semibold px-4 py-2 flex items-center justify-center gap-2 animate-fade-in flex-shrink-0">
            <Check className="w-4 h-4" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="p-8 sm:p-12 flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-cream-200 border-2 border-caramel/40 flex items-center justify-center text-espresso-800 mb-4 shadow-sm">
              <Lock className="w-8 h-8 text-caramel" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-espresso-800 mb-2">
              Staff Portal Access
            </h4>
            <p className="text-xs text-mocha max-w-sm mb-6">
              Enter your staff PIN code to edit menu prices, descriptions, announcements, and operating details.
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-4">
              <div>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter staff PIN"
                  className="w-full text-center tracking-widest px-4 py-2.5 rounded-xl border border-beige/60 bg-cream-100 text-espresso-800 focus:outline-none focus:ring-2 focus:ring-caramel text-sm"
                  autoFocus
                />
                {pinError && (
                  <p className="text-xs text-rose-600 mt-2 font-medium">{pinError}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-espresso-700 hover:bg-espresso-800 text-cream-50 text-xs font-bold transition-all shadow cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Unlock CMS Editor</span>
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Nav Tabs */}
            <div className="px-6 pt-3 bg-cream-100 border-b border-beige/50 flex items-center justify-between gap-4 overflow-x-auto flex-shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setActiveTab('menu'); setEditingItem(null); setIsAddingNew(false); }}
                  className={`px-4 py-2 rounded-t-xl text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'menu'
                      ? 'border-caramel text-espresso-900 bg-cream-50'
                      : 'border-transparent text-mocha hover:text-espresso-800'
                  }`}
                >
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Menu Items & Prices ({menuItems.length})</span>
                </button>

                <button
                  onClick={() => { setActiveTab('info'); setEditingItem(null); setIsAddingNew(false); }}
                  className={`px-4 py-2 rounded-t-xl text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'info'
                      ? 'border-caramel text-espresso-900 bg-cream-50'
                      : 'border-transparent text-mocha hover:text-espresso-800'
                  }`}
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Cafe Info & Hours</span>
                </button>

                <button
                  onClick={() => { setActiveTab('announcement'); setEditingItem(null); setIsAddingNew(false); }}
                  className={`px-4 py-2 rounded-t-xl text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'announcement'
                      ? 'border-caramel text-espresso-900 bg-cream-50'
                      : 'border-transparent text-mocha hover:text-espresso-800'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>Announcement Banner</span>
                </button>

                <button
                  onClick={() => { setActiveTab('instagram'); setEditingItem(null); setIsAddingNew(false); }}
                  className={`px-4 py-2 rounded-t-xl text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'instagram'
                      ? 'border-caramel text-espresso-900 bg-cream-50'
                      : 'border-transparent text-mocha hover:text-espresso-800'
                  }`}
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram Posts ({instagramPosts.length})</span>
                </button>
              </div>

              <button
                onClick={handleResetDefaults}
                className="text-[11px] text-mocha hover:text-rose-700 flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-cream-200 transition-colors cursor-pointer flex-shrink-0"
                title="Reset all data back to original default files"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* Tab Panels */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* TAB 1: MENU MANAGEMENT */}
              {activeTab === 'menu' && (
                <div>
                  
                  {/* Editing an Item Modal / Sub-form */}
                  {editingItem ? (
                    <div className="bg-cream-100 p-6 rounded-2xl border border-beige/60 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-beige/40">
                        <h4 className="font-serif font-bold text-espresso-800 text-sm flex items-center gap-2">
                          <Edit2 className="w-4 h-4 text-caramel" />
                          <span>Editing: {editingItem.name}</span>
                        </h4>
                        <button
                          onClick={() => setEditingItem(null)}
                          className="text-xs text-mocha hover:text-espresso-800 underline"
                        >
                          Cancel
                        </button>
                      </div>

                      <form onSubmit={handleSaveItemEdit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="block font-bold text-espresso-800 mb-1">Drink Name</label>
                          <input
                            type="text"
                            value={editingItem.name}
                            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                            required
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-espresso-800 mb-1">Price in PHP (₱)</label>
                          <input
                            type="number"
                            value={editingItem.price}
                            onChange={(e) => setEditingItem({ ...editingItem, price: Number(e.target.value) })}
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel font-semibold"
                            required
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-espresso-800 mb-1">Dog Breed Inspiration</label>
                          <input
                            type="text"
                            value={editingItem.breed || ''}
                            onChange={(e) => setEditingItem({ ...editingItem, breed: e.target.value })}
                            placeholder="e.g. American Bully"
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-espresso-800 mb-1">Serving Options</label>
                          <input
                            type="text"
                            value={editingItem.serving || 'Hot / Cold'}
                            onChange={(e) => setEditingItem({ ...editingItem, serving: e.target.value })}
                            placeholder="e.g. Hot / Cold"
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block font-bold text-espresso-800 mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={editingItem.description || ''}
                            onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                          />
                        </div>

                        <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setEditingItem(null)}
                            className="px-4 py-2 rounded-xl bg-cream-200 text-espresso-800 text-xs font-semibold hover:bg-cream-300"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 rounded-xl bg-espresso-700 text-cream-50 text-xs font-bold hover:bg-espresso-800 flex items-center gap-1.5 shadow"
                          >
                            <Save className="w-3.5 h-3.5" />
                            <span>Save Changes</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : isAddingNew ? (
                    /* Add New Item Form */
                    <div className="bg-cream-100 p-6 rounded-2xl border border-beige/60 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-beige/40">
                        <h4 className="font-serif font-bold text-espresso-800 text-sm flex items-center gap-2">
                          <Plus className="w-4 h-4 text-caramel" />
                          <span>Add New Drink to Menu</span>
                        </h4>
                        <button
                          onClick={() => setIsAddingNew(false)}
                          className="text-xs text-mocha hover:text-espresso-800 underline"
                        >
                          Cancel
                        </button>
                      </div>

                      <form onSubmit={handleCreateNewItem} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="block font-bold text-espresso-800 mb-1">Drink Name *</label>
                          <input
                            type="text"
                            value={newItemData.name}
                            onChange={(e) => setNewItemData({ ...newItemData, name: e.target.value })}
                            placeholder="e.g. Beagle Mocha"
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                            required
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-espresso-800 mb-1">Price (₱) *</label>
                          <input
                            type="number"
                            value={newItemData.price}
                            onChange={(e) => setNewItemData({ ...newItemData, price: Number(e.target.value) })}
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel font-semibold"
                            required
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-espresso-800 mb-1">Breed Name</label>
                          <input
                            type="text"
                            value={newItemData.breed}
                            onChange={(e) => setNewItemData({ ...newItemData, breed: e.target.value })}
                            placeholder="e.g. Beagle"
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-espresso-800 mb-1">Serving</label>
                          <input
                            type="text"
                            value={newItemData.serving}
                            onChange={(e) => setNewItemData({ ...newItemData, serving: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block font-bold text-espresso-800 mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={newItemData.description}
                            onChange={(e) => setNewItemData({ ...newItemData, description: e.target.value })}
                            placeholder="Ingredients and flavour notes..."
                            className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                          />
                        </div>

                        <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setIsAddingNew(false)}
                            className="px-4 py-2 rounded-xl bg-cream-200 text-espresso-800 text-xs font-semibold hover:bg-cream-300"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 rounded-xl bg-espresso-700 text-cream-50 text-xs font-bold hover:bg-espresso-800 flex items-center gap-1.5 shadow"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Drink</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    /* Drink List Table */
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-mocha">
                          Click <strong>Edit</strong> on any drink to adjust its price, name, or description. Changes save instantly.
                        </p>
                        <button
                          onClick={() => setIsAddingNew(true)}
                          className="px-3.5 py-1.5 rounded-full bg-espresso-700 text-cream-50 text-xs font-bold hover:bg-espresso-800 flex items-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add New Drink</span>
                        </button>
                      </div>

                      <div className="divide-y divide-beige/40 bg-cream-100 rounded-2xl border border-beige/50 overflow-hidden">
                        {menuItems.map((item, idx) => (
                          <div key={item.id} className="p-4 flex items-center justify-between gap-4 hover:bg-cream-200/50 transition-colors">
                            <div className="flex items-center gap-3">
                              <span className="w-6 h-6 rounded-full bg-cream-200 text-espresso-800 text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                                {idx + 1}
                              </span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h5 className="font-serif font-bold text-espresso-800 text-sm">{item.name}</h5>
                                  <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.2 rounded-full font-semibold">
                                    {item.breed}
                                  </span>
                                </div>
                                <p className="text-[11px] text-mocha line-clamp-1">{item.description}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 flex-shrink-0">
                              <span className="font-serif font-bold text-espresso-900 text-sm bg-cream-50 px-2.5 py-1 rounded-lg border border-beige/60">
                                ₱{item.price}
                              </span>

                              <button
                                onClick={() => setEditingItem(item)}
                                className="p-1.5 rounded-lg bg-cream-50 hover:bg-espresso-700 hover:text-white text-espresso-800 transition-colors cursor-pointer"
                                title="Edit item"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => {
                                  if (window.confirm(`Delete "${item.name}" from menu?`)) {
                                    deleteMenuItem(item.id);
                                    triggerNotification(`Deleted "${item.name}"`);
                                  }
                                }}
                                className="p-1.5 rounded-lg bg-cream-50 hover:bg-rose-700 hover:text-white text-mocha transition-colors cursor-pointer"
                                title="Delete item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* TAB 2: CAFE INFO & HOURS */}
              {activeTab === 'info' && (
                <form onSubmit={handleSaveInfo} className="space-y-5 text-xs">
                  <div className="bg-cream-100 p-5 rounded-2xl border border-beige/60 space-y-4">
                    <h5 className="font-serif font-bold text-espresso-800 text-sm">Brand & Location Information</h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-espresso-800 mb-1">Tagline</label>
                        <input
                          type="text"
                          value={localInfo.tagline}
                          onChange={(e) => setLocalInfo({ ...localInfo, tagline: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-espresso-800 mb-1">Address</label>
                        <input
                          type="text"
                          value={localInfo.location.fullAddress}
                          onChange={(e) => setLocalInfo({
                            ...localInfo,
                            location: { ...localInfo.location, fullAddress: e.target.value }
                          })}
                          className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-espresso-800 mb-1">Phone / Inquiries</label>
                        <input
                          type="text"
                          value={localInfo.contact.phone}
                          onChange={(e) => setLocalInfo({
                            ...localInfo,
                            contact: { ...localInfo.contact, phone: e.target.value }
                          })}
                          className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-espresso-800 mb-1">Email</label>
                        <input
                          type="text"
                          value={localInfo.contact.email}
                          onChange={(e) => setLocalInfo({
                            ...localInfo,
                            contact: { ...localInfo.contact, email: e.target.value }
                          })}
                          className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-cream-100 p-5 rounded-2xl border border-beige/60 space-y-4">
                    <h5 className="font-serif font-bold text-espresso-800 text-sm">Opening Hours</h5>
                    
                    <div className="space-y-3">
                      {localInfo.hours.map((h, i) => (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            value={h.days}
                            onChange={(e) => {
                              const newHours = [...localInfo.hours];
                              newHours[i].days = e.target.value;
                              setLocalInfo({ ...localInfo, hours: newHours });
                            }}
                            className="px-3 py-1.5 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800"
                          />
                          <input
                            type="text"
                            value={h.time}
                            onChange={(e) => {
                              const newHours = [...localInfo.hours];
                              newHours[i].time = e.target.value;
                              setLocalInfo({ ...localInfo, hours: newHours });
                            }}
                            className="px-3 py-1.5 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 font-semibold"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-espresso-700 text-cream-50 text-xs font-bold hover:bg-espresso-800 flex items-center gap-1.5 shadow"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Cafe Information</span>
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 3: ANNOUNCEMENT BANNER */}
              {activeTab === 'announcement' && (
                <form onSubmit={handleSaveInfo} className="space-y-5 text-xs">
                  <div className="bg-cream-100 p-5 rounded-2xl border border-beige/60 space-y-4">
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif font-bold text-espresso-800 text-sm">Top Announcement Bar</h5>
                      
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={localAnnouncement.enabled}
                          onChange={(e) => setLocalAnnouncement({ ...localAnnouncement, enabled: e.target.checked })}
                          className="w-4 h-4 text-caramel rounded focus:ring-0"
                        />
                        <span className="font-bold text-espresso-800 text-xs">Show Announcement</span>
                      </label>
                    </div>

                    <div>
                      <label className="block font-bold text-espresso-800 mb-1">Announcement Message</label>
                      <textarea
                        rows={3}
                        value={localAnnouncement.text}
                        onChange={(e) => setLocalAnnouncement({ ...localAnnouncement, text: e.target.value })}
                        placeholder="e.g. 🐾 Holiday Hours: Open daily from 8 AM to 10 PM. Bring your fur babies for a free puppuccino!"
                        className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-50 text-espresso-800 focus:outline-none focus:ring-1 focus:ring-caramel"
                      />
                      <p className="text-[11px] text-mocha mt-1">This message displays at the very top of the website above the navigation bar.</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-espresso-700 text-cream-50 text-xs font-bold hover:bg-espresso-800 flex items-center gap-1.5 shadow"
                    >
                      <Save className="w-4 h-4" />
                      <span>Update Announcement</span>
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 4: INSTAGRAM POSTS */}
              {activeTab === 'instagram' && (
                <div className="space-y-6">
                  <div className="bg-cream-100 p-5 rounded-2xl border border-beige/60">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-beige/40">
                      <div>
                        <h5 className="font-serif font-bold text-espresso-800 text-sm flex items-center gap-2">
                          <InstagramIcon className="w-4 h-4 text-caramel" />
                          <span>Instagram Feed Posts</span>
                        </h5>
                        <p className="text-xs text-mocha">
                          Add or edit your actual Instagram posts and photos to showcase on the website.
                        </p>
                      </div>

                      <a
                        href={cafeInfo.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-caramel-dark font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>Open @cafebelgy</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="space-y-4">
                      {instagramPosts.map((post, idx) => (
                        <div key={post.id} className="p-4 rounded-xl bg-cream-50 border border-beige/50 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-espresso-800">Post #{idx + 1}</span>
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm("Remove this post from website showcase?")) {
                                  deleteInstagramPost(post.id);
                                  triggerNotification("Post removed.");
                                }
                              }}
                              className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div>
                              <label className="block font-semibold text-espresso-800 mb-1">Caption / Description</label>
                              <textarea
                                rows={2}
                                value={post.caption}
                                onChange={(e) => {
                                  const updated = instagramPosts.map(p => p.id === post.id ? { ...p, caption: e.target.value } : p);
                                  updateInstagramPosts(updated);
                                }}
                                className="w-full px-3 py-2 rounded-xl border border-beige/60 bg-cream-100 text-espresso-800"
                              />
                            </div>

                            <div className="space-y-2">
                              <div>
                                <label className="block font-semibold text-espresso-800 mb-1">Post Link URL</label>
                                <input
                                  type="text"
                                  value={post.url}
                                  onChange={(e) => {
                                    const updated = instagramPosts.map(p => p.id === post.id ? { ...p, url: e.target.value } : p);
                                    updateInstagramPosts(updated);
                                  }}
                                  placeholder="https://www.instagram.com/p/..."
                                  className="w-full px-3 py-1.5 rounded-xl border border-beige/60 bg-cream-100 text-espresso-800"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-espresso-800 mb-1">Image URL / File Path</label>
                                <input
                                  type="text"
                                  value={post.image}
                                  onChange={(e) => {
                                    const updated = instagramPosts.map(p => p.id === post.id ? { ...p, image: e.target.value } : p);
                                    updateInstagramPosts(updated);
                                  }}
                                  placeholder="/assets/cafe-belgy-menu.jpg or image URL"
                                  className="w-full px-3 py-1.5 rounded-xl border border-beige/60 bg-cream-100 text-espresso-800 font-mono text-[11px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          addInstagramPost({
                            title: "New Belgy Moment",
                            caption: "Freshly brewed coffee at Cafe Belgy Antipolo. ☕🐾",
                            image: "/assets/cafe-belgy-logo.jpg",
                            url: cafeInfo.socials.instagram,
                            date: "Just Now",
                            likes: "95"
                          });
                          triggerNotification("Added new Instagram post slot!");
                        }}
                        className="px-4 py-2 rounded-xl bg-espresso-700 text-cream-50 text-xs font-semibold hover:bg-espresso-800 flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Another Post Slot</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => triggerNotification("Instagram changes saved!")}
                        className="px-5 py-2 rounded-xl bg-caramel text-espresso-900 text-xs font-bold hover:bg-caramel-light flex items-center gap-1.5 shadow"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Instagram Feed</span>
                      </button>
                    </div>

                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

