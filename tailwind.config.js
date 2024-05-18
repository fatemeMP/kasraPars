/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        't-default': 'var(--default-radius)'
      },
      screens: {
        xs: '475px'
      },
      fontSize: {
        '2xs': '10px'
      },
      colors: {
        't-primary-color': 'rgb(var(--green-primary-color) / <alpha-value>)',
        't-ascend-color': 'rgb(var(--tw-ascend-color) / <alpha-value>)',
        't-descend-color': 'rgb(var(--tw-descend-color) / <alpha-value>)',
        't-secondary-color': 'rgb(var(--tw-secondary-color) / <alpha-value>)',
        't-success-color': 'rgb(var(--tw-success-color) / <alpha-value>)',
        't-warning-color': 'rgb(var(--tw-warning-color) / <alpha-value>)',
        't-error-color': 'rgb(var(--tw-error-color) / <alpha-value>)',
        't-bg-color': 'rgb(var(--tw-bg-color) / <alpha-value>)',
        't-text-color': 'rgb(var(--tw-text-color) / <alpha-value>)',
        't-body-bg': 'rgb(var(--tw-body-bg) / <alpha-value>)',
        't-border-color-base': 'rgb(var(--tw-border-color-base) / <alpha-value>)',
        't-faded-primary-color': 'var(--faded-primary-color)',
        't-hovered-primary-color': 'var(--primary-color-hovered)',
        't-secondary-text-color': 'var(--text-color-secondary)',
        't-layer-bg-color': 'var(--layer-bg-color)',
        't-layer-bg-color-hovered': 'var(--layer-bg-color-hovered)',
        't-opposite-text-color': 'var(--opposite-text-color)',
        't-input-bg-color': 'var(--input-bg-color)',
        't-highlight-color': 'rgb(var(--tw-highlight-color) / <alpha-value>)'
      }
    }
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')]
};
