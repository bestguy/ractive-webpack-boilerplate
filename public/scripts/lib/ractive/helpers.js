var Ractive = require('ractive');
var helpers = Ractive.defaults.data;

/*
 * Formats a date using the specified format.
 */
var moment = require('moment');

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
var marked = require('marked');
marked.setOptions({
  breaks: true,
  sanitize: true,
  smartypants: true
});

var test = /\:[a-z0-9_\-\+]+\:/g;

function emoji(someString) {
  return someString.replace(test, function (match) {
    var name = String(match).slice(1, -1);
    return '<i class="' + name + '"></i>';
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

module.exports = {
  datetime: datetime,
  markdown: markdown
}


var i18next = require('webpack-i18n');
i18next.init({
  fallbackLng: 'en',
  interpolationPrefix: '{{',
  interpolationSuffix: '}}',
  translations: require('../../locales/translations.js')
});

helpers.t = i18next.t;

