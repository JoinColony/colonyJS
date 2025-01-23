const { resolve } = require('path');

module.exports = {
  parserOptions: {
    project: resolve(__dirname, '..', '..', 'tsconfig.base.json'),
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.ts'],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/contracts/**/*.ts'],
      rules: {
        'eslint-comments/disable-enable-pair': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
      },
    },
  ],
};
