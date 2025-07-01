const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          light: '#F9E7E1',
          medium: '#D9B5A4',
          dark: '#A9746E',
        },
        blush: {
          light: '#F9D5D3',
          DEFAULT: '#F28B82',
          dark: '#B44645',
        },
        lavender: {
          light: '#E9D8FD',
          DEFAULT: '#9F7AEA',
          dark: '#6B46C1',
        },
        beige: {
          light: '#FAF3E0',
          DEFAULT: '#E6D8AD',
          dark: '#BFA96B',
        },
        freshGreen: {
          light: '#D1F2EB',
          DEFAULT: '#3AB795',
          dark: '#1C6758',
        },
        estoque: {
          light: '#FFE6E6',
          DEFAULT: '#FF4D6D',
          dark: '#B7002F',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // títulos elegantes
        sans: ['Roboto', 'sans-serif'], // texto base
        inter: ['Inter'],
        poppins: ['Poppins', 'sans-serif'], // alternativa clean e moderna
      },
    },
  },
  plugins: [],
};
