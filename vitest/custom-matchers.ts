import { expect } from 'vitest'

import prettier from 'prettier'

const format = (input: string) =>
  prettier.format(input, {
    parser: 'css',
    printWidth: 100,
  })

expect.extend({
  // Compare two CSS strings with all whitespace removed
  // This is probably naive but it's fast and works well enough.
  toMatchCss(received, argument) {
    const stripped = (str: string) => str.replace(/\s/g, '').replace(/;/g, '')

    const options = {
      comment: 'stripped(received) === stripped(argument)',
      isNot: this.isNot,
      promise: this.promise,
    }

    const pass = stripped(received) === stripped(argument)

    const actual = format(received)
    const expected = format(argument)

    return {
      actual,
      expected,
      message: () => this.utils.matcherHint('toMatchCss', undefined, undefined, options),
      pass,
    }
  },
  toIncludeCss(received, argument) {
    const stripped = (str: string) =>
      str.replace('/* prettier-ignore */', '').replace(/\s/g, '').replace(/;/g, '')

    const options = {
      comment: 'stripped(received).includes(stripped(argument))',
      isNot: this.isNot,
      promise: this.promise,
    }

    const pass = stripped(received).includes(stripped(argument))

    const actual = format(received)
    const expected = format(argument)

    return {
      actual,
      expected,
      message: () => this.utils.matcherHint('toIncludeCss', undefined, undefined, options),
      pass,
    }
  },
})

expect.extend({
  // Compare two CSS strings with all whitespace removed
  // This is probably naive but it's fast and works well enough.
  toMatchFormattedCss(received = '', argument = '') {
    const format = (input: string) =>
      prettier.format(input.replace(/\n/g, ''), {
        parser: 'css',
        printWidth: 100,
      })

    const options = {
      comment: 'stripped(received) === stripped(argument)',
      isNot: this.isNot,
      promise: this.promise,
    }

    const actual = format(received)
    const expected = format(argument)

    const pass = actual === expected

    return {
      actual,
      expected,
      message: () => this.utils.matcherHint('toMatchFormattedCss', undefined, undefined, options),
      pass,
    }
  },
})
