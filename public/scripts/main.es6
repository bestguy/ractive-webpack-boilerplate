let Ractive = require('ractive');
require('./lib/ractive/transitions.js');
require('./lib/ractive/components.js');
require('./lib/ractive/helpers.js');

require('./main.less');

let EventAggregator = require('pubsub').EventAggregator;
let pubsub = new EventAggregator();
let Router = require('ractive-route');
let Sidebar = require('./Sidebar.js');

let sidebar = new Sidebar({
  el: '#sidebar'
});

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

router.addRoute('/', require('./Home.js'));
router.addRoute('/about', require('./About.es6'));

router.dispatch('/', { noHistory: true })
      .watchLinks()
      .watchState();
