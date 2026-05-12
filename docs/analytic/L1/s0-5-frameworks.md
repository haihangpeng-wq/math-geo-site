---
slug: /analytic/L1/s0-5-frameworks
sidebar_position: 5
---

# §0.5 常用框架

**优先套用已知框架**，避免造轮子，即零基础计算。 解析效率依赖对框架内特殊点坐标的熟悉度。

例外情况：仅当满足**参与图形生成最多**原则时，可灵活调整（简洁优先）。

## A(0,0) 框架 ：默认起手式与通用选择

该框架也称万能系。通过设定 $A$ 点为原点，将底边对齐在 $y = -1$ 线上，极大简化了切线与内心的表达。

> **公式卡片 —A(0,0) 基础设定**
> $$
> \begin{aligned}
> A &= (0, 0), \quad B = (-b, -1), \quad C = (c, -1) \\[0.5em]
> \tan B &= b^{-1}, \quad \tan C = c^{-1} \\[0.5em]
> \text{外心：}O &= \left(\dfrac{-b+c}{2},\ -\dfrac{1+bc}{2}\right) \\[0.5em]
> \text{垂心：}H &= (0, -1+bc)G\!\left(\frac{-b+c}{3},\ -\frac{2}{3}\right)\quad \text{九点圆圆心：}\left(\frac{-b+c}{2},\ -\frac{3-bc}{2}\right)
> \end{aligned}
> $$

至于内心的表达，我们有**万能系的内心有理化版本（IJS 参数化）**：

> **公式卡片**
> $$
> \begin{aligned}
> \tan\dfrac{B}{2} &= t, \quad \tan\dfrac{C}{2} = s \\[0.8em]
> b &= \dfrac{1}{2}(t^{-1}-t), \quad c = \dfrac{1}{2}(s^{-1}-s) \\[0.8em]
> I &= (i, j)=\left(\dfrac{t-s}{2},\ -\dfrac{1+ts}{2}\right) \\[0.8em]
> J &= \left(\dfrac{s^{-1}-t^{-1}}{2},\ \dfrac{-1-s^{-1}t^{-1}}{2}\right) \\[0.8em]
> S &= \left(\dfrac{(t-s)(1+ts)^2}{4ts},\ -\dfrac{(1+ts)^2}{4ts}\right) \quad \text{(南极点)} 
> \end{aligned}
> $$

**附录：以内心坐标 $I(i, j)$ 作为基本变量的巧合点表示**

> **公式卡片**
> $$
> \begin{aligned}
> b - c &= \dfrac{2ij}{-(1+2j)} \\[0.8em]
> bc &= \dfrac{(1+j)^2 - i^2}{-(1+2j)} \\[0.8em]
> O &= \left(\dfrac{ij}{1+2j},\ \dfrac{j^2 - i^2}{2(1+2j)}\right) \\[0.8em]
> S &= \left(\dfrac{ij}{1+2j},\ \dfrac{j^2}{1+2j}\right) \\[0.8em]
> J_2 &= (-s^{-1}j,\ s^{-1}i) \quad \text{(B 旁心)} \\[0.8em]
> J_3 &= (t^{-1}j,\ -t^{-1}i) \quad \text{(C 旁心)}\\[0.8em]
> N &= \left(\dfrac{ij}{1+2j},\ \dfrac{-i^2}{1+2j}\right) \\[0.8em]
> S_d &= \left(\dfrac{i(i^2+j^2+j)}{i^2+(j+1)^2},\ \dfrac{-i^2}{i^2+(j+1)^2}\right) \quad \text{（鲨鱼恶魔点）}
> \end{aligned}
> $$

## 鸡爪圆内心系框架

适合**角分线上有大量巧合点**的高端局框架。

> **公式卡片 — S(0,0) 框架：ISJ 自然有理**
> $$
> \begin{aligned}
> S &= (0,0) \\[0.5em]
> B &= (-m, n), \quad C = (m, n) \\[0.5em]
> I &= (\alpha, \beta), \quad J = (-\alpha, -\beta) = -I \\[0.5em]
> \text{满足：} & \alpha^2 + \beta^2 = 1, \quad m^2 + n^2 = 1 \\[0.5em]
> A &= \left(\alpha\beta n^{-1},\ \beta^2 n^{-1}\right) \\[0.5em]
> O &= \left(0,\ (2n)^{-1}\right) \\[0.5em]
> \text{圆 } ABC &: x^2 + y^2 - n^{-1}y = 0 \\[0.5em]
> H &= \left(\alpha\beta n^{-1},\ 2n - \alpha^2 n^{-1}\right) \\[0.5em]
> G &= \left(\dfrac{\alpha\beta}{3n},\ \dfrac{\beta^2 + 2n^2}{3n}\right) \\[0.5em]
> N &= \left(0,\ n^{-1}\right) = 2O \\[0.5em]
> K &= \left[\dfrac{\alpha(1-\beta n)}{n^2 - 2\beta n + 1},\ \dfrac{\alpha n^{-2}}{n^2 - 2\beta n + 1}\right]
> \end{aligned}
> $$

## 其他框架

- **$I(0,1)$ 框架**：内心在 $y$ 轴上，$y = 1$ 处。代表例题：P8。
- **三旁心+内心垂心组框架**：四个旁心和内心构成垂心组。
- **无奈框架** $A(-1,0), B(1,0)$：代表例题：25 东南双内心、CTST P16。
- **垂直弦的圆：** 如下：

> **公式卡片 垂直弦的圆**
> $$
> \begin{aligned}
> & A(-a,0),\ C(c,0), \quad B(0,-b),\ D(0,d) \\[0.5em]
> & \text{满足：} ac = bd = 1 \\[0.5em]
> & \text{圆方程：} x^2 + y^2 + (a-c)x + (b-d)y - 1 = 0
> \end{aligned}
> $$