let Ractive = require('ractive');

module.exports = Ractive.extend({
  template: require('./About.html'),
  data() {
    return {
      message: 'This is the About page.'
    }
  },
  oninit() {
    let { pubsub } = this.get();
    this.on('increment', () => pubsub.publish('add'));
  }
});
