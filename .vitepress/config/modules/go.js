const baseUrl = '/go';
const GoConfig = {
  text: 'go基础',
  children: [
    {
      text: '环境准备',
      link: baseUrl + '/基础/环境准备',
    },
    {
      text: '变量',
      link: baseUrl + '/基础/变量',
    },
    {
      text: '基本类型',
      link: baseUrl + '/基础/基本类型',
    },
    {
      text: '数组',
      link: baseUrl + '/基础/数组',
    },
    { text: '切片', link: baseUrl + '/基础/切片' },
    { text: '指针', link: baseUrl + '/基础/指针' },
    { text: 'Map', link: baseUrl + '/基础/map' },
    { text: '流程控制', link: baseUrl + '/基础/流程控制' },
    { text: '函数', link: baseUrl + '/基础/函数' },
    { text: '结构体', link: baseUrl + '/基础/结构体' },
    { text: '结构体的方法与继承', link: baseUrl + '/基础/结构体的方法与继承' },
    { text: '接口', link: baseUrl + '/基础/接口' },
  ],
};

module.exports = GoConfig;
