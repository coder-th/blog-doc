// @ts-check

const { createHead } = require('./config/head');
const { createNav } = require('./config/nav');
const { createSidebar } = require('./config/sidebar');

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/',
  title: 'MiKu前端',
  lang: 'zh-CN',
  description: '记录学习历程',
  head: createHead(),
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  themeConfig: {
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};
