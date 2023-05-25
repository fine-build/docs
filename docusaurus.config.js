// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Steedos Help',
  tagline: 'Open source alterative to Salesforce Platform.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.steedos.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'steedos', // Usually your GitHub org/user name.
  projectName: 'steedos-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
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
            'https://github.com/steedos/steedos-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ If you like Steedos, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/steedos/steedos-platform">GitHub</a> .',
        backgroundColor: '#4D72DA',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
        title: 'Steedos',
        logo: {
          alt: 'Steedos',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/steedos/steedos-platform',
            position: 'right',
            className: 'navbar-social-link navbar-github-logo',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Getting Started',
            items: [
              {
                label: 'Deploy',
                to: '/docs/deploy',
              },
              {
                label: 'User Guide',
                to: '/docs/user',
              },
              {
                label: 'Admin Guide',
                to: '/docs/admin',
              },
            ],
          },
          {
            title: 'Customize Your Org',
            items: [
              {
                label: 'Extend with Click',
                to: '/docs/no-code',
              },
              {
                label: 'Automation You Process',
                to: '/docs/automation',
              },
              {
                label: 'Extend with Code',
                to: '/docs/developer',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/steedos/steedos-platform',
              },
              {
                label: 'Steedos Enterprise',
                href: 'https://www.steedos.com/pricing/platform',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Steedos Inc.`,
      },
      algolia: {
        appId: 'TL0K9Y2YIH',
        apiKey: process.env.ALGOLIA_API_KEY || 'development', // Public API key: it is safe to commit it
        indexName: 'steedos',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
