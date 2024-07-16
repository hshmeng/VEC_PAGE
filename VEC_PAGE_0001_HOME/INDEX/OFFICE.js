document.getElementById('link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('overlay').style.display = 'block';
});
document.getElementById('close').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});