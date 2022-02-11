window.onload = function () {
    document.getElementById("div").innerHTML = "您好，div";
    document.getElementById("div").style.color = "red";
    document.getElementsByTagName("h1")[0].innerHTML = "你好 h1";
    document.getElementsByClassName('demo')[0].innerHTML = "您好 demo1";
    document.getElementsByName("p")[0].style.background = "yellow";
    document.querySelector("#h").innerHTML = "您好，aaa";
    document.querySelector(".a").innerHTML = "您好，bbb";
    document.querySelector("p").innerHTML = "您好，ccc";
    document.querySelectorAll();

}