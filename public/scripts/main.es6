import Ractive from 'ractive';
import Router from 'ractive-route';
import { EventAggregator } from 'pubsub';
import 'ractive-animatecss';

import './lib/ractive/components.es6';
import './lib/ractive/helpers.es6';
import 'ractive-datetime';
import 'ractive-markdown';
import './main.less';

Ractive.DEBUG = /unminified/.test(() => { /* unminified */ });

import About from './About.es6';
import Home from './Home.es6';
import MarkupExamples from './MarkupExamples.es6';
import Sidebar from './Sidebar.es6';

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
