const {CreateWithFactory, Create} = require('./construct');
const {describe, it} = require('mocha');
const {assert} = require('chai');

describe('construct Tests', () => {
    it('can define null safe Value', () => {
        assert.isNull(Create(undefined));
        assert.equal(Create(undefined, 2), 2);
        assert.isNull(Create(null));
        assert.equal(Create(1), 1);
        assert.equal(Create(false), false);
        assert.equal(Create([1,2,3]).ElementAt(0), 1);
        assert.equal(Create([1,2,3]).ElementAt(1), 2);
        assert.equal(Create([1,2,3]).ElementAt(2), 3);
    });

    it('can create with factory method', () => {
        const factory = (argument1) => { return argument1; };
        assert.equal(CreateWithFactory(factory, ['test']), 'test');
        assert.equal(CreateWithFactory(factory, [], 'default'), 'default');
        assert.equal(CreateWithFactory(undefined, [], 'default'), 'default');
    });
});
