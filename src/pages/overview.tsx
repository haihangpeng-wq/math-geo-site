import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import styles from './overview.module.css';

/* 五方法对比数据 — 包含代表题型标签 */
const methods = [
  {
    name: '解析',
    scenes: ['直线型题目', '垂直平行关系', '对称点问题', '一试风格'],
    desc: '从笛卡尔坐标系出发，以直线与圆为基本工具，暴力而系统地完成证明或求解。',
    url: '/docs/analytic/L1/intro',
  },
  {
    name: '复数',
    scenes: ['单圆问题', '旋转与相似', '角度条件'],
    desc: '将平面视为复平面，利用模长与辐角的乘积意义处理旋转、缩放。',
    url: '/docs/complex/index',
  },
  {
    name: '三线坐标',
    scenes: ['一个核心三角形', '多点过顶点'],
    desc: '以三边距离比为坐标，将内点几何问题转化为代数计算。',
    url: '/docs/trilinear/index',
  },
  {
    name: '向量',
    scenes: ['点乘叉乘', '线性运算', '几何代数'],
    desc: '用向量语言统一平移、旋转与缩放，通向 Clifford 代数的更高视角。',
    url: '/docs/vector/index',
  },
  {
    name: '三角',
    scenes: ['其他情况', '兜底做法'],
    desc: '正弦定理、余弦定理与三角恒等式，适用于以上方法都不太贴合的题目。',
    url: '/docs/trig/index',
  },
];

/* 选择指南数据 */
const guideItems = [
  {
    condition: '题目以直线和点为主',
    method: '解析',
    url: '/docs/analytic/L1/intro',
  },
  {
    condition: '题目以一个圆为核心',
    method: '复数',
    url: '/docs/complex/index',
  },
  {
    condition: '有一个重要三角形，很多对象过其顶点',
    method: '三线坐标',
    url: '/docs/trilinear/index',
  },
  {
    condition: '需要点乘叉乘等线性运算',
    method: '向量',
    url: '/docs/vector/index',
  },
  {
    condition: '以上都不太贴合',
    method: '三角（兜底）',
    url: '/docs/trig/index',
  },
];

export default function Overview(): ReactNode {
  return (
    <Layout
      title="计算几何总纲"
      description="五大计算几何方法的对比与选择">
      <main className={styles.page}>
        <div className="container margin-vert--xl">
          <Heading as="h1">计算几何总纲</Heading>
          <p className={styles.intro}>
            <strong className={styles.introStrong}>
              适合计算的题目在正确的计算后会迎刃而解，一样有最高效的条件&#x2F;结论转化效率。
            </strong>
          </p>

          {/* ── 五大方法对比表格 ── */}
          <section className={styles.section}>
            <Heading as="h2" className={styles.sectionTitle}>
              五大方法对比
            </Heading>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>计算方法</th>
                    <th>代表题型</th>
                    <th>说明</th>
                  </tr>
                </thead>
                <tbody>
                  {methods.map((m) => (
                    <tr key={m.name}>
                      <td>
                        <Link to={m.url} className={styles.methodName}>
                          {m.name}
                        </Link>
                      </td>
                      <td>
                        <div className={styles.sceneTags}>
                          {m.scenes.map((s) => (
                            <span key={s} className={styles.tag}>{s}</span>
                          ))}
                        </div>
                      </td>
                      <td>
                        {m.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 如何选择方法 ── */}
          <section className={styles.section}>
            <Heading as="h2" className={styles.sectionTitle}>
              如何选择方法
            </Heading>
            <div className={styles.guideBlock}>
              <blockquote className={styles.guideQuote}>
                先看题目条件，再选最匹配的方法。没有万能方法，只有<strong>最合适的方法</strong>。
              </blockquote>
              <ul className={styles.guideList}>
                {guideItems.map((item) => (
                  <li key={item.condition}>
                    <span className={styles.guideDot} />
                    <span>
                      {item.condition} →{' '}
                      <Link to={item.url}>
                        <strong>{item.method}</strong>
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── 版权微注 ── */}
          <div className={styles.copyrightBox}>
            <div className={styles.copyrightTitle}>版权声明</div>
            <div className={styles.copyrightLine}>
              《复数版 9+2》《解析版 9+2》《怎样三角》《怎样三线》
            </div>
            <div className={styles.copyrightLine}>
              作者：数之谜 @RynW1988 / 微信公众号 The House Claimed
            </div>
            <div className={styles.copyrightNote}>
              本站为数之谜 @RynW1988 和微信公众号 The House Claimed 的授权二创站点
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
