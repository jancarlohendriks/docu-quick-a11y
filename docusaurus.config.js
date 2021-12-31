// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quick Accessibility Guide',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jancarlo', // Usually your GitHub org/user name.
  projectName: 'docu-quick-a-11-y', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
				// docs: {
				// 	sidebarPath: require.resolve('./sidebars.js'),
				// 	routeBasePath: '/'
				// },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jancarlohendriks/docu-quick-a11y/blob/main/',
        },
				blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
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
			// https://docusaurus.io/docs/api/themes/configuration#navbar
      navbar: {
        title: 'Quick Accessibility Guide',
        logo: {
          alt: 'Quick Accessibility Guide Logo',
          src: 'img/logo.svg',
					// href: '/docs/welcome',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'welcome',
          //   position: 'left',
          //   label: 'Welcome',
          // },
					// {
          //   type: 'doc',
          //   position: 'left',
          //   docId: 'checklist',
          //   label: 'Tools',
          // },
          {to: '/docs/principles/basics', label: 'Principles', position: 'left'},
          {to: '/docs/get-started/color-contrast', label: 'Get Started', position: 'left'},
          {to: '/docs/tools/checklist', label: 'Tools', position: 'left'},
          {to: '/docs/library/menu', label: 'Library', position: 'left'},
          // {to: '/docs/tools', label: 'Tools', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Welcome',
          //       to: '/docs/welcome',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quick Accessibility Guide.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
			// colorMode: {
			// 	defaultMode: 'light',
			// 	disableSwitch: false,
			// 	respectPrefersColorScheme: false,
			// 	switchConfig: {
			// 		darkIcon: '🌙',
			// 		darkIconStyle: {
			// 			marginLeft: '2px',
			// 		},
			// 		// Unicode icons such as '\u2600' will work
			// 		// Unicode with 5 chars require brackets: '\u{1F602}'
			// 		lightIcon: '\u{1F602}',
			// 		lightIconStyle: {
			// 			marginLeft: '1px',
			// 		},
			// 	},
			// },
    }),
};

module.exports = config;
