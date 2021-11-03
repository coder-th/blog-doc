/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '工具使用',
      link: '/tools/',
      items: [
        {
          text: 'markdown指南',
          link: '/tools/markdown/',
        },
        {
          text: 'git指南',
          link: '/tools/git/',
        },
      ],
    },
    {
      text: '基础知识',
      link: '/base/',
      items: [
        {
          text: 'html',
          link: '/base/html/',
        },
        {
          text: 'css',
          link: '/base/css/',
        },
        {
          text: 'javascript',
          link: '/base/javascript/',
        },
        {
          text: 'typescript',
          link: '/base/typescript/',
        },
      ],
    },

    {
      text: 'Vue',
      items: [
        {
          text: 'vue基础',
          link: '/vue/base/',
        },
        {
          text: 'vue进阶',
          link: '/vue/advance/',
        },
        {
          text: 'vue源码',
          link: '/vue/source/',
        },
      ],
    },
    {
      text: '算法',
      items: [{ text: '树', link: '/algorithm/树/树的基本概念' }],
    },
    {
      text: 'go',
      items: [{ text: '基础', link: '/go/基础/环境准备' }],
    },
  ];
}
module.exports = {
  createNav,
};
