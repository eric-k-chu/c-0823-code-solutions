/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hot-0': '#808080',
        'hot-3': '#351c75',
        'hot-6': '#674ea7',
        'hot-9': '#e06666',
        'hot-12': '#f6b26b',
        'hot-15': '#ff0',
        'hot-18': '#fff',
      },
    },
  },
  plugins: [],
};
