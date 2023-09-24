import plugin from 'tailwindcss/plugin'

const radixBooleanAttributes = [
  'active',
  'disabled',
  'highlighted',
  'invalid',
  'max',
  'placeholder',
  'valid',
  'value',
] as const

const radixKeyValueAttributes = {
  align: ['center', 'end', 'start'],
  motion: ['from-end', 'from-start', 'to-end', 'to-start'],
  orientation: ['horizontal', 'vertical'],
  side: ['bottom', 'left', 'right', 'top'],
  state: [
    'active',
    'checked',
    'closed',
    'complete',
    'delayed-open',
    'hidden',
    'inactive',
    'indeterminate',
    'instant-open',
    'loading',
    'off',
    'on',
    'open',
    'unchecked',
    'visible',
  ],
  swipe: ['cancel', 'end', 'move', 'start'],
  'swipe-direction': ['down', 'left', 'right', 'up'],
} as const

const radixCSSVariables = [
  'radix-accordion-content-width',
  'radix-accordion-collapsible-width',
  'radix-context-menu-trigger-width',
  'radix-dropdown-menu-trigger-width',
  'radix-hover-card-trigger-width',
  'radix-menubar-trigger-width',
  'radix-navigation-menu-viewport-width',
  'radix-popover-trigger-width',
  'radix-select-trigger-width',
  'radix-tooltip-trigger-width',
  'radix-context-menu-content-available-width',
  'radix-dropdown-menu-content-available-width',
  'radix-hover-card-content-available-width',
  'radix-menubar-content-available-width',
  'radix-popover-content-available-width',
  'radix-select-content-available-width',
  'radix-tooltip-content-available-width',
  'radix-accordion-content-height',
  'radix-accordion-collapsible-height',
  'radix-context-menu-trigger-height',
  'radix-dropdown-menu-trigger-height',
  'radix-hover-card-trigger-height',
  'radix-menubar-trigger-height',
  'radix-navigation-menu-viewport-height',
  'radix-popover-trigger-height',
  'radix-select-trigger-height',
  'radix-tooltip-trigger-height',
  'radix-context-menu-content-available-height',
  'radix-dropdown-menu-content-available-height',
  'radix-hover-card-content-available-height',
  'radix-menubar-content-available-height',
  'radix-popover-content-available-height',
  'radix-select-content-available-height',
  'radix-tooltip-content-available-height',
  'radix-context-menu-content-transform-origin',
  'radix-dropdown-menu-content-transform-origin',
  'radix-hover-card-content-transform-origin',
  'radix-menubar-content-transform-origin',
  'radix-popover-content-transform-origin',
  'radix-select-content-transform-origin',
  'radix-tooltip-content-transform-origin',
  'radix-toast-swipe-move-x',
  'radix-toast-swipe-move-y',
  'radix-toast-swipe-end-x',
  'radix-toast-swipe-end-y',
] as const

const matchRadixUtilities = (
  properties: Record<string, string>,
  filter: (name: string) => boolean
) =>
  Object.entries(properties)
    .filter(([name]) => filter(name))
    .reduce(
      (obj, [name, variable]) => ({
        ...obj,
        [`radix-${name}`]: variable,
      }),
      {}
    )

interface Options {
  themeKey?: string
}

export = plugin.withOptions<Options>(
  () => function radix() {},
  ({ themeKey = 'radix' } = {}) => ({
    theme: {
      extend: {
        data: {
          ...radixBooleanAttributes.reduce(
            (attributes, name) => ({
              ...attributes,
              [name]: name,
            }),
            {}
          ),
          ...Object.entries(radixKeyValueAttributes).reduce(
            (attributes, [name, values]) => ({
              ...attributes,
              ...values.reduce(
                (attrs, value) => ({
                  ...attrs,
                  [`${name}-${value}`]: `${name}="${value}"`,
                }),
                {}
              ),
            }),
            {}
          ),
        },
        spacing: ({ theme }) =>
          matchRadixUtilities(theme(themeKey), (name) =>
            ['-width', '-height'].some((suffix) => name.endsWith(suffix))
          ),
        transformOrigin: ({ theme }) =>
          matchRadixUtilities(theme(themeKey), (name) => name.endsWith('-transform-origin')),
        translate: ({ theme }) =>
          matchRadixUtilities(theme(themeKey), (name) =>
            ['-x', '-y'].some((suffix) => name.endsWith(suffix))
          ),
        [themeKey]: radixCSSVariables.reduce(
          (obj, name) => ({
            ...obj,
            [name.substring('radix-'.length)]: `var(--${name})`,
          }),
          {}
        ),
      },
    },
  })
)
