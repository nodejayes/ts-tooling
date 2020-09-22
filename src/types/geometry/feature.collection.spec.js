require('mocha');
const {assert} = require('chai');
const {FeatureCollection} = require('./feature.collection');
const {Feature} = require('./feature');
const {Point} = require('./point');

describe('FeatureCollection Tests', () => {
    const f1 = new Feature(new Point([1,1], 4326));
    const f2 = new Feature(new Point([2,2], 4326));
    const f3 = new Feature(new Point([3,3], 3857));
    const fcStr = '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[1,1],"crs":{"type":"name","properties":{"name":"EPSG:4326"}}},"properties":{"hello":"world"}}]}';

    describe('constructor', () => {
        it('can create empty collection', () => {
            const fc = new FeatureCollection([]);
            assert.isDefined(fc);
            assert.equal(fc.type, 'FeatureCollection');
            assert.equal(fc.features.length, 0);
            assert.isUndefined(fc.crs);
        });
        it('auto detect srid', () => {
            const fc = new FeatureCollection([f1, f2]);
            assert.isDefined(fc);
            assert.equal(fc.type, 'FeatureCollection');
            assert.equal(fc.features.length, 2);
            assert.isDefined(fc.crs);
            assert.equal(fc.crs.GetSrId(), 4326);
        });
        it('create new collection of Points', () => {
            const fc = new FeatureCollection([f1, f2], 4326);
            assert.isDefined(fc);
            assert.equal(fc.type, 'FeatureCollection');
            assert.equal(fc.features.length, 2);
            assert.isDefined(fc.crs);
            assert.equal(fc.crs.GetSrId(), 4326);
        });
        it('can`t create collection with multiple srids', () => {
            assert.throws(() => {
                new FeatureCollection([f1, f2, f3], 4326);
            });
        });
    });
    describe('[static Method] FromString', () => {
        it('can read valid string', () => {
            const fc = FeatureCollection.FromString(fcStr);
            assert.isDefined(fc);
            assert.equal(fc.type, 'FeatureCollection');
            assert.equal(fc.features.length, 1);
        });
        it('error on invalid string', () => {
            assert.throws(() => {
                FeatureCollection.FromString('');
            });
        });
    });
    describe('[static Method] FromJSON', () => {
        it('can parse from valid json object', () => {
            const fc = FeatureCollection.FromJSON(JSON.parse(fcStr));
            assert.isDefined(fc);
            assert.equal(fc.type, 'FeatureCollection');
            assert.equal(fc.features.length, 1);
        });
        it('error on invalid json object', () => {
            assert.throws(() => {
                FeatureCollection.FromJSON(null);
            });
        });
    });
    describe('[Method] ToJSON', () => {
        it('convert to json object', () => {
            const fc = new FeatureCollection([f1]);
            const res = fc.ToJSON();
            assert.equal(res.type, fc.type);
            assert.equal(res.features.length, fc.features.length);
            assert.deepEqual(res.crs, fc.crs);
        });
    });
});
