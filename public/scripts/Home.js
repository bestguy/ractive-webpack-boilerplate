var Ractive = require('ractive');

module.exports = Ractive.extend({ // jshint ignore:line
  template: require('./Home.html'),
  data: {
    message: 'This is the home page.'
  },
  oninit: function() {
    var pubsub = this.get('pubsub');
    this.on('increment', function() {
      pubsub.publish('add');
    })
  }
});
