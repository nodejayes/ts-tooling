const {ReferenceSystem} = require('./reference.system');
const {transform, Proj} = require('proj4');

class MultiPolygon {
    constructor(coordinates, srid) {
        this.type = 'MultiPolygon';
        this.coordinates = coordinates;
        if (srid > 0) {
            this.crs = new ReferenceSystem(srid);
        }
    }

    ToJSON() {
        return !!this.crs ? {
            type: this.type,
            coordinates: this.coordinates,
            crs: this.crs,
        } : {
            type: this.type,
            coordinates: this.coordinates,
        };
    }

    Transform(srid) {
        this.coordinates = this.coordinates.Convert(p => p.Convert(l => l.Convert(c => {
            const tmp = transform(new Proj('EPSG:' + this.crs.GetSrId()), new Proj('EPSG:' + srid), c);
            return [tmp.x, tmp.y];
        })));
        this.crs = new ReferenceSystem(srid);
    }
}

MultiPolygon.FromString = function (str) {
    return MultiPolygon.FromJSON(JSON.parse(str));
};

MultiPolygon.FromJSON = function (json) {
    if (json.type !== 'MultiPolygon') {
        throw new Error('invalid type in json ' + json.type + ' expected MultiPolygon');
    }
    return new MultiPolygon(json.coordinates, json.crs ? ReferenceSystem.FromJSON(json.crs).GetSrId() : undefined);
};

module.exports = {MultiPolygon};
