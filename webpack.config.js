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
    alias: {
                 'animate.css': BASE + 'bower_components/animate.css/animate.css',
                       i18next: BASE + 'bower_components/i18next/i18next.amd.js',
                        marked: BASE + 'bower_components/marked/lib/marked.js',
                        moment: BASE + 'bower_components/moment/moment.js',
                        pubsub: BASE + 'bower_components/aurelia-event-aggregator/dist/commonjs/index.js',
                       ractive: BASE + 'bower_components/ractive/ractive.js',
                       Ractive: BASE + 'bower_components/ractive/ractive.js',
               'ractive-route': BASE + 'bower_components/ractive-route/ractive-route.js',
    'ractive-transitions-fade': BASE + 'bower_components/ractive-transitions-fade/dist/ractive-transitions-fade.js',
   'ractive-transitions-slide': BASE + 'bower_components/ractive-transitions-slide/dist/ractive-transitions-slide.js',
                  'underscore': BASE + 'bower_components/lodash/lodash.js',
                'webpack-i18n': BASE + 'lib/webpack/webpack-i18n.js',
                       'xhttp': BASE + 'bower_components/xhttp/dist/xhttp.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery'
   })
  ]
};
