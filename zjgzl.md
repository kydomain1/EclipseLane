# 添加联盟营销文章工作流

## 概述

本文档总结了在 EclipseLane 项目中添加联盟营销文章的完整工作流程，以 Xcaret Park 文章为例。

---

## 完整工作流

### 1. 获取目标网站信息

**方式一：使用已打开的浏览器**
- 用户在 Chrome 中打开目标网站
- 使用 Playwright 连接到浏览器获取截图和图片链接

```javascript
// 获取页面所有图片
const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => ({
        src: img.src,
        alt: img.alt || ''
    })).filter(img => 
        img.src.startsWith('http') && 
        !img.src.includes('data:') &&
        !img.src.includes('logo')
    );
});
```

**方式二：网络搜索**
```bash
websearch "xcaret.com theme parks Mexico Riviera Maya 2025"
```

### 2. 分析目标网站内容

从官网获取的关键信息：
- Xcaret Park - 50+ 自然和文化景点
- 地下河流 (Underground Rivers)
- 主题公园：Xcaret, Xel-Há, Xplor, Xplor Fuego, Xenses 等
- 文化表演：Mexico Espectacular
- 家庭友好设施

### 3. 创建文章 HTML 文件

**文件位置**: `articles/xcaret-park.html`

**标准结构**:
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
    <header>...</header>

    <!-- Back Button -->
    <div class="back-link">Back to Articles</div>

    <!-- Article Content -->
    <article class="article-detail">
        <span class="article-category-badge">分类</span>
        <h1>标题</h1>
        <div class="article-meta-info">作者、日期、阅读时间</div>
        <div class="featured-image">封面图</div>
        <div class="article-body">文章内容</div>
    </article>

    <!-- Footer -->
    <footer>...</footer>

    <script src="../js/main.js"></script>
</body>
</html>
```

### 4. 添加联盟追踪链接

**用户提供的追踪链接格式**:
```
https://app.partnermatic.com/track/{追踪ID}?url={URL编码的目标网址}
```

**Xcaret 追踪链接示例**:
```
https://app.partnermatic.com/track/f8e5cK2_afYWvYEyDpqFbfLBXsmX6OzvweCXjD544harJWAD3CYGVNyJq_auHdOYxbKo_bQrdHDebb849GOvsD8rC9G7QFLBX831G31qHZ8mA_c_c?url=https%3A%2F%2Fwww.xcaret.com%2Fes%2F
```

**批量替换链接**:
```python
with open('articles/xcaret-park.html', 'r') as f:
    content = f.read()

old_link = 'https://www.xcaret.com/en/'
new_link = '用户提供的追踪链接'

content = content.replace(old_link, new_link)

with open('articles/xcaret-park.html', 'w') as f:
    f.write(content)
```

### 5. 更新主页 index.html

在 `index.html` 的文章网格中添加文章卡片：

```html
<article class="article-card" data-category="travel">
    <a href="articles/xcaret-park.html" class="article-link">
        <div class="article-image">
            <img src="https://images.unsplash.com/photo-xxx?w=1200&h=600&fit=crop" alt="图片描述" loading="lazy">
        </div>
        <div class="article-content">
            <span class="article-category">Travel & Accommodation</span>
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

**置顶文章**: 将文章卡片放在第一个 `<article class="article-card">` 位置

---

## 关键要点

### 链接注意事项
- ✅ 使用 `target="_blank" rel="noopener noreferrer"`
- ❌ 不要使用 `<mark class="link-highlight">` (会有黄色背景)
- ✅ 使用联盟追踪链接替换原始链接

### 图片使用
- 推荐使用 Unsplash: `https://images.unsplash.com/photo-xxx?w=1200&h=600&fit=crop`
- 封面图: 1200x600
- 正文图: 1200x600

### 分类标签
- Travel & Accommodation (旅游住宿)
- Finance & Insurance (金融保险)
- Entertainment & Tickets (娱乐票务)
- Fashion & Accessories (时尚配饰)
- Health & Beauty (健康美容)
- Home & Garden (家居花园)
- Food & Beverage (美食饮料)

---

## 本次添加的文章

### 1. Hotel Xcaret México
- **文件**: `articles/hotel-xcaret-mexico.html`
- **追踪链接**: hotelxcaret.com
- **日期**: January 20, 2026

### 2. Xcaret Park
- **文件**: `articles/xcaret-park.html`  
- **追踪链接**: xcaret.com
- **日期**: January 25, 2026

---

## 测试验证

本地测试命令:
```bash
cd G:\Opencode_Code\EclipseLane-main
python -m http.server 8080
```

访问: http://localhost:8080

验证项目:
1. 主页文章列表显示新文章
2. 文章页面排版正确
3. 联盟链接可点击跳转
4. 图片正常显示

---

*最后更新：2026-02-27*
