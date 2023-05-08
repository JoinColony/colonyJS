const { resolve } = require('path');

module.exports = {
  '**/*.ts?(x)': (filenames) => [
    `eslint --cache --fix ${filenames.join(' ')}`,
    'tsc -p tsconfig.json --noEmit',
    'npm run build-docs',
    `git add ${resolve(__dirname, 'docs', 'api')}`
  ],
}
