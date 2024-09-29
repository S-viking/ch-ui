module.exports = {
  base: '/ch-ui/docs/',
  title: 'Ch UI',
  description: '一个基于 Vue 的 UI 组件库',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/S-viking/ch-ui/' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: ['views/guide/install.md', 'views/guide/get-started.md'],
      },
      {
        title: '组件',
        collapsable: true,
        children: ['views/components/basic/'],
      },
    ],
  },
};