const { resolve } = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: resolve(__dirname, './tsconfig.base.json'),
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@colony/eslint-config-colony',
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-dupe-class-members': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
