/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./App.{js,jsx,ts,tsx}', './pages/*.{js,jsx,ts,tsx}', './components/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yell: '#E8FB7A',
      },
    },
  },
  plugins: [],
};
