import Ractive from 'ractive';

Ractive.components.checkmark = Ractive.extend({
  data: {
    value: false
  },
  template: '<i class="fa fa-{{#if value}}check-circle{{else}}circle-o{{/if}}"></i>',
});

Ractive.components.Icon = Ractive.extend({
  data: {
    class: '',
    name: '',
    size: false
  },
  template: '<i class="fa fa-{{name}} {{#size}}fa-{{size}}{{/size}} {{class}}" />',
});
