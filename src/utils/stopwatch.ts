// Nanoseconds in one Second
const NS_PER_SEC = 1e9;

/**
 * measure the Time between Code Lines in ms
 * the StopWatch starts when a new Instance was created and can give the Elapsed ms when ElapsedMs was called.
 * measure multiple Times is also possible with SectionStart and SectionElapsedMs
 */
export class StopWatch {
    private _time: number | [number, number];
    private readonly _multipleTimes: {[key: string]: number | [number, number]};
    private _measures: number[] = [];
    private _isPause = false;
    private _multipleMeasures: {[key: string]: number[]} = {};
    private _multipleIsPause: {[key: string]: boolean} = {};

    /**
     * create a new StopWatch Instance at this Time the StopWatch was started
     *
     * ```typescript
     * const watch = new StopWatch();
     * // returns the elapsed Ms from construction and this Line
     * watch.ElapsedMs();
     * ```
     */
    constructor() {
        this._time = this.getTimestamp();
        this._multipleTimes = {};
    }

    /**
     * starts the StopWatch for a specific Section marks by the given key
     * @param key the key that indicates the Section
     *
     * ```typescript
     * const watch = new StopWatch();
     * watch.SectionStart('A');
     * // logs the Time between SectionStart('A') and SectionElapsedMs('A')
     * watch.SectionElapsedMs('A');
     * watch.SectionStart('B');
     * // logs the Time between SectionStart('B') and SectionElapsedMs('B')
     * watch.SectionElapsedMs('B');
     * // logs the Time between SectionStart('A') and this Line with SectionStart('B') and SectionElapsedMs('B')
     * watch.SectionElapsedMs('A');
     * ```
     */
    public SectionStart(key: string): void {
        this._multipleTimes[key] = this.getTimestamp();
        this._multipleMeasures[key] = [];
        this._multipleIsPause[key] = false;
    }

    /**
     * checks if a Section was paused
     * @param key the key that indicates the Section
     */
    public IsSectionPause(key: string): boolean {
        return this._multipleIsPause[key] === true;
    }

    /**
     * if the current StopWatch in pause mode
     */
    get IsPause(): boolean {
        return this._isPause === true;
    }

    /**
     * get the Time in ms Elapsed by the Section matches the given key
     * @param key the key that indicates the Section
     */
    public SectionElapsedMs(key: string): number {
        let tmp = this._multipleIsPause[key] ? 0 : this.getMultipleTimeDiff(key);
        if (isNaN(tmp)) {
            tmp = 0;
        }
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
     * @param key the key that indicates the Section
     */
    public SectionPause(key: string) {
        this._multipleMeasures[key].Add(this.getMultipleTimeDiff(key));
        this._multipleIsPause[key] = true;
    }

    /**
     * same as Resume only for Sections
     * @param key the key that indicates the Section
     */
    public SectionResume(key: string) {
        this._multipleIsPause[key] = false;
        this._multipleTimes[key] = this.getTimestamp();
    }

    /**
     * stops the StopWatch from measure Time
     */
    public Pause() {
        this._measures.Add(this.getTimeDiff());
        this._isPause = true;
    }

    /**
     * starts the StopWatch at the Point from the Last Pause
     */
    public Resume() {
        this._time = this.getTimestamp();
        this._isPause = false;
    }

    /**
     * gets the Elapsed Time in ms from the StopWatch
     */
    public ElapsedMs(): number {
        let tmp = this._isPause ? 0 : this.getTimeDiff();
        if (this._measures.Any()) {
            for (const t of this._measures) {
                tmp += t;
            }
        }
        return tmp;
    }

    private getTimestamp(): number | [number, number] {
        if (this.isBrowser()) {
            return window.performance.now();
        }
        return process.hrtime();
    }

    private getTimeDiff(): number {
        if (!this.isBrowser()) {
            const tmp2 = this._time as [number, number];
            if (!tmp2) {
                return 0
            }
            const t = process.hrtime(tmp2);
            return (t[0] * NS_PER_SEC + t[1])/1000000
        }
        const tmp = this._time as number;
        return window.performance.now() - tmp;
    }

    private getMultipleTimeDiff(key: string): number {
        if (!this.isBrowser()) {
            const tmp2 = this._multipleTimes[key] as [number, number];
            if (!tmp2) {
                return 0
            }
            const t = process.hrtime(tmp2);
            return (t[0] * NS_PER_SEC + t[1])/1000000
        }
        const tmp = this._multipleTimes[key] as number;
        return window.performance.now() - tmp;
    }

    private isBrowser(): boolean {
        try {
            return !!(window && window.performance);
        } catch(e) {
            return false;
        }
    }
}
