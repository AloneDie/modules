(function () {
    define(function () {
        // 为依赖任何模块，省略第一参数
        var some = 'do something';
        function doing() {
            console.log(some);
        }
        return { doing }; // 导出模块
    });
})();
//  都需要将模块中的代码放入立即执行函数中
