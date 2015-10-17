'use strict';

let config = require('config');
let express = require('express');
let logger = require('morgan');

let app = new express();

// ## Middleware

app.use(logger('dev'));
app.use(express.static(`${__dirname}/public`));

// ## Routes
if (config.env == 'dev') {
  let webpackMiddleware = require('webpack-dev-middleware');
  let webpack = require('webpack');
  let webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig), {}));
}

app.listen(config.port, () => console.log(`Server running on port ${config.port}...`));
