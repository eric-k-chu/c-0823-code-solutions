/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hot-3': '#351C75',
        'hot-6': '#674EA7',
        'hot-9': '#E06666',
        'hot-12': '#F6B26B',
        'hot-15': '#FFFF00',
      },
    },
  },
  plugins: [],
};
