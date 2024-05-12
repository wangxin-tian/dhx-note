# webGL 基础

## 简单介绍

1. canvas 画布 二维 Canvas api 三维 web GL api
2. canvas.getContext('webgl');
3. canvas.getContext('webgl2');
4. webgl 是绘图协议，结合 html 显示 3d 图像
5. 可实现功能：数据可视化（图表）、图形/ 游戏引擎、图形渲染、地图、VR、场景展示、城市规划
6. 优势：内嵌在浏览器
7. 着色器是以字符串形式存储在 js 中
8. 开源框架的使用，避免兼容逻辑的麻烦

### 常见的 webGL 框架

- three — webGL 库
- Babylon — 图像引擎
- kick — 游戏引擎
- clayGL — 3D 应用
- playCanvas — 网络游戏
- WebGLStudio & Litescene — 图像编辑器
- Luma — 数据可视化
- A-Frame — AR

## 新的开始

开启一个 webgl 除了原生提供的 api 还需要实现两 556688 个基础功能来减少开发流程中的重复代码：

1. 通过上下文、顶点着色器和片元着色器片段(gl, vertex, fragment)来初始化渲染器；
2. 创建矩阵功能函数：平移、旋转、归一、点叉等；

这里的初始化过程其实就是将着色器代码关联着色器，然后将代码编译后绑定到一个新的程序中并使用它，而功能函数则是将三维信息做了一个可视化的形变效果。

```js
/** 初始化着色器 */
function initShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE) {
	if (!gl) {
		alert("无法初始化webgl");
		return;
	}

	// 创建着色器
	const vertexShader = gl.createShader(gl.VERTEX_SHADER);
	const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

	// 关联着色器和着色器源码
	gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE);
	gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE);

	// 编译着色器
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);

	// 创建program
	const program = gl.createProgram();

	// 指定program的着色器
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);

	// 关联着色器和program
	gl.linkProgram(program);

	// 使用着色器
	gl.useProgram(program);

	return program;
}
```

## 绘制一个点

创建一个顶点着色器

```js
const VERTEX_SHADER_SOURCE = `
  void main() {
    gl_Position = vec4(0.0,0.0,0.0,1.0);
    gl_PointSize = 100.0;
  }
`;
```

创建一个片元着色器

gl_PointCoord和gl_FragCoord是内置变量，gl_PointCoord表示当前片元在点上的位置，gl_FragCoord表示当前片元在屏幕上的位置。

```js
const FRAGMENT_SHADER_SOURCE = `
  precision lowp float;
  float distanceSelf(vec2 a, vec2 b) {
    float x = a.x - b.x;
    float y = a.y - b.y;

    float v = x * x + y * y;

    return sqrt(v);
  }

  void main() {
    // 计算距离
    // float dis = distance(gl_PointCoord, vec2(0.5,0.5));
    float dis = distanceSelf(gl_PointCoord, vec2(0.5,0.5));

    if (dis > 0.5 || (dis < 0.4 && dis > 0.3) || dis < 0.2) {
      discard; // 丢弃片元
    }
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);
  }
`;
```

绘制

```js
/**
 * void gl.drawArrays(mode, first, count);
 * mode: 指定绘制的方式，如点、线、三角形等
 * first: 指定从哪个顶点开始绘制
 * count: 指定绘制需要使用到多少个顶点
 */

const program = initShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE); 初始化着色器

gl.drawArrays(gl.POINTS, 0, 1); // 绘制
```
