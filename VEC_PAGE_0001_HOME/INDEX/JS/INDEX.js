// 这个js用来实现主题切换，也就是明暗（2024年9月1日16:48:14砍掉）
// document.getElementById('themeButton').onclick = function() {
//     document.body.classList.toggle('dark-theme');
//     document.getElementById('overlay').classList.toggle('dark-theme');
// }

//网页背景跟随鼠标扩散
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    const size = 100; // 这里可以调整渐变的大小
    document.body.style.background = `radial-gradient(circle ${size}px at ${x}% ${y}%, #ff9e59 0%, #ffe3c1 100%)`;
});

//实现MP3播放
document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    var progressContainer = document.getElementById('progressContainer');
    var progressBar = document.getElementById('progressBar');

    audio.volume = 1.0; // 设置音量为最大
    audio.play();

    progressContainer.style.display = 'block';

    audio.addEventListener('timeupdate', function() {
        var progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
    });

    progressBar.addEventListener('mousedown', function(e) {
        var onMouseMove = function(e) {
            var rect = progressContainer.getBoundingClientRect();
            var offsetX = e.clientX - rect.left;
            var newTime = (offsetX / rect.width) * audio.duration;
            audio.currentTime = newTime;
        };

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    audio.addEventListener('ended', function() {
        progressContainer.style.display = 'none';
        progressBar.style.width = '0%';
    });
});