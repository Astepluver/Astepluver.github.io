---
title: "Machine learning-guided evolution of pyrrolysyl-tRNA synthetase for improved incorporation efficiency of diverse noncanonical amino acids"
journal: "Nature Communications"
year: 2025
authors: "Zhang Q, Jiang L, Niu Y, et al. (Haoran Yu lab)"
direction: 蛋白工程
tags: [PylRS, 遗传密码扩展, FFT-PLSR, 零样本预测, 定向进化]
status: 精读
oa: true
license: "CC BY 4.0"
doi: "10.1038/s41467-025-61952-2"
pdf: /files/papers/natcommun-16-6648.pdf
note: 用「小数据有监督模型（FFT-PLSR）+ 零样本深度模型（ESM-1v / MutCompute / ProRefiner）」挖掘 PylRS 的 tRNA 结合域，得到 Com2-IFRS：非天然氨基酸掺入效率较起点提升 30.8 倍，且突变可移植到 7 种衍生酶、覆盖 6 类非天然氨基酸。
---
## 精读笔记

> 本文为开放获取文献（CC BY 4.0），PDF 可在本页下载；以下为我的阅读整理。

### 研究问题
- PylRS/tRNA<sup>Pyl</sup> 是遗传密码扩展最常用的正交对（已有 300 余种非天然氨基酸 ncAA 被掺入），但**大多数 ncAA 的掺入产量偏低**。
- 以往的工程化多集中在**催化域（CD）**以扩展底物谱；**tRNA 结合域（TBD：N 端域 + linker + 部分 CTD）**的突变虽不直接参与催化，却能提升掺入效率，且因结构上与 CD 相对分离而**具备跨变体可移植性**——但已知的有益位点很少。

### 方法：三段式机器学习路线
1. **有监督小数据探索组合空间**：以 IFRS（Mm PylRS N346I/C348S，底物换用更便宜的 3BrF）为起点，汇总 12 个已报道 N 端单突变的数据 → **FFT-PLSR**（AAindex 编码 + FFT 变换 + PLS 回归）预测 2¹²=4096 个组合；用 25 个双/三突变作测试集（R²=0.843），扩充训练集后预测 top8 → **Com1-IFRS**（D2N/V31I/T56P/R61K/H62Y/T122S/S193R），SCS 效率较 IFRS 提升 **11 倍**。
2. **零样本深度模型找新位点**：ESM-1v（序列）、MutCompute（结构）、ProRefiner（逆折叠，输入 AlphaFold3 预测结构）共构建并测试 95 个单突变；随后用三编码 FFT-PLSR（R²=0.926）扫描全 TBD，并对 9 个位点做饱和突变绘制"可突变性图谱"，把空间收敛到约 **11,520 个组合**；以 92 个双突变训练、测试集 R²=0.729，预测 top20 全部实测（15 个提升 >2 倍）→ **Com2-IFRS**（N7Y/H63L/K67N/V74W），较 IFRS 提升 **30.8 倍**，荧光强度已接近野生型 sfGFP。
3. **通用性验证**：把 Com1/Com2 移植到 7 种 PylRS 衍生/嵌合酶，覆盖 Phe、Tyr、Trp、Cys、His、Lys 六类 ncAA 衍生物；对连续 2–5 个琥珀密码子的抑制效率提升 53–122 倍；应用示例是把 3-甲基组氨酸装进肌红蛋白 H93 位点，产量由 4.5 提升到 **28.3 mg/L**。

### 机制解释（计算为主）
- 全长 Mm PylRS 不溶、缺乏晶体结构 → 用 **AlphaFold3** 建模，再做 50 ns 与 200 ns 分子动力学。
- 结论指向**反应构象**而非结合强度：Com2 缩短了 tRNA A76 的 3′-OH 与 Pyl-AMP 羧基碳之间的距离（<4 Å 的快照数显著增多）、形成新的氢键与盐桥网络，并增强了域间动态耦合；而 tRNA 亲和力并未提高（K_m 反而略升）。

### 我的评价与保留
- **亮点**：TBD 突变"可移植到不同 CD 背景"的思路很有价值；小数据 + 特征工程（FFT-PLSR）在 4096 组合空间里跑赢零样本大模型；论文如实报告了失败案例（未见位点预测 15/15 失败、ESM 系列表现不佳）。
- **需留意**：① 用"归一化到 cAA 掺入"来处理误掺入，产生了数百乃至数千倍的夸张数字，**真实蛋白产量提升（约 2–40 倍）更可信**；② 主动学习式流程存在评估乐观偏差（训练/测试集由作者按已知改进突变设计，11,520 空间只实测 top20）；③ 机制结论主要来自预测结构与 MD，属于**计算假说**；④ SCS 荧光提升（至 101.9 倍）远大于 kcat/Km 提升（1.4–8.8 倍），作者归因于 N 端规则影响半衰期与 ATP 水解背景干扰——提示部分"提升"可能来自表达量而非催化本身。
- **方法论层面的启发**：蛋白语言模型更适合充当**编码器**（接入 few-shot / 回归框架），而不是直接做零样本点突变预测。
