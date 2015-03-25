var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/public/scripts/main.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: 'style-loader!css-loader' },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.jade$/, loader: 'html!jade-html' },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.html/, loader: 'html' }
    ]
  },
  resolve: {
    alias: {
                       i18next: __dirname + '/public/scripts/bower_components/i18next/i18next.amd.js',
                        marked: __dirname + '/public/scripts/bower_components/marked/lib/marked.js',
                        moment: __dirname + '/public/scripts/bower_components/moment/moment.js',
                       ractive: __dirname + '/public/scripts/bower_components/ractive/ractive.js',
                       Ractive: __dirname + '/public/scripts/bower_components/ractive/ractive.js',
    'ractive-transitions-fade': __dirname + '/public/scripts/bower_components/ractive-transitions-fade/ractive-transitions-fade.js',
   'ractive-transitions-slide': __dirname + '/public/scripts/bower_components/ractive-transitions-slide/ractive-transitions-slide.js',
                  'underscore': __dirname + '/public/scripts/bower_components/lodash/lodash.js',
                'webpack-i18n': __dirname + '/public/scripts/lib/webpack/webpack-i18n.js',
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery'
   })
  ]
};
