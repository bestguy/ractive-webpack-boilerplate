var Ractive = require('ractive');
var _ = require('underscore');
require('ractive-transitions-fade');
require('ractive-transitions-slide');
require('./lib/ractive/components.js');
require('./lib/ractive/helpers.js');

require('./main.less');

var app = new Ractive({ // jshint ignore:line
  magic: true,
  el: 'body',
  template: require('./main.html'),
  data: {
    message: 'Hello World'
  }
});
