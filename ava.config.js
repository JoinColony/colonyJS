/* eslint-disable flowtype/require-valid-file-annotation */

export default function factory() {
  return {
    files: ['integration-testing/**/*.test.js'],
    require: ['@babel/register'],
  };
}
