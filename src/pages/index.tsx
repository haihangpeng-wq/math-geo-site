import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ── SVG 图标 ── */
// 解析：直角坐标系
const IconAnalytic = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.methodSvg}>
    <line x1="6" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="6" y1="42" x2="6" y2="6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <polyline points="40,44 42,42 40,40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="4,8 6,6 8,8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="14" y1="42" x2="14" y2="41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="22" y1="42" x2="22" y2="41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="30" y1="42" x2="30" y2="41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="34" x2="7" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="26" x2="7" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="18" x2="7" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="22" cy="26" r="2" fill="currentColor"/>
    <line x1="22" y1="42" x2="22" y2="26" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2,2"/>
    <line x1="6" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2,2"/>
  </svg>
);

// 复数：指数形式 e^(iθ)
const IconComplex = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.methodSvg}>
    <circle cx="24" cy="28" r="14" stroke="currentColor" strokeWidth="2"/>
    <line x1="24" y1="28" x2="35" y2="17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="35" cy="17" r="2.2" fill="currentColor"/>
    <path d="M 30 28 A 6 6 0 0 0 30.8 23.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    <text x="32" y="22" fontSize="6" fill="currentColor" fontStyle="italic">θ</text>
    <text x="5" y="16" fontSize="9" fill="currentColor" fontStyle="italic" fontFamily="serif">e</text>
    <text x="11" y="12" fontSize="6" fill="currentColor" fontStyle="italic" fontFamily="serif">iθ</text>
  </svg>
);

// 三线坐标：三角形内部点向三边作垂线
const IconTrilinear = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.methodSvg}>
    <polygon points="24,5 44,42 4,42" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
    <circle cx="24" cy="30" r="2" fill="currentColor"/>
    <line x1="24" y1="30" x2="24" y2="42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2,1.5"/>
    <line x1="24" y1="30" x2="13.5" y2="23.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2,1.5"/>
    <line x1="24" y1="30" x2="34.5" y2="23.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2,1.5"/>
    <rect x="22.5" y="40" width="3" height="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
);

// 向量：倾斜的带箭头向量
const IconVector = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.methodSvg}>
    <line x1="8" y1="40" x2="38" y2="12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
    <polyline points="28,10 38,12 36,22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
);

// 三角：第一象限三角函数线 + 圆的切线
const IconTrig = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.methodSvg}>
    {/* 单位圆 - 只画第一象限弧 */}
    <path d="M 24 42 A 18 18 0 0 1 42 24" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* x 轴和 y 轴（第一象限） */}
    <line x1="24" y1="42" x2="44" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="24" y1="42" x2="24" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* 半径（斜边） */}
    <line x1="24" y1="42" x2="40" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="40" cy="18" r="2" fill="currentColor"/>
    {/* 正弦线（红色/垂直） */}
    <line x1="40" y1="18" x2="40" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    {/* 余弦线（水平） */}
    <line x1="24" y1="42" x2="40" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    {/* 切线（过点的切线） */}
    <line x1="44" y1="14" x2="36" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2,1.5"/>
    {/* 切线标注的小直角 */}
    <polyline points="42,14 42,16 44,16" fill="none" stroke="currentColor" strokeWidth="0.8"/>
    {/* θ 角弧 */}
    <path d="M 30 42 A 6 6 0 0 1 28.5 36.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    <text x="30.5" y="38" fontSize="5.5" fill="currentColor" fontStyle="italic">θ</text>
  </svg>
);

/* ── 状态徽章 ── */
const Badge = ({ label }: { label: string }) => (
  <span className={styles.badge}>{label}</span>
);

/* ── Hero ── */
function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          平面几何竞赛计算方法学习站
        </Heading>
        <p className={styles.heroSubtitle}>
          用解析的方法，让竞赛平面几何题迎刃而解
        </p>
        <p className={styles.heroAudience}>
          面向高中竞赛生 &middot; 系统讲解五大计算方法
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/overview">
            开始学习
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ── 五大方法 ── */
function FiveMethods() {
  const methods = [
    { icon: <IconAnalytic />,   name: '解析', active: true,  url: '/docs/analytic/L1/intro' },
    { icon: <IconTrig />,       name: '三角', active: false, url: '/docs/trig/index' },
    { icon: <IconComplex />,    name: '复数', active: false, url: '/docs/complex/index' },
    { icon: <IconTrilinear />,  name: '三线', active: false, url: '/docs/trilinear/index' },
    { icon: <IconVector />,     name: '向量', active: false, url: '/docs/vector/index' },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          计算几何五大方法
        </Heading>
        <p className={styles.sectionDesc}>
          适合计算的题目在正确的计算后迎刃而解，每种方法都有最高效的条件转化效率。
        </p>
        <div className={styles.methodGrid}>
          {methods.map((m) => (
            <Link
              key={m.name}
              to={m.active ? m.url : undefined}
              className={clsx(
                styles.methodCard,
                m.active && styles.methodActive,
                !m.active && styles.methodInactive,
              )}
              onClick={!m.active ? (e: React.MouseEvent) => {
                e.preventDefault();
                alert(`「${m.name}」模块内容建设中，敬请期待！`);
              } : undefined}
              href={m.active ? m.url : '#'}
              title={!m.active ? `${m.name}模块内容建设中` : undefined}
            >
              <div className={styles.methodIconWrap}>{m.icon}</div>
              <h4>{m.name}</h4>
              {m.active && <Badge label="已上线" />}
              {!m.active && <span className={styles.badgeMuted}>建设中</span>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 课程模块 ── */
function CourseSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Link to="/overview" className={styles.overviewCard}>
          <h3>计算几何总纲</h3>
          <p>五大方法的对比与选择，通向正确方法论的第一步。</p>
        </Link>
        <div className={styles.grid}>
          <Link to="/docs/analytic/L1/intro" className={styles.card}>
            <h3>解析</h3>
            <p>从笛卡尔坐标系到直线与圆，建立完整的解析几何竞赛方法论。</p>
            <div className={styles.cardLevels}>
              <span>L1 世界观 ★</span>
              <span>L2 方法论</span>
            </div>
          </Link>
          <Link to="/docs/trig/intro" className={clsx(styles.card, styles.cardDisabled)}>
            <h3>三角</h3>
            <p>三角恒等式与正弦定理、余弦定理的竞赛应用。</p>
            <div className={styles.cardLevels}>
              <span>L1 世界观</span>
              <span>L2 方法论</span>
            </div>
          </Link>
          <Link to="/docs/complex/intro" className={clsx(styles.card, styles.cardDisabled)}>
            <h3>复数</h3>
            <p>复数在竞赛几何中的应用，角信息与相似的处理利器。</p>
            <div className={styles.cardLevels}>
              <span>L1 世界观</span>
              <span>L2 方法论</span>
            </div>
          </Link>
          <Link to="/docs/trilinear/intro" className={clsx(styles.card, styles.cardDisabled)}>
            <h3>三线</h3>
            <p>三线坐标在三角形问题中的系统化应用。</p>
            <div className={styles.cardLevels}>
              <span>L1 世界观</span>
              <span>L2 方法论</span>
            </div>
          </Link>
          <Link to="/docs/vector/intro" className={clsx(styles.card, styles.cardDisabled)}>
            <h3>向量</h3>
            <p>向量在竞赛几何中的独特优势与应用场景。</p>
            <div className={styles.cardLevels}>
              <span>L1 世界观</span>
              <span>L2 方法论</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── 版权声明 ── */
function CopyrightSection() {
  return (
    <section className={styles.copyrightSection}>
      <div className="container">
        <div className={styles.copyrightBox}>
          <div className={styles.copyrightDivider} />
          <p className={styles.copyrightTitle}>版权声明</p>
          <div className={styles.copyrightList}>
            <div className={styles.copyrightItem}>
              <span className={styles.copyrightBooks}>
                《复数版 9+2》《解析版 9+2》《怎样三角》《怎样三线》
              </span>
              <span className={styles.copyrightAuthor}>
                作者：数之谜 @RynW1988 / 微信公众号 The House Claimed
              </span>
            </div>
            <div className={styles.copyrightItem}>
              <span className={styles.copyrightBooks}>
                《复数版 9+2》《解析版 9+2》教学脚本
              </span>
              <span className={styles.copyrightAuthor}>
                作者：数之谜 @RynW1988 / 微信公众号 The House Claimed
              </span>
            </div>
            <div className={styles.copyrightItem}>
              <span className={styles.copyrightBooks}>本站作者：彭海航老师</span>
            </div>
          </div>
          <p className={styles.copyrightNote}>
            本站为数之谜 @RynW1988 和微信公众号 The House Claimed 的授权二创站点
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── 主入口 ── */
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="平面几何竞赛计算方法学习站"
      description="面向高中竞赛生的计算几何系统课程，从解析几何世界观到实战技巧">
      <HomepageHeader />
      <main>
        <FiveMethods />
        <CourseSection />
        <CopyrightSection />
      </main>
    </Layout>
  );
}
