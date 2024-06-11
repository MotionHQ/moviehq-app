/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#31f3f2',
        'neon-red': '#ff044b',
        'neon-yellow': '#fffc04',
        'dark-blue': '#0d0c37'
      },
    },
  },
  plugins: [],
}

