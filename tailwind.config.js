/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#274C77',
      'secondary': '#A3CEF1',
      'bgColor': '#E7ECEF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'red': '#ff0000',
      'yellow': '#ffc82c',
      'black': '#000000',
      'white': '#FFFFFF',
      'green': '#00ff00',
      'extraColor': '#6096BA',
    },
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
