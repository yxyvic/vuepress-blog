const utils = require("./utils");

module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    // "/en": {
    //   lang: "en-US", // 将会被设置为 <html> 的 lang 属性
    //   title: "VuePress",
    //   description: "Vue-powered Static Site Generator"
    // },
    "/": {
      lang: "zh-CN",
      title: "VuePress-blog",
      description: "VuePressBlog "
    }
  },
  base: '/vuepress-blog/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/index/" },
      {
        text: "blog",
        link: "/blog/"
        // items: [
        //   {
        //     text: "介绍",
        //     link: "/blog/"
        //   },
        //   {
        //     text: "js",
        //     link: "/blog/javascript/"
        //   },
        //   {
        //     text: "html",
        //     link: "/blog/html/"
        //   }
        // ]
      },
      {
        text: "文档1",
        items: [
          { text: 1.0, link: "/doc1/" },
          { text: 1.1, link: "/doc1/doc1-first" }
        ]
      },
      {
        text: "项目",
        link: "/project/"
      },
      { text: "扩展", link: "https://baidu.com" }
    ],
    // sidebar: 'auto',
    sidebar: {
      //设置对应路由页面显示的侧边栏内容,用于nva的blog无下拉列表，全部内容显示侧边栏
      "/index/": [
        {
          // 侧边栏分组添加title
          title: "首页",
          collapsable: false,
          children: ["/index/", "/index/about"]
        }
      ],
      "/blog/": [
        {
          title: "js",
          collapsable: false,
          children: [
            "/blog/javascript/",
            "/blog/javascript/js1",
            "/blog/javascript/js2"
          ]
        },
        {
          title: "html",
          collapsable: false,
          children: ["/blog/html/", "/blog/html/html1", "/blog/html/html2"]
        },
        {
          title: "blog",
          collapsable: false,
          children: ["/blog/"] //需放到最后一个，否则上面路由也会解析冲突
        }
      ],
      "/doc1/": [
        {
          title: "doc",
          collapsable: false,
          children: ["/doc1/", "/doc1/doc1-first"]
        }
      ]
    }
    // sidebar: { //设置对应路由页面显示的侧边栏内容,第二种写法，配合nav下拉列表
    //     '/index/': [{
    //         title: '首页',
    //         collapsable: false,
    //         children: [
    //             '/index/', '/index/about'
    //         ]
    //     },
    //     ],
    //     '/blog/javascript/': [
    //         {
    //             title: 'javascript',
    //             collapsable: false,
    //             children: [
    //                 '',
    //                 'js1',
    //                 'js2',
    //             ],
    //         }
    //     ],
    //     '/blog/html/': [
    //         '',
    //         'html1',
    //         'html2'
    //     ],
    //     '/blog/': [
    //         '',
    //     ],
    //     '/doc1/': [
    //         {
    //             title: 'doc',
    //             collapsable: false,
    //             children: ['/doc1/', '/doc1/doc1-first'],
    //         }
    //     ]
    // },
    // sidebar: utils.inferSiderbars(),
    // docsDir: "docs",
    // sidebarDepth: 3,
  }
};
