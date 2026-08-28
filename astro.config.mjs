import { defineConfig } from 'astro/config';

// 岁华纪丽网 · Astro 配置
// 主域名 suihuajili.cn（单域名方案：仅在腾讯云注册 .cn，CNNIC 实名后解析）
export default defineConfig({
  site: 'https://suihuajili.cn',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // Pagefind 在 build 后自动建索引（见 package.json 的 postbuild 脚本）
});
