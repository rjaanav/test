const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ['./public/**/*.html', './components/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        space: ['var(--font-space_grotesk)', ...fontFamily.sans],
        orborn: ['var(--font-orborn)', ...fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FAFAFA',
      black: '#171717',
      backgroundBlack: '#070707',
      lightBlack: '#262626',
      purple: '#3F28CC',
      grey: '#F5F5F5',
      lightGrey: '#E5E5E5',
      mediumGrey: '#6B7280',
      darkGrey: '#404040',
      errorRed: '#EF4444',
      successGreen: '#16A34A',
      lightGreen: '#F0FDF4',
      borderGrey: '#D1D5DB'
    },
    screens: {
      xs: '400px',

      sm: '640px',

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require('daisyui')],
};
