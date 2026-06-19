# Changelog

## 2.0.0

### Major Changes

- [#48](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/pull/48) [`60a45ae`](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/commit/60a45ae694febd79ef5568a21856ee45079fbf9a) Thanks [@junwen-k](https://github.com/junwen-k)! - Add first-class Tailwind CSS v4 support ([#45](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/issues/45)).

  The plugin is now a pure CSS file using `@custom-variant` and `@theme inline` directives, replacing the previous JavaScript plugin. **Tailwind CSS v3 is no longer supported** — use `tailwindcss-radix-ui-primitives@1` if you are still on v3.

  See [MIGRATION.md](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/blob/main/MIGRATION.md) for upgrade instructions.

  ### Breaking changes
  - Requires Tailwind CSS v4.0+
  - Install via `@import "tailwindcss-radix-ui-primitives"` in your CSS file instead of `require(...)` in `tailwind.config.js`
  - `themeKey` option removed
  - `theme('radix.*')` references no longer work — use `var(--radix-*)` directly
  - `radix-accordion-collapsible-*` utilities renamed to `radix-collapsible-content-*` (bug fix)

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/compare/v1.0.0...v1.1.0) (2024-05-27)

### Features

- upgrade codebase ([717f611](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/commit/717f611468dc1623629808ee855ec7247aa9a35b))

## 1.0.0 (2023-09-26)

### Features

- initial commit ([d0375b2](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/commit/d0375b254275cae41f157243e8c39ea4c931420a))

### Bug Fixes

- **build:** add npmrc for pre-post scripts ([236f3b8](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/commit/236f3b87516b50e455ad12ad6b8f0261c17ca0ab))
- **npm:** rename package ([123c60b](https://github.com/junwen-k/tailwindcss-radix-ui-primitives/commit/123c60b17a519435f60cbd5ecf0d23bf621d50d8))
