import Ractive from 'ractive';
let helpers = Ractive.defaults.data;

// ## Markdown

import renderer from 'markdown-it';
let md = renderer({
  breaks: true,
  linkify: true,
  typographer: true
});

import light from 'markdown-it-emoji';
md.use(light);

function markdown(text) {
  return text ? md.render(text) : text;
}

helpers.markdown = markdown;
helpers.md = markdown;

// ## I18N

import i18next from 'i18next';
import resources from 'i18next-resource-store-loader!../../locales/index.js';

i18next.init({
  resources: resources,
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



