/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid-sm': 'repeat(auto-fit, minmax(250px, 1fr))',
        'fluid-md': 'repeat(auto-fit, minmax(270px, 1fr))',
        'fluid-lg': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      backgroundImage: (theme) => ({
        'black-to-green':
          'linear-gradient(  to right top, rgb(15, 23, 42), rgb(15, 23, 42), rgb(15, 23, 42), rgb(6, 114, 51), rgb(15, 23, 42) 100%)',
      }),
    },
  },
  plugins: [],
};
