/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#4ee276',
        'primary-red': '#f23b52'
      }
    },
  },
  plugins: [],
}
