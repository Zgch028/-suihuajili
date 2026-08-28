import { defineConfig } from 'astro/config';

// 岁华纪丽网 · Astro 配置
// 主域名 suihuajili.com；suihuajili.wang 在 DNS / CDN 层做全站 301 跳转
export default defineConfig({
  site: 'https://suihuajili.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // Pagefind 在 build 后自动建索引（见 package.json 的 postbuild 脚本）
});
