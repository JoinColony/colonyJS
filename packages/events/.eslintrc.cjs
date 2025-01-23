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
  },
  overrides: [
    {
      files: ['**/contracts/**/*.ts'],
      rules: {
        'eslint-comments/disable-enable-pair': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
      },
    },
  ],
};
