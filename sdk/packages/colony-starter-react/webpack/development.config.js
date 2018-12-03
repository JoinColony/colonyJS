const path = require('path')
const merge = require('webpack-merge')
const base = require('../webpack.config.js')

module.exports = merge(base, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true,
            }
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
          }
        ]
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: true,
  },
})
