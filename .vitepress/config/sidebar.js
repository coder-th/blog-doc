const MdConfig = require('./modules/markdown');
const GitConfig = require('./modules/git');
const HtmlConfig = require('./modules/html');
const CssConfig = require('./modules/css');
const JsConfig = require('./modules/js');
const TsConfig = require('./modules/ts');
const { VueBaseConfig } = require('./modules/vue');
function createSidebar() {
  return {
    '/tools/': [MdConfig, GitConfig],
    '/base/': [HtmlConfig, CssConfig, JsConfig, TsConfig],
    '/vue/': [VueBaseConfig],
  };
}
module.exports = {
  createSidebar,
};
