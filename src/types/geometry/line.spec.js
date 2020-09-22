require('mocha');
const {assert} = require('chai');
const {Line} = require('./line');

describe('Line Tests', () => {
    const c1str = '[[0,0],[1,1]]';
    const c1 = JSON.parse(c1str);
    const indicator = 'LineString';
    const srid = 4326;
    const str = `{"type":"${indicator}","coordinates":${c1str}}`;
    const strInvalidType = `{"type":"invalid","coordinates":${c1str}`;
    const strSrid = `{"type":"${indicator}","coordinates":${c1str},"crs":{"type":"name","properties":{"name":"EPSG:${srid}"}}}`;

    describe('constructor', () => {
        it('can create without srid', () => {
            const l = new Line(c1);
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isUndefined(l.crs);
        });
        it('can set srid', () => {
            const l = new Line(c1, srid);
            assert.isDefined(l);
            assert.equal(l.crs.GetSrId(), srid);
        });
    });
    describe('[static Method]: FromJSON', () => {
        it('read without srid information', () => {
            const l = Line.FromString(str);
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isUndefined(l.crs);
        });

        it('read with srid information', () => {
            const l = Line.FromString(strSrid);
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isDefined(l.crs);
            assert.equal(l.crs.GetSrId(), srid);
        });

        it('error on wrong type', () => {
            assert.throws(() => {
                Line.FromString(strInvalidType);
            });
        });
    });
    describe('[static Method]: FromString', () => {
        it('read without srid information', () => {
            const l = Line.FromJSON(JSON.parse(str));
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isUndefined(l.crs);
        });

        it('read with srid information', () => {
            const l = Line.FromJSON(JSON.parse(strSrid));
            assert.isDefined(l);
            assert.deepEqual(l.coordinates, c1);
            assert.isDefined(l.crs);
            assert.equal(l.crs.GetSrId(), srid);
        });

        it('error on wrong type', () => {
            assert.throws(() => {
                Line.FromJSON(JSON.parse(strInvalidType));
            });
        });
    });
    describe('[Method]: ToJSON', () => {
        it('basic create', () => {
            const l = new Line(c1);
            const res = l.ToJSON();
            assert.equal(res.type, indicator);
            assert.deepEqual(res.coordinates, c1);
            assert.isUndefined(res.crs);
        });

        it('create with crs info', () => {
            const l = new Line(c1, srid);
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
});
