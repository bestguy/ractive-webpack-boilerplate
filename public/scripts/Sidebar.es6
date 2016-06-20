import Ractive from 'ractive';
import template from './Sidebar.html';

export default Ractive.extend({
  template,
  data() {
    return {
      clicks: 0
    };
  }
});
