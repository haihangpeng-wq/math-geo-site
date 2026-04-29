import type {Config} from '@docusaurus/types';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '平面几何竞赛计算方法学习站',
  tagline: '用解析的方法，让竞赛几何题迎刃而解',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://rynw-92-geometry.vercel.app',
  baseUrl: '/',

  organizationName: 'haihangpeng-wq',
  projectName: 'math-geo-site',
  trailingSlash: false,

  deploymentBranch: 'gh-pages',

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
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
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
          type: 'doc',
          docId: 'analytic/L1-intro',
          sidebarId: 'analyticSidebar',
          position: 'left',
          label: '解析',
        },
        {
          type: 'doc',
          docId: 'complex/L1-intro',
          sidebarId: 'complexSidebar',
          position: 'left',
          label: '复数',
        },
        {
          type: 'doc',
          docId: 'trilinear/L1-intro',
          sidebarId: 'trilinearSidebar',
          position: 'left',
          label: '三线',
        },
        {
          type: 'doc',
          docId: 'vector/L1-intro',
          sidebarId: 'vectorSidebar',
          position: 'left',
          label: '向量',
        },
        {
          type: 'doc',
          docId: 'trig/L1-intro',
          sidebarId: 'trigSidebar',
          position: 'left',
          label: '三角',
        },
      ],
    },
    footer: {},
  },
};

export default config;
