window.onload = function () {
    // var obj = {name:"nicai",age:20}
    // for (o in obj) {
    //     console.log(o)
    //     console.log(obj[o])
    // }

    // var obj2 = {name:"nicai",age:20};
    // console.log(typeof JSON.stringify(obj2));
    // console.log(typeof obj2);


    // 判断对象的自由属性是否存在
    // var o = {
    //     flag:'a'
    // };
    // o.hasOwnProperty("flag")

    // 对象的合并
    // var o2 = {name:'abc',age:30}
    // var o3 = {id:1,address:'武汉'}
    // var o4 = Object.assign(o2,o3)
    // console.log(o4)

    // 直接在一个对象上定义新的属性或者修改现有属性并且返回该对象
    // var o5 = {};
    // Object.defineProperty(o5,'name',{
    //     value:'张三',
    //     writable:false //是否可修改 true可以修改，false只读
    // })
    // 添加多个属性
    // Object.defineProperties(o5,{
    //     'name':{
    //     value:'张三',
    //         writable:false//是否可修改 true可以修改，false只读
    //     },
    //     'age':{
    //         value:20,
    //         writable:false//是否可修改 true可以修改，false只读
    //     },
    // })


    // 返回一个给定对象自身可做枚举属性的键值对数组
    // var o6 = {name:'abc',age:18};
    // var a = Object.entries(o7)



    // 函数声明
    // function sum(a,b) {
    //     return a+b;
    // }
    // 函数表达式，类似匿名函数
    // var sum2 = function (a,b) {
    //     return a+b;
    // }
    // 方法调用
    // var _but = document.querySelector('.but');
    // var _h1 = document.querySelector('.h2');
    // _but.onclick = function () {
    //     _h1.innerHTML = sum(1,6);
    // }



    // 函数封装和复用
    function select(name) {
        return document.querySelector(name);
    }
    // 判断 表单的值是否为空，若空则显示错误提示，反之错误提示隐藏
    function isEmpty(cur) {
        if (cur.value==''){
            // nextSibling 返回某个元素之后紧邻的节点
            cur.nextSibling.style.display = "inline";   // 紧邻的同级样式显示
        }else {
            cur.nextSibling.style.display = "none";   // 紧邻的同级样式隐藏
        }
    }

    var _test = select("#name"),
        _phone = select("#phone");

    //成为焦点
    _test.onfocus = function () {
        this.nextSibling.style.display = "none";   // 紧邻的同级样式隐藏
    };
    _phone.onfocus = function () {
        this.nextSibling.style.display = "none";   // 紧邻的同级样式隐藏
    };

    //失去焦点
    _test.onblur = function () {
        isEmpty(this)
    };
    _phone.onblur = function () {
        isEmpty(this)
    };

}