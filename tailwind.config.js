/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Spoqa Han Sans Neo', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
    typography: require('./typography'),
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}