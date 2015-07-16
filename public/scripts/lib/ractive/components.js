var Ractive = require('ractive');

Ractive.components.checkmark = Ractive.extend({
  data: {
    value: false
  },
  template: '<i class="fa fa-{{#if value}}check-circle{{else}}circle-o{{/if}}"></i>',
});
