import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The WHY Loop',
  tagline: 'From goals to grounded actions — one WHY at a time',
  url: 'https://mug-n-ai.github.io', 
  baseUrl: '/',              

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  organizationName: 'mug-n-ai', // Usually your GitHub org/user name.
  projectName: 'the-why-loop', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          path: '../docs', // usa la tua cartella esistente
          routeBasePath: '/', // serve i contenuti come homepage
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'The WHY Loop',
      logo: {
        alt: 'The WHY Loop Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Method',
          to: '/method',
          activeBasePath: '/method',
          position: 'left',
        },                    {
          label: 'Why it works ',
          to: '/power',
          position: 'left',
          activeBasePath: '/method',
            },

        {
          label: 'Why Loop in Context',
          to: '/context',
          activeBasePath: '/context',
          position: 'left',
        },
        {
          label: 'Case Studies',
          to: '/cases',
          activeBasePath: '/cases',
          position: 'left',
        },
        {
          href: 'https://github.com/mug-n-ai/The-WHY-loop',
          label: 'GitHub',
          position: 'right',
        },
      ],


    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Method Details',
              to: '/method',
            },
            {
              label: 'Why it works ',
              to: '/power',
            },
            {
              label: 'WHY Loop in Context',
              to: '/context',
            },
            {
              label: 'Case Studies',
              to: '/cases',
            },
          ],
        },
        {
          title: 'Author',
          items: [
            {
              label: 'Lorenzo Mugnai',
              href: 'https://www.lorenzomugnai.com',
            },
          ],
        },
      ],

    copyright: `© ${new Date().getFullYear()} Lorenzo Mugnai.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
