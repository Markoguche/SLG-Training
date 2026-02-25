/** @type {import('tailwindcss').Config} */
export default {
  // THIS LINE IS CRITICAL. If it is missing, dark mode won't work.
  darkMode: 'class', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slg: {
          green: '#0C5C36',
          darkGreen: '#063D23',
          gold: '#D4AF37',
          lightGold: '#F3E5AB',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}