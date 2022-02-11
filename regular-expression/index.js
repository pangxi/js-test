window.onload = function () {
    function $(name) {
        return document.querySelector(name);
    }
    var _div = $("div"),
        _input = $("input");

    // 两个模式都可用
    var regex1 = /foo*/;  // 字面量模式正则表达式
    var regex2 = new RegExp('foo*'); // 构造函数模式
    _input.onblur = function () {
        // 正则表达式 匹配要求 test(匹配内容)
        if (regex2.test(_input.value)){
            // 满足条件的处理
            _div.innerHTML = '匹配成功'
        }else {
            _div.innerHTML = '匹配不成功'
        }
    }




}