/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        white: {
          card: '#FFFBF6'
        },
        cream: {
          bg: '#F8E9DD'
        },
        brown: {
          medium: '#92857A',
          dark: '#382314'
        },
        cyan: '#76B5BC',
        red: '#EC755D',
      },
      fontFamily: {
        'dm-sams': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}