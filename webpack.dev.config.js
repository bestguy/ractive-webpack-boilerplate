'use strict';

/**
 * Development-only webpack settings.
 */
const webpack = require('webpack');
const config = require('./webpack.config');

config.devtool = 'cheap-module-eval-source-map';
config.entry.unshift('webpack-hot-middleware/client');
config.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  })
];

module.exports = config;
