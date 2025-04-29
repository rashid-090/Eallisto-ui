/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',    // Small phones (changed from 250px to standard mobile start)
      'sm': '640px',    // Recommended Tailwind default (changed from 376px)
      'md': '768px',    // Tablets (kept your value)
      'lg': '1024px',   // Small laptops (kept your value)
      'xl': '1280px',   // Desktops (kept your value)
      '2xl': '1536px'   // Large screens (changed from 2500px to standard)
    },

    extend: {
      animation: {
        increment: "increment 1s ease-in-out infinite",
      },
      keyframes: {
        increment: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },

      colors: {
        'main': '#23a639',
        'main-hover': '#0d8b22',
      },
      fontFamily: {
        // light: ['poppins-light', 'sans-serif'],
        // regular: ['poppins-regular', 'sans-serif'],
        // medium: ['poppins-medium', 'sans-serif'],
        // semibold: ['poppins-semibold', 'sans-serif'],
        // bold: ['poppins-bold', 'sans-serif'],
        // riche: ['riche-regular', 'sans-serif'],
      },
    },

  },
  plugins: [],
}