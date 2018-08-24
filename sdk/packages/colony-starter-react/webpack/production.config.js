const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const base = require('../webpack.config.js')

module.exports = merge(base, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                modules: true,
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            },
          ]
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'index.min.css' }),
  ],
})
