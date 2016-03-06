import Ractive from 'ractive';

export default Ractive.extend({
  template: require('./MarkupExamples.jade'),
  data() {
    return {
      message: `This page demos using Jade for Ractive templates and markdown rendering via mustache helpers.`,
      markdown: '*Hello* __World!__ :-)'
    }
  }
});
