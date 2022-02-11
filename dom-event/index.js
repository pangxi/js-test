window.onload = function () {
    // 鼠标事件
    // document.getElementsByTagName("button")[1].onclick = function () {
    //     document.getElementById("h4").innerHTML = '我是按钮';
    // }

    // document.getElementsByTagName("button")[1].onclick = fun2;
    // dom2
    // document.getElementsByTagName("button")[1].addEventListener("click",fun2);
    // 双击
    document.querySelector(".btn2").ondblclick = fun2;
    function fun2() {
        document.getElementById("h4").innerHTML = '我是按钮';
    }
    // 移入
    document.querySelector(".btn3").onmouseenter = function (event) {
        this.style.background = "rgba(100,17,68,1)";
        // document.querySelector(".btn3").innerHTML = "鼠标移入了";
        document.querySelector("#h4").innerHTML = event.clientX;
        console.log('onmouseenter');
    }
    // 移出
    document.querySelector(".btn3").onmouseleave = function () {
        this.style.background = "rgba(60,152,66,10)";
        document.querySelector(".btn3").innerHTML = "鼠标移出了";
    }
    // 移入移出
    document.querySelector(".btn4").onmousemove = function (event) {
        // this.style.background = "rgba(60,152,66,10)";
        document.querySelector("#h4").innerHTML = event.clientX;
        // console.log('onmousemove');
    }

    // 键盘事件
    document.querySelector(".input").onkeyup = function () {
        document.querySelector("#h4").innerHTML = this.value;
    }
}
function fun(){
    document.getElementById("h4").style.color = 'blue';
}