let intervalTime = 50;  // 初始间隔时间
let confettiInterval; // 用于存储定时器ID
const speedSlider = document.getElementById('speedSlider');

// 页面加载后自动触发一次彩带效果
window.onload = function () {
    createConfetti();
}

// 更新速度滑块的值
speedSlider.addEventListener('input', function () {
    const speed = speedSlider.value;
    intervalTime = 200 - speed * 2;  // 调节间隔时间：越大越慢

    // 如果已有定时器存在，先清除之前的定时器
    clearInterval(confettiInterval);

    // 重新开始生成彩带
    createConfetti();
});

function createConfetti() {
    // 清除现有彩带
    const container = document.getElementById('confetti-container')
    container.innerHTML = '';

    // 彩带颜色
    const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722'
    ];

    // 物理参数 - 从上往下飘落
    const gravity = 0.02  // 重力加速度
    const initialVelocity = 1  // 初始速度
    const velocityVariation = 0.5  // 速度变化幅度
    const dragCoefficient = 0.98  // 阻力系数

    // 连续创建彩带，效果持续
    confettiInterval = setInterval(function () {
        // 创建一个彩带
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // 随机彩带特性
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = Math.random() < 0.5 ? 'circle' : 'rectangle';
        const size = Math.random() * 10 + 5;

        // 设置彩带位置和样式
        const xPos = Math.random() * window.innerWidth;  // 随机X位置
        const yPos = -size;  // 从顶部开始

        confetti.style.left = xPos + 'px';
        confetti.style.top = yPos + 'px';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';

        // 设置不同形状
        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        }

        container.appendChild(confetti);

        // 动画参数
        let yVelocity = initialVelocity + Math.random() * velocityVariation;
        const rotateVel = Math.random() * 0.2 - 0.1;
        let rotation = Math.random() * 360;

        // 动画函数
        function animate() {
            yVelocity += gravity;  // 增加重力

            // 更新位置
            const currentX = parseFloat(confetti.style.left);
            const currentY = parseFloat(confetti.style.top);
            confetti.style.left = currentX + 'px';
            confetti.style.top = currentY + yVelocity + 'px';

            // 旋转彩带
            rotation += rotateVel;
            confetti.style.transform = 'rotate(' + rotation + 'deg)';

            // 超出屏幕移除彩带
            if (currentY < window.innerHeight) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        }

        // 启动动画
        requestAnimationFrame(animate);
    }, intervalTime);  // 每intervalTime毫秒生成一个新的彩带，持续效果
}