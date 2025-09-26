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
          editUrl: ({versionDocsDirPath, docPath}) =>
              `https://github.com/Xavier-MC/docs/edit/main/${docPath}`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
        },
        theme: { 
          customCss: require.resolve('./src/css/custom.css'), 
        },
      },
    ],
  ],

  plugins: [
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
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'ca-pub-3111013872558395',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Xavier',
        path: 'wiki/Xavier',
        routeBasePath: 'wiki/Xavier',
        sidebarPath: require.resolve('./Config/sidebarsXavier.js'),
        showLastUpdateTime: true,
        editUrl: 'https://github.com/Xavier-MC/docs/edit/main/',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'XavierOptimized',
        path: 'wiki/XavierOptimized',
        routeBasePath: 'wiki/XavierOptimized',
        sidebarPath: require.resolve('./Config/sidebarsXavierOptimized.js'),
        showLastUpdateTime: true,
        editUrl: 'https://github.com/Xavier-MC/docs/edit/main/',
      }
    ],

    'docusaurus-plugin-zooming',
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
          label: 'Xavier 服务器',
          docsPluginId: 'Xavier'
        },
        {
          type: 'docSidebar',
          sidebarId: 'XavierOptimizedSidebar',
          position: 'left',
          label: 'XavierOptimized',
          docsPluginId: 'XavierOptimized'
        },
        {
          href: 'https://github.com/Xavier-MC',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://qm.qq.com/q/alY4q3bYHK',
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
              to: 'wiki/Xavier/intro',
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
              label: '个人博客',
              href: 'https://xaviermc.top',
            },
            {
              label: 'GitHub',
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