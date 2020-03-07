require('../../../types/array/extension');
require('../../../types/number/extension/extension');

const NS_PER_SEC = 1e9;

/**
 * measure the Time between Code Lines in ms
 *
 * the StopWatch starts when a new Instance was created and can give the Elapsed ms when ElapsedMs was called.
 *
 * measure multiple Times is also possible with SectionStart and SectionElapsedMs
 *
 * @memberof module:utils/stopwatch
 */
class StopWatch {
    /**
     * create a new StopWatch Instance at this Time the StopWatch was started
     *
     * @constructor
     *
     * @example
     * const watch = new StopWatch();
     * // returns the elapsed Ms from construction and this Line
     * watch.ElapsedMs();
     */
    constructor() {
        this._time = this._getTimestamp();
        this._multipleTimes = {};
        this._measures = [];
        this._isPause = false;
        this._multipleMeasures = {};
        this._multipleIsPause = {};
    }

    /**
     * starts the StopWatch for a specific Section marks by the given key
     *
     * @param key {string} the key that indicates the Section
     *
     * @example
     * const watch = new StopWatch();
     * watch.SectionStart('A');
     * // logs the Time between SectionStart('A') and SectionElapsedMs('A')
     * watch.SectionElapsedMs('A');
     * watch.SectionStart('B');
     * // logs the Time between SectionStart('B') and SectionElapsedMs('B')
     * watch.SectionElapsedMs('B');
     * // logs the Time between SectionStart('A') and this Line with SectionStart('B') and SectionElapsedMs('B')
     * watch.SectionElapsedMs('A');
     */
    SectionStart(key) {
        this._multipleTimes[key] = this._getTimestamp();
        this._multipleMeasures[key] = [];
        this._multipleIsPause[key] = false;
    }

    /**
     * checks if a Section was paused
     *
     * @param key {string} the key that indicates the Section
     * @return {boolean}
     *
     * @example
     * const sw = new StopWatch();
     * sw.SectionStart('sw1');
     * // returns false
     * sw.IsSectionPause('sw1');
     * sw.SectionPause('sw1');
     * // returns true
     * sw.IsSectionPause('sw1');
     */
    IsSectionPause(key) {
        return this._multipleIsPause[key] === true;
    }

    /**
     * if the current StopWatch in pause mode
     *
     * @readonly
     *
     * @example
     * const sw = new StopWatch();
     * // returns false
     * sw.IsPause();
     * sw.Pause();
     * // returns true
     * sw.IsPause();
     */
    get IsPause() {
        return this._isPause === true;
    }

    /**
     * get the Time in ms Elapsed by the Section matches the given key
     *
     * @param key {string} the key that indicates the Section
     * @return {number}
     *
     * @example
     * const sw = new StopWatch();
     * sw.SectionStart('sw1');
     * // returns the elapsed milliseconds since start of section sw1
     * sw.SectionElapsedMs('sw1');
     */
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

    /**
     * same as Pause only for Sections
     *
     * @param key {string} the key that indicates the Section
     *
     * @example
     * const sw = new StopWatch();
     * sw.SectionStart('sw1');
     * // pause the sw1 section
     * sw.SectionPause('sw1');
     */
    SectionPause(key) {
        this._multipleMeasures[key].Add(this._getMultipleTimeDiff(key));
        this._multipleIsPause[key] = true;
    }

    /**
     * same as Resume only for Sections
     *
     * @param key {string} the key that indicates the Section
     *
     * @example
     * const sw = new StopWatch();
     * sw.SectionStart('sw1');
     * sw.SectionPause('sw1');
     * // restart the sw1 section
     * sw.SectionResume('sw1');
     */
    SectionResume(key) {
        this._multipleIsPause[key] = false;
        this._multipleTimes[key] = this._getTimestamp();
    }

    /**
     * stops the StopWatch from measure Time
     *
     * @example
     * const sw = new StopWatch();
     * // pause the StopWatch
     * sw.Pause();
     */
    Pause() {
        this._measures.Add(this._getTimeDiff());
        this._isPause = true;
    }

    /**
     * starts the StopWatch at the Point from the Last Pause
     *
     * @example
     * const sw = new StopWatch();
     * sw.Pause();
     * // resume the paused StopWatch
     * sw.Resume();
     */
    Resume() {
        this._time = this._getTimestamp();
        this._isPause = false;
    }

    /**
     * gets the Elapsed Time in ms from the StopWatch
     *
     * @return {number}
     *
     * @example
     * const sw = StopWatch();
     * // get the elapsed time in ms from StopWatch constructor
     * sw.ElapsedMs();
     */
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
