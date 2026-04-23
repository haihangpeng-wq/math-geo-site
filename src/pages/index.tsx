import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          计算几何竞赛知识站
        </Heading>
        <p className={styles.heroSubtitle}>
          用解析的方法，让竞赛平面几何题迎刃而解
        </p>
        <p className={styles.heroAuthor}>RynW1988</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/L1/intro">
            开始学习
          </Link>
          <Link className="button button--outline button--lg" to="/docs/L1/intro#knowledge-map">
            知识地图
          </Link>
        </div>
      </div>
    </header>
  );
}

function FiveMethods() {
  const methods = [
    { icon: '∞', name: '复数', desc: '一个圆、旋转、角信息、相似', active: false },
    { icon: '∑', name: '解析', desc: '直线型、悬浮垂直平行、双对称、类一试', active: true },
    { icon: '△', name: '三线坐标', desc: '重要三角形 + 多对象过顶点', active: false },
    { icon: '→', name: '向量', desc: '点乘、叉乘、线性运算', active: false },
    { icon: '∠', name: '三角+纯几', desc: '总兜底和补集', active: false },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          计算几何五大方法
        </Heading>
        <p className={styles.sectionDesc}>
          适合计算的题目在正确的计算后会迎刃而解，一样有最高效的条件/结论转化效率。
        </p>
        <div className={styles.methodGrid}>
          {methods.map((m) => (
            <div key={m.name} className={clsx(styles.methodCard, m.active && styles.methodActive)}>
              <div className={styles.methodIcon}>{m.icon}</div>
              <h4>{m.name}{m.active && ' ★'}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KnowledgeMap() {
  return (
    <section id="knowledge-map" className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          课程知识体系
        </Heading>
        <div className={styles.grid}>
          <Link to="/docs/L1/intro" className={styles.card}>
            <h3>L1 解析几何的世界观</h3>
            <p>从笛卡尔坐标系到直线与圆，建立完整的解析几何竞赛方法论。</p>
            <div className={styles.cardTopics}>
              <span>§0 笛卡尔坐标系</span>
              <span>§1 点</span>
              <span>§2 直线</span>
              <span>§3 圆</span>
            </div>
          </Link>
          <div className={clsx(styles.card, styles.cardDisabled)}>
            <h3>L2 复数方法</h3>
            <p>复数在竞赛几何中的应用，角信息与相似的处理利器。</p>
          </div>
          <div className={clsx(styles.card, styles.cardDisabled)}>
            <h3>L3 三线坐标与向量</h3>
            <p>三角函数坐标、向量方法与几何代数入门。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.ctaBox}>
          <Heading as="h2">加入学习社群</Heading>
          <p>扫码关注小红书账号，获取最新课程动态和竞赛干货分享</p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/L1/intro">
              免费学习 L1
            </Link>
          </div>
          <p className={styles.ctaNote}>更多课程和社群信息即将开放，敬请期待</p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="计算几何竞赛知识站"
      description="面向高中竞赛生的计算几何系统课程，从解析几何世界观到实战技巧">
      <HomepageHeader />
      <main>
        <FiveMethods />
        <KnowledgeMap />
        <ContactSection />
      </main>
    </Layout>
  );
}
