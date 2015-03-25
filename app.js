var config = require('config');
var express = require('express');
var logger = require('morgan');

var app = new express();

// ## Middleware

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// ## Routes
if (config.env == 'dev') {
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig), {}));
}

app.listen(config.port, function () {
  console.log('Server running...');
});