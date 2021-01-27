## 浏览器导入模块文件

```html
<script src="" type="module"></script>
```

## 基本模块导出

```javascript
export 表达式
export {表达式}
```

## 基本模块导入

```javascript
import {导入的符号列表} from "模块路径"
```

## 默认模块导出

```javascript
export default 默认导出的数据 // 可以导出对象
export {默认导出的数据 as default}
```

每个模块只有一个默认导出，不可以有多个默认导出语句

## 默认模块导入

```javascript
import 接受变量名 from "模块路径"
var 变量名 = require("模块路径")
```

*注*：如果使用*号，会将所有基本导出和默认导出聚合到一个对象中，默认导出会作为属性default存在