(function () {
    define(['moduleA'], function (moduleA) {
        moduleA.doing();
        var eat = 'eating fruit';
        function eating() {
            console.log(eat);
        }
        return { eating };
    });
})();
