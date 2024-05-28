/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        config_purple: '#8643DC',
        config_black: '#21232D',
        config_gray: '#DAD2E3',
        config_dark: '#A8A0B0',
      }
    },
  },
  plugins: [],
}