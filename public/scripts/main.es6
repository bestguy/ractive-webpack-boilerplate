import Ractive from 'ractive';
import Router from 'ractive-route';
import { EventAggregator } from 'pubsub';
import 'ractive-animatecss';

import './lib/ractive/components.es6';
import './lib/ractive/helpers.es6';
import 'ractive-datetime';
import 'ractive-markdown';
import './main.less';

import About from './About.es6';
import Home from './Home.es6';
import MarkupExamples from './MarkupExamples.es6';
import Sidebar from './Sidebar.es6';

let sidebar = new Sidebar({
  el: '#sidebar'
});

let pubsub = new EventAggregator();
pubsub.subscribe('add', msg => sidebar.add('clicks'));

let router = new Router({
  el: '#main',
  basePath: '/',
  data() {
    return {
      pubsub: pubsub
    }
  }
});

router.addRoute('/', Home);
router.addRoute('/about', About);
router.addRoute('/markup', MarkupExamples);

router.dispatch(window.location.pathname, { noHistory: true })
      .watchLinks()
      .watchState();
