const withMT = require('@material-tailwind/react/utils/withMT');
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        rn_surface: 'rn_surface 2s cubic-bezier(0.8, 0, 0.18, 1) both',
        rn_surfaceBack: 'rn_surfaceBack 2s cubic-bezier(0.8, 0, 0.18, 1) both',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'scale(1, 1.2)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rn_surface: {
          '0%': { transform: 'translateX(-100%)'},
          '50%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        rn_surfaceBack: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      colors: {
        blue: {},
      },
    },
  },
  plugins: [],
});
