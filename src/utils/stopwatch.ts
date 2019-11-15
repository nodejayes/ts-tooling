// Nanoseconds in one Second
const NS_PER_SEC = 1e9;

/**
 * measure the Time between Code Lines in ms
 * the StopWatch starts when a new Instance was created and can give the Elapsed ms when ElapsedMs was called.
 * measure multiple Times is also possible with SectionStart and SectionElapsedMs
 */
export class StopWatch {
    private readonly _time: number | [number, number];
    private readonly _multipleTimes: {[key: string]: number | [number, number]};

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
    }

    /**
     * get the Time in ms Elapsed by the Section matches the given key
     * @param key the key that indicates the Section
     */
    public SectionElapsedMs(key: string): number {
        return this.getMultipleTimeDiff(key);
    }

    /**
     * gets the Elapsed Time in ms from the StopWatch
     */
    public ElapsedMs(): number {
        return this.getTimeDiff();
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
