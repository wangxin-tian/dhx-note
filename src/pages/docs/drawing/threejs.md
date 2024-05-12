# Three

## 安装环境

`npm i -S three dat.gui`

## 初始化流程

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
