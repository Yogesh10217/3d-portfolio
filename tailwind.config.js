/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        portfolio: {
          bg: '#0C0C0C',
          text: '#D7E2EA',
          muted: '#646973',
          card: '#0C0C0C',
          light: '#FFFFFF',
          border: '#D7E2EA',
        },
      },
    },
  },
  plugins: [],
}
