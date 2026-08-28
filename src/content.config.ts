import { defineCollection, z } from 'astro:content';

// 内容集合 schema —— 设计稿里每页 frontmatter 的单一事实来源
// 系列页（series）与文章（posts）各自独立，文章通过 series 字段归属系列

const series = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),              // 系列名（页面 H1）
    eyebrow: z.string(),            // 系列页头小标签，如「SERIES · 宋文化」
    description: z.string(),        // 系列简介（同时用于 series 页头与 meta description 兜底）
    tag: z.string(),                // 卡片上的分类标签，如「宋文化 · 生活美学」
    seoTitle: z.string(),           // 本页 <title>
    seoDescription: z.string(),     // 本页 meta description
    seoKeywords: z.array(z.string()), // 本页 meta keywords
    order: z.number().default(99),  // 首页系列网格排序
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),          // 文章日期 YYYY-MM-DD
    series: z.string(),             // 对应 series 的 slug
    description: z.string(),        // 摘要（列表卡 + meta description 兜底）
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),   // 封面图（可选）
    volume: z.string().optional(),   // 年卷标识，如「公元969年卷」
  }),
});

export const collections = { series, posts };
