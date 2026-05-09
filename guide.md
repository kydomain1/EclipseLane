# comprehensiveworld 项目开发指南

## 目录
- [项目简介](#项目简介)
- [上传新文章（提示词模板）](#上传新文章提示词模板)
- [添加文章详细步骤](#添加文章详细步骤)
- [首页区块说明](#首页区块说明)
- [卡片 HTML 模板](#卡片-html-模板)
- [常见问题解决](#常见问题解决)
- [技术参考](#技术参考)
- [文件结构](#文件结构)

---

## 项目简介

comprehensiveworld 是一个极简风格的生活博客静态网站，使用 HTML5、CSS3、Vanilla JavaScript 构建。

**技术栈：** HTML5 + CSS3 + Vanilla JavaScript（纯静态，无构建工具）

**首页布局：**
- Hero 区域（标题 + 浮动卡片）
- 分类卡片（6 个视觉引导，不可点击）
- Feature 大卡片（2-3 篇重磅推荐）
- Offer 商家卡片（4 篇合作推广）
- Impact 全宽图
- Standards 信任指标
- Insights 三列卡片（常规文章，3 的倍数）
- Final CTA

---

## 上传新文章（提示词模板）

上传新文章时，使用以下提示词格式：

```
新增一篇文章，信息如下：

标题：[文章标题]
分类：[fashion/beauty/home/travel/finance/food/entertainment]
摘要：[一句话描述]
图片：[封面图URL]
文章链接：[articles/xxx.html]
阅读时间：[X min read]

放置位置：[feature / offer / insights]

--- 以下仅 offer 区块需要 ---
商家名称：[品牌名]
商家品类：[品类描述]
CTA文案：[Visit Store / Check Current Offers / Explore Partner Site / View Picks]
```

**放置位置选择建议：**

| 区块 | 适合内容 | 数量 |
|------|----------|------|
| `feature` | 深度评测、重磅推荐 | 2-3 篇 |
| `offer` | 有明确品牌的合作推广 | 4 篇 |
| `insights` | 常规文章、指南、资讯 | 3 的倍数 |

---

## 添加文章详细步骤

### 步骤 1：创建文章 HTML 文件

位置：`articles/xxx.html`

参考现有文章结构，如 `articles/spier-mackay-mens-tailored-fashion-guide.html`

**标准文章结构：**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="文章描述">
    <title>文章标题 - comprehensiveworld</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/article.css">
</head>
<body>
    <header id="header" class="header">
        <div class="container">
            <div class="header-content">
                <a href="../index.html" class="logo">
                    <img src="https://cdn.ultrainfluence.com/uploads/20260422/df9d38e8d246746fcf7f61093067c844d401477b6b6381542499c32732843401.png" alt="CW" class="logo-icon">
                    <span class="logo-text">comprehensiveworld</span>
                </a>
                <nav class="nav-desktop">
                    <a href="../index.html" class="nav-link">Home</a>
                    <a href="../about.html" class="nav-link">About</a>
                    <a href="../contact.html" class="nav-link">Contact</a>
                </nav>
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <span class="menu-icon"></span>
                </button>
            </div>
            <div class="mobile-menu" id="mobileMenu">
                <a href="../index.html" class="mobile-nav-link">Home</a>
                <a href="../about.html" class="mobile-nav-link">About</a>
                <a href="../contact.html" class="mobile-nav-link">Contact</a>
            </div>
        </div>
    </header>

    <div class="container" style="padding-top: 8rem;">
        <a href="../index.html" class="back-link">Back to Articles</a>
    </div>

    <article class="article-detail">
        <div class="container">
            <div class="article-container">
                <span class="article-category-badge">分类名称</span>
                <h1 class="article-detail-title">文章标题</h1>
                <div class="article-meta-info">
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

    <footer>...</footer>
    <script src="../js/main.js"></script>
</body>
</html>
```

### 步骤 2：添加联盟链接

```html
<a href="https://app.partnermatic.com/track/{追踪ID}?url={URL编码后的目标网址}" target="_blank" rel="noopener noreferrer">链接文字</a>
```

### 步骤 3：添加图片

- 封面图：`featured-image` 类，尺寸 1200x600
- 正文图：`article-image` 类，尺寸 1200x600
- 商品图：600x600 正方形

### 步骤 4：在首页添加卡片

根据提示词中指定的 `放置位置`，选择对应区块插入卡片（见下方模板）。

---

## 首页区块说明

### Feature 大卡片（`feature-list`）
- 左图右文，大尺寸
- 放深度评测、重磅推荐
- 通常 2-3 篇

### Offer 商家卡片（`offers`）
- 小卡片，带商家 logo
- 放有明确品牌的合作推广
- 固定 4 篇

### Insights 三列卡片（`insights`）
- 图文卡片，三列排列
- 放常规文章
- 每行 3 篇，可多行

---

## 卡片 HTML 模板

### Feature 大卡片

```html
<a href="articles/xxx.html" class="feature-card reveal">
  <div><img src="封面图URL" alt="描述" /></div>
  <div class="feature-body">
    <div>
      <div class="tag-row">
        <span class="tag orange">分类</span>
        <span class="tag">X min read</span>
        <span class="tag">Affiliate guide</span>
      </div>
      <h3>文章标题</h3>
      <p>文章摘要</p>
    </div>
    <div><span class="btn primary">Read Guide</span></div>
  </div>
</a>
```

### Offer 商家卡片

```html
<a href="articles/xxx.html" class="offer-card reveal">
  <div>
    <div class="merchant">
      <div class="merchant-logo">首字母</div>
      <div><strong>品牌名</strong><span>品类描述</span></div>
    </div>
    <h3>文章标题</h3>
    <p>文章摘要</p>
  </div>
  <span class="btn">CTA文案</span>
</a>
```

### Insights 三列卡片

```html
<a href="articles/xxx.html" class="insight-card reveal">
  <img src="封面图URL" alt="描述" />
  <div class="insight-body">
    <span class="tag orange">分类</span>
    <h3>文章标题</h3>
    <p>文章摘要</p>
    <span class="btn">Read Guide</span>
  </div>
</a>
```

### delay 类（控制动画顺序）

在 class 中加 `delay-1` 到 `delay-4` 控制渐显顺序：
```html
<article class="insight-card reveal delay-1">...</article>
<article class="insight-card reveal delay-2">...</article>
```

---

## 常见问题解决

| 问题 | 解决方案 |
|------|----------|
| 黄底高亮 | 移除 `<mark class="link-highlight">` 标签 |
| 图片不显示 | 使用 Unsplash 或品牌 CDN 图片链接 |
| 排版不一致 | 参考现有文章的 HTML 结构 |
| 本地测试 | `python3 -m http.server 8000` |
| 分类卡片点击无反应 | 正常，分类卡片仅作视觉引导 |
| 文章页头部样式丢失 | 确认引用了 `style.css` + `article.css` |

---

## 技术参考

### 联盟链接格式
```
https://app.partnermatic.com/track/{追踪ID}?url={URL编码后的目标网址}
```

### Unsplash 图片链接
```
https://images.unsplash.com/photo-{图片ID}?w={宽度}&h={高度}&fit=crop
```

### 分类标签
- Fashion & Accessories → `fashion`
- Health & Beauty → `beauty`
- Home & Garden → `home`
- Travel & Accommodation → `travel`
- Finance & Insurance → `finance`
- Food & Beverage → `food`
- Entertainment & Tickets → `entertainment`

### 本地开发
```bash
cd ~/claudecode-code/EclipseLane-mainv2
python3 -m http.server 8000
```
访问：http://localhost:8000

### 验证图片URL
```bash
curl -sI "图片URL" | head -5
# 返回 HTTP/1.1 200 OK 表示图片有效
```

### 检查文章链接完整性
```bash
# 列出首页所有文章链接
grep -o 'articles/[^"]*\.html' index.html | sort -u

# 对比 articles 目录实际文件
diff <(grep -o 'articles/[^"]*\.html' index.html | sort -u) <(ls articles/*.html | sed 's|articles/||' | sort)
```

---

## 文件结构

```
EclipseLane-mainv2/
├── index.html              # 首页（多区块布局）
├── about.html              # 关于页面
├── contact.html            # 联系页面
├── articles/               # 文章详情页
│   ├── spier-mackay-mens-tailored-fashion-guide.html
│   ├── beautybase-fragrance-guide-2026.html
│   └── ...
├── css/
│   ├── style.css           # 全局样式 + 设计系统
│   ├── article.css         # 文章详情页样式
│   └── pages.css           # About/Contact 页面样式
├── js/
│   └── main.js             # 移动菜单 + 滚动渐显动画
├── images/                 # 本地图片（如有）
└── guide.md                # 本文件
```

---

*最后更新：2026-05-09*
