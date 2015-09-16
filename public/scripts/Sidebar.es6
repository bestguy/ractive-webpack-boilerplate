import Ractive from 'ractive';

export default Ractive.extend({
  template: require('./Sidebar.html'),
  data() {
    return {
      clicks: 0
    }
  }
});
