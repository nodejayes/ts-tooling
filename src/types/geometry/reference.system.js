require('../string');
const {NumberFactory} = require('../number/factory/number.factory');
require('../array');
const proj4 = require('proj4');

function registerProjection(srid, projection) {
    proj4.defs('EPSG:' + srid, projection);
}

registerProjection(4326, '+proj=longlat +datum=WGS84 +no_defs');
registerProjection(3857, '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs');

class ReferenceSystem {
    constructor(srid) {
        if (srid < 1) {
            throw new Error('invalid srid ' + srid);
        }
        this.type = 'name';
        this.properties = {
            name: `EPSG:${srid}`,
        };
    }

    GetSrId() {
        return NumberFactory.NewInteger(this.properties.name.ReplaceAll('EPSG:', ''));
    }

    ToJSON() {
        return {
            type: this.type,
            properties: this.properties,
        };
    }
}

ReferenceSystem.FromString = function (str) {
    return ReferenceSystem.FromJSON(JSON.parse(str));
};

ReferenceSystem.FromJSON = function (json) {
    const tmp = new ReferenceSystem(1);
    tmp.properties.name = json.properties.name;
    return tmp;
};

const WGS84 = new ReferenceSystem(4326);
const WEB_MERCATOR = new ReferenceSystem(3857);

module.exports = {ReferenceSystem, registerProjection, WGS84, WEB_MERCATOR};
