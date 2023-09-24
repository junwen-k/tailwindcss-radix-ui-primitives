import path from 'path'
import postcss from 'postcss'
import tailwind, { Config } from 'tailwindcss'
import radix from '../src'

export const css = String.raw
export const html = String.raw
export const javascript = String.raw

export function run(input: string, config: Config, plugin = tailwind) {
  const { currentTestName } = expect.getState()

  config.plugins ??= []
  if (!config.plugins.includes(radix)) {
    config.plugins.push(radix)
  }

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}
