var Ractive = require('ractive');

module.exports = Ractive.extend({ // jshint ignore:line
  template: require('./About.html'),
  data: {
    message: 'This is the About page.'
  }
});
