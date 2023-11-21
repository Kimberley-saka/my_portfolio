/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy': "url('/src/assets/pexels-luis-kuthe-4695929.jpg')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

