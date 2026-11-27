/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-black': '#121212',
        'antique-gold': '#B89553',
        'champagne-gold': '#D8C29A',
        'warm-ivory': '#FAF7F0',
        'pearl-white': '#FFFFFF',
        'deep-emerald': '#173D32',
        'soft-beige': '#E9DFD0',
        'dark-charcoal': '#292929',
        'gold-light': '#F4E8D1',
        'gold-muted': '#C5A869',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(18, 18, 18, 0.08), 0 4px 6px -2px rgba(18, 18, 18, 0.04)',
        'gold': '0 4px 20px -2px rgba(184, 149, 83, 0.25)',
        'inner-gold': 'inset 0 0 15px rgba(184, 149, 83, 0.15)',
      },
    },
  },
  plugins: [],
};