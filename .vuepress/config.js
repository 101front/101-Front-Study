const sidebar = require("./sidebar");

module.exports = {
  title: '101 FRONT STUDY',
  description: "",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/images/101-study.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/101-study.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/101-study.png"}],
    ['link', { rel: "manifest", href: "/images/101-study.png"}],
    ['link', { rel: "mask-icon", href: "/images/101-study.png", color: "#ffffff"}],
    ['link', { rel: "shortcut icon", href: "/images/101-study.png"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    smoothScroll: true,
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
