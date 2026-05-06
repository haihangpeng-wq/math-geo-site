import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // ── 解析 ──
  analyticSidebar: [
    {
      type: 'link',
      href: '/overview',
      label: '计算几何总纲',
    },
    {
      type: 'category',
      label: '解析几何的世界观',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'analytic/L1/intro',
      },
      items: [
        {
          type: 'category',
          label: '§0 笛卡尔坐标系',
          link: {
            type: 'doc',
            id: 'analytic/L1/s0-1-parse-vs-complex',
          },
          items: [
            'analytic/L1/s0-1-parse-vs-complex',
            'analytic/L1/s0-2-origin',
            'analytic/L1/s0-3-axes',
            'analytic/L1/s0-4-number-one',
            'analytic/L1/s0-5-frameworks',
            'analytic/L1/s0-6-tools-ai',
          ],
        },
        {
          type: 'category',
          label: '§1 点',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'analytic/L1/s1-1-coordinates',
          },
          items: [
            'analytic/L1/s1-1-coordinates',
            'analytic/L1/s1-2-intersection-principles',
            'analytic/L1/s1-3-point-relations',
          ],
        },
        {
          type: 'category',
          label: '§2 直线',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'analytic/L1/s2-1-head-of-line',
          },
          items: [
            'analytic/L1/s2-1-head-of-line',
            'analytic/L1/s2-2-point-line',
            'analytic/L1/s2-3-line-line',
          ],
        },
        {
          type: 'category',
          label: '§3 圆',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'analytic/L1/s3-1-unit-circle',
          },
          items: [
            'analytic/L1/s3-1-unit-circle',
            'analytic/L1/s3-2-point-circle',
            'analytic/L1/s3-3-line-circle',
            'analytic/L1/s3-4-circle-circle',
          ],
        },
        'analytic/L1/bonus',
        'analytic/L1/summary',
      ],
    },
    {
      type: 'category',
      label: '解析几何的方法论',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'analytic/L2/intro',
      },
      items: [
        'analytic/L2/simplicity',
        'analytic/L2/shift-axis',
        'analytic/L2/overflow-variables',
        'analytic/L2/coordinate-flow',
      ],
    },
  ],

  // ── 复数 ──
  complexSidebar: [
    {
      type: 'link',
      href: '/overview',
      label: '计算几何总纲',
    },
    'complex/index',
  ],

  // ── 三线 ──
  trilinearSidebar: [
    {
      type: 'link',
      href: '/overview',
      label: '计算几何总纲',
    },
    'trilinear/index',
  ],

  // ── 向量 ──
  vectorSidebar: [
    {
      type: 'link',
      href: '/overview',
      label: '计算几何总纲',
    },
    'vector/index',
  ],

  // ── 三角 ──
  trigSidebar: [
    {
      type: 'link',
      href: '/overview',
      label: '计算几何总纲',
    },
    'trig/index',
  ],
};

export default sidebars;
