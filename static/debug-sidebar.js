/**
 * 调试脚本：诊断 Safari 移动端侧边栏问题
 * 使用方法：在 Safari 开发者工具的控制台中查看日志
 */
(function() {
  'use strict';

  function log(message, data) {
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    if (data !== undefined) {
      console.log(`[Sidebar Debug ${timestamp}] ${message}`, data);
    } else {
      console.log(`[Sidebar Debug ${timestamp}] ${message}`);
    }
  }

  function getComputedTransform(element) {
    if (!element) return 'null';
    const style = window.getComputedStyle(element);
    return {
      transform: style.transform,
      webkitTransform: style.webkitTransform,
      left: style.left,
      display: style.display,
      visibility: style.visibility,
      height: style.height,
      position: style.position,
      zIndex: style.zIndex,
    };
  }

  function checkSidebarState() {
    const sidebar = document.querySelector('.navbar-sidebar');
    const backdrop = document.querySelector('.navbar-sidebar__backdrop');
    const body = document.body;

    log('=== Sidebar State Check ===');
    log('Body classes:', body.className);
    log('Sidebar found:', !!sidebar);
    
    if (sidebar) {
      log('Sidebar classes:', sidebar.className);
      log('Sidebar computed style:', getComputedTransform(sidebar));
      log('Sidebar offsetWidth:', sidebar.offsetWidth);
      log('Sidebar offsetHeight:', sidebar.offsetHeight);
      log('Sidebar getBoundingClientRect:', sidebar.getBoundingClientRect());
    }
    
    if (backdrop) {
      log('Backdrop found:', true);
      log('Backdrop classes:', backdrop.className);
      log('Backdrop computed style:', getComputedTransform(backdrop));
    }
    
    log('Window innerWidth:', window.innerWidth);
    log('Window innerHeight:', window.innerHeight);
    log('User Agent:', navigator.userAgent);
  }

  function setupDebugging() {
    log('Debug script loaded');

    // 监听菜单按钮点击
    document.addEventListener('click', function(e) {
      const menuButton = e.target.closest('.navbar__toggle');
      if (menuButton) {
        log('Menu button clicked!');
        // 延迟检查状态，等待 Docusaurus 更新 DOM
        setTimeout(checkSidebarState, 100);
        setTimeout(checkSidebarState, 500);
      }

      const backdrop = e.target.closest('.navbar-sidebar__backdrop');
      if (backdrop) {
        log('Backdrop clicked!');
        setTimeout(checkSidebarState, 100);
      }
    }, true);

    // 监听 DOM 变化
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.classList.contains('navbar-sidebar') || target === document.body) {
            log('Class changed on:', target.tagName + '.' + target.className);
            log('Sidebar state:', getComputedTransform(document.querySelector('.navbar-sidebar')));
          }
        }
      });
    });

    // 开始观察
    const sidebar = document.querySelector('.navbar-sidebar');
    if (sidebar) {
      observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      log('MutationObserver set up');
    }

    // 初始检查
    setTimeout(checkSidebarState, 500);

    // 暴露到全局，方便手动调用
    window.__sidebarDebug = {
      check: checkSidebarState,
      getState: getComputedTransform,
    };
    log('Debug API available: window.__sidebarDebug.check()');
  }

  // 等待 DOM 加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDebugging);
  } else {
    setupDebugging();
  }
})();
