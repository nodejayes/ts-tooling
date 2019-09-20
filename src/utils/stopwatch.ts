import { Double } from "../primitive/double";

const NS_PER_SEC = 1e9;

/**
 * a Stopwatch to measure the Time in ms
 * the StopWatch starts in the Constructor
 * You can measure multiple Times when you give the StopWatch a key
 */
export class StopWatch {
    private _time: number | [number, number];
    private _multipleTimes: {[key: string]: number | [number, number]};

    constructor() {
        this._time = this.getTimestamp();
        this._multipleTimes = {};
    }

    public SectionStart(key: string): void {
        this._multipleTimes[key] = this.getTimestamp();
    }

    public SectionElapsedMs(key: string): Double {
        return new Double(this.getMultipleTimeDiff(key));
    }

    public ElapsedMs(): Double {
        return new Double(this.getTimeDiff());
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
