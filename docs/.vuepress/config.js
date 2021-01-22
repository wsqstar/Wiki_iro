module.exports = {
  head: [
    ['link', { rel: 'icon', href: `/img/novel.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#505050' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/img/novel.png` }],
    ['link', { rel: 'mask-icon', href: '/img/novel.png', color: '#505050' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/novel.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#505050' }]
  ],
  title: '「iro」主题',
  locales: {
    "/": {
      lang: "zh-CN",
      description: "主题版本更新 群青 Ultramarine 现已发布",
    },
  },
  themeConfig: {
    logo: '/img/logo.png',
    nextLinks: true,
    prevLinks: true,
    repo: 'mirai-mamori/Sakurairo',
    docsRepo: "Fuukei/Wiki_iro",
    docsDir: "docs",
    docsBranch: 'docs',
    editLinks: true,
    smoothScroll: true,
    sidebarDepth: 2,

    locales: {
      "/": {
        label: "简体中文",
        lastUpdated: "上次更新",
        editLinkText: "帮助改善此页面",
        nav: [
          { text: '主页', link: '/' },
          { text: '开始使用', link: '/guide/' },
          { text: '关于', link: '/about' },
          { text: '演示站点', link: 'https://demo.iro.tw/'},
        ],
        sidebar: {
          "/": [
            "about.html",
            "guide/",
            "guide/about",
            "guide/feedback",
          ],
        },
      },
    },
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/last-updated', true],
    ['@vuepress/nprogress', true],
    ["@vuepress/active-header-links", {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ["@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "文档更新啦～",
            buttonText: "快点我刷新！",
          },
        },
      },
    ],
  ],
}
