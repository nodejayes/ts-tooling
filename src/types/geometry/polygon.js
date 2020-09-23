const {ReferenceSystem} = require('./reference.system');
const {transform, Proj} = require('proj4');

class Polygon {
    constructor(coordinates, srid) {
        this.type = 'Polygon';
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
        this.coordinates = this.coordinates.Convert(l => l.Convert(c => {
            const tmp = transform(new Proj('EPSG:' + this.crs.GetSrId()), new Proj('EPSG:' + srid), c);
            return [tmp.x, tmp.y];
        }));
        this.crs = new ReferenceSystem(srid);
    }
}

Polygon.FromString = function (str) {
    return Polygon.FromJSON(JSON.parse(str));
};

Polygon.FromJSON = function (json) {
    if (json.type !== 'Polygon') {
        throw new Error('invalid type in json ' + json.type + ' expected Polygon');
    }
    return new Polygon(json.coordinates, json.crs ? ReferenceSystem.FromJSON(json.crs).GetSrId() : undefined);
};

module.exports = {Polygon};
