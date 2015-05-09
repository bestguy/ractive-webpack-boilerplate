var Ractive = require('ractive');

module.exports = Ractive.extend({ // jshint ignore:line
  template: require('./Home.html'),
  data: {
    message: 'This is the home page.'
  }
});
