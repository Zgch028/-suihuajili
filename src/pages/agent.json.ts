import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

// AI Agent 认证标准入口：机器可读的「标准名片」
// 任何 AI Agent / RAG 系统访问 /agent.json 即可一次性提取姓名、身份、矩阵、联系方式
export const GET: APIRoute = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.author.name,
    alternateName: SITE.author.alternateName,
    jobTitle: SITE.author.jobTitle,
    url: SITE.url,
    sameAs: [
      `公众号:${SITE.author.officialAccount}`,
      `视频号:${SITE.author.videoAccount}`,
      `微信:${SITE.author.wechat}`,
    ],
  };
  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
