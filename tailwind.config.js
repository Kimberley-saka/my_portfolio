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
        'galaxy': "url('/src/assets/images/bg-about.jpg)",
        
      },

      colors: {
        'blue-gray-800': '#1E293B',
        'blueish-gray': '#DEE5F2',

      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

