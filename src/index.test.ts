import { expect, it } from 'vitest'

import { html, css, run } from '../vitest/run'

it('should generate Radix data attribute utilites', () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="data-active:underline"></div>
          <div class="data-disabled:underline"></div>
          <div class="data-highlighted:underline"></div>
          <div class="data-invalid:underline"></div>
          <div class="data-max:underline"></div>
          <div class="data-placeholder:underline"></div>
          <div class="data-valid:underline"></div>
          <div class="data-value:underline"></div>

          <div class="data-align-center:underline"></div>
          <div class="data-align-end:underline"></div>
          <div class="data-align-start:underline"></div>

          <div class="data-motion-from-end:underline"></div>
          <div class="data-motion-from-start:underline"></div>
          <div class="data-motion-to-end:underline"></div>
          <div class="data-motion-to-start:underline"></div>

          <div class="data-orientation-horizontal:underline"></div>
          <div class="data-orientation-vertical:underline"></div>

          <div class="data-side-bottom:underline"></div>
          <div class="data-side-left:underline"></div>
          <div class="data-side-right:underline"></div>
          <div class="data-side-top:underline"></div>

          <div class="data-state-active:underline"></div>
          <div class="data-state-checked:underline"></div>
          <div class="data-state-closed:underline"></div>
          <div class="data-state-complete:underline"></div>
          <div class="data-state-delayed-open:underline"></div>
          <div class="data-state-hidden:underline"></div>
          <div class="data-state-inactive:underline"></div>
          <div class="data-state-indeterminate:underline"></div>
          <div class="data-state-instant-open:underline"></div>
          <div class="data-state-loading:underline"></div>
          <div class="data-state-off:underline"></div>
          <div class="data-state-on:underline"></div>
          <div class="data-state-open:underline"></div>
          <div class="data-state-unchecked:underline"></div>
          <div class="data-state-visible:underline"></div>

          <div class="data-swipe-cancel:underline"></div>
          <div class="data-swipe-end:underline"></div>
          <div class="data-swipe-move:underline"></div>
          <div class="data-swipe-start:underline"></div>

          <div class="data-swipe-direction-down:underline"></div>
          <div class="data-swipe-direction-left:underline"></div>
          <div class="data-swipe-direction-right:underline"></div>
          <div class="data-swipe-direction-up:underline"></div>
        `,
      },
    ],
    corePlugins: { preflight: false },
  }

  const input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      .data-active\:underline[data-active] {
        text-decoration-line: underline;
      }

      .data-disabled\:underline[data-disabled] {
        text-decoration-line: underline;
      }

      .data-highlighted\:underline[data-highlighted] {
        text-decoration-line: underline;
      }

      .data-invalid\:underline[data-invalid] {
        text-decoration-line: underline;
      }

      .data-max\:underline[data-max] {
        text-decoration-line: underline;
      }

      .data-placeholder\:underline[data-placeholder] {
        text-decoration-line: underline;
      }

      .data-valid\:underline[data-valid] {
        text-decoration-line: underline;
      }

      .data-value\:underline[data-value] {
        text-decoration-line: underline;
      }

      .data-align-center\:underline[data-align='center'] {
        text-decoration-line: underline;
      }

      .data-align-end\:underline[data-align='end'] {
        text-decoration-line: underline;
      }

      .data-align-start\:underline[data-align='start'] {
        text-decoration-line: underline;
      }

      .data-motion-from-end\:underline[data-motion='from-end'] {
        text-decoration-line: underline;
      }

      .data-motion-from-start\:underline[data-motion='from-start'] {
        text-decoration-line: underline;
      }

      .data-motion-to-end\:underline[data-motion='to-end'] {
        text-decoration-line: underline;
      }

      .data-motion-to-start\:underline[data-motion='to-start'] {
        text-decoration-line: underline;
      }

      .data-orientation-horizontal\:underline[data-orientation='horizontal'] {
        text-decoration-line: underline;
      }

      .data-orientation-vertical\:underline[data-orientation='vertical'] {
        text-decoration-line: underline;
      }

      .data-side-bottom\:underline[data-side='bottom'] {
        text-decoration-line: underline;
      }

      .data-side-left\:underline[data-side='left'] {
        text-decoration-line: underline;
      }

      .data-side-right\:underline[data-side='right'] {
        text-decoration-line: underline;
      }

      .data-side-top\:underline[data-side='top'] {
        text-decoration-line: underline;
      }

      .data-state-active\:underline[data-state='active'] {
        text-decoration-line: underline;
      }

      .data-state-checked\:underline[data-state='checked'] {
        text-decoration-line: underline;
      }

      .data-state-closed\:underline[data-state='closed'] {
        text-decoration-line: underline;
      }

      .data-state-complete\:underline[data-state='complete'] {
        text-decoration-line: underline;
      }

      .data-state-delayed-open\:underline[data-state='delayed-open'] {
        text-decoration-line: underline;
      }

      .data-state-hidden\:underline[data-state='hidden'] {
        text-decoration-line: underline;
      }

      .data-state-inactive\:underline[data-state='inactive'] {
        text-decoration-line: underline;
      }

      .data-state-indeterminate\:underline[data-state='indeterminate'] {
        text-decoration-line: underline;
      }

      .data-state-instant-open\:underline[data-state='instant-open'] {
        text-decoration-line: underline;
      }

      .data-state-loading\:underline[data-state='loading'] {
        text-decoration-line: underline;
      }

      .data-state-off\:underline[data-state='off'] {
        text-decoration-line: underline;
      }

      .data-state-on\:underline[data-state='on'] {
        text-decoration-line: underline;
      }

      .data-state-open\:underline[data-state='open'] {
        text-decoration-line: underline;
      }

      .data-state-unchecked\:underline[data-state='unchecked'] {
        text-decoration-line: underline;
      }

      .data-state-visible\:underline[data-state='visible'] {
        text-decoration-line: underline;
      }

      .data-swipe-cancel\:underline[data-swipe='cancel'] {
        text-decoration-line: underline;
      }

      .data-swipe-end\:underline[data-swipe='end'] {
        text-decoration-line: underline;
      }

      .data-swipe-move\:underline[data-swipe='move'] {
        text-decoration-line: underline;
      }

      .data-swipe-start\:underline[data-swipe='start'] {
        text-decoration-line: underline;
      }

      .data-swipe-direction-down\:underline[data-swipe-direction='down'] {
        text-decoration-line: underline;
      }

      .data-swipe-direction-left\:underline[data-swipe-direction='left'] {
        text-decoration-line: underline;
      }

      .data-swipe-direction-right\:underline[data-swipe-direction='right'] {
        text-decoration-line: underline;
      }

      .data-swipe-direction-up\:underline[data-swipe-direction='up'] {
        text-decoration-line: underline;
      }
    `)
  })
})

it('should generate Radix css variable utilites', () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="w-radix-accordion-content-width"></div>
          <div class="m-radix-menubar-content-available-width"></div>
          <div class="h-radix-accordion-content-height"></div>
          <div class="max-h-radix-dropdown-menu-content-available-height"></div>
          <div class="origin-radix-menubar-content-transform-origin"></div>
          <div class="translate-x-radix-toast-swipe-move-x"></div>
          <div class="translate-y-radix-toast-swipe-end-y"></div>
        `,
      },
    ],
    corePlugins: { preflight: false },
  }

  const input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      .m-radix-menubar-content-available-width {
        margin: var(--radix-menubar-content-available-width);
      }

      .h-radix-accordion-content-height {
        height: var(--radix-accordion-content-height);
      }

      .max-h-radix-dropdown-menu-content-available-height {
        max-height: var(--radix-dropdown-menu-content-available-height);
      }

      .w-radix-accordion-content-width {
        width: var(--radix-accordion-content-width);
      }

      .origin-radix-menubar-content-transform-origin {
        transform-origin: var(--radix-menubar-content-transform-origin);
      }

      .translate-x-radix-toast-swipe-move-x {
        --tw-translate-x: var(--radix-toast-swipe-move-x);
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
          skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }

      .translate-y-radix-toast-swipe-end-y {
        --tw-translate-y: var(--radix-toast-swipe-end-y);
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
          skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
    `)
  })
})
