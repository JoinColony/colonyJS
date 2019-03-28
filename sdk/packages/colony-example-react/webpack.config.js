const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'web',
  entry: {
    main: ['babel-polyfill', path.join(__dirname, '/src/client/index.jsx')],
  },
  output: {
    filename: 'index.min.js',
    path: path.join(__dirname, '/public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: 'presets[]=@babel/env,presets[]=@babel/react,presets[]=@babel/stage-2',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
