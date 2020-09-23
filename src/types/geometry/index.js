const {ReferenceSystem, registerProjection, WGS84, WEB_MERCATOR} = require('./reference.system');
const {Point} = require('./point');
const {MultiPoint} = require('./multi.point');
const {Line} = require('./line');
const {MultiLine} = require('./multi.line');
const {Polygon} = require('./polygon');
const {MultiPolygon} = require('./multi.polygon');
const {FeatureCollection} = require('./feature.collection');
const {Feature} = require('./feature');

module.exports = {
    ReferenceSystem, registerProjection, WGS84, WEB_MERCATOR,
    Point, Line, Polygon, MultiPoint, MultiLine, MultiPolygon,
    FeatureCollection, Feature
};
