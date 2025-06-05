document.addEventListener('DOMContentLoaded', function() {
    const daySelector = document.getElementById('day-selector');

    // 设置下拉框默认值为当天
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay(); // 0是周日，1是周一...

    if (today >= 1 && today <= 5) { // 如果是周一到周五
        daySelector.value = days[today];
    }

    // 加载初始课表
    getSchedule(daySelector.value);

    // 当下拉框选择变化时
    daySelector.addEventListener('change', function() {
        getSchedule(this.value);
    });
});

function getSchedule(day) {
    const schedules = {
        "Monday": fetch('CLASS_OUTSIDE/1.txt').then(r => r.text()),
        "Tuesday": fetch('CLASS_OUTSIDE/2.txt').then(r => r.text()),
        "Wednesday": fetch('CLASS_OUTSIDE/3.txt').then(r => r.text()),
        "Thursday": fetch('CLASS_OUTSIDE/4.txt').then(r => r.text()),
        "Friday": fetch('CLASS_OUTSIDE/5.txt').then(r => r.text())
    };

    schedules[day]
        .then(data => {
            document.getElementById("schedule_class").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("schedule_class").innerHTML = "加载课表失败";
        });
}