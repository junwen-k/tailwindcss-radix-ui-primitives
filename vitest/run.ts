import path from 'path'

import tailwindcss from '@tailwindcss/postcss'
import postcss from 'postcss'

export const css = String.raw

export async function run(classes: string) {
  const pluginPath = path.resolve(__dirname, '../src/index.css')

  const input = [
    '@import "tailwindcss";',
    `@import "${pluginPath}";`,
    `@source inline("${classes}");`,
  ].join('\n')

  return postcss([tailwindcss()]).process(input, {
    from: path.resolve(__dirname, 'test.css'),
  })
}
