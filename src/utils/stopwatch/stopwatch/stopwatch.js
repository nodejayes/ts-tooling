require('../../../types/array/extension');
require('../../../types/number/extension/extension');

const NS_PER_SEC = 1e9;

class StopWatch {
    constructor() {
        this._time = this._getTimestamp();
        this._multipleTimes = {};
        this._measures = [];
        this._isPause = false;
        this._multipleMeasures = {};
        this._multipleIsPause = {};
    }

    SectionStart(key) {
        this._multipleTimes[key] = this._getTimestamp();
        this._multipleMeasures[key] = [];
        this._multipleIsPause[key] = false;
    }

    IsSectionPause(key) {
        return this._multipleIsPause[key] === true;
    }

    get IsPause() {
        return this._isPause === true;
    }

    SectionElapsedMs(key) {
        let tmp = this._multipleIsPause[key] ? 0 : this._getMultipleTimeDiff(key);
        if (!this._multipleMeasures[key]) {
            this._multipleMeasures[key] = [];
        }
        if (this._multipleMeasures[key].Any()) {
            for (const t of this._multipleMeasures[key]) {
                tmp += t;
            }
        }
        return tmp;
    }

    SectionPause(key) {
        this._multipleMeasures[key].Add(this._getMultipleTimeDiff(key));
        this._multipleIsPause[key] = true;
    }

    SectionResume(key) {
        this._multipleIsPause[key] = false;
        this._multipleTimes[key] = this._getTimestamp();
    }

    Pause() {
        this._measures.Add(this._getTimeDiff());
        this._isPause = true;
    }

    Resume() {
        this._time = this._getTimestamp();
        this._isPause = false;
    }

    ElapsedMs() {
        let tmp = this._isPause ? 0 : this._getTimeDiff();
        if (this._measures.Any()) {
            for (const t of this._measures) {
                tmp += t;
            }
        }
        return tmp;
    }

    _getTimestamp() {
        if (this._isBrowser()) {
            return window.performance.now();
        }
        return global['process'].hrtime();
    }

    _getTimeDiff() {
        if (!this._isBrowser()) {
            const tmp2 = this._time;
            const t = global['process'].hrtime(tmp2);
            return (t[0] * NS_PER_SEC + t[1])/1000000
        }
        const tmp = this._time;
        return window.performance.now() - tmp;
    }

    _getMultipleTimeDiff(key) {
        if (!this._isBrowser()) {
            const tmp2 = this._multipleTimes[key];
            if (!tmp2) {
                return 0
            }
            const t = global['process'].hrtime(tmp2);
            return (t[0] * NS_PER_SEC + t[1])/1000000
        }
        const tmp = this._multipleTimes[key];
        return window.performance.now() - tmp;
    }

    _isBrowser() {
        try {
            return !!(window && window.performance);
        } catch(e) {
            return false;
        }
    }
}

module.exports = {StopWatch};
