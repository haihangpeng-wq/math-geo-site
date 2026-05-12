
# §3.1 关于单位圆

单位圆解析被复数上位压制。如果你的题目就一个圆，建议直接去学复数。


## §3.2 万能系 A(0,0) 框架：OHG 自然有理

> **公式卡片**
> $$A(0,0),\quad B(-b,-1),\quad C(c,-1),\quad \tan B = b^{-1},\ \tan C = c^{-1}$$
> $$O\!\left(\frac{-b+c}{2},\ -\frac{1+bc}{2}\right)\quad H(0,\ -1+bc)$$
> $$G\!\left(\frac{-b+c}{3},\ -\frac{2}{3}\right)\quad \text{九点圆圆心：}\left(\frac{-b+c}{2},\ -\frac{3-bc}{2}\right)$$

这些点的坐标都是 b, c 的有理函数，计算很流畅。


## §3.3 万能系：IJS 的形式有理化

> **公式卡片**
> $$\tan\frac{B}{2} = t,\quad \tan\frac{C}{2} = s,\quad b = \frac{1}{2}(t^{-1}-t),\quad c = \frac{1}{2}(s^{-1}-s)$$
> $$I\!\left(\frac{t-s}{2},\ -\frac{1+ts}{2}\right),\quad J = \left(\frac{s^{-1}-t^{-1}}{2},\ \frac{-1-s^{-1}t^{-1}}{2}\right)$$
> $$S = \left(\frac{(t-s)(1+ts)^2}{4ts},\ -\frac{(1+ts)^2}{4ts}\right)$$
> $$\text{B 旁心 } J_2(-s^{-1}j,\ s^{-1}i),\quad \text{C 旁心 } J_3(t^{-1}j,\ -t^{-1}i)$$

以 (i, j) 为基本变量的巧合点表示，已在 §0.5.1 附录中列出。
## §3.2 其他的圆

## 3.5.A 垂直弦的圆

> **公式卡片**
> $$A(-a,0),\ C(c,0),\ B(0,-b),\ D(0,d),\quad ac = bd = 1$$
> $$x^2 + y^2 + (a-c)x + (b-d)y - 1 = 0$$

## 3.5.B 共轴圆系

> **公式卡片**
> $$g = f_1 + \lambda \cdot L_t$$

其中 $L_t$ 是定根轴，$f_1$ 是共根轴的任意定圆。**能用就用，用了绝对不亏。**

## 3.5.C 点圆共轴圆系

记圆 g 在 P(x₁, y₁) 的切线为 $L_t: y - kx - (y_1 - kx_1) = 0$，点圆 $z = (x-x_1)^2 + (y-y_1)^2 = 0$，则

> **公式卡片**
> $$g = z + \lambda \cdot L_t = 0$$

验两圆相切的利器：已知切点，验证 $\lambda_P = \lambda_Q$。

## 3.5.D 悬浮的定圆

**方法①：四边形版本**

> **公式卡片**
> $$g = \lambda_1 f_1 + \lambda_2 \cdot \frac{AC \cdot BD}{AB \cdot CD} + \lambda_3 \cdot \frac{AD \cdot BC}{AB \cdot CD} = 0$$

**方法②：三角形版本**

> **公式卡片**
> $$g = \lambda_1 \cdot AB \cdot BC + \lambda_2 \cdot AC \cdot BC + \lambda_3 \cdot AB \cdot AC = 0$$

要求 $x^2$ 和 $y^2$ 系数相等，$xy$ 系数为零，解出参数。
