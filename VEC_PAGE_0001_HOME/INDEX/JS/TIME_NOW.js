// 用于根据时间显示文字的
function showCurrentSchedule() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const currentTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    let found = false;

    document.querySelectorAll('.schedule-item').forEach(item => {
        item.style.display = 'none';
        const remainingTimeElement = item.querySelector('.remaining-time');
        if (remainingTimeElement) {
            item.removeChild(remainingTimeElement);
        }
    });

    document.querySelectorAll('.schedule-item').forEach(item => {
        const timeRange = item.getAttribute('data-time').split('-');
        if (timeRange.length === 1) {
            if (timeRange[0] === currentTime) {
                item.style.display = 'block';
                found = true;
            }
        } else {
            const startTime = timeRange[0];
            const endTime = timeRange[1];
            if (currentTime >= startTime && currentTime <= endTime) {
                item.style.display = 'block';
                found = true;

                // 计算剩余时间
                const endHours = parseInt(endTime.split(':')[0]);
                const endMinutes = parseInt(endTime.split(':')[1]);
                const endSeconds = endTime.split(':')[2] ? parseInt(endTime.split(':')[2]) : 0;
                const remainingSeconds = (endHours * 3600 + endMinutes * 60 + endSeconds) - (hours * 3600 + minutes * 60 + seconds);
                const remainingTime = `${Math.floor(remainingSeconds / 3600)}小时${Math.floor((remainingSeconds % 3600) / 60)}分钟${remainingSeconds % 60}秒`;

                // 显示剩余时间
                const remainingTimeElement = document.createElement('div');
                remainingTimeElement.className = 'remaining-time';
                remainingTimeElement.textContent = `剩余时间：${remainingTime}`;
                item.appendChild(remainingTimeElement);
            }
        }
    });

    if (!found) {
        document.getElementById('default-message').style.display = 'block';
    } else {
        document.getElementById('default-message').style.display = 'none';
    }
}

setInterval(showCurrentSchedule, 1000);
showCurrentSchedule();
