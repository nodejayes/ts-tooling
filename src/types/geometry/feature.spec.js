require('mocha');
const {assert} = require('chai');
const {Feature} = require('./feature');
const {Point} = require('./point');
const {Line} = require('./line');
const {Polygon} = require('./polygon');
const {MultiPoint} = require('./multi.point');
const {MultiLine} = require('./multi.line');
const {MultiPolygon} = require('./multi.polygon');

describe('Feature Tests', () => {
    const constructors = [
        {constructor: Point, geom: new Point([1,1], 4326)},
        {constructor: Line, geom: new Line([[0,0], [1,1]], 4326)},
        {constructor: Polygon, geom: new Polygon([[[0,0],[0,1],[1,1],[1,0],[0,0]]], 4326)},
        {constructor: MultiPoint, geom: new MultiPoint([[0,0],[1,1]], 4326)},
        {constructor: MultiLine, geom: new MultiLine([[[0,0],[1,1]]], 4326)},
        {constructor: MultiPolygon, geom: new MultiPolygon([[[[0,0],[0,1],[1,1],[1,0],[0,0]]]], 4326)},
    ];


    for (const c of constructors) {
        describe(`${c.geom.type} constructor`, () => {
            it(`create new ${c.geom.type} feature without properties`, () => {
                const f = new Feature(c.geom);
                assert.isDefined(f);
                assert.equal(f.type, 'Feature');
                assert.equal(f.geometry.type, c.geom.type);
                assert.isNull(f.properties);
            });
            it(`create new ${c.geom.type} feature with properties`, () => {
                const f = new Feature(c.geom, {hello:'world'});
                assert.isDefined(f);
                assert.equal(f.type, 'Feature');
                assert.equal(f.geometry.type, c.geom.type);
                assert.isNotNull(f.properties);
                assert.equal(f.properties.hello, 'world');
            });
        });

        describe(`${c.geom.type} [static Method] FromString`, () => {
            it('read valid string', () => {
                const f = {
                    type: 'Feature',
                    geometry: c.geom.ToJSON(),
                    properties: null,
                };
                const str = JSON.stringify(f);
                const g = Feature.FromString(str);
                assert.isDefined(g);
                assert.deepEqual(g, f);
            });
            it('read valid string with properties', () => {
                const f = {
                    type: 'Feature',
                    geometry: c.geom.ToJSON(),
                    properties: {hello: 'world'},
                };
                const str = JSON.stringify(f);
                const g = Feature.FromString(str);
                assert.isDefined(g);
                assert.deepEqual(g, f);
            });
            it('error on invalid string', () => {
                assert.throws(() => {
                    c.constructor.FromString('');
                });
            });
        });

        describe(`${c.geom.type} [static Method] FromJSON`, () => {
            it('read from valid json object', () => {
                const f = {
                    type: 'Feature',
                    geometry: c.geom.ToJSON(),
                    properties: null,
                };
                const g = Feature.FromJSON(f);
                assert.isDefined(g);
                assert.deepEqual(g, f);
            });
            it('read from valid json object with properties', () => {
                const f = {
                    type: 'Feature',
                    geometry: c.geom.ToJSON(),
                    properties: {hello: 'world'},
                };
                const g = Feature.FromJSON(f);
                assert.isDefined(g);
                assert.deepEqual(g, f);
            });
            it('read from invalid json object', () => {
                assert.throws(() => {
                    c.constructor.FromJSON(null);
                });
            });
        });

        describe(`${c.geom.type} [Method] ToJSON`, () => {
            it('without properties', () => {
                const f = new Feature(c.geom);
                const tmp = f.ToJSON();
                assert.isDefined(tmp);
                assert.equal(tmp.type, f.type);
                assert.deepEqual(tmp.geometry, f.geometry.ToJSON());
                assert.isNull(tmp.properties);
            });
            it('with properties', () => {
                const f = new Feature(c.geom,  {hello: 'world'});
                const tmp = f.ToJSON();
                assert.isDefined(tmp);
                assert.equal(tmp.type, f.type);
                assert.deepEqual(tmp.geometry, f.geometry.ToJSON());
                assert.deepEqual(tmp.properties, f.properties);
            });
        });
    }
});
