import Ractive from 'ractive';
import template from './About.html';

/**
 * ES6 module
 */
export default Ractive.extend({
  template,
  data() {
    return {
      message: 'This is the About page.'
    };
  },
  oninit() {
    const { pubsub } = this.get();
    this.on('increment', () => pubsub.publish('add'));
  }
});
