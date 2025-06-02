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

