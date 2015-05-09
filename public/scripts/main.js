var Ractive = require('ractive');
require('./lib/ractive/transitions.js');
require('./lib/ractive/components.js');
require('./lib/ractive/helpers.js');

require('./main.css');

var EventAggregator = require('pubsub').EventAggregator;
var pubsub = new EventAggregator();
var Router = require('ractive-route');
var Sidebar = require('./Sidebar.js');

var sidebar = new Sidebar({
  el: '#sidebar'
});

pubsub.subscribe('add', function(msg) {
  sidebar.add('clicks');
});

var router = new Router({
  el: '#main',
  basePath: window.location.pathname, // TODO just use basepath always? Avoids SS coupling
  data: function() {
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
