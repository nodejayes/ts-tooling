const {NumberFactory} = require('../number');
const {ReferenceSystem} = require('./reference.system');

class FeatureCollection {
    constructor(features, srid) {
        this.type = 'FeatureCollection';
        this.features = features || [];
        let epsgcode = srid || 0;
        if (epsgcode < 1 && features.length > 0) {
            for (const f of features) {
                if (!f.geometry.crs) {
                    continue;
                }
                let tmp = f.geometry.crs;
                if (!f.geometry.crs.GetSrId) {
                    tmp = new ReferenceSystem(NumberFactory.NewInteger(tmp.properties.name.ReplaceAll('EPSG:', '')));
                }
                epsgcode = tmp.GetSrId();
                break;
            }
        }
        if (epsgcode < 1) {
            return;
        }
        if (!features.TrueForAll(e => {
            let tmp = e.geometry.crs;
            if (!tmp.GetSrId) {
                tmp = new ReferenceSystem(NumberFactory.NewInteger(tmp.properties.name.ReplaceAll('EPSG:', '')))
            }
            return tmp.GetSrId() === epsgcode;
        })) {
            throw new Error(`multiple srid's found! collection can only have ${epsgcode}`);
        }
        this.crs = new ReferenceSystem(epsgcode);
    }

    ToJSON() {
        return !!this.crs ? {
            type: this.type,
            features: this.features.Convert(f => f.ToJSON()),
            crs: this.crs.ToJSON(),
        } : {
            type: this.type,
            features: this.features.Convert(f => f.ToJSON()),
        };
    }
}

FeatureCollection.FromString = function (str) {
    return FeatureCollection.FromJSON(JSON.parse(str));
};

FeatureCollection.FromJSON = function (json) {
    if (json.type !== 'FeatureCollection') {
        throw new Error('invalid type in json ' + json.type + ' expected FeatureCollection');
    }
    return new FeatureCollection(json.features, json.crs ? ReferenceSystem.FromJSON(json.crs).GetSrId() : undefined);
};

module.exports = {FeatureCollection};
