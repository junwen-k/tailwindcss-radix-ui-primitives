---
'tailwindcss-radix-ui-primitives': major
---

Add first-class Tailwind CSS v4 support ([#45](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/issues/45)).

The plugin is now a pure CSS file using `@custom-variant` and `@theme inline` directives, replacing the previous JavaScript plugin. **Tailwind CSS v3 is no longer supported** — use `tailwindcss-radix-ui-primitives@1` if you are still on v3.

See [MIGRATION.md](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/blob/main/MIGRATION.md) for upgrade instructions.

### Breaking changes

- Requires Tailwind CSS v4.0+
- Install via `@import "tailwindcss-radix-ui-primitives"` in your CSS file instead of `require(...)` in `tailwind.config.js`
- `themeKey` option removed
- `theme('radix.*')` references no longer work — use `var(--radix-*)` directly
- `radix-accordion-collapsible-*` utilities renamed to `radix-collapsible-content-*` (bug fix)
