var webpack = require('webpack');
var BASE = __dirname + '/public/scripts/';

module.exports = {
  entry: BASE + 'main.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: 'style-loader!css-loader!autoprefixer-loader' },
      { test: /\.es6/, loader: 'babel-loader' },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.jade$/, loader: 'html!jade-html' },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.html/, loader: 'ractive' }
    ]
  },
  resolve: {
    root: BASE + 'bower_components',
    alias: {
                        pubsub: 'aurelia-event-aggregator',
                       Ractive: 'ractive',
    'ractive-transitions-fade': BASE + 'bower_components/ractive-transitions-fade/dist/ractive-transitions-fade.js',
                  'underscore': 'lodash',
                'webpack-i18n': BASE + 'lib/webpack/webpack-i18n.js'
    }
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery'
   })
  ]
};
