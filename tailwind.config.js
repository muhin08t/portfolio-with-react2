/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryBg: '#FFF8F3', // Add your custom color here
      },
    },
  },
  plugins: [require('daisyui'),],
}