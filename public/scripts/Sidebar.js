var Ractive = require('ractive');

module.exports = Ractive.extend({
  template: require('./Sidebar.html'),
  data: function() {
    return {
      clicks: 0
    }
  }
});
