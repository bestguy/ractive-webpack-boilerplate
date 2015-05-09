var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/public/scripts/main.js',
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
      { test: /\.html/, loader: 'html' }
    ]
  },
  resolve: {
    alias: {
                 'animate.css': __dirname + '/public/scripts/bower_components/animate.css/animate.css',
                       i18next: __dirname + '/public/scripts/bower_components/i18next/i18next.amd.js',
                        marked: __dirname + '/public/scripts/bower_components/marked/lib/marked.js',
                        moment: __dirname + '/public/scripts/bower_components/moment/moment.js',
                       ractive: __dirname + '/public/scripts/bower_components/ractive/ractive.js',
                       Ractive: __dirname + '/public/scripts/bower_components/ractive/ractive.js',
               'ractive-route': __dirname + '/public/scripts/bower_components/ractive-route/ractive-route.js',
    'ractive-transitions-fade': __dirname + '/public/scripts/bower_components/ractive-transitions-fade/dist/ractive-transitions-fade.js',
   'ractive-transitions-slide': __dirname + '/public/scripts/bower_components/ractive-transitions-slide/dist/ractive-transitions-slide.js',
                  'underscore': __dirname + '/public/scripts/bower_components/lodash/lodash.js',
                'webpack-i18n': __dirname + '/public/scripts/lib/webpack/webpack-i18n.js',
                       'xhttp': __dirname + '/public/scripts/bower_components/xhttp/dist/xhttp.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery'
   })
  ]
};
