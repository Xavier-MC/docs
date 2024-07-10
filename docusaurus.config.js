const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

module.exports = {
  title: 'XavierMC',
  tagline: '包含XavierMC所有项目的文档',
  url: 'https://docs.xaviermc.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'XavierMC',
  projectName: 'XavierMC Docs',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic', 
      {
        docs: { 
          sidebarPath: require.resolve('./Config/sidebarsXavier.js'), 
          editUrl: 
            'https://github.com/Xavier-MC/docs/edit/main/Xavier/',
        },
        theme: { 
          customCss: require.resolve('./src/css/custom.css'), 
        },
      },
    ],
  ],

  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Xavier',
        path: 'Xavier',
        routeBasePath: 'Xavier',
        sidebarPath: require.resolve('./Config/sidebarsXavier.js'),
        showLastUpdateTime: true,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ISeeYou',
        path: 'ISeeYou',
        routeBasePath: 'ISeeYou',
        sidebarPath: require.resolve('./Config/sidebarsISeeYou.js'),
        showLastUpdateTime: true,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'TaskScheduler',
        path: 'TaskScheduler',
        routeBasePath: 'TaskScheduler',
        sidebarPath: require.resolve('./Config/sidebarsTaskScheduler.js'),
        showLastUpdateTime: true,
      }
    ]
  ],

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    algolia: {
      appId: 'OU9XT8Y9LS',
      apiKey: '85be3e345a78b233fab09190ad4bfec4',
      indexName: 'xaviermc',
      contextualSearch: false,
      externalUrlRegex: 'external\\.com|domain\\.com',
      searchParameters: {},
      searchPagePath: 'search'
    },
    navbar: {
      title: 'XavierMC',
      logo: {
        alt: 'XavierMC',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'XavierSidebar',
          position: 'left',
          label: 'Xavier',
          docsPluginId: 'Xavier'
        },
        {
          type: 'docSidebar',
          sidebarId: 'TaskSchedulerSidebar',
          position: 'left',
          label: 'TaskScheduler',
          docsPluginId: 'TaskScheduler'
        },
        {
          type: 'docSidebar',
          sidebarId: 'ISeeYouSidebar',
          position: 'left',
          label: 'ISeeYou',
          docsPluginId: 'ISeeYou'
        },
        {
          href: 'https://github.com/Xavier-MC',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://qm.qq.com/q/1jf6FlTC7i',
          label: 'QQ群',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '服务器文档',
          items: [
            {
              label: '文档',
              to: 'Xavier/intro',
            },
            {
              label: '状态监控',
              href: 'https://stats.uptimerobot.com/Qxm4yIBXYG'
            }
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'QQ群',
              href: 'https://qm.qq.com/q/1jf6FlTC7i',
            },
            {
              label: 'MineBBS',
              href: 'https://www.minebbs.com/',
            },
            {
              label: 'KLPBBS',
              href: 'https://www.klpbbs.com/',
            }
          ],
        },
        {
          title: '更多',  
          items: [
            {
              label: '服主博客',
              href: 'https://xaviermc.top',
            },
            {
              label: 'XavierMC GitHub',
              href: 'https://github.com/Xavier-MC',
            },
            {
              html: `
                <a href="https://www.vercel.com?utm_source=leavesmc&utm_campaign=oss" target="_blank" rel="noreferrer noopener" aria-label="Powered by Vercel">
                  <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" width="100" height="25" />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XavierMC and Contributors, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
    },
  },
};