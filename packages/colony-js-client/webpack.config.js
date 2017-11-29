const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'colony-js-client.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'colonyJSClient',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
