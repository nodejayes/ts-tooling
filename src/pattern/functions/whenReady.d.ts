export interface IWhenReadyOptions {
    /**
     * the time in ms to wait before try again
     */
    timeout: number;
    /**
     * the number of maximum calls before give up
     */
    maxCalls: number;
}

/**
 * calling the Function when the Guard returns true
 * the Function calling only once dosen't matter how often it was triggerd
 *
 * @param options
 * @param guard
 * @param fn
 * @param args
 */
export function WhenReady<T>(options: IWhenReadyOptions, guard: (...args: any) => boolean, fn: (...args: any) => T, ...args: any): Promise<T>;
