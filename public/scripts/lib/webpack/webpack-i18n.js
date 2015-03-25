var i18next = require('i18next');

var init = i18next.init;

i18next.init = function (options, callback) {
  if (!options.customLoad && options.translations) {
    options.customLoad = function (lang, ns, options, loadComplete) {
      if (options.translations[lang]) loadComplete(null, options.translations[lang]);
      else loadComplete('Not found: ' + lang);
    };
  }
  init(options, callback);
};

module.exports = i18next;