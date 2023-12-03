/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    extend: {
      backgroundImage: {
        'galaxy': "url('/src/assets/pexels-luis-kuthe-4695929.jpg')",
      },

      colors: {
        'blue-gray-800': '#1E293B',
        'blue-gray-50': '#E4E7EB',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

