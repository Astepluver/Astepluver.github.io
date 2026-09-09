---
title: "Rapid determination of anti-tuberculosis drug resistance from whole-genome sequences"
journal: "Antimicrob Agents Chemother"
year: 2015
authors: "Coll F, et al."
direction: 分枝杆菌耐药
tags: [TB-Profiler, WGS, 方法学]
status: 精读
oa: true
doi: "10.1128/AAC.03493-14"
note: TB-Profiler 原始方法学论文：把已知耐药位点整理为数据库，直接由全基因组序列预测 11 种抗结核药物的耐药表型。方法思路值得精读。
---
## 精读笔记

- 方法：WGS 短读段 → 比对 → 已知位点库比对 → 耐药预测
- 判读性能可量化：设 TP/TN/FP/FN 分别为真阳/真阴/假阳/假阴，则灵敏度与特异度为
  $$Se=\frac{TP}{TP+FN},\qquad Sp=\frac{TN}{TN+FP}$$
  实际工作中常以药敏表型为金标准评估基因型预测的 $Se/Sp$，并报告 95% CI
- 局限：依赖「已知位点」，新型耐药机制会被漏判
- 启发：数据库维护是持续工程
