# tailwindcss-radix-ui-primitives

![CI](https://img.shields.io/github/actions/workflow/status/junwen-k/tailwindcss-radix-ui-primitives/ci.yml?branch=main)
![npm](https://img.shields.io/npm/dm/tailwindcss-radix-ui-primitives)
![Tailwind](https://img.shields.io/badge/tailwindcss-v4.0+-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)
[![License](https://img.shields.io/github/license/junwen-k/tailwindcss-radix-ui-primitives)](https://raw.githubusercontent.com/junwen-k/tailwindcss-radix-ui-primitives/main/LICENSE)

A plugin for Tailwind CSS v4 that generates data attribute variants and CSS variable utilities for [Radix UI](https://www.radix-ui.com/primitives).

> [!NOTE]
> This is v2, which requires **Tailwind CSS v4**. If you are on Tailwind CSS v3, use [`tailwindcss-radix-ui-primitives@1`](https://www.npmjs.com/package/tailwindcss-radix-ui-primitives/v/1.1.0). See the [migration guide](MIGRATION.md) to upgrade.

## Features

- ✨ Named variants for every Radix UI `data-*` attribute — write `data-state-open:rotate-180` instead of `data-[state=open]:rotate-180`.
- ⭐ Named utilities for every Radix UI CSS variable — write `w-radix-accordion-content-width` instead of `w-[var(--radix-accordion-content-width)]`.

## Installation

Install the plugin:

```sh
npm install tailwindcss-radix-ui-primitives
pnpm add tailwindcss-radix-ui-primitives
yarn add tailwindcss-radix-ui-primitives
bun add tailwindcss-radix-ui-primitives
```

Then import it in your main CSS file:

```css
@import 'tailwindcss';
@import 'tailwindcss-radix-ui-primitives';
```

## Usage

### Data attribute variants

Instead of arbitrary data attribute selectors, use the named variants this plugin provides:

```diff
- class="data-[state=open]:rotate-180"
+ class="data-state-open:rotate-180"
```

```diff
- class="data-[side=bottom]:slide-in-from-top-2"
+ class="data-side-bottom:slide-in-from-top-2"
```

### CSS variable utilities

Instead of verbose arbitrary values, use named utilities:

```diff
- class="h-[var(--radix-accordion-content-height)]"
+ class="h-radix-accordion-content-height"
```

```diff
- class="origin-[var(--radix-tooltip-content-transform-origin)]"
+ class="origin-radix-tooltip-content-transform-origin"
```

CSS variables registered under `--spacing-*` work with **all** spacing-based utilities — `w-*`, `h-*`, `max-h-*`, `translate-x/y-*`, `p-*`, `m-*`, `gap-*`, and more.

## Documentation

### Data attribute variants

#### Boolean attributes

| Variant            | Selector             |
| ------------------ | -------------------- |
| `data-active`      | `[data-active]`      |
| `data-disabled`    | `[data-disabled]`    |
| `data-highlighted` | `[data-highlighted]` |
| `data-invalid`     | `[data-invalid]`     |
| `data-max`         | `[data-max]`         |
| `data-placeholder` | `[data-placeholder]` |
| `data-valid`       | `[data-valid]`       |
| `data-value`       | `[data-value]`       |

#### `data-align`

| Variant             | Selector                |
| ------------------- | ----------------------- |
| `data-align-center` | `[data-align="center"]` |
| `data-align-end`    | `[data-align="end"]`    |
| `data-align-start`  | `[data-align="start"]`  |

#### `data-motion`

| Variant                  | Selector                     |
| ------------------------ | ---------------------------- |
| `data-motion-from-end`   | `[data-motion="from-end"]`   |
| `data-motion-from-start` | `[data-motion="from-start"]` |
| `data-motion-to-end`     | `[data-motion="to-end"]`     |
| `data-motion-to-start`   | `[data-motion="to-start"]`   |

#### `data-orientation`

| Variant                       | Selector                          |
| ----------------------------- | --------------------------------- |
| `data-orientation-horizontal` | `[data-orientation="horizontal"]` |
| `data-orientation-vertical`   | `[data-orientation="vertical"]`   |

#### `data-side`

| Variant            | Selector               |
| ------------------ | ---------------------- |
| `data-side-bottom` | `[data-side="bottom"]` |
| `data-side-left`   | `[data-side="left"]`   |
| `data-side-right`  | `[data-side="right"]`  |
| `data-side-top`    | `[data-side="top"]`    |

#### `data-state`

| Variant                    | Selector                       |
| -------------------------- | ------------------------------ |
| `data-state-active`        | `[data-state="active"]`        |
| `data-state-checked`       | `[data-state="checked"]`       |
| `data-state-closed`        | `[data-state="closed"]`        |
| `data-state-complete`      | `[data-state="complete"]`      |
| `data-state-delayed-open`  | `[data-state="delayed-open"]`  |
| `data-state-hidden`        | `[data-state="hidden"]`        |
| `data-state-inactive`      | `[data-state="inactive"]`      |
| `data-state-indeterminate` | `[data-state="indeterminate"]` |
| `data-state-instant-open`  | `[data-state="instant-open"]`  |
| `data-state-loading`       | `[data-state="loading"]`       |
| `data-state-off`           | `[data-state="off"]`           |
| `data-state-on`            | `[data-state="on"]`            |
| `data-state-open`          | `[data-state="open"]`          |
| `data-state-unchecked`     | `[data-state="unchecked"]`     |
| `data-state-visible`       | `[data-state="visible"]`       |

#### `data-swipe`

| Variant             | Selector                |
| ------------------- | ----------------------- |
| `data-swipe-cancel` | `[data-swipe="cancel"]` |
| `data-swipe-end`    | `[data-swipe="end"]`    |
| `data-swipe-move`   | `[data-swipe="move"]`   |
| `data-swipe-start`  | `[data-swipe="start"]`  |

#### `data-swipe-direction`

| Variant                      | Selector                         |
| ---------------------------- | -------------------------------- |
| `data-swipe-direction-down`  | `[data-swipe-direction="down"]`  |
| `data-swipe-direction-left`  | `[data-swipe-direction="left"]`  |
| `data-swipe-direction-right` | `[data-swipe-direction="right"]` |
| `data-swipe-direction-up`    | `[data-swipe-direction="up"]`    |

### CSS variable utilities

All variables are registered under a Tailwind namespace that determines which utilities they work with.

| Radix UI CSS variable                            | Namespace              | Example utility                                       |
| ------------------------------------------------ | ---------------------- | ----------------------------------------------------- |
| `--radix-accordion-content-width`                | `--spacing-*`          | `w-radix-accordion-content-width`                     |
| `--radix-accordion-content-height`               | `--spacing-*`          | `h-radix-accordion-content-height`                    |
| `--radix-collapsible-content-width`              | `--spacing-*`          | `w-radix-collapsible-content-width`                   |
| `--radix-collapsible-content-height`             | `--spacing-*`          | `h-radix-collapsible-content-height`                  |
| `--radix-navigation-menu-viewport-width`         | `--spacing-*`          | `w-radix-navigation-menu-viewport-width`              |
| `--radix-navigation-menu-viewport-height`        | `--spacing-*`          | `h-radix-navigation-menu-viewport-height`             |
| `--radix-context-menu-trigger-width`             | `--spacing-*`          | `w-radix-context-menu-trigger-width`                  |
| `--radix-context-menu-trigger-height`            | `--spacing-*`          | `h-radix-context-menu-trigger-height`                 |
| `--radix-dropdown-menu-trigger-width`            | `--spacing-*`          | `w-radix-dropdown-menu-trigger-width`                 |
| `--radix-dropdown-menu-trigger-height`           | `--spacing-*`          | `h-radix-dropdown-menu-trigger-height`                |
| `--radix-hover-card-trigger-width`               | `--spacing-*`          | `w-radix-hover-card-trigger-width`                    |
| `--radix-hover-card-trigger-height`              | `--spacing-*`          | `h-radix-hover-card-trigger-height`                   |
| `--radix-menubar-trigger-width`                  | `--spacing-*`          | `w-radix-menubar-trigger-width`                       |
| `--radix-menubar-trigger-height`                 | `--spacing-*`          | `h-radix-menubar-trigger-height`                      |
| `--radix-popover-trigger-width`                  | `--spacing-*`          | `w-radix-popover-trigger-width`                       |
| `--radix-popover-trigger-height`                 | `--spacing-*`          | `h-radix-popover-trigger-height`                      |
| `--radix-select-trigger-width`                   | `--spacing-*`          | `w-radix-select-trigger-width`                        |
| `--radix-select-trigger-height`                  | `--spacing-*`          | `h-radix-select-trigger-height`                       |
| `--radix-tooltip-trigger-width`                  | `--spacing-*`          | `w-radix-tooltip-trigger-width`                       |
| `--radix-tooltip-trigger-height`                 | `--spacing-*`          | `h-radix-tooltip-trigger-height`                      |
| `--radix-context-menu-content-available-width`   | `--spacing-*`          | `max-w-radix-context-menu-content-available-width`    |
| `--radix-context-menu-content-available-height`  | `--spacing-*`          | `max-h-radix-context-menu-content-available-height`   |
| `--radix-dropdown-menu-content-available-width`  | `--spacing-*`          | `max-w-radix-dropdown-menu-content-available-width`   |
| `--radix-dropdown-menu-content-available-height` | `--spacing-*`          | `max-h-radix-dropdown-menu-content-available-height`  |
| `--radix-hover-card-content-available-width`     | `--spacing-*`          | `max-w-radix-hover-card-content-available-width`      |
| `--radix-hover-card-content-available-height`    | `--spacing-*`          | `max-h-radix-hover-card-content-available-height`     |
| `--radix-menubar-content-available-width`        | `--spacing-*`          | `max-w-radix-menubar-content-available-width`         |
| `--radix-menubar-content-available-height`       | `--spacing-*`          | `max-h-radix-menubar-content-available-height`        |
| `--radix-popover-content-available-width`        | `--spacing-*`          | `max-w-radix-popover-content-available-width`         |
| `--radix-popover-content-available-height`       | `--spacing-*`          | `max-h-radix-popover-content-available-height`        |
| `--radix-select-content-available-width`         | `--spacing-*`          | `max-w-radix-select-content-available-width`          |
| `--radix-select-content-available-height`        | `--spacing-*`          | `max-h-radix-select-content-available-height`         |
| `--radix-tooltip-content-available-width`        | `--spacing-*`          | `max-w-radix-tooltip-content-available-width`         |
| `--radix-tooltip-content-available-height`       | `--spacing-*`          | `max-h-radix-tooltip-content-available-height`        |
| `--radix-context-menu-content-transform-origin`  | `--transform-origin-*` | `origin-radix-context-menu-content-transform-origin`  |
| `--radix-dropdown-menu-content-transform-origin` | `--transform-origin-*` | `origin-radix-dropdown-menu-content-transform-origin` |
| `--radix-hover-card-content-transform-origin`    | `--transform-origin-*` | `origin-radix-hover-card-content-transform-origin`    |
| `--radix-menubar-content-transform-origin`       | `--transform-origin-*` | `origin-radix-menubar-content-transform-origin`       |
| `--radix-popover-content-transform-origin`       | `--transform-origin-*` | `origin-radix-popover-content-transform-origin`       |
| `--radix-select-content-transform-origin`        | `--transform-origin-*` | `origin-radix-select-content-transform-origin`        |
| `--radix-tooltip-content-transform-origin`       | `--transform-origin-*` | `origin-radix-tooltip-content-transform-origin`       |
| `--radix-toast-swipe-move-x`                     | `--spacing-*`          | `translate-x-radix-toast-swipe-move-x`                |
| `--radix-toast-swipe-move-y`                     | `--spacing-*`          | `translate-y-radix-toast-swipe-move-y`                |
| `--radix-toast-swipe-end-x`                      | `--spacing-*`          | `translate-x-radix-toast-swipe-end-x`                 |
| `--radix-toast-swipe-end-y`                      | `--spacing-*`          | `translate-y-radix-toast-swipe-end-y`                 |

## License

[MIT](LICENSE)
