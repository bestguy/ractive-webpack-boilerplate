import Ractive from 'ractive';
import template from './Home.html';

export default Ractive.extend({ // jshint ignore:line
  template,
  data() {
    return {
      message: 'This is the home page.'
    };
  },
  oninit() {
    const { pubsub } = this.get();
    this.on('increment', () => pubsub.publish('add'));
  }
});
