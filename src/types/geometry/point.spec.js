require('mocha');
const {assert} = require('chai');
const {Point} = require('./point');

describe('Point Tests', () => {
    const pointStr = '{"type":"Point","coordinates":[1,1]}';
    const pointStrInvalidType = '{"type":"Pointsss","coordinates":[1,1]}';
    const pointStrSrid = '{"type":"Point","coordinates":[1,1],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}}';

    describe('constructor', () => {
        it('can create without srid', () => {
            const p = new Point([1,1]);
            assert.isDefined(p);
            assert.deepEqual(p.coordinates, [1,1]);
            assert.isUndefined(p.crs);
        });
        it('can set srid', () => {
            const p = new Point([1,1], 4326);
            assert.isDefined(p);
            assert.equal(p.crs.GetSrId(), 4326);
        });
    });
    describe('[static Method]: FromJSON', () => {
        it('read without srid information', () => {
            const p = Point.FromString(pointStr);
            assert.isDefined(p);
            assert.deepEqual(p.coordinates, [1,1]);
            assert.isUndefined(p.crs);
        });

        it('read with srid information', () => {
            const p = Point.FromString(pointStrSrid);
            assert.isDefined(p);
            assert.deepEqual(p.coordinates, [1,1]);
            assert.isDefined(p.crs);
            assert.equal(p.crs.GetSrId(), 4326);
        });

        it('error on wrong type', () => {
            assert.throws(() => {
                Point.FromString(pointStrInvalidType);
            });
        });
    });
    describe('[static Method]: FromString', () => {
        it('read without srid information', () => {
            const p = Point.FromJSON(JSON.parse(pointStr));
            assert.isDefined(p);
            assert.deepEqual(p.coordinates, [1,1]);
            assert.isUndefined(p.crs);
        });

        it('read with srid information', () => {
            const p = Point.FromJSON(JSON.parse(pointStrSrid));
            assert.isDefined(p);
            assert.deepEqual(p.coordinates, [1,1]);
            assert.isDefined(p.crs);
            assert.equal(p.crs.GetSrId(), 4326);
        });

        it('error on wrong type', () => {
            assert.throws(() => {
                Point.FromJSON(JSON.parse(pointStrInvalidType));
            });
        });
    });
    describe('[Method]: ToJSON', () => {
        it('basic create', () => {
            const p = new Point([1,1]);
            const res = p.ToJSON();
            assert.equal(res.type, 'Point');
            assert.deepEqual(res.coordinates, [1,1]);
            assert.isUndefined(res.crs);
        });

        it('create with crs info', () => {
            const p = new Point([1,1], 4326);
            const res = p.ToJSON();
            assert.equal(res.type, 'Point');
            assert.deepEqual(res.coordinates, [1,1]);
            assert.deepEqual(res.crs, {
                type: 'name',
                properties: {
                    name: 'EPSG:4326',
                },
            });
        });
    });
});
