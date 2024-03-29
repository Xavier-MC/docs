// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XavierMC',
  tagline: '包含XavierMC所有项目的文档',
  url: 'https://docs.xaviermc.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XavierMC', // Usually your GitHub org/user name.
  projectName: 'XavierMC Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xavier-mc/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'XavierMC',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Xavier/intro',
            position: 'left',
            label: '服务器',
          },
          {
            type: 'doc',
            docId: 'TaskScheduler/intro',
            position: 'left',
            label: 'TaskSchduler',
          },
          {
            href: 'https://github.com/Xavier-MC',
            label: 'GitHub',
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
                label: '服务器文档',
                to: '/docs/Xavier/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ群',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4wSu8MSC3iKO-dtD18tXazBlu4Q4PKxD&authKey=eAN9u8XjNgtNkpxlIKKUtN6Yp9DpEMQzsY7ZcTdUEZX5Lk8X77x7lF2FNa9Uj435&noverify=0&group_code=436392446',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

