'use strict';

const config = require('config');
const express = require('express');
const logger = require('morgan');

const app = new express();

// ## Middleware

app.use(logger('dev'));
app.use(express.static(`${__dirname}/public`));

// ## Routes
if (config.env === 'dev') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.dev.config.js');
  const DashboardPlugin = require('webpack-dashboard/plugin');

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);
  compiler.apply(new DashboardPlugin());

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}

app.listen(config.port, () => console.log(`Server running on port ${config.port}...`));
