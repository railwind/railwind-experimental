import { addParameters } from '@storybook/react';

import './tailwind.css';

addParameters({
  themes: {
    default: 'Light',
    list: [
      { name: 'Light', color: '#FFFFFF', class: 'light' },
      { name: 'Dark', color: '#16161A', class: 'dark' },
    ],
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
