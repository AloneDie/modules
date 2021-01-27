# 如有错误请指出

# CommonJS

## CommonJS 规范

CommonJS 使用`exports`导出模块，`require`导入模块

1. 只要一个 JS 文件中存在 `exports` 或 `require`，就表明该 JS 为模块

2. 模块内的所有代码应均为隐藏代码，包括全局变量，函数，这些全局内容都不应该对全局变量造成污染

3. 如果模块要暴露某一个 API，应该通过 `exports` 导出。`exports` 是一个空对象。

4. 如果一个模块依赖于另一个模块中的某些内容， 可以使用 `require` 进行导入，`require` 是一个函数，传入模块路径。

## nodejs 对 CommonJS 的实现

nodejs 对 CommonJS 实现的是为同步模式。

1. nodejs 只有执行到`require`函数时才会加载并执行模块。为了提高效率

2. nodejs 执行模块时，将模块中的所有代码都放到一个立即执行函数中执行。

```js
(function () {
    //...
})();
```

3. 为了保证顺利的导出模块内容，nodejs 做了以下处理

    1. 在模块开始执行前，初始化一个值`module.exports = {}`
    2. `module.exports`即模块的导出值
    3. 为了方便开发者便捷的导出，nodejs 在初始化完`module.exports`后，又声明了一个变量`exports = module.exports`

```js
(function (module) {
    module.exports = {};
    var exports = module.exports;
    //模块中的代码
    return module.exports;
})();
```

4. 为了避免反复加载同一个模块，nodejs 默认开启了模块缓存，如果加载的模块已经被加载过了，则会自动使用之前的导出结果
