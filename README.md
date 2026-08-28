# 岁华纪丽网 · 个人数字名片网站（Astro）

基于设计稿落地的可运行 Astro 项目骨架。域名 `suihuajili.com` / `suihuajili.wang`，
核心目的：数字资产 + 搜索引擎引流 + 完整个人名片；并内置 **AI Agent 认证入口**（`/agent.json`）。

## 技术栈

- **Astro 5.x** —— 纯静态、零运行时、对 SEO 最友好
- **Pagefind** —— 构建期自动建索引的站内搜索（零成本、离线可用）
- 结构化数据：**JSON-LD**（每页注入）+ 独立 `/agent.json` 机器可读名片
- 字体：思源宋体（标题）/ 思源黑体（正文）/ Inter（代码），经 Google Fonts 加载

## 本地运行

```bash
npm install
npm run dev        # 启动开发服务器，默认 http://localhost:4321
```

## 构建与搜索索引

```bash
npm run build      # 产物输出到 dist/，并在 postbuild 自动执行 pagefind 建索引
npm run preview    # 本地预览构建产物（此时站内搜索可用）
```

> 开发模式（`npm run dev`）下 Pagefind 索引尚未生成，搜索页会提示「需 build 后预览」。
> 这是正常的——搜索引擎收录、站内搜索、RAG 入口都在 `build` 之后才是完整状态。

## 目录结构

```
岁华纪丽网_astro/
├── astro.config.mjs          # 站点配置（site=主域名，trailingSlash）
├── package.json
├── tsconfig.json
└── src/
    ├── data/site.ts          # 站点级静态配置（作者/矩阵/导航，全局共享）
    ├── styles/global.css     # 设计令牌（红/墨/纸感）+ 基础样式
    ├── content.config.ts     # 内容集合 schema（series / posts 的 frontmatter 规范）
    ├── layouts/BaseLayout.astro
    ├── components/           # Nav / Footer / SeoMeta / JsonLd / SeriesCard / ArticleCard
    ├── content/
    │   ├── series/           # 7 个系列页 Markdown（frontmatter 见下）
    │   └── posts/            # 文章 Markdown（按系列分目录）
    └── pages/
        ├── index.astro       # 首页
        ├── about.astro       # 关于页
        ├── series/[slug].astro   # 系列详情页（动态路由）
        ├── posts/[slug].astro    # 文章详情页（动态路由）
        ├── search/index.astro    # 站内搜索（Pagefind）
        ├── agent.json.ts         # AI Agent 认证入口（机器可读名片）
        └── sitemap.xml.ts        # 动态站点地图
```

## 如何添加内容

### 新增一篇文章

在 `src/content/posts/<系列slug>/` 下新建 `.md`，frontmatter 示例：

```markdown
---
title: 文章标题
date: 2026-06-18
series: dasongjili        # 对应系列页 slug
description: 一句话摘要（列表卡 + meta description 兜底）
tags: [宋文化, 点茶]
---

正文用标准 Markdown 书写……
```

### 新增一个系列

在 `src/content/series/` 下新建 `.md`，frontmatter 示例：

```markdown
---
title: 系列名
eyebrow: SERIES · 宋文化
description: 系列简介
tag: 宋文化 · 生活美学
seoTitle: 系列名 · 副标题｜岁华纪丽
seoDescription: 本页 meta description
seoKeywords: [关键词1, 关键词2]
order: 1                     # 首页系列网格排序
---
```

并在 `src/data/site.ts` 的 `NAV_LINKS` 里补一条导航链接（格式 `/series/<slug>`）。

## 域名与部署

- **主域名** `suihuajili.com`；**`suihuajili.wang` 在 DNS/CDN 层做全站 301 跳转**到主域名（品牌保护 + 防抢注）。
- 部署：海外 Cloudflare Pages / Vercel；国内备案后切又拍云 / 七牛 + 自建。
- 上线后把 `astro.config.mjs` 的 `site` 与 `src/data/site.ts` 的 `url` 改成真实域名，重新 `build`。

## SEO 与 AI Agent 入口（已内置）

- 每页 `<title>` / `meta description` / `meta keywords` / Open Graph / canonical —— 由 `SeoMeta.astro` 统一输出
- 首页与关于页注入 `Person` JSON-LD；系列页注入 `CollectionPage`；文章页注入 `BlogPosting`
- `/agent.json`：任何 AI Agent / RAG 系统访问即可一次性提取姓名、身份、自媒体矩阵、联系方式
- `/sitemap.xml`：构建时动态生成，覆盖全部页面
