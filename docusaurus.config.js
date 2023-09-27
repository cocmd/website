// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const CURRENT_STABLE_VERSION = 'v1.2.3.4';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CoCMD',
  tagline: 'community powered cmd shortcuts and automations',
  favicon: 'img/coding_color.png',

  // Set the production url of your site here
  url: 'https://cocmd.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cocmd', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  customFields: {
    CURRENT_STABLE_VERSION,
    LINUX_X11_APP_IMAGE_DOWNLOAD_URL:
      "https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-X11.AppImage",
    LINUX_X11_DEB_DOWNLOAD_URL:
      "https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/cocmd-debian-x11-amd64.deb",
    LINUX_WAYLAND_DEB_DOWNLOAD_URL:
      "https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/cocmd-debian-wayland-amd64.deb",
    MAC_INTEL_DOWNLOAD_URL:
      "https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Mac-Intel.zip",
    MAC_M1_DOWNLOAD_URL:
      "https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Mac-M1.zip",
    WIN_INSTALLER_DOWNLOAD_URL:
      "https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Win-Installer-x86_64.exe",
    WIN_PORTABLE_DOWNLOAD_URL:
      "https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Win-Portable-x86_64.zip",
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        disableSwitch: true,
        
      },
      navbar: {
        title: 'CoCMD',
        logo: {
          alt: 'My Site Logo',
          src: 'img/coding.png',
        },
        items: [
          {
            to: '/install',
            sidebarId: 'installSidebar',
            position: 'left',
            label: 'Install',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cocmd/cocmd',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
