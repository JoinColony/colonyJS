module.exports = {
  '**/*.ts?(x)': (filenames) => [
    `eslint --cache --fix ${filenames.join(' ')}`,
  ],
}
