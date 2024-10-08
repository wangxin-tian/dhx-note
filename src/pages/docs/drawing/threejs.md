# Three

## Three相比WebGL的优势

Three.js提供了一系列简化的API和工具，使得创建三维图形更加容易的展现在浏览器端。其抽象了底层的复杂性，提供了简单、一致的接口。提供基本的渲染功能之外，还包括了丰富的扩展，如光照、贴图、粒子系统等，可以满足不同类型的三维图形需求。

## 安装环境

一、npm安装

`npm i -S three dat.gui`

二、CDN引入

```html
1.<script type="importmap">
2.  {
3.    "imports": {
4.      "three": "https://unpkg.com/three@<version>/build/three.module.js",
5.      "three/addons/": "https://unpkg.com/three@<version>/examples/jsm"
6.    }
7.  }
8.</script>
```

## 基本组件和类

### 一、Three.js的基本组件有

场景(Scene)、相机(Camera)、渲染器(Renderer)；

### 二、常见的类

Object3D、BufferGeometry、Geometry、BufferAttribute、Layers、Raycaster等；

- Object3D类：Object3D是ThreeJs中对物体抽象的基类,包括相机和灯光都是Object3D的子类.一般情况下,我们不会直接使用这个类,对于构造物体,一般我们都是使用的Mesh.
- BufferGeometry类：是面片、线或点几何体的有效表述.包括顶点位置,面片索引、法相量、颜色值、UV坐标和自定义缓存属性值.使用BufferGeometry可以有效减少向 GPU 传输上述数据所需的开销.
- Geometry类：Geometry 是对 BufferGeometry 的替代,Geometry利用Vector3或Color存储了几何体的相关 attributes(如顶点位置,面信息,颜色等),但比起BufferGeometry更容易读写,但是运行效率不如有类型的队列.
- BufferAttribute类：这个类用于存储与BufferGeometry相关联的attribute(例如顶点位置向量,面片索引,法向量,颜色值,UV坐标以及任何自定义attribute).利用BufferAttribute,可以更高效的向GPU传递数据.
  
:::info
【在BufferAttribute中,数据被存储为任意长度的矢量(通过itemSize进行定义),下列函数如无特别说明, 函数参数中的index会自动乘以矢量长度进行计算. 当想要处理类似向量的数据时, 可以使用在Vector2,Vector3,Vector4以及Color这些类中的.fromBufferAttribute(attribute,index) 方法来更为便捷地处理.】
:::

- Layers类：Layers对象为Object3D分配1个到32个图层.32个图层从0到31编号标记.在内部实现上,每个图层对象被存储为一个bit mask,默认的,所有Object3D对象都存储在第0个图层上.图层对象可以用于控制对象的显示.当camera的内容被渲染时与其共享图层相同的物体会被显示.每个对象都需要与一个camera共享图层.每个继承自Object3D的对象都有一个Object3D.layers对象.
- Raycaster类：这个类用于进行raycasting(光线投射）.光线投射用于进行鼠标拾取(在三维空间中计算出鼠标移过了什么物体).

### 三、简述场景、相机、光照

- 场景：是Three.js 中所有 3D 对象的容器。它定义了 3D 空间中的位置、方向和光照。
- 相机：定义了 3D 场景中的视角。通过设置相机的位置和角度，可以控制场景中的视觉效果。
- 渲染器：将场景和相机中的 3D 对象渲染到屏幕上。

Three.js 提供了多个渲染器，包括 CanvasRenderer、WebGLRenderer 和 SVGRenderer。

### 四、初始化流程

创建场景 > 创建相机视点 > 创建渲染器 > 创建几何体和材质 > 创建物体 > 将物体添加到场景 > 初始化渲染器 > 将渲染器添加到页面

```js
//1.创建场景
const scene = new THREE.Scene();

//2.创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//设置相机位置
camera.position.set(0, 0, 10);

//将相机添加到场景
scene.add(camera);

//创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

//根据几何体和材质创建物体
const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

//将物体加入到场景
scene.add(mesh);

//初始化渲染器
const render = new THREE.WebGLRenderer();

//设置渲染器的尺寸
render.setSize(window.innerWidth, window.innerHeight);

//使用渲染器，通过相机将场景渲染进来
render.render(scene, camera);

//将webgl渲染的canvas内容添加到body上
document.getElementById("three_div").appendChild(render.domElement);
```

### 五、创建复杂的3D模型和场景

可以通过加载外部3D模型文件来创建复杂的模型，如.obj或.fbx文件。可以使用Three.js提供的各种几何体工具来构建自定义模型。对于复杂的场景，可以通过管理多个场景对象、使用光源和阴影、应用材质和纹理等来实现。

**常用的模型导入器有：**
GLTFLoader GLTF模型加载器、OBJLoader OBJ模型加载器、STLLoader STL模型加载器、 FBXLoader动画模型加载器等等。
