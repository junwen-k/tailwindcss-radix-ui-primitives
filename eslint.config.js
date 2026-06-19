import eslint from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['node_modules/'],
  },
  eslint.configs.recommended,
  prettier,
]
