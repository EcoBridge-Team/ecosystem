module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
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
