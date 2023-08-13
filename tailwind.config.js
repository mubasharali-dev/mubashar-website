/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(50)' },
        },
      },
      animation: {
        'slide-in-from-left': 'slide-in-from-left 1s ease-out',
      },
    },
  },
  plugins: [],
};
