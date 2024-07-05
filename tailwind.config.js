/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/background2.svg')",
      },
      height: {
        'large': '85%',
        'small': '65%',
        'creator': '50%'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        anton: ["Anton SC", "serif"],
        quicksand: ["Quicksand", "serif"],
        archivo: ["Archivo+Black", "sans-serif"]
      }
    },
  },
  plugins: [],
};
