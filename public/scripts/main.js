require('./lib/ractive/transitions.js');
require('./lib/ractive/components.js');
require('./lib/ractive/helpers.js');

require('./main.less');

var Router = require('ractive-route');

var app = {
  // Any shared data across routes.
};

var router = new Router({
  el: '#main',
  basePath: window.location.pathname, // TODO just use basepath always? Avoids SS coupling
  data: function() {
    return {
      app: app
    }
  }
});

router.addRoute('/', require('./Home.js'));
router.addRoute('/about', require('./About.js'));

router.dispatch('/', { noHistory: true })
      .watchLinks()
      .watchState();
