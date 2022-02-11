window.onload = function () {
    var btn = document.getElementById("btn"),
        _test = document.getElementById("test"),
        $msg = "hello msg";
    btn.onclick = function () {
        _test.innerHTML = $msg
    }
    
}