const { resolve } = require('path');

module.exports = {
  parserOptions: {
    project: resolve(__dirname, '..', '..', 'tsconfig.base.json'),
  },
  rules: {
    camelcase: [
      'error',
      {
        allow: ['.+_EventFilter$', '.+_EventObject$', '.+__factory'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['examples/node/*.ts', 'examples/browser/src/*.ts'],
      },
    ],
    'tsdoc/syntax': 'error',
  },
  overrides: [
    {
      files: ['**/contracts/**/*.ts'],
      rules: {
        'eslint-comments/disable-enable-pair': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
      },
    },
    {
      files: ['tsup.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir: '../..',
          },
        ],
      },
    },
  ],
};
