/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bubble: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh) scale(1.5)',
            opacity: '0',
          },
        },

        fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    fadeUp: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  animation: {
    bubble: 'bubble 5s ease-in infinite',
    fadeIn: 'fadeIn 1s ease-out',
    fadeUp: 'fadeUp 0.8s ease-out',
  },

        
      },
      animation: {
        bubble: 'bubble 5s ease-in infinite',
      },
  },
  plugins: [],
}
