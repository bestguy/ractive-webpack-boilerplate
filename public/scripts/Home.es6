import Ractive from 'ractive';

export default Ractive.extend({ // jshint ignore:line
  template: require('./Home.html'),
  data() {
    message: 'This is the home page.'
  },
  oninit() {
    let pubsub = this.get('pubsub');
    this.on('increment', () => pubsub.publish('add'));
  }
});
