/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        show: 'show 0.1s linear 1',
        hide: 'hide 0.1s linear 1',
        appear: 'appear 0.25s linear 1',
        disappear: 'disappear 0.25s linear 1',
      },
      keyframes: {
        show: {
          '0%': { transform: 'translateX(-283px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        hide: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-283px)' },
        },
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        disappear: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
