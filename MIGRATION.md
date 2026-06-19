# Migration Guide

## v1 → v2

`tailwindcss-radix-ui-primitives` v2 is a complete rewrite for **Tailwind CSS v4**. The plugin is now a pure CSS file using `@custom-variant` and `@theme inline` directives instead of a JavaScript plugin.

### Requirements

- **Tailwind CSS v4.0+** is required. v2 does **not** support Tailwind CSS v3.
- If you are still on Tailwind CSS v3, use `tailwindcss-radix-ui-primitives@1`.

### Upgrading

#### 1. Update the package

```sh
npm install tailwindcss-radix-ui-primitives@latest
```

#### 2. Remove the plugin from `tailwind.config.js`

The plugin is now a CSS file. Remove the old configuration:

```diff
- // tailwind.config.js
- module.exports = {
-   plugins: [
-     require('tailwindcss-radix-ui-primitives')({
-       themeKey: 'radix',
-     }),
-   ],
- }
```

#### 3. Import the plugin in your CSS file

```diff
  @import "tailwindcss";
+ @import "tailwindcss-radix-ui-primitives";
```

### Breaking changes

#### `themeKey` option removed

The `themeKey` option is no longer supported. All CSS variables are now registered directly into Tailwind's built-in `--spacing-*` and `--transform-origin-*` namespaces.

#### `theme('radix.*')` no longer works

In v1, you could reference Radix CSS variables via Tailwind's `theme()` function:

```js
// tailwind.config.js — v1 only
keyframes: ({ theme }) => ({
  slideDown: {
    to: { height: theme('radix.accordion-content-height') },
  },
}),
```

In v2, use the CSS variable directly:

```css
/* v2 */
@keyframes slideDown {
  to {
    height: var(--radix-accordion-content-height);
  }
}
```

#### `radix-accordion-collapsible-*` renamed to `radix-collapsible-content-*`

v1 contained incorrect variable names for the Collapsible primitive. These are corrected in v2:

| v1 utility                             | v2 utility                           |
| -------------------------------------- | ------------------------------------ |
| `w-radix-accordion-collapsible-width`  | `w-radix-collapsible-content-width`  |
| `h-radix-accordion-collapsible-height` | `h-radix-collapsible-content-height` |

### Summary

| Change                        | v1                                                  | v2                                      |
| ----------------------------- | --------------------------------------------------- | --------------------------------------- |
| Plugin format                 | JavaScript (`require(...)` in `tailwind.config.js`) | CSS (`@import` in CSS file)             |
| Tailwind CSS support          | v3.2+                                               | v4.0+                                   |
| `themeKey` option             | Supported (default: `"radix"`)                      | Removed                                 |
| `theme('radix.*')` references | Supported                                           | Removed — use `var(--radix-*)` directly |
| Collapsible variable names    | `radix-accordion-collapsible-*` (incorrect)         | `radix-collapsible-content-*` (fixed)   |
