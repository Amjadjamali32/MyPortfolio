/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      colors: {
        customColor: '#112240',
        blueColor: '#2D64DC',
        containerColor: '#112250',
      },
    },
  },
  plugins: [],
}

