document.getElementById('link1').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('overlay1').style.display = 'block';
});
document.getElementById('link2').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('overlay2').style.display = 'block';
});
document.getElementById('link3').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('overlay3').style.display = 'block';
});

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
}