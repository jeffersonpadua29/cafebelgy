/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          900: '#231612',
          800: '#341E17',
          700: '#3B2923', // Primary dark
          600: '#4E2C20',
          500: '#64392B',
        },
        mocha: {
          DEFAULT: '#8B6F5E',
          light: '#A38977',
          dark: '#6F5546',
        },
        caramel: {
          DEFAULT: '#C68B59',
          light: '#D9A373',
          dark: '#B07542',
        },
        beige: {
          DEFAULT: '#D8C3A5',
          light: '#E7D8C4',
          dark: '#C2AA8A',
        },
        cream: {
          50: '#FCFAF6', // Soft White
          100: '#FBF8F3',
          200: '#F5F0E8', // Warm Cream
          300: '#EFE7DC',
          400: '#E4D8C8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(59, 41, 35, 0.08)',
        'warm': '0 8px 30px -4px rgba(59, 41, 35, 0.12)',
        'warm-lg': '0 16px 40px -6px rgba(59, 41, 35, 0.16)',
      }
    },
  },
  plugins: [],
}

