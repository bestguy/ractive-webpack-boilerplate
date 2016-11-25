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
      { test: /\.css/, loader: 'style-loader!css-loader!postcss-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      { test: /\.less/, loader: 'style-loader!css-loader!postcss-loader!less-loader' },
      { test: /\.jade$/, loader: 'ractive-loader!jade-html-loader' },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.html/, loader: 'ractive-loader' }
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
