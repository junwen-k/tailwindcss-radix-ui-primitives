import { expect, it } from 'vitest'

import { css, run } from '../vitest/run'

it('generates boolean data attribute variants', async () => {
  const result = await run(
    'data-active:underline data-disabled:underline data-highlighted:underline data-invalid:underline data-max:underline data-placeholder:underline data-valid:underline data-value:underline'
  )

  await expect(result.css).toIncludeCss(css`
    .data-active\:underline {
      &[data-active] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-disabled\:underline {
      &[data-disabled] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-highlighted\:underline {
      &[data-highlighted] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-invalid\:underline {
      &[data-invalid] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-max\:underline {
      &[data-max] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-placeholder\:underline {
      &[data-placeholder] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-valid\:underline {
      &[data-valid] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-value\:underline {
      &[data-value] {
        text-decoration-line: underline;
      }
    }
  `)
})

it('generates align data attribute variants', async () => {
  const result = await run(
    'data-align-center:underline data-align-end:underline data-align-start:underline'
  )

  await expect(result.css).toIncludeCss(css`
    .data-align-center\:underline {
      &[data-align='center'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-align-end\:underline {
      &[data-align='end'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-align-start\:underline {
      &[data-align='start'] {
        text-decoration-line: underline;
      }
    }
  `)
})

it('generates motion data attribute variants', async () => {
  const result = await run(
    'data-motion-from-end:underline data-motion-from-start:underline data-motion-to-end:underline data-motion-to-start:underline'
  )

  await expect(result.css).toIncludeCss(css`
    .data-motion-from-end\:underline {
      &[data-motion='from-end'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-motion-from-start\:underline {
      &[data-motion='from-start'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-motion-to-end\:underline {
      &[data-motion='to-end'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-motion-to-start\:underline {
      &[data-motion='to-start'] {
        text-decoration-line: underline;
      }
    }
  `)
})

it('generates orientation data attribute variants', async () => {
  const result = await run(
    'data-orientation-horizontal:underline data-orientation-vertical:underline'
  )

  await expect(result.css).toIncludeCss(css`
    .data-orientation-horizontal\:underline {
      &[data-orientation='horizontal'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-orientation-vertical\:underline {
      &[data-orientation='vertical'] {
        text-decoration-line: underline;
      }
    }
  `)
})

it('generates side data attribute variants', async () => {
  const result = await run(
    'data-side-bottom:underline data-side-left:underline data-side-right:underline data-side-top:underline'
  )

  await expect(result.css).toIncludeCss(css`
    .data-side-bottom\:underline {
      &[data-side='bottom'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-side-left\:underline {
      &[data-side='left'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-side-right\:underline {
      &[data-side='right'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-side-top\:underline {
      &[data-side='top'] {
        text-decoration-line: underline;
      }
    }
  `)
})

it('generates state data attribute variants', async () => {
  const result = await run(
    'data-state-active:underline data-state-checked:underline data-state-closed:underline data-state-complete:underline data-state-delayed-open:underline data-state-hidden:underline data-state-inactive:underline data-state-indeterminate:underline data-state-instant-open:underline data-state-loading:underline data-state-off:underline data-state-on:underline data-state-open:underline data-state-unchecked:underline data-state-visible:underline'
  )

  await expect(result.css).toIncludeCss(css`
    .data-state-active\:underline {
      &[data-state='active'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-state-open\:underline {
      &[data-state='open'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-state-closed\:underline {
      &[data-state='closed'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-state-checked\:underline {
      &[data-state='checked'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-state-unchecked\:underline {
      &[data-state='unchecked'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-state-indeterminate\:underline {
      &[data-state='indeterminate'] {
        text-decoration-line: underline;
      }
    }
  `)
})

it('generates swipe data attribute variants', async () => {
  const result = await run(
    'data-swipe-cancel:underline data-swipe-end:underline data-swipe-move:underline data-swipe-start:underline data-swipe-direction-down:underline data-swipe-direction-left:underline data-swipe-direction-right:underline data-swipe-direction-up:underline'
  )

  await expect(result.css).toIncludeCss(css`
    .data-swipe-cancel\:underline {
      &[data-swipe='cancel'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-swipe-end\:underline {
      &[data-swipe='end'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-swipe-direction-down\:underline {
      &[data-swipe-direction='down'] {
        text-decoration-line: underline;
      }
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .data-swipe-direction-up\:underline {
      &[data-swipe-direction='up'] {
        text-decoration-line: underline;
      }
    }
  `)
})

it('generates accordion CSS variable utilities', async () => {
  const result = await run('w-radix-accordion-content-width h-radix-accordion-content-height')

  await expect(result.css).toIncludeCss(css`
    .w-radix-accordion-content-width {
      width: var(--radix-accordion-content-width);
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .h-radix-accordion-content-height {
      height: var(--radix-accordion-content-height);
    }
  `)
})

it('generates collapsible CSS variable utilities', async () => {
  const result = await run('w-radix-collapsible-content-width h-radix-collapsible-content-height')

  await expect(result.css).toIncludeCss(css`
    .w-radix-collapsible-content-width {
      width: var(--radix-collapsible-content-width);
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .h-radix-collapsible-content-height {
      height: var(--radix-collapsible-content-height);
    }
  `)
})

it('generates trigger size CSS variable utilities', async () => {
  const result = await run('w-radix-select-trigger-width h-radix-tooltip-trigger-height')

  await expect(result.css).toIncludeCss(css`
    .w-radix-select-trigger-width {
      width: var(--radix-select-trigger-width);
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .h-radix-tooltip-trigger-height {
      height: var(--radix-tooltip-trigger-height);
    }
  `)
})

it('generates available space CSS variable utilities', async () => {
  const result = await run(
    'max-w-radix-popover-content-available-width max-h-radix-dropdown-menu-content-available-height'
  )

  await expect(result.css).toIncludeCss(css`
    .max-w-radix-popover-content-available-width {
      max-width: var(--radix-popover-content-available-width);
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .max-h-radix-dropdown-menu-content-available-height {
      max-height: var(--radix-dropdown-menu-content-available-height);
    }
  `)
})

it('generates transform origin CSS variable utilities', async () => {
  const result = await run('origin-radix-tooltip-content-transform-origin')

  await expect(result.css).toIncludeCss(css`
    .origin-radix-tooltip-content-transform-origin {
      transform-origin: var(--radix-tooltip-content-transform-origin);
    }
  `)
})

it('generates navigation menu viewport CSS variable utilities', async () => {
  const result = await run(
    'w-radix-navigation-menu-viewport-width h-radix-navigation-menu-viewport-height'
  )

  await expect(result.css).toIncludeCss(css`
    .w-radix-navigation-menu-viewport-width {
      width: var(--radix-navigation-menu-viewport-width);
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .h-radix-navigation-menu-viewport-height {
      height: var(--radix-navigation-menu-viewport-height);
    }
  `)
})

it('generates toast swipe CSS variable utilities', async () => {
  const result = await run(
    'translate-x-radix-toast-swipe-move-x translate-y-radix-toast-swipe-move-y translate-x-radix-toast-swipe-end-x translate-y-radix-toast-swipe-end-y'
  )

  await expect(result.css).toIncludeCss(css`
    .translate-x-radix-toast-swipe-move-x {
      --tw-translate-x: var(--radix-toast-swipe-move-x);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .translate-y-radix-toast-swipe-move-y {
      --tw-translate-y: var(--radix-toast-swipe-move-y);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .translate-x-radix-toast-swipe-end-x {
      --tw-translate-x: var(--radix-toast-swipe-end-x);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  `)
  await expect(result.css).toIncludeCss(css`
    .translate-y-radix-toast-swipe-end-y {
      --tw-translate-y: var(--radix-toast-swipe-end-y);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  `)
})
