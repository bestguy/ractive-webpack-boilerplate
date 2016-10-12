import Ractive from 'ractive';
import Router from 'ractive-route';
import { EventAggregator } from 'pubsub';
import 'ractive-animatecss';

import './lib/ractive/components.js';
import './lib/ractive/helpers.js';
import 'ractive-datetime';
import 'ractive-markdown';
import './main.less';

Ractive.DEBUG = /unminified/.test(() => { /* unminified */ });

import About from './About.js';
import Home from './Home.js';
import MarkupExamples from './MarkupExamples.js';
import Sidebar from './Sidebar.js';

const sidebar = new Sidebar({
  el: '#sidebar'
});

const pubsub = new EventAggregator();
pubsub.subscribe('add', () => sidebar.add('clicks'));

const router = new Router({
  el: '#main',
  basePath: '/',
  data() {
    return {
      pubsub
    };
  }
});

router.addRoute('/', Home);
router.addRoute('/about', About);
router.addRoute('/markup', MarkupExamples);

router.dispatch(window.location.pathname, { noHistory: true })
      .watchLinks()
      .watchState();

if (module.hot) {
  module.hot.accept();
}
