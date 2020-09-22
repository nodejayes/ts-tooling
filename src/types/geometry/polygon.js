const {ReferenceSystem} = require('./reference.system');

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
