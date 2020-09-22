const {ReferenceSystem} = require('./reference.system');

class Point {
    constructor(coordinates, srid) {
        this.type = 'Point';
        this.coordinates = coordinates;
        if (srid > 0) {
            this.crs = new ReferenceSystem(srid);
        }
    }

    ToJSON() {
        return !!this.crs ? {
            type: this.type,
            coordinates: this.coordinates,
            crs: this.crs.ToJSON(),
        } : {
            type: this.type,
            coordinates: this.coordinates,
        };
    }
}

Point.FromString = function (str) {
    return Point.FromJSON(JSON.parse(str));
};

Point.FromJSON = function (json) {
    if (json.type !== 'Point') {
        throw new Error('invalid type in json ' + json.type + ' expected Point');
    }
    return new Point(json.coordinates, json.crs ? ReferenceSystem.FromJSON(json.crs).GetSrId() : undefined);
};

module.exports = {Point};
