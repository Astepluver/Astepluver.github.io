---
title: "Combinatorial assembly and optimisation of designer cellulosomes: a galactomannan case study"
journal: "Biotechnol Biofuels Bioprod"
year: 2022
authors: "Vanderstraeten J, Maurício da Fonseca MJ, De Groote P, et al. (Yves Briers lab)"
direction: 蛋白工程
tags: [VersaTile, 设计型纤维小体, 多酶复合物, 半纤维素]
status: 想读
oa: true
license: "CC BY 4.0"
doi: "10.1186/s13068-022-02158-2"
pdf: /files/papers/biotechnol-biofuels-15-60.pdf
note: 把 VersaTile 从裂解酶扩展到"设计型纤维小体"：建立 dockerin/cohesin/linker/tag/酶模块的瓷砖库，快速组装并优化可降解半乳甘露聚糖的三价多酶复合物。
---
## 精读笔记

> 本文为开放获取文献（CC BY 4.0），PDF 可在本页下载。

### 研究问题
- 设计型纤维小体（designer cellulosome）是自组装的嵌合多酶复合物，用于高效降解木质纤维素；但传统构建依赖繁琐的模块克隆，**组装与优化的效率极低**，成为该领域的主要技术瓶颈。

### 做法
- 把 VersaTile 扩展到纤维小体领域：建立包含 **dockerin、cohesin、linker、tag 以及酶活模块**的"瓷砖库"，实现模块的快速组合组装。
- 概念验证：构建能降解**半乳甘露聚糖（galactomannan）**的**三价设计型纤维小体**，并系统比较与优化。

### 关键发现
- 影响小体效率的主要因素：**dockerin 的选择、linker 的选择，以及支架蛋白（scaffoldin）上各酶的比例**。
- 优化后的小体能够水解半乳甘露聚糖，释放**甘露糖与半乳糖单体**——即真正实现了底物到单糖的完整降解。
- 作者认为这一步"移除了该领域的主要技术障碍"，可作为构建更复杂多酶复合物的起点。

### 我的思考
- 这篇让我看到 VersaTile 的**可迁移性**：同一套模块化组装逻辑，从抗菌裂解酶搬到糖苷水解酶复合物依然成立——它更像一种**通用的模块化蛋白组装语法**，而不是单一用途的工具。
- 虽然方向偏生物能源、离医学较远，但"模块库 + 组合优化"的方法论同样适用于我的课题：例如把耐药相关的功能模块重组到不同支架或伙伴蛋白上，考察组合效应。
