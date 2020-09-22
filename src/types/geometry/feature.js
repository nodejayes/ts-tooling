class Feature {
    constructor(geometry, properties) {
        this.type = 'Feature';
        this.geometry = geometry;
        this.properties = properties || null;
    }

    ToJSON() {
        return {
            type: this.type,
            geometry: this.geometry.ToJSON(),
            properties: this.properties,
        };
    }
}

Feature.FromString = function (str) {
    return Feature.FromJSON(JSON.parse(str));
};

Feature.FromJSON = function (json) {
    if (json.type !== 'Feature') {
        throw new Error('invalid type in json ' + json.type + ' expected Feature');
    }
    return new Feature(json.geometry, json.properties);
};

module.exports = {Feature};
