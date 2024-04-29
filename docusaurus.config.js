const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/xavier-mc/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ISeeYou',
        path: 'ISeeYou',
        routeBasePath: 'ISeeYou',
        sidebarPath: require.resolve('./sidebarsISeeYou.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'TaskScheduler',
        path: 'TaskScheduler',
        routeBasePath: 'TaskScheduler',
        sidebarPath: require.resolve('./sidebarsTaskScheduler.js'),
      }
    ]
  ],  

  themeConfig: {
    navbar: {
      title: 'XavierMC',
      logo: {
        alt: 'XavierMC',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Xavier',
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
          href: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4wSu8MSC3iKO-dtD18tXazBlu4Q4PKxD&authKey=eAN9u8XjNgtNkpxlIKKUtN6Yp9DpEMQzsY7ZcTdUEZX5Lk8X77x7lF2FNa9Uj435&noverify=0&group_code=436392446',
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
              to: 'introduction',
            },
            {
              label:'状态监控',
              href:'https://stats.uptimerobot.com/Qxm4yIBXYG'
            }
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'QQ群',
              href: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4wSu8MSC3iKO-dtD18tXazBlu4Q4PKxD&authKey=eAN9u8XjNgtNkpxlIKKUtN6Yp9DpEMQzsY7ZcTdUEZX5Lk8X77x7lF2FNa9Uj435&noverify=0&group_code=436392446',
            },
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
              label: 'GitHub仓库',
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
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
