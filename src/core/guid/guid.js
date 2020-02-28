const GUID_LENGTH = 36;

const lut = [];
for (let i= 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
}

function Uuidv4() {
    const d0 = Math.random()*0xffffffff|0;
    const d1 = Math.random()*0xffffffff|0;
    const d2 = Math.random()*0xffffffff|0;
    const d3 = Math.random()*0xffffffff|0;
    return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
        lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
        lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
        lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
}

const GUID_SEPARATOR_POSITIONS = [
    8,
    13,
    18,
    23,
];

const GUID_VALID_CHARS = [
    '0', '1', '2', '3', '4', '5',
    '6', '7', '8', '9', 'a', 'b',
    'c', 'd', 'e', 'f', '-'
];

function ValidateGuid(guid) {
    // check the length of the Guid
    if (!guid.length.Equals(GUID_LENGTH)) {
        return false;
    }
    // check the number of "-" in the Guid
    if (guid.ContainsCount('-').IsAbove(4)) {
        return false;
    }
    // check the Position of "-" in the Guid
    for (const pos of GUID_SEPARATOR_POSITIONS) {
        if (!guid.CharAt(pos).Equals('-')) {
            return false;
        }
    }
    // check the Chars in the Guid
    for (const char of guid) {
        const c = char.ToLowerCase();
        if (!GUID_VALID_CHARS.Contains(c)) {
            return false;
        }
    }
    return true;
}

module.exports = {Uuidv4, ValidateGuid};
