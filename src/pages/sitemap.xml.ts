import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

// 动态站点地图：覆盖首页 / 关于页 / 搜索页 / 全部系列页 / 全部文章页
export const GET: APIRoute = async () => {
  const series = await getCollection('series');
  const posts = await getCollection('posts');

  const paths = [
    '/',
    '/about',
    '/search',
    ...series.map((s) => `/series/${s.slug}`),
    ...posts.map((p) => `/posts/${p.slug}`),
  ];

  const urls = paths
    .map((p) => `  <url><loc>${SITE.url}${p}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
