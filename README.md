# tailwindcss-radix-ui

![CI](https://img.shields.io/github/actions/workflow/status/junwen-k/tailwindcss-radix-ui/ci.yml?branch=main)
![npm](https://img.shields.io/npm/dm/%40junwen-k%2Ftailwindcss-radix-ui)
![Tailwind](https://img.shields.io/badge/tailwindcss-v3.2+-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)
[![License](https://img.shields.io/github/license/junwen-k/tailwindcss-radix-ui)](https://raw.githubusercontent.com/junwen-k/tailwindcss-radix-ui/main/LICENSE)

A plugin for Tailwind CSS v3.2+ that generates data attribute as well as CSS variable utilities for [Radix UI](https://www.radix-ui.com/primitives).

## Features

- ✨ Embrace the native [data-attributes](https://tailwindcss.com/docs/hover-focus-and-other-states#data-attributes) state of Tailwind CSS.
- ⭐ Generate [Radix UI's](https://www.radix-ui.com/primitives) CSS Variable utilities.

## Installation

Install the plugin with your favourite package manager:

```sh
npm install @junwen-k/tailwindcss-radix-ui
yarn add @junwen-k/tailwindcss-radix-ui
pnpm install @junwen-k/tailwindcss-radix-ui
bun add @junwen-k/tailwindcss-radix-ui
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@junwen-k/tailwindcss-radix-ui')({
      themeKey: 'radix', // Defaults to "radix"
    }),
    // ...
  ],
}
```

## Usage

This plugin simplifies the use of Radix's data attribute selectors by injecting shortcuts directly into your `theme.data` section of your Tailwind config. You can write Radix's state variants with the benefit of IntelliSense. For example:

```diff
- class="data-[state=open]:..."
+ class="data-state-open:..."
```

In addition to data attributes, Radix's CSS Variables are added to your `theme.${themeKey}` section of your Tailwind config. These variables are then distributed to their respective keys where it makes sense, allowing you to create utilities like `w-radix-accordion-content-height`.

| Variable                 | Key                                                               |
| ------------------------ | ----------------------------------------------------------------- |
| `*-width` and `*-height` | [spacing](https://tailwindcss.com/docs/customizing-spacing)       |
| `*-transform-origin`     | [transform-origin](https://tailwindcss.com/docs/transform-origin) |
| `*-x` and `*-y`          | [translate](https://tailwindcss.com/docs/translate)               |

Additionally, Radix's CSS Variables can be referenced using the [`theme()`](https://tailwindcss.com/docs/theme#referencing-other-values) function.

```diff
// tailwind.config.js
module.exports = {
  theme: {
    // ...
-    keyframes: {
+    keyframes: ({ theme }) => ({
      slideDown: {
        from: { height: 0 },
-       to: { height: 'var(--radix-accordion-content-height)' },
+       to: { height: theme('radix.accordion-content-height') },
      },
      slideUp: {
-       from: { height: 'var(--radix-accordion-content-height)' },
+       from: { height: theme('radix.accordion-content-height') },
        to: { height: 0 },
      },
    },
    // ...
  },
}
```

However, using [`theme()`](https://tailwindcss.com/docs/theme#referencing-other-values) function may not currently provide any specific benefits.

## Documentation

### Data Attributes

| Class                        | Selector                          |
| ---------------------------- | --------------------------------- |
| `data-active`                | `[data-active]`                   |
| `data-disabled`              | `[data-disabled]`                 |
| `data-highlighted`           | `[data-highlighted]`              |
| `data-invalid`               | `[data-invalid]`                  |
| `data-max`                   | `[data-max]`                      |
| `data-placeholder`           | `[data-placeholder]`              |
| `data-valid`                 | `[data-valid]`                    |
| `data-value`                 | `[data-value]`                    |
| `data-align-center`          | `[data-align="center"]`           |
| `data-align-end`             | `[data-align="end"]`              |
| `data-align-start`           | `[data-align="start"]`            |
| `data-motion-from-end`       | `[data-motion="from-end"]`        |
| `data-motion-from-start`     | `[data-motion="from-start"]`      |
| `data-motion-to-end`         | `[data-motion="to-end"]`          |
| `data-motion-to-start`       | `[data-motion="to-start"]`        |
| `data-orientation-`          | `[data-orientation="horizontal"]` |
| `data-orientation-vertical`  | `[data-orientation="vertical"]`   |
| `data-side-bottom`           | `[data-side="bottom"]`            |
| `data-side-left`             | `[data-side="left"]`              |
| `data-side-right`            | `[data-side="right"]`             |
| `data-side-top`              | `[data-side="top"]`               |
| `data-state-active`          | `[data-state="active"]`           |
| `data-state-checked`         | `[data-state="checked"]`          |
| `data-state-closed`          | `[data-state="closed"]`           |
| `data-state-complete`        | `[data-state="complete"]`         |
| `data-state-delayed-open`    | `[data-state="delayed-open"]`     |
| `data-state-hidden`          | `[data-state="hidden"]`           |
| `data-state-inactive`        | `[data-state="inactive"]`         |
| `data-state-indeterminate`   | `[data-state="indeterminate"]`    |
| `data-state-instant-open`    | `[data-state="instant-open"]`     |
| `data-state-loading`         | `[data-state="loading"]`          |
| `data-state-off`             | `[data-state="off"]`              |
| `data-state-on`              | `[data-state="on"]`               |
| `data-state-open`            | `[data-state="open"]`             |
| `data-state-unchecked`       | `[data-state="unchecked"]`        |
| `data-state-visible`         | `[data-state="visible"]`          |
| `data-swipe-cancel`          | `[data-swipe="cancel"]`           |
| `data-swipe-end`             | `[data-swipe="end"]`              |
| `data-swipe-move`            | `[data-swipe="move"]`             |
| `data-swipe-start`           | `[data-swipe="start"]`            |
| `data-swipe-direction-down`  | `[data-swipe-direction="down"]`   |
| `data-swipe-direction-left`  | `[data-swipe-direction="left"]`   |
| `data-swipe-direction-right` | `[data-swipe-direction="right"]`  |
| `data-swipe-direction-up`    | `[data-swipe-direction="up"]`     |

### CSS Variables

| Variable                                      | Inherited Properties                                                                            |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `radix-accordion-content-width`               | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-accordion-collapsible-width`           | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-context-menu-trigger-width`            | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-dropdown-menu-trigger-width`           | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-hover-card-trigger-width`              | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-menubar-trigger-width`                 | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-navigation-menu-viewport-width`        | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-popover-trigger-width`                 | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-select-trigger-width`                  | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-tooltip-trigger-width`                 | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-context-menu-content-available-width`  | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-dropdown-menu-content-available-width` | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-hover-card-content-available-width`    | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-menubar-content-available-width`       | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-popover-content-available-width`       | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-select-content-available-width`        | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-tooltip-content-available-width`       | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-accordion-content-height`              | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-accordion-collapsible-height`          | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-context-menu-trigger-height`           | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-dropdown-menu-trigger-height`          | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-hover-card-trigger-height`             | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-menubar-trigger-height`                | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-navigation-menu-viewport-height`       | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-popover-trigger-height`                | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-select-trigger-height`                 | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-tooltip-trigger-height`                | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-context-menu-content-available-height` | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-dropdown-menu-content-available-`      | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-hover-card-content-available-height`   | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-menubar-content-available-height`      | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-popover-content-available-height`      | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-select-content-available-height`       | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-tooltip-content-available-height`      | `padding,margin,width,height,max-height,gap,inset,space,translate,scroll-margin,scroll-padding` |
| `radix-context-menu-content-transform-origin` | `transform-origin`                                                                              |
| `radix-dropdown-menu-content-transform-`      | `transform-origin`                                                                              |
| `radix-hover-card-content-transform-origin`   | `transform-origin`                                                                              |
| `radix-menubar-content-transform-origin`      | `transform-origin`                                                                              |
| `radix-popover-content-transform-origin`      | `transform-origin`                                                                              |
| `radix-select-content-transform-origin`       | `transform-origin`                                                                              |
| `radix-tooltip-content-transform-origin`      | `transform-origin`                                                                              |
| `radix-toast-swipe-move-x`                    | `translate`                                                                                     |
| `radix-toast-swipe-move-y`                    | `translate`                                                                                     |
| `radix-toast-swipe-end-x`                     | `translate`                                                                                     |
| `radix-toast-swipe-end-y`                     | `translate`                                                                                     |

## License

[MIT](LICENSE)
