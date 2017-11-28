const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
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
