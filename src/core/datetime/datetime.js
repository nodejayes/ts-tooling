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
    };
};

function GetHoursForMonth(month, year) {
    if ([1, 3, 5, 7, 8, 10, 12].Contains(month)) {
        return 31 * 24;
    }
    if ([4, 6, 9, 11].Contains(month)) {
        return 30 * 24;
    }
    if (month !== 2) {
        return 0;
    }
    return (year % 4) === 0 ? 29 * 24 : 28 * 24;
}

module.exports = {ParseString, GetHoursForMonth};
