require('../string');
const {NumberFactory} = require('../number/factory/number.factory');

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

module.exports = {ReferenceSystem};
