import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * ============================================================
 * 博客内容数据格式定义（第③阶段）
 * ------------------------------------------------------------
 * 「学习动态」与「文献库」的内容都以 Markdown 文件存放，
 * 每条内容都必须符合下面定义的字段格式（漏填会在构建时报错提醒）。
 * ============================================================
 */

/** 学习动态：一条动态 = 一个 Markdown 文件，正文即动态文字 */
const feed = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/feed' }),
  schema: z.object({
    /** 可选标题；不写则以纯文字形式展示（更像朋友圈） */
    title: z.string().optional(),
    /** 日期：格式 YYYY-MM-DD */
    date: z.coerce.date(),
    /** 栏目：影响卡片上的分类标签颜色与筛选 */
    kind: z.enum(['学习打卡', '文献速览', '实验随想', '科研进展', '随想']),
    /** 附加标签，可有多个 */
    tags: z.array(z.string()).default([]),
    /** 可选配图：放在 public/images/ 下的文件路径，如 /images/xxx.jpg */
    image: z.string().optional(),
    /** 草稿：为 true 时不显示（先写半截也不怕） */
    draft: z.boolean().default(false),
  }),
});

/** 文献卡片：一篇文献 = 一个 Markdown 文件，正文可写精读笔记 */
const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    /** 文献标题 */
    title: z.string(),
    /** 期刊名 */
    journal: z.string(),
    /** 发表年份（数字） */
    year: z.number().int().min(1900).max(2100),
    /** 作者（可选，如 "第一作者 et al."） */
    authors: z.string().optional(),
    /** 研究方向（用于过滤），建议用固定几个词保持整洁 */
    direction: z.string(),
    /** 标签 */
    tags: z.array(z.string()).default([]),
    /** 阅读状态 */
    status: z.enum(['精读', '在读', '想读']).default('想读'),
    /** 是否为开放获取（OA）文献 */
    oa: z.boolean().default(false),
    /** DOI：如 10.xxxx/xxxxx，将自动生成官方「在线阅读」链接 */
    doi: z.string().optional(),
    /** PDF 路径：把 PDF 放到 public/files/papers/ 后填相对路径，如 /files/papers/xxx.pdf */
    pdf: z.string().optional(),
    /** 封面图（可选）：默认使用渐变色封面 */
    cover: z.string().optional(),
    /** 一句话点评/笔记摘要，显示在卡片上 */
    note: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { feed, papers };
