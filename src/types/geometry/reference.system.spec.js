require('mocha');
const {assert} = require('chai');
const {ReferenceSystem} = require('./reference.system');

describe('ReferenceSystem Tests', () => {
    const rawSystem = {
        type: 'name',
        properties: {
            name: 'EPSG:4326',
        },
    };

    describe('constructor', () => {
        it('can create a new ReferenceSystem', () => {
            const rs = new ReferenceSystem(4326);
            assert.isDefined(rs);
            assert.equal(rs.type, 'name');
            assert.isDefined(rs.properties);
            assert.equal(rs.properties.name, 'EPSG:4326');
        });
    });
    describe('[static Method]: FromString', () => {
        it('can parse a valid string', () => {
            const rs = ReferenceSystem.FromString(JSON.stringify(rawSystem));
            assert.deepEqual(rs, rawSystem);
        });
        it('error on invalid string', () => {
            assert.throws(() => {
                ReferenceSystem.FromString('');
            });
        });
    });
    describe('[static Method]: FromJSON', () => {
        it('can read json object', () => {
            const rs = ReferenceSystem.FromJSON(rawSystem);
            assert.deepEqual(rs, rawSystem);
        });
        it('error on invalid json object', () => {
            assert.throws(() => {
                ReferenceSystem.FromJSON(null);
            });
        });
    });
    describe('[Method]: ToJSON', () => {
        it('convert to valid json object', () => {
            const rs = new ReferenceSystem(4326);
            assert.deepEqual(rs.ToJSON(), {
                type: 'name',
                properties: {
                    name: 'EPSG:4326',
                },
            });
        });
    });
    describe('[Method]: GetSrId', () => {
        it('returns the srid', () => {
            const rs = new ReferenceSystem(4326);
            assert.equal(rs.GetSrId(), 4326);
        });
    });
});
