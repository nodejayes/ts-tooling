export class Bool {
    private _value = false;

    get Value(): boolean {
        return this._value;
    }

    constructor(b: boolean) {
        this._value = b;
    }

    IsTrue(): boolean {
        return this._value;
    }

    IsFalse(): boolean {
        return !this._value;
    }

    Switch(): Bool {
        return new Bool(!this._value);
    }
}