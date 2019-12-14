/* TODO: extend base Object without destroy Luxon
Object.prototype.Values = function (){
    return Object.values(this);
};

Object.prototype.Keys = function () {
    return Object.keys(this);
};

Object.prototype.IsCircular = function () {
    return this.GetCircular().length > 0;
};

Object.prototype.GetCircular = function () {
    const alreadyChecked = [];
    const keyReferences = [];

    function check(obj) {
        if (obj && typeof obj === 'object') {
            if (alreadyChecked.indexOf(obj) !== -1) {
                return ['yes'];
            }
            alreadyChecked.push(obj);
            for (const key in obj) {
                if (obj.hasOwnProperty(key) && check(obj[key]).length > 0) {
                    keyReferences.Add(key);
                    return keyReferences;
                }
            }
        }
        return keyReferences;
    }

    return check(this);
};
*/
