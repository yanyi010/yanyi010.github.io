# YYBOOK 网站使用说明（Cursor编写。整个网站的搭建也由cursor帮助完成）
## 网站结构

```
yanyi010.github.io/
├── index.html                    # 主页面
├── assets/                       # 静态资源
│   ├── css/
│   │   └── common.css           # 统一样式文件
│   ├── js/
│   │   └── theme.js             # 主题切换功能
│   └── images/                  # 图片资源
│       ├── 1-central-green.jpg
│       ├── 2-princeton.jpg
│       └── 3-ubr.jpg
├── sections/                     # 文章板块
│   ├── history/                 # 历史与哲学板块
│   │   ├── index.html          # 板块主页
│   │   └── articles/           # 文章目录
│   │       └── example-article.html
│   ├── physics/                # 物理板块
│   │   ├── index.html          # 板块主页
│   │   └── articles/           # 文章目录
│   └── life/                   # 生活板块
│       ├── index.html          # 板块主页
│       └── articles/           # 文章目录
└── templates/                   # 模板文件
    └── article-template.html    # 文章模板
```

## 如何添加新文章

### 1. 选择板块
根据文章内容，选择对应的板块：
- `sections/history/articles/` - 历史与哲学文章
- `sections/physics/articles/` - 物理相关文章
- `sections/life/articles/` - 生活随笔文章

### 2. 创建文章文件
1. 复制 `templates/article-template.html` 到对应板块的 `articles/` 目录
2. 重命名为有意义的文件名，如 `my-new-article.html`

### 3. 编辑文章内容
修改文章文件中的以下内容：
- `<title>` 标签中的标题
- 文章标题 (`<h1 class="article-title-large">`)
- 发布时间、阅读时间、分类等元信息
- 文章正文内容

### 4. 添加文章到列表
在对应板块的 `index.html` 文件中，在 `<div class="articles-grid">` 内添加新的文章卡片：

```html
<a href="articles/your-article.html" class="article-card">
  <img src="../../assets/images/your-image.jpg" alt="文章配图" class="article-image">
  <div class="article-content">
    <h3 class="article-title">您的文章标题</h3>
    <p class="article-excerpt">文章摘要...</p>
    <div class="article-meta">
      <span>2025-01-15</span>
      <span>阅读时间: 5分钟</span>
    </div>
  </div>
</a>
```

## 文章格式说明

### 支持的HTML标签
- `<h2>` - 一级标题
- `<h3>` - 二级标题
- `<p>` - 段落
- `<blockquote>` - 引用块
- `<img>` - 图片
- `<ul>`, `<ol>`, `<li>` - 列表

### 图片使用
- 将图片放在 `assets/images/` 目录下
- 在文章中使用相对路径：`../../../assets/images/your-image.jpg`

### 样式特点
- 响应式设计，支持手机和电脑浏览
- 统一的蓝色主题配色
- 清晰的层次结构和可读性
- 优雅的悬停效果和过渡动画

## 维护建议

1. **文件命名**：使用有意义的文件名，避免中文和特殊字符
2. **图片优化**：压缩图片以提高加载速度
3. **内容更新**：定期更新文章列表和内容
4. **备份**：定期备份网站文件

## 自定义样式

如需修改样式，编辑 `assets/css/common.css` 文件。主要样式类：
- `.navbar` - 导航栏样式
- `.article-card` - 文章卡片样式
- `.article-container` - 文章页面样式
- `.page-header` - 页面标题样式

## 深色模式功能

网站支持深色模式/浅色模式切换：

### 功能特点
- 🌙/☀️ 主题切换按钮位于导航栏
- 自动保存用户主题偏好到本地存储
- 支持跟随系统主题设置
- 平滑的过渡动画效果
- 所有页面和文章都支持主题切换

### 使用方法
1. 点击导航栏右侧的月亮/太阳图标切换主题
2. 主题设置会自动保存，下次访问时保持选择
3. 首次访问时会跟随系统主题设置

## 技术特点

- 纯HTML/CSS/JavaScript实现，无需服务器
- 支持GitHub Pages部署
- 响应式设计，适配各种设备
- 深色模式支持，保护用户眼睛
- 简洁优雅的用户界面
- 易于维护和扩展
