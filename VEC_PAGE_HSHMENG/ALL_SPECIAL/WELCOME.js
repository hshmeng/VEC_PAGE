// 美化打印实现方法
const prettyLog = () => {
    const isEmpty = (value) => {
        return value == null || value === undefined || value === '';
    };
    const prettyPrint = (title, text, color) => {
        console.log(
            `%c ${title} %c ${text} %c`,
            `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
            `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
            'background:transparent'
        );
    };
    const info = (textOrTitle, content = '') => {
        const title = isEmpty(content) ? 'Info' : textOrTitle;
        const text = isEmpty(content) ? textOrTitle : content;
        prettyPrint(title, text, '#909399');
    };
    const error = (textOrTitle, content = '') => {
        const title = isEmpty(content) ? 'Error' : textOrTitle;
        const text = isEmpty(content) ? textOrTitle : content;
        prettyPrint(title, text, '#F56C6C');
    };
    return {
        info,
        error
    };
};
// 创建打印对象
const log = prettyLog();

log.info('INFO','我们的成员：HSHMENG，gouwuyu')
log.info('INFO','HSHMENG：https://github.com/hshmeng/');
log.info('INFO','gouwuyu：https://github.com/gouwuyu-q');
log.error('ERROR','前方的路看似很危险,实际一点也不安全。');
log.error('ERROR','出来的时候穷 生活总是让我穷 所以现在还是穷。');

console.log('🚀🚀🚀欢迎加入我们！！！');
console.log("申请方式：登录GITHUB注册账号，FORK本项目，提交PR即可");
console.log("🚀🚀🚀欢迎加入我们！！！")

// const users = [
//     { NAME:'彩色圆球',POSITION:'0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟'},
//     { NAME:'其它爱心',POSITION:'💔❤️‍🔥❤️‍🩹❣️💕💞💓💗💖💘💝'},
//     { NAME:'彩色爱心',POSITION:'❤️🧡💛💚💙💜🤎🖤🤍🩷🩵🩶'},
//     { NAME:'彩色方块',POSITION:'🟥🟧🟨🟩🟦🟪🟫⬛⬜'},
//     { NAME:'彩色圆球',POSITION:'🔴🟠🟡🟢🔵🟣🟤⚫⚪'}
// ];
// console.table(users);
// users.forEach(user => {
//     console.log(`%c${user.NAME}`, 'font-weight: bold;', user.POSITION);
// });

