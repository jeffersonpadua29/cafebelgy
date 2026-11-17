# Cafe Belgy — Official Website

> **"A Little Pause, A Lot of Comfort."**  
> Unit 110, Eli Tower, 102 Plaza Condominium, Pagrai, Antipolo, Philippines  
> Facebook: [Cafe Belgy](https://www.facebook.com/profile.php?id=61596357725566) | Instagram: [@cafebelgy](https://www.instagram.com/cafebelgy/)

---

## ☕ Overview

This is the complete, modern, responsive website for **Cafe Belgy**, a specialty coffee shop and lifestyle merchandise brand located in Antipolo, Philippines.

### ✨ Features
- **Official Brand System**: Featuring the authentic Cafe Belgy dog & coffee cup logo, warm espresso/cream color palette, and elegant editorial typography.
- **Interactive Sticky Navigation**: Smooth-scrolling desktop and mobile drawer navigation with quick "Find Us" CTA.
- **Immersive Hero Section**: Featuring the official brand tagline and quick action links.
- **Handcrafted Menu Experience**: Category filtering (Signatures, Espresso & Classics, Non-Coffee, Pastries), quick search, prices in PHP (₱), and dietary tags.
- **Story & Mascot Section**: Warm narrative explaining the origin of the name and logo inspired by Belgy the dog, celebrating community and pet-friendly hospitality.
- **"Take a Little Belgy Home" Merch Showcase**: In-store lifestyle showcase featuring apparel, tote bags, diner mugs, tumblers, caps, stickers, and coffee beans with category filtering and in-store purchase guidance (no fake online checkout).
- **Visit Cafe Belgy & Interactive Map**: Embedded Google Maps, full address, one-click "Copy Address" utility, and "Get Directions" link straight to Google Maps navigation.
- **"Little Moments at Belgy" Social Showcase**: Visual community grid and verified links to the official Facebook and Instagram profiles.
- **Editorial Footer**: Complete address, hours, copyright, and back-to-top navigation.

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS with custom coffee & cream color palette
- **Icons**: Lucide React + custom SVG social icons
- **Typography**: Google Fonts (*Fraunces*, *Playfair Display*, and *Plus Jakarta Sans*)

---

## 🚀 Getting Started

### 1. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates an optimized production build in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   └── assets/
│       └── cafe-belgy-logo.jpg      # Official Cafe Belgy logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky header with mobile drawer
│   │   ├── Hero.jsx                 # Editorial hero with official logo callout
│   │   ├── MenuSection.jsx          # Interactive menu & category filters
│   │   ├── StorySection.jsx         # Cafe background & Belgy mascot story
│   │   ├── MerchSection.jsx         # In-store lifestyle merchandise showcase
│   │   ├── VisitSection.jsx         # Address, hours, and embedded Google Maps
│   │   ├── SocialSection.jsx        # Community moments & Instagram/FB links
│   │   ├── Footer.jsx               # Footer with brand & contact details
│   │   └── SocialIcons.jsx          # Facebook & Instagram SVG components
│   ├── data/
│   │   ├── cafeInfo.js              # Business address, socials, hours & contact
│   │   ├── menuData.js              # Easy-to-update menu categories & items
│   │   └── merchData.js             # Merch items, categories & descriptions
│   ├── App.jsx                      # Main app composition
│   ├── index.css                    # Global Tailwind styling & custom scrollbars
│   └── main.jsx                     # Application entry point
├── index.html                       # HTML template with Google Fonts
├── tailwind.config.js               # Warm espresso & cream design tokens
└── package.json                     # Dependencies and scripts
```

# cafebelgy
