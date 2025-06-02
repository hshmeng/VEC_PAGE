window.onload = function() {
    var userAgent = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        window.location.href = "VEC_PAGE_NEW/index.html";
    } else {
        window.location.href = "../../INDEX/INDEX_HOST.html";
    }
}