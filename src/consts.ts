export const SITE = {
  /** 站点名（哥特字体展示） */
  title: 'The Medical Field of Astepluver',
  description:
    '基础医学（病原生物学）方向大四学生：记录细菌耐药性研究路上的学习动态与文献笔记。',
  author: 'Astepluver',
  url: 'https://Astepluver.github.io',
};

/** 导航标签：英文 + 哥特字体展示 */
export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/feed', label: 'Updates' },
  { href: '/papers', label: 'Library' },
  { href: '/search', label: 'Search' },
  { href: '/links', label: 'Links' },
  { href: '/about', label: 'About' },
];

/**
 * 友链：新增朋友时在这里加一条即可。
 * read 为可选的「推荐阅读」条目（指向朋友某篇具体文章）。
 */
export const FRIENDS = [
  {
    name: '令雨',
    url: 'https://lingyu061126.github.io/',
    desc: '一名普通的人类观察员 · 电气专业本科生的学习笔记与碎碎念（电磁场、概率统计、微积分）',
    read: {
      label: '微积分证明（1）',
      url: 'https://lingyu061126.github.io/2026/02/25/%E5%BE%AE%E7%A7%AF%E5%88%86%E8%AF%81%E6%98%8E%EF%BC%881%EF%BC%89/',
    },
  },
  {
    name: '电子鱼',
    url: 'https://ff66ccff.github.io/',
    desc: '编程与生活随笔 · Vibe Coding、C++ 竞赛笔记与大学日常',
    read: {
      label: 'Vibe Coding 入门指南（速成路线）',
      url: 'https://ff66ccff.github.io/2026/09/08/%E9%80%9F%E6%88%90%E8%B7%AF%E7%BA%BF/',
    },
  },
];

/** 站点统一免责声明 */
export const DISCLAIMER =
  '本站内容为个人学习记录与整理，仅供学习交流，不构成任何医疗建议。公开分享仅限开放获取（OA）文献。';

/** 本站的 AI 技术协作署名 */
export const AI_CREDIT = {
  role: 'AI 技术协作',
  name: 'DeepSeek Harness',
  model: 'DeepSeek v4.1',
  note: '站点架构、界面样式、内容数据格式与自动部署流程由 AI 协作实现；所有内容的选题、阅读、判断与写作均出自站主本人。',
};

/**
 * giscus 评论配置。
 * 启用方法：仓库 Settings → General 勾选 Discussions 开启讨论区；
 * 然后到 giscus.app 按提示生成配置，把其中 data-category-id 的值填到下方 categoryId。
 * categoryId 为空时评论模块自动隐藏。
 */
export const GISCUS = {
  repo: 'Astepluver/Astepluver.github.io',
  repoId: 'R_kgDOUTHnJg',
  category: 'General',
  categoryId: '',
  mapping: 'pathname',
  lang: 'zh-CN',
};
