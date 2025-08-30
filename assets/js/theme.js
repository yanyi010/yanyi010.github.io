// 主题切换功能
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    // 设置初始主题
    this.setTheme(this.theme);
    
    // 创建主题切换按钮
    this.createThemeToggle();
    
    // 监听系统主题变化
    this.watchSystemTheme();
  }

  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // 更新按钮图标
    this.updateToggleIcon();
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  createThemeToggle() {
    // 查找导航栏
    const navbar = document.querySelector('.nav-container');
    if (!navbar) return;

    // 创建主题切换按钮
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.setAttribute('aria-label', '切换主题');
    toggleBtn.innerHTML = this.getThemeIcon();
    
    // 添加点击事件
    toggleBtn.addEventListener('click', () => {
      this.toggleTheme();
    });

    // 添加到导航栏
    navbar.appendChild(toggleBtn);
  }

  updateToggleIcon() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.innerHTML = this.getThemeIcon();
    }
  }

  getThemeIcon() {
    return this.theme === 'light' ? '🌙' : '☀️';
  }

  watchSystemTheme() {
    // 检查是否支持系统主题检测
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // 监听系统主题变化
      mediaQuery.addEventListener('change', (e) => {
        // 只有在用户没有手动设置主题时才跟随系统
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
}

// 页面加载完成后初始化主题管理器
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});

// 导出主题管理器类（如果需要）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeManager;
}
