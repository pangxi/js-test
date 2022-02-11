window.onload = function () {

    console.log(a);
    var a = 10;
    //  上面代码 实际处理过程 如下
    var a;
    console.log(a); // undefined
    a = 10;

    var b = 123;
    function b() {};
    // 解析过程
    var b;
    function b(){};
    b =123;

    // 测试题
    console.log(c);
    var c = 1;
    console.log(c);
    function c() {
        console.log(2);
    };
    // 解析过程
    var c;
    function c() {
        console.log(2);
    };
    console.log(c); // c()   {console.log(2)}
    c = 1;
    console.log(c); // 1





}