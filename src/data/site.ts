// 站点级静态配置 —— 首页 / 关于页 / agent.json / sitemap 共享
export const SITE = {
  name: '岁华纪丽',
  domain: 'suihuajili.cn',
  url: 'https://suihuajili.cn',
  tagline: '个人数字名片 · 内容阵地 · 搜索引擎可寻',
  description:
    '一个完全属于你的内容阵地。让搜索引擎找到你，让陌生人在三分钟内读懂你——你是谁、在做什么、能提供什么价值。',
  author: {
    name: '赵国成',
    alternateName: ['岁华纪丽', '龙山大佛'],
    jobTitle: '监理员 / 内容创作者',
    wechat: '赵国成',
    officialAccount: '岁华纪丽',
    videoAccount: '龙山大佛',
    bio: '赵国成，公众号「岁华纪丽」主理人，视频号「龙山大佛」。把宋人的生活美学与当代生活方式连接起来，用文字、视频与线下体验，陪读者把日子过得更讲究；同时用 AI 工具把学习变成可复用的方法。',
    career:
      '现职山西安宇建设监理有限公司监理员；业余主理公众号「岁华纪丽」与视频号「龙山大佛」，长期分享宋人生活美学、十二生肖职场人格与 AI 学习方法论。',
  },
  // 顶部导航（首页用完整链接组；系列/关于页只保留 logo + 返回首页）
  matrix: [
    { label: '公众号 · 岁华纪丽', note: '岁华纪丽' },
    { label: '视频号 · 龙山大佛', note: '龙山大佛' },
    { label: '微信 · 赵国成', note: '赵国成' },
  ],
} as const;

// 顶部导航链接（系列顺序与设计稿一致）
export const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '大宋纪丽', href: '/series/dasongjili' },
  { label: '十二生肖', href: '/series/shiershengxiao' },
  { label: '二十四节气', href: '/series/ershisijieqi' },
  { label: '一宋一词', href: '/series/yisongyici' },
  { label: '纪丽生活馆', href: '/series/jilishenghuoguan' },
  { label: 'AI学习', href: '/series/aixuexi' },
  { label: '视频号', href: '/series/shipinhao' },
] as const;
