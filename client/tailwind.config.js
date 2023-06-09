/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        85: '22rem',
        90: '25rem',
        100: '30rem',
        120: '37rem',
        140: '45rem',
        150: '50rem',
        170: '55rem',
        200: '100rem',
        '1/13': '11%',
      },
      colors: {
        myBlue: '#36404D',
        whatsapp: '#25D366',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
