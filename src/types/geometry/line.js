const {ReferenceSystem} = require('./reference.system');
const {transform, Proj} = require('proj4');

class Line {
    constructor(coordinates, srid) {
        this.type = 'LineString';
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
        this.coordinates = this.coordinates.Convert(c => {
            const tmp = transform(new Proj('EPSG:' + this.crs.GetSrId()), new Proj('EPSG:' + srid), c);
            return [tmp.x, tmp.y];
        });
        this.crs = new ReferenceSystem(srid);
    }
}

Line.FromString = function (str) {
    return Line.FromJSON(JSON.parse(str));
};

Line.FromJSON = function (json) {
    if (json.type !== 'LineString') {
        throw new Error('invalid type in json ' + json.type + ' expected LineString');
    }
    return new Line(json.coordinates, json.crs ? ReferenceSystem.FromJSON(json.crs).GetSrId() : undefined);
};

module.exports = {Line};
