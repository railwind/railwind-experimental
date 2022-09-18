/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('deepmerge');
const colors = require('../themes/base/colors');

/** @type {import('tailwindcss').Config} */
const baseTailwindConfig = {
  darkMode: 'class',
  content: ['./node_modules/railwind-experimental/**/*.js'],
  theme: {
    colors,
  },
};

const withRailwind = (tailwindConfig) => {
  return merge(baseTailwindConfig, tailwindConfig);
};

module.exports = withRailwind;
