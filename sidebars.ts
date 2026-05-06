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
          link: {
            type: 'doc',
            id: 'analytic/L1/s1-1-coordinates',
          },
          items: [
            'analytic/L1/s1-1-coordinates',
            'analytic/L1/s1-2-midpoint-halfangle',
            'analytic/L1/s1-3-radical-aversion',
            'analytic/L1/s1-4-positive-variables',
            'analytic/L1/s1-5-intersection-principles',
            'analytic/L1/s1-6-two-simple-lines',
            'analytic/L1/s1-7-simple-and-complex',
            'analytic/L1/s1-8-avoid-double-coords',
            'analytic/L1/s1-9-point-relations',
          ],
        },
        {
          type: 'category',
          label: '§2 直线',
          link: {
            type: 'doc',
            id: 'analytic/L1/s2-1-head-of-line',
          },
          items: [
            'analytic/L1/s2-1-head-of-line',
            'analytic/L1/s2-2-integer-form',
            'analytic/L1/s2-3-point-line',
            'analytic/L1/s2-4-line-line',
            'analytic/L1/s2-5-symmetry',
            'analytic/L1/s2-6-angle-bisector',
          ],
        },
        {
          type: 'category',
          label: '§3 圆',
          link: {
            type: 'doc',
            id: 'analytic/L1/s3-1-unit-circle',
          },
          items: [
            'analytic/L1/s3-1-unit-circle',
            'analytic/L1/s3-2-ohg',
            'analytic/L1/s3-3-ijs',
            'analytic/L1/s3-5-other-circles',
            'analytic/L1/s3-6-point-circle',
            'analytic/L1/s3-7-line-circle',
            'analytic/L1/s3-7-8-complete-quadrilateral',
            'analytic/L1/s3-7-9-brocard',
            'analytic/L1/s3-9-circle-circle',
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
