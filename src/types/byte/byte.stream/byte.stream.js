const {Byte} = require('../byte/byte');
require('../../array/extension');

class ByteStream {
    constructor() {
        this._value = [];
        this._position = 0;
    }

    get Length() {
        return this._value.length;
    }

    get Position() {
        return this._position;
    }

    ResetCursor() {
        this._position = 0;
    }

    SetCursor(pos) {
        if (this.Length < pos) {
            this._position = this.Length;
            return;
        }
        if (pos < 0) {
            this._position = 0;
            return;
        }
        this._position = pos;
    }

    Write(value) {
        for (const b of value) {
            this._writeByte(b);
        }
        return value.length;
    }

    WriteByte(value) {
        this._writeByte(value);
    }

    Read(pos, len) {
        this._position = pos || 0;
        let size = len || this._value.length;
        if (size > this._value.length) {
            size = this._value.length;
        }
        const res = [];
        for (let i = 0; i < size; i++) {
            const b = this._readByte();
            if (!b) {
                continue;
            }
            res.Add(b.Value);
        }
        return res;
    }

    ReadByte(pos) {
        this._position = pos || 0;
        return this._readByte().Value;
    }

    ToString() {
        return new TextDecoder().decode(new Uint8Array(this._value.Convert(i => i.Value)));
    }

    _writeByte(b) {
        this._value[this._position] = b;
        this._position++;
    }

    _readByte() {
        const b = this._value.ElementAt(this._position);
        this._position++;
        return b;
    }
}

ByteStream.FromByteString = (str) => {
    const tmp = new ByteStream();
    const arr = [];
    new TextEncoder().encode(str).forEach(i => arr.Add(new Byte(i)));
    tmp.Write(arr);
    return tmp;
};

ByteStream.FromNumberArray = (value) => {
    const tmp = new ByteStream();
    tmp.Write(value.Convert(i => new Byte(i)));
    return tmp;
};

module.exports = {ByteStream};
