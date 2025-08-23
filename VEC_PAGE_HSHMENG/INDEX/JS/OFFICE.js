document.getElementById('link1').addEventListener('click', function(e) {
    e.preventDefault();
    loadIframe('overlay1', 'https://f.wps.cn/ksform/w/write/h7JmtZLR#routePromt');
});

document.getElementById('link2').addEventListener('click', function(e) {
    e.preventDefault();
    loadIframe('overlay2', 'https://kdocs.cn/l/ctYnDBOt8W3V');
});

document.getElementById('link3').addEventListener('click', function(e) {
    e.preventDefault();
    loadIframe('overlay3', 'https://www.hshmeng.dpdns.org');
});


function loadIframe(overlayId, url) {
    var overlay = document.getElementById(overlayId);
    var iframe = overlay.querySelector('iframe');
    iframe.src = url;
    overlay.style.display = 'block';
}

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
}
