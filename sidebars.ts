import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'L1 解析几何的世界观',
      collapsed: false,
      items: [
        'L1/intro',
        {
          type: 'category',
          label: '§0 笛卡尔坐标系',
          items: [
            'L1/s0-1-parse-vs-complex',
            'L1/s0-2-origin',
            'L1/s0-3-axes',
            'L1/s0-4-number-one',
            'L1/s0-5-frameworks',
            'L1/s0-6-tools-ai',
          ],
        },
        {
          type: 'category',
          label: '§1 点',
          items: [
            'L1/s1-1-coordinates',
            'L1/s1-2-midpoint-halfangle',
            'L1/s1-3-radical-aversion',
            'L1/s1-4-positive-variables',
            'L1/s1-5-intersection-principles',
            'L1/s1-6-two-simple-lines',
            'L1/s1-7-simple-and-complex',
            'L1/s1-8-avoid-double-coords',
            'L1/s1-9-point-relations',
          ],
        },
        {
          type: 'category',
          label: '§2 直线',
          items: [
            'L1/s2-1-head-of-line',
            'L1/s2-2-integer-form',
            'L1/s2-3-point-line',
            'L1/s2-4-line-line',
            'L1/s2-5-symmetry',
            'L1/s2-6-angle-bisector',
          ],
        },
        {
          type: 'category',
          label: '§3 圆',
          items: [
            'L1/s3-1-unit-circle',
            'L1/s3-2-ohg',
            'L1/s3-3-ijs',
            'L1/s3-5-other-circles',
            'L1/s3-6-point-circle',
            'L1/s3-7-line-circle',
            'L1/s3-7-8-complete-quadrilateral',
            'L1/s3-7-9-brocard',
            'L1/s3-9-circle-circle',
          ],
        },
        'L1/bonus',
        'L1/summary',
      ],
    },
    {
      type: 'link',
      label: 'L2 复数方法（即将上线）',
      href: '#',
    },
  ],
};

export default sidebars;
