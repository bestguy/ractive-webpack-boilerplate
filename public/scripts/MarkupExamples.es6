import Ractive from 'ractive';
import template from './MarkupExamples.jade';

export default Ractive.extend({
  template,
  data() {
    return {
      message: `This page demos using Jade for Ractive templates and markdown rendering
                via mustache helpers.`,
      markdown: '*Hello* __World!__ :-)'
    };
  }
});
