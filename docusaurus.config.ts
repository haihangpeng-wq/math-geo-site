import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 显式导入插件，不使用 require
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '计算几何竞赛知识站',
  tagline: '用解析的方法，让竞赛几何题迎刃而解',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://haihangpeng-wq.github.io',
  baseUrl: '/math-geo-site/',

  organizationName: 'RynW1988',
  projectName: 'math-geo-site',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-nB0miv6/jRmo5YADh3bCfU+dp29W5dUWdRqaHd0HWqKFmjFMB87rTJnFHQacXkzv',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'light',
    },
    navbar: {
      title: '计算几何竞赛知识站',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '知识体系',
        },
        {
          href: '#contact',
          label: '联系我',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '学习',
          items: [
            {
              label: 'L1 解析几何世界观',
              to: '/docs/L1/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '小红书主页',
              href: 'https://www.xiaohongshu.com',
            },
            {
              label: '学习交流群',
              href: '#contact',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} RynW1988`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
