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
  plugins: [require.resolve('docusaurus-plugin-image-zoom')],
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
    zoom: {
      selector: '.markdown :not(em) > img, .markdown img',
      background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
      },
    },
    navbar: {
      title: 'Source2 Wiki',
      logo: {
        src: 'img/logo.svg',
      },
      items: [
        {
          title: 'GitHub',
          position: 'right',
          html: `
          <div
             class="navbar__item navbar__link github-button"
             target="_blank"
             rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 width="24" 
                 height="24" 
                 viewBox="0 0 24 24"
                 class="github-icon">
                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                 fill="currentColor"/>
            </svg>
          </div>
          `,
          href: 'https://github.com/Source2Wiki/Source2Wiki'
        }
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