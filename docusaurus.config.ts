import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { PluginOptions } from '@easyops-cn/docusaurus-search-local';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Source2 Wiki',
  tagline: 'A community driven documentation for everything Source2.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://source2wiki.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Source2Wiki', // Usually your GitHub org/user name.
  projectName: 'source2wiki.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // Language settings
        language: ["en"],

        // What to index
        indexDocs: true,
        indexBlog: false, // You have blog disabled, so this should be false
        indexPages: false, // Set to true if you want to index standalone pages

        docsRouteBasePath: '/',

        searchResultLimits: 8,
        searchResultContextMaxLength: 50,

        highlightSearchTermsOnTargetPage: true,

      } satisfies PluginOptions,
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, docPath}) => {
            return `https://github.com/Source2Wiki/Source2Wiki/blob/master/docs/${docPath}?plain=1`;
          },
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger', 'legacy'],
            extendDefaults: true
          }
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Source2 Wiki',
      logo: {
        src: 'img/logo.svg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
              <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap;">

                  <div style="text-align: left; gap: 4px;">
                    <span>Created and maintained by <a href="https://github.com/Source2Wiki/Source2Wiki/graphs/contributors">various contributors</a>.</span>
                  </div>

                  <div style="text-align: right; gap: 4px;">
                    <span>This project is not affiliated with Valve Software.</br>Source 2 is a trademark and/or registered trademark of Valve Corporation. </span>
                  </div>
                 
              </div>
              `,
            },
          ],
        }
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'description', content: 'A community driven documentation for everything Source2.' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
// 