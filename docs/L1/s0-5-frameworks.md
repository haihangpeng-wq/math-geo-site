---
slug: /L1/s0-5-frameworks
sidebar_position: 5
---

# §0.5 常用框架

> **考场策略：优先套用上述框架，避免零基础计算。** 解析效率依赖对框架内特殊点坐标的熟悉度。

例外情况：仅当满足"参与图形生成最多"原则时可灵活调整。

## §0.5.1 A(0,0) 通用解析框架

已在 §0.2 中介绍。这里给出**万能系的内心有理化版本（IJS 参数化）**：

> **公式卡片**
> $$\tan\frac{B}{2} = t,\quad \tan\frac{C}{2} = s,\quad b = \frac{1}{2}(t^{-1}-t),\quad c = \frac{1}{2}(s^{-1}-s)$$
> $$I\!\left(\frac{t-s}{2},\ -\frac{1+ts}{2}\right),\quad J = \left(\frac{s^{-1}-t^{-1}}{2},\ \frac{-1-s^{-1}t^{-1}}{2}\right)$$
> $$S = \left(\frac{(t-s)(1+ts)^2}{4ts},\ -\frac{(1+ts)^2}{4ts}\right)$$
> $$\text{B 旁心 } J_2(-s^{-1}j,\ s^{-1}i),\quad \text{C 旁心 } J_3(t^{-1}j,\ -t^{-1}i)$$

**附录：以 $(i, j)$ 作为基本变量的巧合点表示**

> **公式卡片**
> $$b - c = \frac{2ij}{-(1+2j)},\quad bc = \frac{(1+j)^2 - i^2}{-(1+2j)}$$
> $$O\!\left(\frac{ij}{1+2j},\ \frac{j^2 - i^2}{2(1+2j)}\right)$$
> $$S\!\left(\frac{ij}{1+2j},\ \frac{j^2}{1+2j}\right),\quad N\!\left(\frac{ij}{1+2j},\ \frac{-i^2}{1+2j}\right)$$
> $$S_d\!\left(\frac{i(i^2+j^2+j)}{i^2+(j+1)^2},\ \frac{-i^2}{i^2+(j+1)^2}\right) \text{（鲨鱼恶魔点）}$$

## §0.5.2 鸡爪圆内心系框架

适合**角分线上有大量巧合点**的高端局框架。

> **公式卡片 — S(0,0) 框架：ISJ 自然有理**
> $$S(0,0),\quad B(-m, n),\quad C(m, n),\quad I(\alpha, \beta),\quad J(-\alpha, -\beta) = -I$$
> $$\alpha^2 + \beta^2 = 1,\quad m^2 + n^2 = 1$$
> $$A = \left(\alpha\beta n^{-1},\ \beta^2 n^{-1}\right)$$
> $$O\!\left(0,\ (2n)^{-1}\right),\quad \text{圆 } ABC: x^2 + y^2 - n^{-1}y = 0$$
> $$H = \left(\alpha\beta n^{-1},\ 2n - \alpha^2 n^{-1}\right)$$
> $$G = \left(\frac{\alpha\beta}{3n},\ \frac{\beta^2 + 2n^2}{3n}\right),\quad N\!\left(0,\ n^{-1}\right) = 2O$$
> $$K = NI \cap \text{圆 } O = \left[\frac{\alpha(1-\beta n)}{n^2 - 2\beta n + 1},\ \frac{\alpha n^{-2}}{n^2 - 2\beta n + 1}\right]$$

## §0.5.5 其他框架

- **$I(0,1)$ 框架**：内心在 $y$ 轴上，$y = 1$ 处。代表例题：P8。
- **三旁心+内心垂心组框架**：四个旁心和内心构成垂心组。
- **无奈框架** $A(-1,0), B(1,0)$：代表例题：25 东南双内心、CTST P16。
- **垂直弦的圆：**

> **公式卡片**
> $$A(-a,0),\ C(c,0),\ B(0,-b),\ D(0,d),\quad ac = bd = 1$$
> $$x^2 + y^2 + (a-c)x + (b-d)y - 1 = 0$$
