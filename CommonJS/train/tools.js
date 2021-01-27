// 工具模块，导出一个函数，用于将一个数组中的所有内容乱序排列
module.exports = {
    sortRadom(arr) {
        return arr.sort((val1, val2) => {
            return Math.random() - 0.5;
        });
    },
};
