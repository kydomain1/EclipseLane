# EclipseLane 项目开发指南

## 目录
- [项目简介](#项目简介)
- [添加联盟营销文章](#添加联盟营销文章)
- [常见问题解决](#常见问题解决)
- [技术要点](#技术要点)
- [文件结构](#文件结构)

---

## 项目简介

EclipseLane 是一个极简风格的生活博客静态网站，使用 HTML5、CSS3、Vanilla JavaScript 构建。

**技术栈：**
- HTML5
- CSS3
- Vanilla JavaScript

**主要功能：**
- 文章搜索
- 分类筛选
- 分页
- 文章详情页
- 产品推荐
- 联系表单

---

## 添加联盟营销文章

### 步骤 1：分析现有文章格式

参考现有文章结构：`articles/concert-tickets-on-viagogo-marketplace.html`

### 步骤 2：创建新文章 HTML 文件

位置：`articles/xxx.html`

**标准文章结构：**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="文章描述">
    <title>文章标题 - EclipseLane</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/article.css">
</head>
<body>
    <!-- Header -->
    <header id="header" class="header">...</header>

    <!-- Back Button -->
    <div class="container" style="padding-top: 8rem;">
        <a href="../index.html" class="back-link">Back to Articles</a>
    </div>

    <!-- Article Content -->
    <article class="article-detail">
        <div class="container">
            <div class="article-container">
                <span class="article-category-badge">分类名称</span>
                <h1 class="article-detail-title">文章标题</h1>
                
                <div class="article-meta-info">
                    <div class="meta-item">作者信息</div>
                    <div class="meta-item">日期</div>
                    <div class="meta-item">阅读时间</div>
                </div>
                
                <div class="featured-image">
                    <img src="..." alt="...">
                </div>
                
                <div class="article-body">
                    <!-- 文章内容 -->
                </div>
            </div>
        </div>
    </article>

    <!-- Footer -->
    <footer class="footer">...</footer>

    <script src="../js/main.js"></script>
</body>
</html>
```

### 步骤 3：添加联盟链接

**链接格式：**
```html
<a href="https://app.partnermatic.com/track/xxx?url=https%3A%2F%2F目标网站.com" target="_blank" rel="noopener noreferrer">链接文字</a>
```

**重要提示：**
- 不要使用 `<mark class="link-highlight">` 标签（会有黄色背景）
- 必须添加 `target="_blank" rel="noopener noreferrer"`

### 步骤 4：添加图片

使用 Unsplash 高质量免费图片：
```html
<img src="https://images.unsplash.com/photo-xxx?w=1200&h=600&fit=crop" alt="图片描述">
```

**图片类型：**
- 封面图：`featured-image` 类，尺寸 1200x600
- 正文图：`article-image` 类，尺寸 1200x600

### 步骤 5：更新主页

在 `index.html` 中添加文章卡片：

```html
<article class="article-card" data-category="分类">
    <a href="articles/xxx.html" class="article-link">
        <div class="article-image">
            <img src="..." alt="..." loading="lazy">
        </div>
        <div class="article-content">
            <span class="article-category">分类名称</span>
            <h2 class="article-title">文章标题</h2>
            <p class="article-excerpt">文章摘要...</p>
            <div class="article-meta">
                <span class="meta-item">日期</span>
                <span class="meta-item">阅读时间</span>
            </div>
        </div>
    </a>
</article>
```

**注意：** 如果需要置顶文章，将其放在第一个 `<article class="article-card">` 位置。

---

## 常见问题解决

| 问题 | 解决方案 |
|------|----------|
| 黄底高亮 | 移除 `<mark class="link-highlight">` 标签 |
| 图片不显示 | 使用 Unsplash 外部图片链接 |
| 重复文章 | 检查 index.html 是否有多余的文章卡片 |
| 排版不一致 | 参考现有文章的 HTML 结构 |
| 本地测试 | 使用 `python -m http.server 8080` 启动本地服务器 |

---

## 技术要点

### 联盟链接格式
```
https://app.partnermatic.com/track/{追踪ID}?url={URL编码后的目标网址}
```

### Unsplash 图片链接格式
```
https://images.unsplash.com/photo-{图片ID}?w={宽度}&h={高度}&fit=crop
```

### 分类标签
- Fashion & Accessories
- Health & Beauty
- Home & Garden
- Travel & Accommodation
- Finance & Insurance
- Food & Beverage
- Entertainment & Tickets

### 本地开发

启动本地服务器：
```bash
cd G:\Opencode_Code\EclipseLane-main
python -m http.server 8080
```

访问：http://localhost:8080

---

## 文件结构

```
EclipseLane-main/
├── index.html              # 主页
├── about.html             # 关于页面
├── contact.html           # 联系页面
├── articles/              # 文章目录
│   ├── concert-tickets-on-viagogo-marketplace.html
│   ├── hotel-xcaret-mexico.html
│   └── ...
├── css/                   # 样式目录
│   ├── style.css
│   └── article.css
├── js/                    # JavaScript 目录
│   └── main.js
├── images/                # 图片目录
├── favicon.ico
└── README.md
```

---

## 注意事项

1. **每次修改后检查链接** - 确保联盟追踪链接正确
2. **图片使用外部链接** - 推荐使用 Unsplash
3. **保持排版一致** - 参考现有文章格式
4. **测试本地** - 修改后用本地服务器测试
5. **提交前检查** - 确保没有破坏现有功能

---

*最后更新：2026-02-27*
