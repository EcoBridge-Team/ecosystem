const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  presets: [require('../../../tailwind-workspace-preset.js')],
  purge: [
    join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false, // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        login: "url('/images/login_bg.png')",
        hero: "url('/images/main_header.png')",
        pattern1: 'church',
        pattern2: 'endless',
        pattern3: 'parkay',
        pattern4: 'melt',
        pattern5: 'formal',
        pattern6: "url('/images/pattern1.png')",
        pattern7: "url('/images/pattern2.png')",
        pattern8: "url('/images/pattern3.png')",
        pattern9: "url('/images/pattern4.png')",
        pattern10: "url('/images/pattern5.png')",
        footer: "url('/images/footer.svg')",
        surface: "url('/images/surface.svg')",
        teresa: "url('/images/teresaprofile.png')",
        alejandro: "url('/images/alejandro.jpg')",
        alek: "url('/images/alek.jpg')",
        michael: "url('/images/michael.jpg')",
        box: "url('/images/box.jpg')",
        jose: "url('/images/jose.jpg')",
        aristides: "url('/images/aristides.jpg')",
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        xl: '1px 5px 6px -4px rgba(0,0,0,0.1)',
      },
      backdropContrast: {
        25: '.25',
      },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'hover', 'focus', 'active'],
    transitionDuration: ['hover', 'focus', 'active'],
    transitionDelay: ['hover', 'focus'],
    transitionTimingFunction: ['hover', 'focus', 'active'],
    brightness: ['hover', 'focus'],
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
