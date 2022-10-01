const sidebar = require("./sidebar");

module.exports = {
  title: '101 FRONT STUDY',
  description: "",
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Github',
        link: 'https://github.com/101front/101-Front-Study'
      }
    ],
    sidebar: sidebar.getSidebar(),
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
