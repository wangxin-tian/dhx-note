# dart

如果你已经有了js的基础，那么学习dart会非常轻松。

简介：

```dart
// 简要评价Dart语言特性
// 入门flutter的语言，用于原生开发
void main() {
  // 1. 语法：简洁且易读
  // 2. 类型系统：强类型，支持泛型和sound null safety
  // 3. 异步编程：支持async/await
  // 4. 工具支持：内置支持JIT和AOT编译，开发环境优秀
  // 5. 生态系统：Google支持，有活跃社区和丰富的库
  // 6. 性能：JIT和AOT表现良好，适合Web和服务器端
  // 7. 可移植性：可以在Web, Server, Mobile without major changes
  // 8. 并发处理：内置Isolate支持轻量级线程，高效并发
}
```

## 数据类型

1. 变量声明：var const final 或者使用类型显示声明
2. 常用数据类型：int, double, string, bool, list 数组, Map 字典
3. 字符串拼接：str1 + str2 | "$str1$str2"

## 运算

### 类型推断

`str is String`

### 判断为空赋值

`str ??= "default"`

### 条件语句

支持 if else 和 switch case 以及三目运算符

### 类型转换

`数据类型.parse()`

### 循环

支持 for while do while continue break

## 函数

### 函数声明

```dart
返回类型 函数名(参数1, ..., [可选参数1 = 默认值, ...]) {
  // 函数体
  return 返回值;
}
```

与js一样方法可作为参数传递

### 匿名函数

```dart
(){ /** 函数体 */ }
```

当函数体的内容只有一句时，可用箭头指向表示 `(e) => e ? true : false`

匿名方法可以赋值给一个变量

支持IIFE

## 类，对象

### 类声明

```dart
class 类名 {
  // 属性
  String 属性名1;
  // 私有属性 以'_'开头
  int _属性名2;
  // 静态属性
  static bool 属性名3 = true;

  // 默认构造函数, 当实例化一个对象时自动调用
  类名(this.属性名1, ...);

  // 方法
  方法名(参数1, ..., [可选参数1 = 默认值, ...]) {
    // 方法体
  }

  // 类中的getter和setter修饰
  get 属性名 {
    
  }

  // 静态方法
  static void 静态方法名(参数1, ..., [可选参数1 = 默认值, ...]) {
    // 方法体
  }
}
```

### 类继承

```dart
class 子类名 extends 父类名 {
  // 子类构造函数
  子类名(参数1) : super(参数1);
}
```

### 抽象类

抽象类主要用于定义标准，子类可以继承抽象类，也可以现抽象类接口。

```dart
abstract class 抽象类名 {
  // 抽象方法
  void 方法名(参数1, ..., [可选参数1 = 默认值, ...]);
}
```

extends抽象类 和 implement 的区别:

- extends抽象类 复用父类的方法
- implements抽象类 当作标准来实现

### 多态

```dart
抽象类名 对象名 = new 子类名();
```

### 接口

```dart
// A,B 可以是类，也可以是抽象类
class C implements A,B {
  // 实现A和B的属性与方法
}
```

### mixin

父类是Object的类可以通过with实现类混合

```dart
class A with B,C {
  
}
```

### 泛型

支持泛型，使用方式与TS类似

### 对象操作

条件判断：`对象名?.可能为空的属性名`

类型判断：`对象名 is 类名`

类型转换：`对象名 as 类名`
  
级联操作：

```dart
  对象名
    ..属性名1 = 值1
    ..属性名2 = 值2
    ..方法名1()
```

## API

### 引入库

自定义：`import 'lib/xxx.dart' as 重命名`

系统：`import 'dart:xxx'`

[第三方库](https://pub.dev/packages)：`import 'package:xxx/xxx.dart'`

引入行为：

- as 重命名
- deferred as 重命名 （实现延迟导入）
- show 关键字 （导入需要的部分）
- hide 关键字 （隐藏不需要的部分）

### async/await

支持异步操作，使用方式与js类似

### 依赖管理

pubspec.yaml中管理依赖

### List

```dart
var arr = new List();
var arr = [];
arr.add(4);
arr.remove(2);
arr.removeAt(0);
arr.insert(0, 1);
arr.map(callback())
```

### Map

```dart
var map = new Map();
var map = {};
map[key] = value;
map.remove(key);
map.removeWhere((key, value) => value == 1);
```