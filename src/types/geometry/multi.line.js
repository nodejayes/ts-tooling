const {ReferenceSystem} = require('./reference.system');

class MultiLine {
    constructor(coordinates, srid) {
        this.type = 'MultiLineString';
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

MultiLine.FromString = function (str) {
    return MultiLine.FromJSON(JSON.parse(str));
};

MultiLine.FromJSON = function (json) {
    if (json.type !== 'MultiLineString') {
        throw new Error('invalid type in json ' + json.type + ' expected MultiLineString');
    }
    return new MultiLine(json.coordinates, json.crs ? ReferenceSystem.FromJSON(json.crs).GetSrId() : undefined);
};

module.exports = {MultiLine};
