export {}

interface CustomMatchers<R = unknown> {
  toMatchCss(css: string): R
  toIncludeCss(css: string): R
  toMatchFormattedCss(css: string): R
}

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
