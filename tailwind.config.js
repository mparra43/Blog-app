
const twColors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { ...twColors },
    },
  },
  plugins: [],
}