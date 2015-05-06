var Ractive = require('ractive');

require('./lib/ractive/transitions.js');
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
