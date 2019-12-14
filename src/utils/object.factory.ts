import '../ts-tooling';

export class ObjectFactory {
    static IsCircular(obj: any): boolean {
        return ObjectFactory.GetCircular(obj).length > 0;
    }

    static GetCircular(obj: any): string[] {
        const alreadyChecked = [];
        const keyReferences = [];

        function check(innerObj) {
            if (innerObj && typeof innerObj === 'object') {
                if (alreadyChecked.indexOf(innerObj) !== -1) {
                    return ['yes'];
                }
                alreadyChecked.push(innerObj);
                for (const key in innerObj) {
                    if (innerObj.hasOwnProperty(key) && check(innerObj[key]).length > 0) {
                        keyReferences.Add(key);
                        return keyReferences;
                    }
                }
            }
            return keyReferences;
        }

        return check(obj);
    }
}
