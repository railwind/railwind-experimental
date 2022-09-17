/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('deepmerge');
const colors = require('../themes/base/colors');

/** @type {import('tailwindcss').Config} */
const baseTailwindConfig = {
  darkMode: 'class',
  content: [
    './node_modules/railwind-experimental/components/**/*.{ts,tsx}',
    './node_modules/railwind-experimental/themes/components/**/*.{ts,tsx}',
  ],
  theme: {
    colors,
  },
};

const withRailwind = (tailwindConfig) => {
  return merge(baseTailwindConfig, tailwindConfig);
};

module.exports = withRailwind;
