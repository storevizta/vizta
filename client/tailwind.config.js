/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        100: '30rem',
        150: '50rem',
      },
    },
  },
  plugins: [require('daisyui')],
};
