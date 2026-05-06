import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Overview(): ReactNode {
  return (
    <Layout
      title="计算几何总纲"
      description="五大计算几何方法的对比与选择">
      <main className="container margin-vert--xl" style={{maxWidth: '780px'}}>
        <Heading as="h1">计算几何总纲</Heading>
        <p>
          <strong>适合计算的题目在正确的计算后会迎刃而解，一样有最高效的条件/结论转化效率。</strong>
        </p>

        <hr />

        <Heading as="h2">五大方法对比</Heading>
        <table>
          <thead>
            <tr>
              <th>计算方法</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>解析</strong></td>
              <td>适用于纯直线型、垂直平行悬浮点、双对称、丑图、类似一试</td>
            </tr>
            <tr>
              <td><strong>复数</strong></td>
              <td>适用于单圆、旋转、角度、相似</td>
            </tr>
            <tr>
              <td><strong>三线坐标</strong></td>
              <td>适用于一个核心三角形且多对象过顶点</td>
            </tr>
            <tr>
              <td><strong>向量</strong></td>
              <td>包括点几何方法，适用于点乘、叉乘、线性运算，通向几何代数（Geometric Algebra / Clifford Algebra）</td>
            </tr>
            <tr>
              <td><strong>三角</strong></td>
              <td>包括纯几及算边方法，适用于其他情况、兜底做法</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <Heading as="h2">如何选择方法</Heading>
        <blockquote>
          先看题目条件，再选最匹配的方法。没有万能方法，只有<strong>最合适的方法</strong>。
        </blockquote>
        <ul>
          <li>题目以直线和点为主 → <strong><Link to="/docs/analytic/L1/intro">解析</Link></strong></li>
          <li>题目以一个圆为核心 → <strong><Link to="/docs/complex/intro">复数</Link></strong></li>
          <li>题目有一个重要三角形，很多对象过其顶点 → <strong><Link to="/docs/trilinear/intro">三线坐标</Link></strong></li>
          <li>需要点乘叉乘等线性运算 → <strong><Link to="/docs/vector/intro">向量</Link></strong></li>
          <li>以上都不太贴合 → <strong><Link to="/docs/trig/intro">三角</Link></strong>兜底</li>
        </ul>
      </main>
    </Layout>
  );
}
