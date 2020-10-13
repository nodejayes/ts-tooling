require('mocha');
const {assert} = require('chai');
const {Point} = require('./point');
const {ReferenceSystem, registerProjection, WGS84, WEB_MERCATOR} = require('./reference.system');

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
    describe('[Method]: Register Projection', () => {
        it('can register a new Projection and use it', () => {
            registerProjection(3819, '+proj=longlat +ellps=bessel +towgs84=595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408 +no_defs ');
            const pt = new Point([1,1], 4326);
            pt.Transform(3819);
            assert.deepEqual(pt.coordinates, [
                0.9987826546610273,
                0.9945714665851069,
            ]);
            assert.equal(pt.crs.GetSrId(), 3819);
        });
    });
    describe('[const] WEB_MERCATOR', () => {
        it('are defined', () => {
            assert.isDefined(WEB_MERCATOR);
            assert.equal(WEB_MERCATOR.GetSrId(), 3857);
        });
    });
    describe('[const] WGS84', () => {
        it('are defined', () => {
            assert.isDefined(WGS84);
            assert.equal(WGS84.GetSrId(), 4326);
        });
    });
});
