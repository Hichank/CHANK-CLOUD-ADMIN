/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
            .replace(/\+/g, ' ') +
        '"}'
    )
}


// 生成随机码
export const createCode = (id) => {
    // 生成一个随机色
    function randomColor(min, max) {
        let r = randomNum(min, max);
        let g = randomNum(min, max);
        let b = randomNum(min, max);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    // 生成一个随机数
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // 绘制验证码图形
    function drawVerify(cEle, value) {
        const [ctx, width, height] = [cEle.getContext('2d'), cEle.width, cEle.height];
        // 清空画布
        ctx.clearRect(0, 0, width, height);
        // 绘制背景色
        ctx.fillStyle = randomColor(180, 240);
        ctx.fillRect(0, 0, width, height);
        // 填充字体
        ctx.font = '30px Arial';
        ctx.fillStyle = randomColor(50, 160);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'
        ctx.fillText(value, width / 2, height / 2);
        // 绘制干扰线
        for (let i = 0; i < 2; i++) {
            ctx.strokeStyle = randomColor(40, 180);
            ctx.beginPath();
            ctx.moveTo(randomNum(0, width), randomNum(0, height));
            ctx.lineTo(randomNum(0, width), randomNum(0, height));
            ctx.stroke();
        }
        // 绘制干扰点
        for (let i = 0; i < 30; i++) {
            ctx.fillStyle = randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    let code = '';
    //验证码的长度
    let codeLength = 4;
    const checkCode = document.getElementById(id);
    const codeChars = [];
    // 验证码所需数字和字母的集合
    for (let i = 0; i < 26; i++) {
        if (i < 10) {
            codeChars.push(String.fromCharCode(i + 48));
        }
        codeChars.push(String.fromCharCode(i + 97));
        codeChars.push(String.fromCharCode(i + 65));
    }
    // 组合数字和字母
    for (let i = 0; i < codeLength; i++) {
        let charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if (checkCode) {
        drawVerify(checkCode, code);
        return code;
    }
}