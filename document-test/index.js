window.onload = function () {
    // 返回当前获取焦点元素
    // alert(document.activeElement.id);
    // document.getElementById("my").onclick = function () {
    //     var _name = document.activeElement.tagName;
    //     document.getElementById("test").innerHTML = _name;
    // }

    // document.addEventListener() 向文档添加句柄
    // document.getElementById("my").addEventListener('click',function () {
    //     var _name = document.activeElement.tagName;
    //     document.getElementById("test").innerHTML = _name;
    // })
    // document.getElementById("my").addEventListener('click',myFunction)
    // function myFunction() {
    //     var _name = document.activeElement.tagName;
    //     document.getElementById("test").innerHTML = _name;
    // }

    // 创建元素节点
    // 动态的操作DOM，添加内容 <div>hello world<div/>
    document.querySelector(".btn").onclick = function () {
        var _div = document.createElement("div"); // 创建元素节点
        var _text = document.createTextNode("hello world"); // 创建文本节点
        _div.appendChild(_text); // 把文本节点添加到元素添加到末尾
        document.body.appendChild(_div);
    }

    // 扩展 需求：两个列表，点击按钮时，左边最后一个数据移动到右边
    document.querySelector(".change").onclick = function () {
        // 左边的最后一个数据
        var _left = document.querySelector(".listL").lastChild;
        // 右边添加数据
        document.querySelector(".listR").appendChild(_left);
    }


    // 扩展二 需求：两个列表，左侧选中的数据移到右侧
    var _listL = document.querySelector(".listL");
    var child = _listL.childNodes; //获取子节点
    console.log(child.length);
    for (var i = 0; i < child.length; i++) {
        child[i].onclick = function () { //arr[0]
            document.querySelector(".listR").appendChild(this); // this为当前点击对象
        }
    };

    // 可能会出现问题
    var _listL2 = document.querySelector(".listL2");
    var child2 = _listL2.childNodes; //获取子节点
    console.log(child2.length);
    for (var i = 0; i < child2.length; i++) {
        // nodeType 节点类型  元素节点的属性返回1  文本节点的属性返回3
        if (child2[i].nodeType==1){
            child2[i].onclick = function () { //arr[0]
                document.querySelector(".listR2").appendChild(this); // this为当前点击对象
            }
        }
    };


}