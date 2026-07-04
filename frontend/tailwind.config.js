/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'arduino-green': '#00979D',
        'arduino-dark': '#2C3E50',
        'arduino-light': '#F5F7FA',
        'arduino-gray': '#6C7A89',
      }
    },
  },
  plugins: [],
}