# Railwind Experimental

Minimal, Clean and Expandable Components

## Installation

```bash
npm i railwind-experimental
```

Tailwindcss configuration:

```js
// tailwind.config.js

const withRailwind = require('railwind-experimental/dist/railwind');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = withRailwind(tailwindConfig);
```

## Usages

```jsx
import { Button } from 'railwind-experimental';

// ...
<Button variant="contained">Increment +</Button>;
// ...
```
