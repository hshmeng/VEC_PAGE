// 时间表数据（来自Excel整理）
const scheduleData = [
    { name: '起床铃声',   start: '06:15', end: '06:15' },
    { name: '晨跑',      start: '06:30', end: '06:50' },
    { name: '公共卫生',  start: '06:50', end: '07:10' },
    { name: '寝室封闭',  start: '07:10', end: '07:10' },
    { name: '早餐',      start: '06:50', end: '07:30' },
    { name: '广播操',    start: '07:45', end: '08:00' },
    { name: '第一节',    start: '08:05', end: '08:45' },
    { name: '第二节',    start: '08:55', end: '09:35' },
    { name: '眼保健操',  start: '09:35', end: '09:40' },
    { name: '第三节',    start: '09:50', end: '10:30' },
    { name: '第一批：第四节', start: '10:40', end: '11:20' },
    { name: '第二批：第四节', start: '10:55', end: '11:35' },
    { name: '午餐',      start: '11:20', end: '12:10' },
    { name: '第五节',    start: '13:10', end: '13:50' },
    { name: '第六节',    start: '14:00', end: '14:40' },
    { name: '眼保健操',  start: '14:40', end: '14:45' },
    { name: '第七节',    start: '14:55', end: '15:35' },
    { name: '第八节',    start: '15:45', end: '16:25' },
    { name: '晚餐',      start: '17:00', end: '18:00' },
    { name: '夜自修（一）', start: '18:45', end: '19:30' },
    { name: '夜自修（二）', start: '19:40', end: '20:25' },
    { name: '就寝',      start: '21:10', end: '21:10' },
    { name: '熄灯',      start: '21:30', end: '06:15' } // 跨天处理
];

// 时间转换工具
function timeToSeconds(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 3600 + m * 60;
}

// 核心逻辑
function updateSchedule() {
    const now = new Date();
    const currentSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    // 查找当前和下一个课程
    let currentCourse = null;
    let nextCourse = null;
    let minNextDiff = Infinity;

    scheduleData.forEach(course => {
        const start = timeToSeconds(course.start);
        let end = timeToSeconds(course.end);

        // 处理跨夜时间（如熄灯）
        if (end < start) end += 86400;

        // 判断当前课程
        const currentEnd = end > 86400 ? end - 86400 : end;
        if ((currentSec >= start && currentSec < end) ||
            (course.end === '06:15' && currentSec < currentEnd)) {
            currentCourse = course;
        }

        // 查找下一个课程
        let diff = start - currentSec;
        if (diff < 0) diff += 86400; // 处理次日课程

        if (diff > 0 && diff < minNextDiff) {
            minNextDiff = diff;
            nextCourse = course;
        }
    });

    // 更新显示
    updateDisplay(currentCourse, nextCourse, currentSec);
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// 修改后的显示函数
function updateDisplay(current, next, currentSec) {
    const currentDiv = document.getElementById('current-course');
    const nextDiv = document.getElementById('next-course');

    // 当前课程显示
    if (current) {
        const endTime = timeToSeconds(current.end);
        const remaining = (endTime > currentSec) ?
            (endTime - currentSec) :
            (endTime + 86400 - currentSec);

        currentDiv.innerHTML = `
                    <div class="time-label" id="default-message">当前课程</div>
                    <div class="time-row">
                        <span class="countdown" id="default-message">${current.name}</span>
                        <a id="default-message">【</a>
                        <span class="time-value" id="default-message">${formatTime(remaining)}</span>
                        <a id="default-message">】</a>
                    </div>
                `;
        currentDiv.classList.add('highlight');
    } else {
        currentDiv.innerHTML = '<div class="time-row"><span class="time-label">当前没有进行中的课程</span></div>';
        currentDiv.classList.remove('highlight');
    }

    // 下一个课程显示
    if (next) {
        const startTime = timeToSeconds(next.start);
        let diff = startTime - currentSec;
        if (diff < 0) diff += 86400;

        nextDiv.innerHTML = `
                    <div class="time-label" id="default-message">下一课程</div>
                    <div class="time-row">
                        <span class="countdown" id="default-message">${next.name}</span>
                        <a id="default-message">【</a>
                        <span class="time-value" id="default-message">${formatTime(diff)}</span>
                        <a id="default-message">】</a>
                    </div>
                `;
    } else {
        nextDiv.innerHTML = '<div class="time-row"><span class="time-label">今日所有课程已完成</span></div>';
    }
}

// 每秒钟更新
setInterval(updateSchedule, 1000);
updateSchedule(); // 初始调用