# AMD

AMD（Asyncchronous Module Defintion) 即异步模块加载机制

require.js 实现了对 AMD 的支持，jQuery 也对 AMD 规范做了支持

在 AMD 中导入和导出模块都必须放在 `define` 函数中

```js
define(['导出的模块名', ...]，function callback(模块名列表){
    // 代码...
    return 导出的内容
})
```

# 浏览器模块化遇到的难题

1. 由于 CommonJS 是同步的，导致浏览器在运行时降低了运行性能

2. CommonJS 属于社区规范，浏览器厂商不支持

## 解决方法

1. 将加载模块作成异步的形式，加载完成后调用回调函数就行了

2. 直接将模块中的代码放入立即执行函数中。
