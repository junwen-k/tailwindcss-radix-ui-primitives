# tailwindcss-radix-ui

<a href="https://github.com/junwen-k/tailwindcss-radix-ui/blob/main/LICENSE"><img src="https://img.shields.io/github/license/junwen-k/tailwindcss-radix-ui
" alt="License"></a>

A plugin for Tailwind CSS v3.2+ that generates data attribute as well as CSS variable utilities for Radix UI.

## Installation

Install the plugin with your favourite package manager:

```sh
npm install tailwindcss-radix-ui
yarn add tailwindcss-radix-ui
pnpm install tailwindcss-radix-ui
bun add tailwindcss-radix-ui
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-radix-ui'),
    // ...
  ],
}
```

## License

[MIT](LICENSE)
