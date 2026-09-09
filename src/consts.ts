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
  { href: '/about', label: 'About' },
];

/** 站点统一免责声明 */
export const DISCLAIMER =
  '本站内容为个人学习记录与整理，仅供学习交流，不构成任何医疗建议。公开分享仅限开放获取（OA）文献。';

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
