(function () {
    require.config({
        // 基本路径
        baseUrl: 'src/',
        // 模块路径
        paths: {
            // 自定义模块  不需要后缀名，requireJS会自动添加后缀名
            moduleA: './moduleA',
            moduleB: './moduleB',
            // 第三方库
            jquery: './lib/jquery-1.10.1', // jquery 做了AMD规范，导出的对象为小写的jquery
            angular: './lib/angular.js', //angular未做AMD规范，需要零i选哪个配置
        },
        /**
         * 配置不兼容AMD的模块
         * exports : 指定导出的模块名
         * deps  : 指定所有依赖的模块的数组
         */
        shim: {
            // 使用shim对不兼容AMD规范的模块进行配置
            angular: {
                exports: 'angular', // 指出的导出的 模块名
            },
        },
    });
    // 导入模块
    define(['moduleB'], function (moduleB) {
        moduleB.eating();
    });
})();
