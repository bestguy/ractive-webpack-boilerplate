import Ractive from 'ractive';
const helpers = Ractive.defaults.data;

import { datetime } from 'ractive-datetime';
import { md } from 'ractive-markdown';

helpers.datetime = datetime;
helpers.md = md;

// ## I18N

import i18next from 'i18next';
import resources from 'i18next-resource-store-loader!../../locales/index.js';

i18next.init({
  resources,
  fallbackLng: 'en',
  interpolationPrefix: '{{',
  interpolationSuffix: '}}'
}, () => {
  /**
   * Translation helper, embeds translated string and allows passing embeded params.
   * @param {String} key Translation string key.
   * @param {String} ...params Optional params
   * @returns {String} Translated string.
   */
  helpers.t = (key, ...params) => i18next.t(key, params);
});
