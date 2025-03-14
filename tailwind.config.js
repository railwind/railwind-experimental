/* eslint-disable @typescript-eslint/no-var-requires */
const withRailwind = require('./src/railwind');

/** @type {import('tailwindcss').Config} */
const configuration = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {},
};

module.exports = withRailwind(configuration);
