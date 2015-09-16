import Ractive from 'ractive';
import Router from 'ractive-route';
import Sidebar from './Sidebar.js';
import { EventAggregator } from 'pubsub';

import './lib/ractive/transitions.es6';
import './lib/ractive/components.es6';
import './lib/ractive/helpers.es6';
import './main.less';

import About from './About.es6';
import Home from './Home.js';

let sidebar = new Sidebar({
  el: '#sidebar'
});

let pubsub = new EventAggregator();
pubsub.subscribe('add', msg => sidebar.add('clicks'));

let router = new Router({
  el: '#main',
  basePath: window.location.pathname, // TODO just use basepath always? Avoids SS coupling
  data() {
    return {
      pubsub: pubsub
    }
  }
});

router.addRoute('/', Home);
router.addRoute('/about', About);

router.dispatch('/', { noHistory: true })
      .watchLinks()
      .watchState();
