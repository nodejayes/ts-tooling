require('mocha');
const {assert} = require('chai');
const {MultiPoint} = require('./multi.point');

describe('MultiPoint Tests', () => {
    const c1str = '[[0,0],[0,1],[1,1],[1,0],[0,0]]';
    const c1 = JSON.parse(c1str);
    const indicator = 'MultiPoint';
    const srid = 4326;
    const str = `{"type":"${indicator}","coordinates":${c1str}}`;
    const strInvalidType = `{"type":"invalid","coordinates":${c1str}`;
    const strSrid = `{"type":"${indicator}","coordinates":${c1str},"crs":{"type":"name","properties":{"name":"EPSG:${srid}"}}}`;

    describe('constructor', () => {
        it('can create without srid', () => {
            const l = new MultiPoint(c1);
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isUndefined(l.crs);
        });
        it('can set srid', () => {
            const l = new MultiPoint(c1, srid);
            assert.isDefined(l);
            assert.equal(l.crs.GetSrId(), srid);
        });
    });
    describe('[static Method]: FromJSON', () => {
        it('read without srid information', () => {
            const l = MultiPoint.FromString(str);
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isUndefined(l.crs);
        });

        it('read with srid information', () => {
            const l = MultiPoint.FromString(strSrid);
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isDefined(l.crs);
            assert.equal(l.crs.GetSrId(), srid);
        });

        it('error on wrong type', () => {
            assert.throws(() => {
                MultiPoint.FromString(strInvalidType);
            });
        });
    });
    describe('[static Method]: FromString', () => {
        it('read without srid information', () => {
            const l = MultiPoint.FromJSON(JSON.parse(str));
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isUndefined(l.crs);
        });

        it('read with srid information', () => {
            const l = MultiPoint.FromJSON(JSON.parse(strSrid));
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isDefined(l.crs);
            assert.equal(l.crs.GetSrId(), srid);
        });

        it('error on wrong type', () => {
            assert.throws(() => {
                MultiPoint.FromJSON(JSON.parse(strInvalidType));
            });
        });
    });
    describe('[Method]: ToJSON', () => {
        it('basic create', () => {
            const l = new MultiPoint(c1);
            const res = l.ToJSON();
            assert.equal(res.type, indicator);
            assert.deepEqual(res.coordinates, c1);
            assert.isUndefined(res.crs);
        });

        it('create with crs info', () => {
            const l = new MultiPoint(c1, srid);
            const res = l.ToJSON();
            assert.equal(res.type, indicator);
            assert.deepEqual(res.coordinates, c1);
            assert.deepEqual(res.crs, {
                type: 'name',
                properties: {
                    name: 'EPSG:' + srid,
                },
            });
        });
    });
    describe('[Method]: Transform', () => {
        it('transform from 4326 to 3857', () => {
            const p = new MultiPoint([[1,1]], 4326);
            p.Transform(3857);
            assert.deepEqual(p.crs.GetSrId(), 3857);
            assert.deepEqual(p.coordinates, [[
                111319.49079327357,
                111325.14286638486
            ]]);
        });
    });
});
