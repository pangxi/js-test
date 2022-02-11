window.onload = function () {

    //作用域 函数作用域 全局作用域
    // var x = 1; //全局作用域
    // function f1() {
    //     var y = 2; // 函数作用域
    //     x = 10;
    //     console.log(x);
    // }
    // console.log(y);  //  y is not defined


    // 测试题   函数内部环境可以访问到所有外部环境的值，但是外部环境不能访问内部环境的值
    var x = 1; // 全局变量
    function f1() {  // 全局函数
        var y = 2;  // f1函数中的 变量
        function f2() {  // f1函数中的 函数
            var z = y;  // f2函数中的 变量
            y = x;
            x = z;
            console.log(x,y,z)
        };
        f2();
    };
    f1();

    // 面试题
    var a = 10;
    function f3() {
        var b = 2 * a; // b = 2 * undefined  → NaN
        var a = 20;
        var c = a + 1;
        console.log(b);
        console.log(c);
    }
    f3();
    // 在全局变量和局部变量不同名时，全局变量其作用域整个程序
    // 全局变量和局部变量同名时，全局变量的作用域不包含局部变量作用域
}