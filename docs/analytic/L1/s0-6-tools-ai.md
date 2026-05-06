---
slug: /analytic/L1/s0-6-tools-ai
sidebar_position: 6
---

# §0.6 程序 / AI 的使用

在 AI 时代，**结果简单即为已知**。如果某个公式的结果简洁、优美，你就应该把它当作已知来用。至于推导过程——你可以让 AI 或程序代劳。

### NumberEmpire 方程求解器

🔗 **网址：** [https://www.numberempire.com/equationsolver.php](https://www.numberempire.com/equationsolver.php)

> **NumberEmpire 语法卡片**
> - **乘号 `*` 绝不可省略**：必须输入 `2*x` 而非 `2x`。
> - **区分大小写**：$f$ 与 $F$ 是完全不同的变量。
> - **变量陷阱**：**$E$ 是普通变量，$e$ 是自然对数底 $2.718...$！** 
> - **方程连接**：多个方程之间用英文逗号 `,` 分隔。
> - **常用指令**：直接在框内输入联立方程组，点击 `Solve` 即可获得解析解。

---

### WolframAlpha

🔗 **网址：** [https://www.wolframalpha.com/](https://www.wolframalpha.com/)

> **WolframAlpha语法卡片**
> - **化简**：`Simplify[...]` —— 用于压缩极其复杂的解析结果。
> - **因式分解**：`Factor[...]` —— 寻找繁琐判别式 $\Delta$ 中的因式（如是否含 $k^2+1$）。
> - **解方程**：`Solve[...]` —— 求解带有参数的复杂方程。

---

### AI 大模型 (LLMs)‘’
- **豆包 (Doubao)**
  🔗 **网址：** [https://www.doubao.com/](https://www.doubao.com/)

- **ChatGPT**
  🔗 **网址：** [https://chatgpt.com/](https://chatgpt.com/)

- **Gemini**
  🔗 **网址：** [https://gemini.google.com/](https://gemini.google.com/)、、

> **大模型技巧卡片**
>
> 当公式极其复杂导致在线工具失效时，可以要求 AI：
>
> “请使用 Python 的 SymPy 库，帮我化简这条抛物线与直线联立后的韦达定理表达式。”
## 变量名建议

手写可以设 $x_1, y_1$，但程序里建议设大写 $T$ 和小写 $t$，或者 $P, Q$ 等单字母。

## AI 补充公式示例：等角共轭坐标

$P(x,y)$ 在 $A(0,0)$，$B(-b,-1)$，$C(c,-1)$ 框架下的等角共轭点 $I_P$：

> **公式卡片 等角共轭点**
>
> $$X_{I_P} = \dfrac{2(1+y)(my - nx)}{\mathcal{P}(P)}$$
>
> $$Y_{I_P} = \dfrac{2(1+y)(mx + ny)}{\mathcal{P}(P)}$$'
>
>其中 $O(m,n)$ 为 $\triangle ABC$ 的外心坐标，$\mathcal{P}(P)$ 表示 $P$ 对圆 $O$ 的幂。



特别地，若 $A = 0$ 且 $\text{Im}(B) = \text{Im}(C) = -1$，则

$$P^* = \dfrac{2i(1+y)O\bar{P}}{\mathcal{P}(P)}$$
