module.exports = {
  '**/*.ts?(x)': (filenames) => [
    `eslint --cache --fix ${filenames.join(' ')}`,
    'tsc -p tsconfig.json --noEmit',
  ],
}
