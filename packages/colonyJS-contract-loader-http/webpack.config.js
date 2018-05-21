const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  entry: './src/index.js',
  mode,
  output: {
    filename: 'colonyJS-contract-loader-http.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'colonyJSContractLoaderHttp',
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
