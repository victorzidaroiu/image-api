module.exports = {
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': ['error', { semi: false, singleQuote: true, printWidth: 120 }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
  },
  ignorePatterns: ['built', 'node_modules'],
}
