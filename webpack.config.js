const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve(__dirname, './src/main')
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: 'style!css!postcss' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      { test: /\.less/, loader: 'style!css!postcss!less-loader' },
      { test: /\.jade$/, loader: 'ractive!jade-html' },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.html/, loader: 'ractive' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
      ]
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    alias: {
      pubsub: 'aurelia-event-aggregator',
      Ractive: 'ractive'
    }
  }
};
