const ParseString = (str) => {
    let d = 0;
    let h = 0;
    let m = 0;
    let s = 0;
    let ms = 0;

    if (str.indexOf('.') !== -1) {
        const tmp1 = str.split('.');
        d = parseInt(tmp1[0]);
        d = isNaN(d) ? 0 : d;
        str = tmp1[1];
    }
    const tmp2 = str.split(':');
    h = parseInt(tmp2[0]);
    m = parseInt(tmp2[1]);
    h = isNaN(h) ? 0 : h;
    m = isNaN(m) ? 0 : m;

    const tmp3 = tmp2[2].split(' ');

    s = parseInt(tmp3[0]);
    s = isNaN(s) ? 0 : s;
    ms = parseInt(tmp3[1]);
    ms = isNaN(ms) ? 0 : ms;

    return {
        days: d,
        hours: h,
        minutes: m,
        seconds: s,
        milliseconds: ms,
    }
};

module.exports = {ParseString};
