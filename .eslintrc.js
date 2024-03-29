/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/strict',
  ],
  ignorePatterns: ['.eslintrc.js', 'node_modules/', 'dist/', 'spec/', 'public/'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'check-file'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    'dot-notation': 'off',
    'object-curly-spacing': ['error', 'always'],
    'check-file/no-index': 'error',
    'check-file/filename-naming-convention': ['error', {
      '**/*.{jsx,tsx}': 'KEBAB_CASE',
      '**/*.{js,ts}': 'KEBAB_CASE'
    }, {
      'ignoreMiddleExtensions': true,
    }],
    'check-file/folder-naming-convention': ['error', {
      '**/*': 'KEBAB_CASE'
    }]
  }
};
