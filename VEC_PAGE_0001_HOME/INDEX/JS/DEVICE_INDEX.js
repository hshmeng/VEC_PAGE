window.onload = function() {
    var userAgent = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        window.location.href = "VEC_PAGE_0001_HOME/INDEX/INDEX_MOVE.html";
    } else {
        window.location.href = "VEC_PAGE_0001_HOME/INDEX/INDEX_HOST.html";
    }
}