import {assert} from 'chai';
import 'mocha';
import '../../lib/ts-tooling';
const {Byte, ByteStream} = require('../../lib/ts-tooling');

describe('ByteStream Tests', () => {
    it('create a Empty Stream by default', () => {
        const stream = new ByteStream();
        assert.equal(stream.Length, 0);
    });
    it('position of the Stream is Zero', () => {
        const stream = new ByteStream();
        assert.equal(stream.Position, 0);
    });
    it('set the Cursor Position on Write', () => {
        const stream = new ByteStream();
        stream.WriteByte(new Byte(1));
        stream.WriteByte(new Byte(2));
        assert.equal(stream.Position, 2);
    });
    it('set the Cursor Position manually', () => {
        const stream = new ByteStream();
        stream.Write([1,2,3,4,5].Convert(i => new Byte(i)));
        assert.equal(stream.Position, 5);
        stream.SetCursor(0);
        assert.equal(stream.Position, 0);
        stream.SetCursor(-1);
        assert.equal(stream.Position, 0);
        stream.SetCursor(100);
        assert.equal(stream.Position, 5);
    });
    it('set the Cursor Position on Read', () => {
        const stream = new ByteStream();
        stream.Write([1,2,3,4,5].Convert(i => new Byte(i)));
        assert.equal(stream.Position, 5);
        stream.SetCursor(0);
        assert.equal(stream.Position, 0);
        assert.equal(stream.ReadByte(), 1);
        assert.equal(stream.Position, 1);
    });
    it('write/read single Byte', () => {
        const stream = new ByteStream();
        stream.WriteByte(new Byte(10));
        assert.equal(stream.Length, 1);
        assert.equal(stream.Position, 1);
        assert.equal(stream.ReadByte(0), 10);
    });
    it('write/read into center of the stream', () => {
        const stream = new ByteStream();
        stream.Write([1,2,3,4,5].Convert(i => new Byte(i)));
        stream.SetCursor(1);
        stream.Write([10,20].Convert(i => new Byte(i)));
        assert.equal(stream.ReadByte(1), 10);
        assert.equal(stream.ReadByte(2), 20);
        assert.equal(stream.Position, 3);
    });
    it('reset the Cursor Position', () => {
        const stream = new ByteStream();
        stream.Write([1,2,3,4,5].Convert(i => new Byte(i)));
        assert.equal(stream.Position, 5);
        stream.ResetCursor();
        assert.equal(stream.Position, 0);
    });
    it('read multiple values', () => {
        const stream = new ByteStream();
        stream.Write([1,2,3,4,5].Convert(i => new Byte(i)));
        assert.deepEqual(stream.Read(), [1,2,3,4,5]);
        assert.deepEqual(stream.Read(0, 1), [1]);
        assert.deepEqual(stream.Read(1, 1), [2]);
        assert.deepEqual(stream.Read(1, 5), [2,3,4,5]);
        assert.deepEqual(stream.Read(1, 6), [2,3,4,5]);
    });
    it('generate String', () => {
        // Hello World! => [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]
        const stream = new ByteStream();
        stream.Write([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33].Convert(i => new Byte(i)));
        assert.equal(stream.ToString(), 'Hello World!');
    });
    it('read Byte String', () => {
        assert.deepEqual(ByteStream.FromByteString('Hello World!').Read(), [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);
    });
    it('read number Array', () => {
        const stream = ByteStream.FromNumberArray([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);
        assert.equal(stream.ToString(), 'Hello World!');
    });
});
