function getSchedule() {
    const schedules = {
        "Monday": fetch('CLASS_OUTSIDE/1.txt').then(response => response.text()).then(data => data),
        "Tuesday": fetch('CLASS_OUTSIDE/2.txt').then(response => response.text()).then(data => data),
        "Wednesday": fetch('CLASS_OUTSIDE/3.txt').then(response => response.text()).then(data => data),
        "Thursday": fetch('CLASS_OUTSIDE/4.txt').then(response => response.text()).then(data => data),
        "Friday": fetch('CLASS_OUTSIDE/5.txt').then(response => response.text()).then(data => data),
        "Saturday": fetch('CLASS_OUTSIDE/6.txt').then(response => response.text()).then(data => data),
        "Sunday": fetch('CLASS_OUTSIDE/7.txt').then(response => response.text()).then(data => data),
    };

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const schedule = schedules[today] || "今天没有课表";

    if (typeof schedule === 'string') {
        document.getElementById("schedule_class").innerHTML = schedule;
    } else {
        schedule.then(data => {
            document.getElementById("schedule_class").innerHTML = data;
        });
    }
}

// 在页面加载时调用 getSchedule 函数
window.onload = getSchedule;
