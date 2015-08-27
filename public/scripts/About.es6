import Ractive from 'ractive';

/**
 * ES6 module
 */
export default Ractive.extend({
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
