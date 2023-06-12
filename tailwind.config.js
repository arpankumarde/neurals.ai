/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      },
      invert: {
        25: '.25',
        50: '.50',
        75: '.75',
        90: '.90'
      }
    },
  },
  plugins: [],
}

