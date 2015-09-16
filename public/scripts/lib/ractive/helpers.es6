import Ractive from 'ractive';
let helpers = Ractive.defaults.data;

/*
 * Formats a date using the specified format.
 */
import moment from 'moment';

function datetime(date, format) {
  return moment(date).format(format);
}

helpers.datetime = datetime;


function fromNow(date) {
  return moment(date).fromNow();
}

helpers.fromNow = fromNow;

function sameDay(a, b) {
  return a && b && a.getTime() == b.getTime();
}
helpers.sameDay = sameDay;

/*
 * Returns localized weekday name
 */
function weekday(day) {
  return moment().isoWeekday(parseInt(day));
}

helpers.weekday = weekday;

/*
 * Formats a date using the specified format.
 */
import marked from 'marked';
marked.setOptions({
  breaks: true,
  sanitize: true,
  smartypants: true
});

let test = /\:[a-z0-9_\-\+]+\:/g;

function emoji(someString) {
  return someString.replace(test, function (match) {
    var name = String(match).slice(1, -1);
    return `<i class="${name}"></i>`;
  });
}

function markdown(text) {
  if (text) {
    text = marked(text);
    text = emoji(text); // TODO size as option
  }

  return text;
}

helpers.markdown = markdown;
helpers.md = markdown;

import i18next from 'webpack-i18n';
i18next.init({
  fallbackLng: 'en',
  interpolationPrefix: '{{',
  interpolationSuffix: '}}',
  translations: require('../../locales/translations.js')
});

helpers.t = (key, ...params) => i18next.t(key, params);

