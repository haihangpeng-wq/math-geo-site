import {useState, useEffect} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './ContactModal.module.css';

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 将"联系我"按钮注入到导航栏（紧挨 color mode toggle 前面）
    if (!ExecutionEnvironment.canUseDOM) return;

    const inject = () => {
      const nav = document.querySelector('nav.navbar');
      if (!nav || document.getElementById('contact-trigger')) return;

      const btn = document.createElement('button');
      btn.id = 'contact-trigger';
      btn.className = styles.navBtn;
      btn.textContent = '联系我';
      btn.setAttribute('aria-label', '联系我');
      btn.addEventListener('click', () => setOpen(true));

      // 插入到 color mode toggle 前面
      const toggle = nav.querySelector('[class*="colorModeToggle"]')?.parentElement
        || nav.querySelector('div[class*="toggle"]')
        || nav.lastElementChild;
      if (toggle?.parentElement) {
        toggle.parentElement.insertBefore(btn, toggle);
      }
    };

    // 延迟注入，等 Docusaurus 渲染完导航栏
    const timer = setTimeout(inject, 500);
    // 路由切换时重新注入
    const observer = new MutationObserver(() => {
      if (!document.getElementById('contact-trigger')) inject();
    });
    observer.observe(document.body, {childList: true, subtree: true});

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={() => setOpen(false)}>
      <div className={styles.box} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={() => setOpen(false)} aria-label="关闭">✕</button>
        <p className={styles.title}>联系我</p>
        <div className={styles.qrRow}>
          <div className={styles.qrItem}>
            <img src="/img/qr-wechat.svg" alt="微信" className={styles.qrImg} loading="lazy"/>
            <span className={styles.qrLabel}>微信</span>
            <span className={styles.qrSub}>Spray_heart</span>
          </div>
          <div className={styles.qrItem}>
            <img src="/img/qr-xiaohongshu.svg" alt="小红书" className={styles.qrImg} loading="lazy"/>
            <span className={styles.qrLabel}>小红书</span>
            <span className={styles.qrSub}>直观数学事务所</span>
          </div>
        </div>
      </div>
    </div>
  );
}
