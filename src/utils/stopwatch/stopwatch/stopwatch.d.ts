/**
 * measure the Time between Code Lines in ms
 *
 * the StopWatch starts when a new Instance was created and can give the Elapsed ms when ElapsedMs was called.
 *
 * measure multiple Times is also possible with SectionStart and SectionElapsedMs
 *
 * @category Util
 */
export class StopWatch {
    /**
     * create a new StopWatch Instance at this Time the StopWatch was started
     *
     * @example
     * ```typescript
     * const watch = new StopWatch();
     * // returns the elapsed Ms from construction and this Line
     * watch.ElapsedMs();
     * ```
     */
    constructor();

    /**
     * starts the StopWatch for a specific Section marks by the given key
     *
     * @param key the key that indicates the Section
     *
     * @example
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
    public SectionStart(key: string): void;

    /**
     * checks if a Section was paused
     *
     * @param key the key that indicates the Section
     *
     * @example
     * ```typescript
     * const sw = new StopWatch();
     * sw.SectionStart('sw1');
     * // returns false
     * sw.IsSectionPause('sw1');
     * sw.SectionPause('sw1');
     * // returns true
     * sw.IsSectionPause('sw1');
     * ```
     */
    public IsSectionPause(key: string): boolean;

    /**
     * if the current StopWatch in pause mode
     *
     * @example
     * ```typescript
     * const sw = new StopWatch();
     * // returns false
     * sw.IsPause();
     * sw.Pause();
     * // returns true
     * sw.IsPause();
     * ```
     */
    readonly IsPause: boolean;

    /**
     * get the Time in ms Elapsed by the Section matches the given key
     *
     * @param key the key that indicates the Section
     *
     * @example
     * ```typescript
     * const sw = new StopWatch();
     * sw.SectionStart('sw1');
     * // returns the elapsed milliseconds since start of section sw1
     * sw.SectionElapsedMs('sw1');
     * ```
     */
    public SectionElapsedMs(key: string): number;

    /**
     * same as Pause only for Sections
     *
     * @param key the key that indicates the Section
     *
     * @example
     * ```typescript
     * const sw = new StopWatch();
     * sw.SectionStart('sw1');
     * // pause the sw1 section
     * sw.SectionPause('sw1');
     * ```
     */
    public SectionPause(key: string): void;

    /**
     * same as Resume only for Sections
     *
     * @param key the key that indicates the Section
     *
     * @example
     * ```typescript
     * const sw = new StopWatch();
     * sw.SectionStart('sw1');
     * sw.SectionPause('sw1');
     * // restart the sw1 section
     * sw.SectionResume('sw1');
     * ```
     */
    public SectionResume(key: string): void;

    /**
     * stops the StopWatch from measure Time
     *
     * @example
     * ```typescript
     * const sw = new StopWatch();
     * // pause the StopWatch
     * sw.Pause();
     * ```
     */
    public Pause(): void;

    /**
     * starts the StopWatch at the Point from the Last Pause
     *
     * @example
     * ```typescript
     * const sw = new StopWatch();
     * sw.Pause();
     * // resume the paused StopWatch
     * sw.Resume();
     * ```
     */
    public Resume(): void;

    /**
     * gets the Elapsed Time in ms from the StopWatch
     *
     * @example
     * ```typescript
     * const sw = StopWatch();
     * // get the elapsed time in ms from StopWatch constructor
     * sw.ElapsedMs();
     * ```
     */
    public ElapsedMs(): number;
}
