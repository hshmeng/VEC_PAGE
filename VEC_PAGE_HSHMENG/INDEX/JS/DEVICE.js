window.onload = function() {
    var userAgent = navigator.userAgent;
    var pathName = window.location.pathname;
    var fileName = pathName.substring(pathName.lastIndexOf('/')+1);
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        if(fileName !== "INDEX_MOVE.html") {
            window.location.href = "INDEX_MOVE.html";
        }
    } else {
        if(fileName !== "INDEX_HOST.html") {
            window.location.href = "INDEX_HOST.html";
        }
    }
}