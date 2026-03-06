/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        lime: { 400: '#d4e156', 500: '#c8d840', 600: '#b0c030' },
        dark: { 900: '#1a1a1f', 800: '#22222a', 700: '#2d2d35', 600: '#3a3a44' }
      }
    }
  },
  plugins: [],
}
