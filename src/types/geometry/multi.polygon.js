const {ReferenceSystem} = require('./reference.system');

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
