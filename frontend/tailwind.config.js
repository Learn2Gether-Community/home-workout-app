/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans - serif'],
    },
    extend: {},
    container: {
      padding: {
        md: '10rem',
      },
    },
  },
  plugins: [],
}
