const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  entry: './src/index.js',
  mode,
  output: {
    filename: 'colony-js-utils.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'colonyJSAdapterEthers',
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
  externals: {
    ethers: {
      commonjs: 'ethers',
      commonjs2: 'ethers',
      amd: 'ethers',
      root: 'ethers',
    },
  },
};
